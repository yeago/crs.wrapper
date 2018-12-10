var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var section = getSection();
var targeting = getTargeting(section);
var gotAds = false;

pickAdFlow();

function pickAdFlow(){
    var cmp = hasCmp()
    setGoogleTag(cmp);
    if(cmp){
        initCmpAds(cmp)
    }
    else if(adSettings.expectedCmp=='cookiebot'){
        window.addEventListener('CookiebotOnLoad', function () {
            loadAds(hasCmp('cookiebot'))
        }, false);
    }
    else if(hasLegacyConsent()){
        loadAds(cmp);
    }
};

function initCmpAds(cmp){
    if (cmp=='faktor'){
        window.__cmp('addEventListener', 'cmpReady', function (){
            if(getDfpConsent(cmp)){
                loadAds(cmp)
            }
            else{
                loadAdsOnConsentEvent(cmp);
            }
        })
    }
    else if(cmp=='cookiebot'){
        loadAds(cmp);
    }
}

function loadAds(cmp){
    loadDfp(function() {
        loadPrebidJs(function(){
            var visibleAdslots = getAdslots();
            loadPrebid(visibleAdslots, section, cmp);
            defineAdslots(visibleAdslots, targeting);
            renderAds(visibleAdslots, false);
        })
    })
};

function loadAdserverOnConsentEvent(cmp){
    var useSSL = 'https:' == document.location.protocol;
    var dfpUrl = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
    var prebidUrl = (useSSL ? 'https:' : 'http:') + '//crs-media-cdn.nl/prebid.js';
    jQuery.getScript(dfpUrl, function (){
        jQuery.getScript(prebidUrl);
        var visibleAdslots = getAdslots();
        loadPrebid(visibleAdslots, section, cmp);
        defineAdslots(visibleAdslots, targeting);
        renderAds(visibleAdslots, true);
    });
}

function loadAdsOnConsentEvent(cmp){
    //faktor only: cookiebot is loads nonPersonalized
    if(!gotAds){
        if(cmp&&cmp=='faktor'){
            window.__cmp('addEventListener', 'consentChanged', function () {
                if(getDfpConsent(cmp)){
                    loadAdserverOnConsentEvent(cmp)
                }
            });
        }
    }
};

function setGoogleTag(cmp){
    if(!getGoogleConsent(cmp)){
        googletag.cmd.push(function() {
            googletag.pubads().disableInitialLoad()
            googletag.pubads().setRequestNonPersonalizedAds(1)
        });
    }
    else{
        googletag.cmd.push(function() {
            googletag.pubads().disableInitialLoad();
        });
    }
};

function getPbjsConfig(cmp){
    var customPrice = {
        'buckets': [
            {
                "precision": 2,
                "min": 0,
                "max": 20,
                "increment": 0.01
            },{
                "precision": 2,
                "min": 20,
                "max": 35,
                "increment": 0.1
            },{
                "precision": 2,
                "min": 35,
                "max": 50,
                "increment": 0.5
            },{
                "precision": 2,
                "min": 50,
                "max": 120,
                "increment": 1
            }
        ]};

    pbjsConfig = {
        enableSendAllBids: true,
        pubcid: {
            enable: false,
            expInterval: 105120
        },
        priceGranularity: 'dense',
        consentManagement: {
            cmpApi: 'iab',
            allowAuctionWithoutConsent: false
        },
        currency: {
            adServerCurrency: 'EUR',
            conversionRateFile: 'https://currency.prebid.org/latest.json',
            bidderCurrencyDefault: {
                improvedigital: 'EUR',
                criteo: 'EUR',
                rubicon: 'USD',
                ix: 'EUR',
                appnexus: 'EUR'
            }
        }
    }

    if (cmp && cmp=='faktor'){
        //ask CMP if pubcid is allowed
        var allowPubcid = true;
        var adNetworks = [32, 91, 52, 10];
        for (var i=0; i < adNetworks.length; i++){
            if(!getIabVendorConsent(adNetworks[i], [1,2])){
                allowPubcid = false;
            }
        }
        if (allowPubcid){
           pbjsConfig.pubcid.enable = true
        }
    }

    if (getPrebidConsent(cmp)){
        pbjsConfig.pubcid.enable = true
        pbjsConfig.consentManagement.allowAuctionWithoutConsent = true;
    }


    if(!hasCmp() && hasLegacyConsent()){
        pbjsConfig.consentManagement.allowAuctionWithoutConsent = true;
    }
    return pbjsConfig
};

