chrome.runtime.onMessage.addListener(
	function(message, sender, sendResponse) {
		console.log('Got message from background: ', message);
		if (message){
			console.log("fuck social media");
		}
	}
);

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
	console.log("bitches");
}

function visChange(){
	console.log("i got called");
	var hide;
	if (isHidden()){
		hide = true;
		console.log(hide);
	}else{
		hide = false;
		console.log(hide);
	}
}