var массив = {};

var url="https://www.instagram.com/dary_kavkaza_rso/"; 
function loadJQ() {function loadScriptFromURL(url) {var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),async = false;request.open('GET', url, async);request.send();if (request.status !== 200) {var message = 'An error occurred while loading script at url: ' + url + ', status: ' + request.status;iimDisplay(message);return false;}eval(request.response);return true;}; loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');$ = window.$,JQuery = window.JQuery;}; loadJQ();
 

var request = $.ajax({url: url,method: 'GET',dataType: "HTML"});

request.done(function(msg) {
	 alert(msg)
	alert(msg.search(/window._sharedData =/ig))
	
 

}); 
