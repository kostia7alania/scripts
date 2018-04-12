var start = new Date(); function timming() {diff=(new Date()-start)/1000; return 'Затрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}

function loadJQ() {function loadScriptFromURL(url) {var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),async = false;request.open('GET', url, async);request.send();if (request.status !== 200) {var message = 'An error occurred while loading script at url: ' + url + ', status: ' + request.status;iimDisplay(message);return false;}eval(request.response);return true;}; loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');$ = window.$,JQuery = window.JQuery;}; loadJQ();


	// var группа = $('input[name=группа]').val()
	
	var группа = prompt('Дай ид или короткое имя группы:', "imacros_javascript");
	var путь = prompt('Куда сохранить?', "C:\\парсим-группу-"+группа+".txt");

	//первоначально очищаем:
	imns.FIO.writeTextFile(imns.FIO.openNode(путь),"");
	
	var request = $.ajax({url: 'https://api.vk.com/method/groups.getMembers',method: 'GET',data: {"fields":"country,city,sex,bdate","group_id":группа, "version":6.62},dataType: "json","cache":false});
  
	request.done(function(msg) {
		$(msg.response).each(function(index, value){
			var участников=value.count;
			if(parseInt(участников)>5000){alert("Возможно фф подвиснет, это норм, т.к. участников много аж "+участников+" шт.")}
			for(i=0;i<участников;i+=1000){
				iimDisplay("Цикл (разбивка по тысячам) = "+i+"\n"+timming())
				$(value.users).each(function(index, value){
					var id = value.uid;
					var имя = value.first_name;
					var фамилия = value.last_name;
					if(value.sex==1){var пол="жен"}else{var пол="муж"}
					var родился = value.bdate;	if(!родился){var родился="не указан!"}
					var страна = value.country;	if(!страна){var страна="не указан!"}
					var город  = value.city;	if(!город){var город="не указан!"}
					// var инфаОЮзере="id = "+id+"\nимя = "+имя+"\nфамилия = "+фамилия+"\nпол = "+пол+"\nдата рождения = "+родился+"\nстрана = "+страна+"\nгород = "+город	
					var юзер = "vk.com/id"+id+";"+имя+" "+фамилия
						//читаем старое значение:
						var old=imns.FIO.readTextFile(imns.FIO.openNode(путь));
						//добавляем новое:
						var All=old+"\n"+юзер;
						//записываем:
						imns.FIO.writeTextFile(imns.FIO.openNode(путь),All); 
				}) 
			}
		})	
	})
	
 
	
	 