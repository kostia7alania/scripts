var массив = {};

var группа="жуковский";//слово в названии ГРУППы
var блокнот="C:\\search_groups.txt";//КУДА СОХРАНЯЕМ
var access_token="e739dd9ad53d1fff2b722976a566af96e4ed81bfd86f23f71c5d0a326af1c3086f6341a538cf71a29b5a7" //ставвь свой акес токен -погугли как сгенерить

function loadJQ() {function loadScriptFromURL(url) {var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),async = false;request.open('GET', url, async);request.send();if (request.status !== 200) {var message = 'An error occurred while loading script at url: ' + url + ', status: ' + request.status;iimDisplay(message);return false;}eval(request.response);return true;}; loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');$ = window.$,JQuery = window.JQuery;}; loadJQ();

imns.FIO.writeTextFile(imns.FIO.openNode(блокнот),"") //первоначально очищаем;

var request = $.ajax({url: 'https://api.vk.com/method/groups.search',method: 'POST',data: {"q":группа,"count":1000,"access_token":access_token},dataType: "HTML"});
request.done(function(msg) {alert(msg)
alert("кол-во итераций:"+JSON.parse(msg).response[0]+"\n msg="+msg)
	a = JSON.parse(msg)
	b = a.response[1]
	c = JSON.stringify(b)
	for(i=1;i<1002;i++) 
	{
		w=JSON.stringify(a.response[i])
		w=JSON.parse(w)
		var позиция="Позиция группы: "+i+"\n"
		var имяГруппы="Имя группы: "+JSON.stringify(w.name)+"\n"
		var ссылка="https://vk.com/"+JSON.stringify(w.screen_name).split('"')[1]
		var всеВместе = позиция+имяГруппы+ссылка;
			var old=imns.FIO.readTextFile(imns.FIO.openNode(блокнот));
			var msgAll=old+"\n"+ссылка;
			imns.FIO.writeTextFile(imns.FIO.openNode(блокнот),msgAll); 
		
	}
// var численность=msg.split(':')[2].split(',')[0]; 
// for(i=0;i<численность;i+=1000){var request = $.ajax({url: 'https://api.vk.com/method/groups.search',method: 'POST',data: {"q":группа,"count":1000,"offset":i},dataType: "HTML"});
	// request.done(function(msg){msgAll=msg.split('[')[1].split(']')[0].replace(/,/ig,'\nvk.com/club').replace(/^/ig,'vk.com/club');
			// var old=imns.FIO.readTextFile(imns.FIO.openNode(блокнот));
			// var msgAll=old+"\n"+msgAll;
			// imns.FIO.writeTextFile(imns.FIO.openNode(блокнот),msgAll); 
		// });
	// }
}); 
