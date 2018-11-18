adSettings = {
    "dfpNetworkcode": "22930928",
    "siteName": "ustad",
    "lazyLoading": true,
    "lazyLoadingOffset": 10,
    "expectedCmp": "faktor",
    "prebid": true,
    "PREBID_TIMEOUT": 1400,
    "hbSettings": {
        "rubicon": {
            "active": true,
            "siteId": "212760",
            "accountId": "18908",
            "zoneId": "1047028"
        },
        "appnexus": {
            "active": true,
            "accountId": "14155177"
        },
        "criteo": {
            "active": true,
            "zoneIds": 
            {
                "300x250": "1269855",
                "320x50": "1269856",
                "728x90": "1269857"
            }
        },
        "improveDigital": {
            "active": true,
            "placementIds": {
                "300x250": 1189434,
                "320x50": 1189695,
                "728x90": 1189696,
                "320x240": 1213678
            }
        },
        "ix": {
            "active": false,
            "siteId": "255033"
        }
    },
    "adslots": {
        "Home": {
            "defaultcontent1": {
                "viewports": [{
                    "minwidth": 0,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent2": {
                "viewports": [{
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent3": {
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50], [320, 100]]
                }]
            },
            "defaultcontent4": {
                "viewports": [{
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            }
        },
        "NewsItem": {
            "defaultcontent1": {
                "viewports": [{
                    "minwidth": 0,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent2": {
                "viewports": [{
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent3": {
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50], [320, 100]]
                }]
            },
            "defaultcontent4": {
                "viewports": [{
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            }
        },
        "SportItem": {
            "defaultcontent1": {
                "viewports": [{
                    "minwidth": 0,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent2": {
                "viewports": [{
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent3": {
                "viewports": [{
                    "maxwidth": 768,
                    "sizes": [[320, 50],[320, 100]]
                }]
            },
            "defaultcontent4": {
                "viewports": [{
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent5": {
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50],[320, 100]]
                },{
                    "minwidth": 768,
                    "sizes": [300, 250] 
                }]
            }
        },
        "OverigItem": {
            "defaultcontent1": {
                "viewports": [{
                    "minwidth": 0,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent2": {
                "viewports": [{
                    "minwidth": 768,
                    "sizes": [728, 90]
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
    adManager.src = (useSSL ? 'https:' : 'http:') + '//crs-media-cdn.nl/admanager.js';
    var node = document.getElementsByTagName('script')[0]; 
    node.parentNode.insertBefore(adManager, node);
}()