chrome.tabs.onActivated.addListener(function(activeInfo){
	chrome.tabs.query({'active':true, 'currentWindow':true}, function(tabs) {
	var url = tabs[0].url;
		if(matches(url)){
			message = true;
			chrome.tabs.sendMessage(tabs[0].id, message);
		} else {
			message = false;
			chrome.tabs.sendMessage(tabs[0].id, message);
		}
	});
});

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

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		// console.log(sender.tab ?
		// 						"from a content script:" + sender.tab.id:
		// 						"from the extension");
		if (request.message == false){
			timer(message);
			console.log("vis "+message);
			sendResponse({ack: "visbile "});
		} else {
			timer(message);
			console.log("invis"+ message);
		}

	}
);

var time;

function timer (boo){
	if(!boo){
		time = setInterval(fiveMinutes(), 5000);//using seconds to test
	} else {
		clearInterval(time);
	}
}

function fiveMinutes(){
	message = "BITCH PLEASE";
	chrome.tabs.query({'active':true, 'currentWindow':true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, message);
	})
}