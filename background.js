chrome.webRequest.onBeforeReequest.addListener(
function(details) { return { cancel:true}},
{urls:["*://*.zedo.com/*"]},
["blocking"]



)