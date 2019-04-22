This project contains a .js admanager and site-specific settings which supports prebid and Google Admanager, for implementation for selected websites for the regional public broadcasters as supported by Centrale Media Services (CMS).
Please see test.html for a reference implementation.

Features:
- support for Consent Management Platforms: Cookiebot or Faktor.io
- support for keyword targeting through:
  - Keywords meta tag
  - category meta tag
  - url path targeting
  - url path categories targeting
- (optional) support for lazyLoading (set in site-settings), including ability to set pixel value to determine when ads should be loaded (ie: 200px before they are in the active view).
- support for prebid bidders: Criteo, Rubicon, OpenX, AppNexus, ImproveDigital, Ix
- strict GDPR interpretation: no ads (including setRequestNonPersonalizedAds) will be loaded without explicit consent from one for the supported CMPs.

Requirements/dependencies:
- Jquery
- Prebid.js to be hosted on same url as admanager.js
- CMP is to be loaded before this admanager

ads.txt values for the networks managed centrally (AdX not required for Criteo):
AdX:
google.com, pub-6285465845019326, RESELLER, f08c47fec0942fa0

Rubicon Project:
rubiconproject.com, 18908, DIRECT, 0bfd66d529a55807

Improve Digital:
improvedigital.com, 1160, DIRECT

Index Exchange:
t.b.d.

AppNexus:
t.b.d.
