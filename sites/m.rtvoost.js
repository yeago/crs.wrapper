//legacy website - not in production
adSettings = {
    "dfpNetworkcode": 12779449,
    "siteName": "m.rtvoost",
    "expectedCmp": "faktor",
    "lazyLoading": false,
    "lazyLoadingOffset": 10,
    "prebid": true,
    "PREBID_TIMEOUT": 1400,
    "hbSettings": {
        "rubicon": {
            "active": true,
            "siteId": "212770",
            "accountId": "18908",
            "zoneId": "1047008"
        },
        "appnexus": {
            "active": true,
            "accountId": "14155220",
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
        "openx": {
            "active": false,
            "delDomain": "orn-d.openx.net",
            "unit": "540492878",
        }
    },
    "adslots": {
        "Home": {
            "atf": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            },
            "btf": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            }  

        },
        "Nieuws": {
            "atf": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            },
            "btf": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            }   
        },
       "Sport": {
            "atf": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            },
            "btf": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            }   
        },
       "Overige": {
            "atf": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            },
            "btf": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            }
        },
        "mob_artikel_nieuws": {
            "artikel": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [320, 50]
                }]
            }
        },
        "mob_artikel_sport": {
            "artikel": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [320, 50]
                }]
            }
        },
        "mob_artikel_overig": {
            "artikel": {
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [320, 50]
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

