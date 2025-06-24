const Block_List = [  //this is an array of urls that the plugin blocks requests from
	"*://*.zedo.com/*",	//the format of these ensures that any request that features the url 
	"*://*.doubleclick.net/*", //of each site is blocked no matter its format (http or https) 
	"*://partner.googleadservices.com/*", 
	"*://creative.ak.fbcdn.net/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://*.adbrite.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.exponential.com/*",
]

chrome.webRequest.onBeforeRequest.addListener( //before the browser makes a web request
    function(block) { return { cancel: true }}, //blocks requests from the browser
    { urls: Block_List }, //IF it comes from one of these urls
    ["blocking"] //array
)

