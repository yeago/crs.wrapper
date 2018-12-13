adSettings = {
    "dfpNetworkcode": 38496904,
    "siteName": "GLDstemt",
    "expectedCmp": "cookiebot",
    "lazyLoading": false,
    "lazyLoadingOffset": 10,
    "prebid": true,
    "PREBID_TIMEOUT": 1400,
    "hbSettings": {
        "rubicon": {
            "active": true,
            "siteId": "212768",
            "accountId": "18908",
            "zoneId": "1047006"
        },
        "appnexus": {
            "active": true,
            "accountId": "14155233",
        },
        "criteo": {
            "active": true,
            "zoneIds": 
            {
                "300x250": "1269851",
                "320x50": "1269850",
                "728x90": "1269849"
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
        },
        "openX": {
            "active": true,
            "delDomain": "orn-d.openx.net",
            "unit": "540492885"
        }
    },

    "adslots": {
        "Home": {
            "headerbanner": {
                "viewports": [{
                    "minwidth": 768,
                    "sizes": [320, 50]
                }]
            },
            "content1": {
                "viewports": [{
                    "minwidth": 768,
                    "sizes": [300, 250]
                }]
            },
            "content2": {
                "viewports": [{
                    "minwidth": 768,
                    "sizes": [[728, 90]]
                }]
            },
            "sidebar1": {
                "viewports": [{
                    "minwidth": 768,
                    "sizes": [300, 250]
                }]
            },
            "tablet-headerbanner": {
                "viewports": [{
                    "minwidth": 920,
                    "maxwidth": 1200,
                    "sizes": [320, 50]
                }]
            },
            "tablet-content1": {
                "viewports": [{
                    "minwidth": 920,
                    "maxwidth": 1200,
                    "sizes": [300, 250]
                }]
            },
            "tablet-content2": {
                "viewports": [{
                    "minwidth": 920,
                    "maxwidth": 1200,
                    "sizes": [728, 90]
                }]
            },
            "tablet-article-sidebar1": {
                "viewports": [{
                    "minwidth": 920,
                    "maxwidth": 1200,
                    "sizes": [300, 250]
                }]
            },
            "tablet-underarticle": {
                "viewports": [{
                    "minwidth": 768,
                    "maxwidth": 991, 
                    "sizes": [728, 90]
                }]
            },
            "phone-content1": {
                "viewports": [{
                    "maxwidth": 768,
                    "sizes": [320, 50]
                }]
            },
            "phone-content2": {
                "viewports": [{
                    "maxwidth": 768,
                    "sizes": [300, 250]
                }]
            },
            "phone-article1": {
                "viewports": [{
                    "maxwidth": 768,
                    "sizes": [320, 50]
                }]
            },
            "phone-article2": {
                "viewports": [{
                    "maxwidth": 768,
                    "sizes": [300, 250]
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