function loadPrebid(visibleAdslots, section, cmp){
    if(adSettings.prebid && getPrebidConsent(cmp)){
        var adUnits = getAdunits(visibleAdslots, section);
        var pbjsConfig = getPbjsConfig(cmp);
        
        pbjs.que.push(function() {
            pbjs.setConfig(pbjsConfig);
            pbjs.addAdUnits(adUnits);
            pbjs.requestBids({
                bidsBackHandler: initAdserver
            });
        });
    };

    function initAdserver() {
        if(adSettings.prebid){
            if (pbjs.initAdserverSet) return;
            pbjs.initAdserverSet = true;
            googletag.cmd.push(function() {
                pbjs.que.push(function() {
                    pbjs.setTargetingForGPTAsync();
                    googletag.pubads().refresh();
                });
            });
        }
        else
        {
            if (pbjs.initAdserverSet) return;
            pbjs.initAdserverSet = true;
            googletag.cmd.push(function() {
                googletag.pubads().refresh();
            });
        }
    }

    PREBID_TIMEOUT = 1500;
    if(adSettings.PREBID_TIMEOUT){PREBID_TIMEOUT = adSettings.PREBID_TIMEOUT}

    setTimeout(function() {
        initAdserver();
    }, PREBID_TIMEOUT);
};

function getAdslots() {
    var sectionAdslots = adSettings.adslots[getSection()]
    var visibleAdslots = {};
    var windowWidth = window.innerWidth;

    for(adslot in sectionAdslots){
        viewports = sectionAdslots[adslot].viewports;
        for (var i = 0; i < viewports.length; i++){
            viewport = viewports[i];
            minwidth = viewport.minwidth;
            maxwidth = viewport.maxwidth;
            if (!maxwidth && minwidth && minwidth <= windowWidth){
                visibleAdslots[adslot] = viewport.sizes;
            }
            else if (maxwidth && !minwidth && maxwidth >= windowWidth){
                visibleAdslots[adslot] = viewport.sizes;
            }
            else if (maxwidth && minwidth && maxwidth >= windowWidth && minwidth < windowWidth){
                visibleAdslots[adslot] = viewport.sizes;
            }
            else if (!maxwidth && !minwidth){
                visibleAdslots[adslot] = viewport.sizes;
            }
        }
    }
    return visibleAdslots
};

function getTargeting(section){
    var custom = {};
    try{
        keywordsRaw = document.querySelector('meta[name="keywords"]').getAttribute("content").split(',');
        keywords = [];
        for (var i = 0; i < keywordsRaw.length; i++){
            keywords.push(cleanChars(keywordsRaw[i], false));
        };
    custom.keyword = keywords;
    }
    catch(err){
        custom.keyword = []; 
    }

    try{
        custom.category = section
    }
    catch(err){}

    try
    {
        var urlPath = window.location.pathname;
        var urlCategories = urlPath.split('/')
        cleanPath = cleanChars(urlPath, true);
        if (cleanPath){custom.urlPath = cleanPath};
    }
    catch(err){}

    try
    {
        urlCat0 = cleanChars(urlCategories[1], true);
        if (urlCat0){custom.urlCategory1 = urlCat0};
    }
    catch(err){
        custom.urlCategory1 = '';
    }

  try
  {
    urlCat1 = cleanChars(urlCategories[2], true);
    if (urlCat1){custom.urlCategory2 = urlCat1};
  }
  catch(err){
    custom.urlCategory2 = '';
  }

  return custom
};

