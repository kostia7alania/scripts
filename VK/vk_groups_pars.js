var группа="dodo_ramenskoe";//СПАРШИВАЕМАЯ ГРУППА
var блокнот="C:\\vkApi.txt";//КУДА СОХРАНЯЕМ

function loadJQ() {function loadScriptFromURL(url) {var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),async = false;request.open('GET', url, async);request.send();if (request.status !== 200) {var message = 'An error occurred while loading script at url: ' + url + ', status: ' + request.status;iimDisplay(message);return false;}eval(request.response);return true;}; loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');$ = window.$,JQuery = window.JQuery;}; loadJQ();

imns.FIO.writeTextFile(imns.FIO.openNode(блокнот),"") //первоначально очищаем;

var request = $.ajax({url: 'https://api.vk.com/method/groups.getMembers',method: 'POST',data: {"group_id":группа},dataType: "HTML"});
request.done(function(msg) {
var численность=msg.split(':')[2].split(',')[0]; 
for(i=0;i<численность;i+=1000){var request = $.ajax({url: 'https://api.vk.com/method/groups.getMembers',method: 'POST',data: {"group_id":группа,"count":1000,"offset":i},dataType: "HTML"});
	request.done(function(msg){msgAll=msg.split('[')[1].split(']')[0].replace(/,/ig,'\nvk.com/id').replace(/^/ig,'vk.com/id');
			var old=imns.FIO.readTextFile(imns.FIO.openNode(блокнот));
			var msgAll=old+"\n"+msgAll;
			imns.FIO.writeTextFile(imns.FIO.openNode(блокнот),msgAll); 
		});
	}
}); 
