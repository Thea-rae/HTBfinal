chrome.runtime.onMessage.addListener(
	function(message, sender, sendResponse) {
		console.log(message);
		if(message == true){
			console.log("fuck social media");
		} else if(message == false) {
			console.log("werk werk werk");
		} else{
			URL =message;
			window.open(URL, "heigh=800,width=400,toolbar=no,menubar=no");
		}
	}
);

function messageBack(hide){
	chrome.runtime.sendMessage({message: hide}, function(response) {
		console.log(response.ack);
	});
}

function getHiddenProp(){
		var prefixes = ['webkit','moz','ms','o'];
		if ('hidden' in document) return 'hidden';
		for (var i = 0; i < prefixes.length; i++){
				if ((prefixes[i] + 'Hidden') in document) 
						return prefixes[i] + 'Hidden';
		}
		return null;
}

function isHidden() {
	var prop = getHiddenProp();
	if (!prop) return false;
	return document[prop];
}

var visProp = getHiddenProp();
if (visProp) {
	var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
	document.addEventListener(evtname, visChange);
}

function visChange(){
	var hide;
	if (isHidden()){
		hide = true;
		messageBack(hide);
		console.log("hide "+hide);
	}else{
		hide = false;
		messageBack(hide);
		console.log("hide "+hide);
	}
}