function loadDfp(callback){
    var gads = document.createElement('script');
    gads.async = true; 
    gads.type = 'text/javascript'; 
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0]; 
    node.parentNode.insertBefore(gads, node);
    callback();
};

function loadPrebidJs(callback){
    var prebid = document.createElement('script');   
    prebid.async = true; 
    prebid.type = 'text/javascript'; 
    var useSSL = 'https:' == document.location.protocol;
    prebid.src = (useSSL ? 'https:' : 'http:') + '//crs-media-cdn.nl/prebid.js';
    var node = document.getElementsByTagName('script')[0]; 
    node.parentNode.insertBefore(prebid, node);
    callback();
};

function defineAdslots(visibleAdslots, targeting){
    googletag.cmd.push(function() {
        for (adslot in visibleAdslots){
            var dfpAdslot = '/' + adSettings.dfpNetworkcode + '/' + adSettings.siteName + '-' + adslot;
            var sizes = visibleAdslots[adslot];
            var adDivId = 'ad-' + adslot;
            googletag.defineSlot(dfpAdslot, sizes, adDivId).
                setTargeting('category', section).
                setTargeting('urlcategory1', targeting.urlCategory1).
                setTargeting('urlcategory2', targeting.urlCategory2).
                setTargeting('urlpath', targeting.urlPath).
                setTargeting('keywords', targeting.keyword).addService(googletag.pubads());
            }
        googletag.pubads().collapseEmptyDivs();
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
    })
    
    
};

