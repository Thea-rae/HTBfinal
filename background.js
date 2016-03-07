chrome.tabs.onActivated.addListener(function(activeInfo){
	chrome.tabs.query({'active':true, 'currentWindow':true}, function(tabs) {
	var url = tabs[0].url;
		console.log(url);
		if(matches(url)){
			message = true;
			chrome.tabs.sendMessage(tabs[0].id, message);
			console.log("sent true"+ tabs[0].id);
		} else {
			message = false;
			chrome.tabs.sendMessage(tabs[0].id, message);
			console.log("sent false"+ tabs[0].id);
		}
	});
});

function matches(url){
	console.log("in matches");
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



