adSettings = {
    "dfpNetworkcode": 12779449,
    "siteName": "overuit",
    "expectedCmp": "faktor",
    "lazyLoading": false,
    "lazyLoadingOffset": 10,
    "prebid": true,
    "PREBID_TIMEOUT": 1400,
    "hbSettings": {
        "rubicon": {
            "active": true,
            "siteId": "212772",
            "accountId": "18908",
            "zoneId": "1047020"
        },
        "appnexus": {
            "active": true,
            "accountId": "14159182"
        },
        "criteo": {
            "active": true,
            "zoneIds": 
            {
                "300x250": "1269845",
                "320x50": "1269846",
                "728x90": "1269847"
            }
        },
        "improveDigital": {
            "active": true,
            "placementIds": {
                "300x250": "1189440",
                "320x50": "1191606",
                "728x90": "1191607"
            }
        },
        "ix": {
            "active": false,
            "siteId": "255033"
        },
        "openX": {
            "active": true,
            "delDomain": "orn-d.openx.net",
            "unit": "540492884"
        }
    },
    "adslots": {
        "1037": {
            "rectangle": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[300, 250]]
                }]
            },
            "lb_vast_home": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[728, 90]]
                    }]
            },
            "lb_home": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[728, 90]]
                    }]
            },
        },
        "1038": {
            "leaderboard": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[728, 90]]
                    }]
            },
            "rectangle2": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[300, 250]]
                    }]
            }
        }
    }
};

!function () {
    var adManager = document.createElement('script');   
    adManager.async = true; 
    adManager.type = 'text/javascript'; 
    var useSSL = 'https:' == document.location.protocol;
    adManager.src = (useSSL ? 'https:' : 'http:') + '//crs-media-cdn.nl/admanager.min.js';
    var node = document.getElementsByTagName('script')[0]; 
    node.parentNode.insertBefore(adManager, node);
}()