function divInView(adslot, onload){
    try{
        //no need to do this if ad already loaded.
        var exists = document.getElementById("ad-" + adslot);
        if (exists){
            return false
        }
    }
    catch(err){}

    var lazyLoadingOffset, lazyLoadingOffset = adSettings.lazyLoadingOffset || (lazyLoadingOffset = 0, lazyLoadingOffset);
    try{
        var element = document.getElementById(adslot);
        var yPosition = 0;

        while(element){
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
    }
    catch(err){
        return false
    }

    if(onload){
        var windowPos = 0;
    }
    else{
        var windowPos = window.pageYOffset;
    }

    var windowBottom = window.innerHeight + windowPos;
    if (windowBottom > (yPosition - lazyLoadingOffset)){
        return true
    }
    return false
}

function renderVisibleAdsOnLoadEvent(visibleAdslots){
    window.addEventListener("load", function(){
        for(var adslot in visibleAdslots){
            if(divInView(adslot, true)){
                loadSingleAd(adslot)
            }
        }
    })
};

function renderVisibleAdsOnScrollEvent(visibleAdslots){
    window.addEventListener("scroll", function() {
        for(var adslot in visibleAdslots){
            if(divInView(adslot, false)){
                loadSingleAd(adslot)
            }
        }    
    })
};

function renderVisibleAdsWithoutEvent(visibleAdslots){
    for(var adslot in visibleAdslots){
        if(divInView(adslot, false)){
            loadSingleAd(adslot)
        }
    }    
};

function renderAds(visibleAdslots, missedOnLoad){
    if(adSettings.lazyLoading && !missedOnLoad){
        renderVisibleAdsOnLoadEvent(visibleAdslots)
        renderVisibleAdsOnScrollEvent(visibleAdslots)
    }
    else if(adSettings.lazyLoading && missedOnLoad){
        //if waiting for CMP event, can't use onload.
        renderVisibleAdsWithoutEvent(visibleAdslots)
        renderVisibleAdsOnScrollEvent(visibleAdslots)
    }
    else{
        for(var adslot in visibleAdslots){
            loadSingleAd(adslot)
        }
        gotAds = true;
    }
};

function loadSingleAd(adslot){
    var exists = false;
    try{
        exists = document.getElementById('ad-' + adslot).parentNode;
    }
    catch(err){}

    if(!exists){
        var adslotCompleted = false;
        var gotParent = false;

        (function theLoop(i, adslot, gotParent){
            setTimeout(function (){
                if(!gotParent)
                {
                    try{
                        gotParent = document.getElementById(adslot).parentNode;
                        var newDiv = document.createElement('div');
                        newDiv.id = 'ad-' + adslot;
                        gotParent.insertBefore(newDiv, document.getElementById(newDiv.id));
                        googletag.cmd.push(function() {
                            googletag.display(newDiv.id);
                        })
                    }
                    catch(err){}
                }
                if (--i){
                    theLoop(i, adslot, gotParent);
                }
            }, 100);

            if(i == 1 && !gotParent)
            {
                console.log("The following div was expected by the Admanager, but doesn't exist on the site: " + adslot)
            }
        }(10, adslot, gotParent))
    }
}

function getSection(){
    var element = document.querySelector('meta[property="crsmediasection"]');
                  document.querySelector('meta[property="crsmediasection"]').content
    if (!element){element = document.querySelector('meta[property="yieldprosection"]');};
    if (!element){element = document.querySelector('meta[property="ancorasection"]');};
    viewport = window.innerWidth;

    //set section based on meta tag, else use the first defined value
    var sectionName = element && element.getAttribute("content");
    if (!sectionName){
      sectionName = Object.keys(adSettings.adslots)[0];
      console.log("No section found on site. Please add one");
    }

    if(!adSettings.adslots[sectionName])
    {
        console.log("Error: Section not found in ad mapping. Contact AdOps. Defaulting to front page grid. Section name expected: " + sectionName);
        sectionName = Object.keys(adSettings.adslots)[0];
    }

    return sectionName
};

function cleanChars(string, slash){
    try{
        if (slash === true){
            string = string.replace(new RegExp('/','g'), '_');
        };
        string = string.replace(/\W/g, '');
        if (string.length > 32){
            string = string.substring(0,32);
        }
        return string
    }
    catch(err){};
}

function checkArray(array){
    if (!Array.isArray(array[0]))
    {
        return [array]
    }
    else
    {
        return array
    }
}

function getAdunits(visibleAdslots, section) {
    var adUnits = [];
    for(adslot in visibleAdslots){
        if (!adSettings.adslots[section][adslot].excludeRtb){
            var bids = [];
            var sizes = checkArray(visibleAdslots[adslot])
            if(adSettings.hbSettings.rubicon.active){bids.push(pbRubicon())};
            if(adSettings.hbSettings.appnexus.active){bids.push(pbAppNexus());}
            if(adSettings.hbSettings.openX.active){bids.push(pbOpenX());}

            for(var i = 0; i < sizes.length; i++){
                if(adSettings.hbSettings.criteo.active){bids.push(pbCriteo(sizes[i]));}
                if(adSettings.hbSettings.ix.active){bids.push(pbIx(sizes[i]));}
                if(adSettings.hbSettings.improveDigital.active){bids.push(pbImproveDigital(sizes[i]));}
            }
            pbAdunit = {
                code: 'ad-' + adslot,
                mediaTypes:
                {
                    banner: {
                        sizes: sizes,
                    }
                },
                bids: bids
            }
            adUnits.push(pbAdunit)
        }
    }
    return adUnits
}

function pbImproveDigital(size){
    improveDigital = adSettings.hbSettings.improveDigital
    sizeString = size[0] + 'x' + size[1];
    var bidder = {}
    if(improveDigital.active && improveDigital.placementIds[sizeString]){
        bidder = {
            bidder: 'improvedigital',
            params: {
                placementId: improveDigital.placementIds[sizeString]
            }
        }
    }
    return bidder;
}

function pbCriteo(size){
    criteo = adSettings.hbSettings.criteo
    sizeString = size[0] + 'x' + size[1];
    var bidder = {}
    if(criteo.active && criteo.zoneIds[sizeString]){
        bidder = {
            bidder: 'criteo',
            params: {
                zoneId: criteo.zoneIds[sizeString]
            }
        }
    }
    return bidder;
}

function pbOpenX(){
    openX = adSettings.hbSettings.openX
    var bidder = {}
    if(openX.active){
        bidder = {
            bidder: 'openx',
            params: {
                delDomain: openX.delDomain,
                unit: openX.unit
            }
        }
    }
    return bidder;
}

function pbRubicon(){
    rubicon = adSettings.hbSettings.rubicon
    var bidder = {}
    if(rubicon.active){
        bidder = {
            bidder: 'rubicon',
            params: {
                accountId: rubicon.accountId,
                siteId: rubicon.siteId,
                zoneId: rubicon.zoneId
            }
        }
    }
    return bidder;
}

function pbAppNexus(){
    appnexus = adSettings.hbSettings.appnexus
    var bidder = {}
    if(appnexus.active){
        bidder = {
            bidder: 'appnexus',
            params: {
                placementId: appnexus.accountId
            }
        }
    }
    return bidder;
}

function pbIx(size){
    ix = adSettings.hbSettings.ix
    var bidder = {}
    if(ix.active){
        bidder = {
            bidder: 'ix',
            params: {
                siteId: ix.siteId, 
                size: size
            }
        }
    }
    return bidder;
}

function getDfpConsent(cmp){
    //vendor for Google = 3
    var dfpConsent = false;
    if(!cmp){
        if(hasLegacyConsent()){
            dfpConsent = true;
        }
    }
    else if(cmp=='faktor'){
        window.__cmp('addEventListener', 'cmpReady', function (){
            window.__cmp('getAdditionalVendorConsents', undefined, function(data) {
                if (data.purposeConsents[1] && data.vendorConsents[3]) {
                    dfpConsent = true;
                }
            });
        });
    }
    else if(cmp=='cookiebot'){
        dfpConsent = true;
    }
    return dfpConsent;
}

function getGoogleConsent(cmp){
    //check CMP if okay to load personalize Admanager ads
    //vendor for Google = 3
    var consent = true;
    if(!cmp){
        if(hasLegacyConsent()){
            return true;
        }
        else{
            return false;
        }
    }

    else{
        if (cmp == 'faktor'){
            consent = false;
            window.__cmp('getAdditionalVendorConsents', undefined, function(data) {
                if (data.purposeConsents[1, 2] && data.vendorConsents[3]) {
                    consent = true;
                }
            });
        }
        if (cmp == 'cookiebot'){
            consent = false;
    
            if(window.Cookiebot.consent.marketing){
                consent = true;
            }
        }
    }
    return consent;
}

function getPrebidConsent(cmp){
    if(cmp && cmp=='cookiebot'){
        if(!window.Cookiebot.consent.marketing){
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return true
    }
}


//function also used by publishers directly! ensure backward compatibilty
function hasCmp(){
    if(typeof window.__cmp != "undefined"){
        return 'faktor'
    }
    else if (typeof window.Cookiebot != "undefined"){
        return 'cookiebot'
    }
    else{
        return false
    }
}

//function also used by publishers directly! ensure backward compatibilty
function getIabVendorConsent(cmpVendorId, cmpPurposes) {
    //vendor IDs according to official IAB vendor list.
    var consent = true;
    
    if(!hasCmp()){
        return false;
    }

    else{
        consent = true;
        window.__cmp('getVendorConsents', cmpVendorId, function(data) {
            for (var i=0; i < cmpPurposes.length; i++){
                if(!data.purposeConsents[cmpPurposes[i]]){
                        consent = false;
                }
            }
        })
    }
    return consent
}

function hasLegacyConsent(){
    //fryslan: cookie-agreed=2
    //flevoland: cookieconsent_status=dismiss;
    //rtvutrecht: n/a
    //rtvoost: cookiesAccepted=accepted
    //brabant: CookieMessage=True
    //zeeland+drenthe+gelderland+noord: RegioGrid=Clicked
    var cs = ['cookie-agreed=2', 'cookieconsent_status=dismiss', 'cookiesAccepted=accepted', 'CookieMessage=True', 'RegioGrid=Clicked'];
    for(var i=0; i < cs.length; i++)
    {
        var cookies = document.cookie;
        if(cookies.indexOf(cs[i])>-1){
            return true;
        }
    }
    return false;
}
