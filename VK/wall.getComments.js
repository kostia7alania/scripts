//https://vk.com/dev/wall.getComments
var массив = [];

var owner_id=-118780514 ;//идентификатор владельца страницы (пользователь или сообщество); идентификатор сообщества в параметре owner_id необходимо указывать со знаком "-" 
var post_id =47935 //идентификатор записи на стене. 
var count = 100;//По умолчанию: 10, максимальное значение: 100. 
var блокнот="C:\\getComments.txt";//КУДА СОХРАНЯЕМ
var access_token="3f8043ac59ff96fc8b687f739ddae5ec8a9b064e2cda18d1e3600d09a0d09a484473f2e160234f97e3fc0" //ставвь свой акес токен -погугли как сгенерить


function loadJQ() {function loadScriptFromURL(url) {var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),async = false;request.open('GET', url, async);request.send();if (request.status !== 200) {var message = 'An error occurred while loading script at url: ' + url + ', status: ' + request.status;iimDisplay(message);return false;}eval(request.response);return true;}; loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');$ = window.$,JQuery = window.JQuery;}; loadJQ();

imns.FIO.writeTextFile(imns.FIO.openNode(блокнот),"") //первоначально очищаем;

var request = $.ajax({url: 'https://api.vk.com/method/wall.getComments',method: 'POST',data: {"owner_id":owner_id,"post_id":post_id,"count":count,"access_token":access_token},dataType: "HTML"});
request.done(function(msg) {
	var колВО=JSON.parse(msg).response[0];
	for(i=0;i<колВО;i=i+100) { alert(i)
		var request = $.ajax({url: 'https://api.vk.com/method/wall.getComments',method: 'POST',data: {"owner_id":owner_id,"post_id":post_id,"count":count,"offset":i,"access_token":access_token},dataType: "HTML"}); 
		request.done(function(msg) { 
			for(q=0;q<101;q++) { 
				var строка = JSON.parse(JSON.stringify(JSON.parse(msg).response[q]))
				var id = JSON.stringify(строка.uid)
					var old=imns.FIO.readTextFile(imns.FIO.openNode(блокнот));
					var ссылка="https://vk.com/id"+id;
					var All=old+"\n"+ссылка;
					imns.FIO.writeTextFile(imns.FIO.openNode(блокнот),All);
			}
		});
	}
})