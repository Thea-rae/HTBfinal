chrome.tabs.onActivated.addListener(function(activeInfo){
	chrome.tabs.query({'active':true, 'currentWindow':true}, function(tabs) {
	var url = tabs[0].url;
		if(matches(url)&&vis){
			console.log("is true");
			timer(true);
			message = true;
			chrome.tabs.sendMessage(tabs[0].id, message);
		} else {
			timer(false);
			message = false;
			chrome.tabs.sendMessage(tabs[0].id, message);
		}
	});
});

var vis= true;
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.message == false){
			sendResponse({ack: "visbile "});
			vis = true;
		} else {
			vis = false;
		}
	}
);

function matches(url){
	var urls = [
	"facebook",
	"tumblr",
	"redit",
	"instagram",
	"pinterest",
	"torrent"
];

	for(var i in urls){
		if(~url.indexOf(urls[i])){
			return true;
		} else {
			return false;
		}
	}
}

var time;
var myURL;

function timer (boo){
	if(boo){
		time = setTimeout(fiveMinutes, 5000);//using seconds to test
	}
}

function fiveMinutes(){
	console.log("got called");
	var region = 'nyregion'; //will be base on reverse geocoding later
	var baseNewsURL = 'www.newyorktimes.com/section/';
	message = baseNewsURL+region;
	chrome.tabs.query({'active':true, 'currentWindow':true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, message);
	})
}
