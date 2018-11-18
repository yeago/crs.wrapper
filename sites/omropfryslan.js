adSettings = {
    "dfpNetworkcode": 40817610,
    "siteName": "omropfryslan",
    "expectedCmp": "faktor",
    "lazyLoading": false,
    "lazyLoadingOffset": 10,
    "prebid": true,
    "PREBID_TIMEOUT": 1400,
    "hbSettings": {
        "rubicon": {
            "active": true,
            "siteId": "212756",
            "accountId": "18908",
            "zoneId": "1047018"
        },
        "appnexus": {
            "active": true,
            "accountId": "14159179"
        },
        "criteo": {
            "active": true,
            "zoneIds": 
            {
                "300x250": "1269849",
                "320x50": "1269850",
                "728x90": "1269851"
            }
        },
        "improveDigital": {
            "active": true,
            "placementIds": {
                "300x250": "1189443",
                "320x50": "1191615",
                "728x90": "1191616"
            }
        },
        "ix": {
            "active": false,
            "siteId": "255033"
        }
    },
    "adslots": {
        "1": {
            "leaderboardtop": {
                "viewports" : [{
                    "minwidth": 1068,
                    "sizes": [[728, 90]]
                }]
            },
            "leaderboardbottom": {
                "viewports" : [{
                    "minwidth": 1068,
                    "sizes": [[728, 90]]
                }]
            },
            "rectangle1": {
                "viewports" : [{
                    "maxwidth": 766,
                    "sizes": [[320, 50]]
                }]
            },
            "rectangle2": {
                "viewports" : [{
                    "maxwidth": 766,
                    "sizes": [[320, 50]]
                }]
            },
            "rectangle_large": {
                "viewports" : [{
                    "minwidth": 766,
                    "maxwidth": 1068,
                    "sizes": [200, 200]
                },
                {
                    "minwidth": 1068,
                    "sizes": [[300, 250]]
                }]
            }
        },
         "2": { 
            "leaderboardtop": {
                "viewports" : [{
                    "minwidth": 766,
                    "sizes": [[728, 90]]
                }]
            },
            "leaderboardbottom": {
                "viewports" : [{
                    "minwidth": 766,
                    "sizes": [[728, 90]]
                }]
            },
            "rectangle1": {
                "viewports" : [{
                    "maxwidth": 766,
                    "sizes": [[320, 50]]
                }]
            },
            "rectangle2": {
                "viewports" : [{
                    "maxwidth": 766,
                    "sizes": [[320, 50]]
                }]
            },
            "rectangle_large": {
                "viewports" : [{
                    "minwidth": 766,
                    "maxwidth":1068,
                    "sizes": [200, 200]
                },
                {
                    "minwidth": 1068,
                    "sizes": [[300, 250]]
                }]
            },
            "extramobile": {
                "viewports" : [{
                    "maxwidth": 766,
                    "sizes": [[320, 50]]
                }]
            }
        },
        "3": {
            "leaderboardtop": {
                "viewports" : [{
                    "minwidth": 766,
                    "sizes": [[728, 90]]
                }]
            },
            "leaderboardbottom": {
                "viewports" : [{
                    "minwidth": 766,
                    "sizes": [[728, 90]]
                }]
            },
            "rectangle1": {
                "viewports" : [{
                    "maxwidth": 766,
                    "sizes": [[320, 50]]
                }]
            },
            "rectangle2": {
                "viewports" : [{
                    "maxwidth": 766,
                    "sizes": [[320, 50]]
                }]
            },
            "rectangle_large": {
                "viewports" : [{
                    "minwidth": 766,
                    "maxwidth":1068,
                    "sizes": [200, 200]
                },
                {
                    "minwidth":1068,
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