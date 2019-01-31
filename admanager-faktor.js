console.log("initiated admanger-faktor.js v2")

if(window.__cmp){console.log('hasCmp')}

window.__cmp('addEventListener', 'cmpReady', function (){
    console.log("CMP loaded")
})
