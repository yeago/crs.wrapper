adSettings = {
    "dfpNetworkcode": 38496904,
    "siteName": "GLDHelpt",
    "expectedCmp": "faktor",
    "lazyLoading": false,
    "lazyLoadingOffset": 100,
    "prebid": true,
    "PREBID_TIMEOUT": 1400,
    "hbSettings": {
        "rubicon": {
            "active": true,
            "siteId": "212766",
            "accountId": "18908",
            "zoneId": "1047014"
        },
        "appnexus": {
            "active": true,
            "accountId": "14155233"
        },
        "criteo": {
            "active": true,
            "zoneIds": {
                "300x250": "1269861",
                "320x50": "1269862",
                "728x90": "1269863"
            }
        },
        "improveDigital": {
            "active": true,
            "placementIds": {
                "300x250": "1189438",
                "320x50": "1191604",
                "728x90": "1191605"
            }
        },
        "ix": {
            "active": false,
            "siteId": "255033"
        }
    },
    "adslots": {
        "Home": {
            "desktop_headerbanner": {
                "viewports": [{
                    "minwidth": 1200,
                    "sizes": [728, 90]
                }]
            },
            "desktop_sidebar1": {
                "viewports": [{
                    "minwidth": 1200,
                    "sizes": [300, 250]
                }]
            },
            "desktop_content1": {
                "viewports": [{
                    "minwidth": 1200,
                    "sizes": [728, 90]
                }]
            },
            "tablet_headerbanner": {
                "viewports": [{
                    "minwidth": 768,
                    "maxwidth": 1200,
                    "sizes": [320, 50]
                }]
            },
            "tablet_sidebar1": {
                "viewports": [{
                    "minwidth": 992,
                    "maxwidth": 1200,
                    "sizes": [300, 250]
                }]
            },
            "tablet_content1": {
                "viewports": [{
                    "minwidth": 920,
                    "maxwidth": 1200,   
                    "sizes": [728, 90]
                }]
            },          
            "tablet_content2": {
                "viewports": [{
                    "minwidth": 768,
                    "maxwidth": 991,    
                    "sizes": [300, 250]
                  }]
            },
            "mobile_headerbanner": {
                "viewports": [{
                    "maxwidth": 768,    
                    "sizes": [320, 50]
                  }]
            }
        }
    }
};

!function() {
    var adManager = document.createElement('script');
    adManager.async = true;
    adManager.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    adManager.src = (useSSL ? 'https:' : 'http:') + '//crs-media-cdn.nl/admanager.min.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(adManager, node);
}()
