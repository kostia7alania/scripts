/// документация по АПИ ХайдМи: https://vk.com/topic-125614288_36088941
var _c=Components,XMLHttpRequest=_c.Constructor('@mozilla.org/xmlextras/xmlhttprequest;1');
function получитьHTML (AAA){var a=XMLHttpRequest();return a.open('GET',AAA,!1),a.send(''),a.responseText}

//= ответ при out=csv:
//host[0];ip[1];port[2];lastseen[3];delay[4];cid[5];country_code[6];country_name[7];city[8];checks_up[9];checks_down[10];anon[11];http[12];ssl[13];socks4[14];socks5[15]
//обработчик в этом случае: a=a.split('\n'); for(i=0;i<a.length;i++){alert(i+" = "+a[i])}
//= ответ при out=js:
// b = JSON.parse(a)
// b[0].ip, b[0].port, b[0].http, b[0].socks4, b[0].socks5
//тип: HTTP - h; HTTPS - s; SOCKS4 - 4; SOCKS5 - 5; =пример: https+socks5:  &type=s5

var hideme_parse = (type,key)=>{
	a=получитьHTML('http://hidemy.name/ru/api/proxylist.php?out=js&type='+type+'&code='+hideme_key)
	if(a.search('One more step')!=-1){alert('каптча!')}
	else{b = JSON.parse(a); return b}// alert(b[0].ip+":"+b[0].port+":"+b[0].http+":"+b[0].socks4+":"+b[0].socks5)
}

var hideme_key = 32092123557813;	//брать тут  = vk.com/hidemy_name_keys
var type = "s5" // hs45 (http,https,socks4,socks5);
var b = hideme_parse (type,hideme_key)
alert(b.length)

///////////////////////= ЕЩЕ ПРИМЕР://///////////////////////////////////

var hideme_key = 32092123557813;	//брать тут  = vk.com/hidemy_name_keys
var дисплей = "Кол-во:\n"
var http = hideme_parse ('h',hideme_key); 	var дисплей = дисплей+"http = "+http.length+"\n";iimDisplay(дисплей)
var https = hideme_parse ('s',hideme_key); 	var дисплей = дисплей+"https = "+https.length+"\n";iimDisplay(дисплей)
var socks4 = hideme_parse ('4',hideme_key);	var дисплей = дисплей+"socks4 = "+socks4.length+"\n";iimDisplay(дисплей)
var socks5 = hideme_parse ('5',hideme_key);	var дисплей = дисплей+"socks5 = "+socks5.length+"\n";iimDisplay(дисплей)

alert(http)
http.forEach(function(item, i, arr) {http[i] = item.ip+":"+item.port+":"+"http"; iimDisplay(дисплей+http.length)});
https.forEach(function(item, i, arr) {https[i] = item.ip+":"+item.port+":"+"http";iimDisplay(дисплей+https.length)});
socks4.forEach(function(item, i, arr) {socks4[i] = item.ip+":"+item.port+":"+"http";iimDisplay(дисплей+socks4.length)});
socks5.forEach(function(item, i, arr) {socks5[i] = item.ip+":"+item.port+":"+"http";iimDisplay(дисплей+socks5.length)});

alert(socks5[0]	)

// var https = [].map.call(https, function(obj){https})
// var всеПрокси = 
// Arrray.forEach(function(element, i){})



/////////////////ЕЩЕ ПРИМЕР::::::::::::::::
//настройки оптимизации фф:  
//imacros-js:showsteps no
var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);//iimPlayCode(t0+'URL GOTO=about:config');
prefs.setIntPref("browser.sessionhistory.max_total_viewer",0);prefs.setBoolPref("config.trim_on_minimize", true);prefs.setIntPref("browser.sessionstore.interval",20000);prefs.setIntPref("browser.sessionhistory.max_entries",10);prefs.setBoolPref("network.http.pipelining", true);prefs.setIntPref("network.http.pipelining.maxrequests", 5);prefs.setBoolPref("network.http.proxy.pipelining", true);prefs.setBoolPref("network.prefetch-next", false);function iim(code) {var Cc = Components.classes,Ci = Components.interfaces,wm = Cc["@mozilla.org/appshell/window-mediator;1"].getService(Ci.nsIWindowMediator).getMostRecentWindow("navigator:browser");iimPlay('CODE:' + code);if (iimGetLastError() == 'Macro stopped manually') {window.setTimeout(function() {wm.iMacros.panel.sidebar.document.getElementById('message-box-button-close').click()},4);throw 'Скрипт остановлен кнопкой стоп!';}};

/// = АПИ ХайдМи. Документация: https://vk.com/topic-125614288_36088941
var _c=Components,XMLHttpRequest=_c.Constructor('@mozilla.org/xmlextras/xmlhttprequest;1');
function получитьHTML (AAA){var a=XMLHttpRequest();return a.open('GET',AAA,!1),a.send(''),a.responseText}
ждем = (n) =>{iim('wait seconds='+n)}

var hideme_api=(type,hideme_key)=>{
	var hideme_parse = (type,hideme_key)=>{
		if(type.length>0){var type = "&type="+type};
		ждем(3); 
		a=получитьHTML('http://hidemy.name/ru/api/proxylist.php?out=js&type=s&code=70192555352114'+hideme_key);
		if(a.search('One more step')!=-1){b="каптча"; alert(b)}
		else{alert(a);b = JSON.parse(a)}
		return b
	}
		var дисплей = "Кол-во:\n", все;
		if(type.search('h')){
			var http   = hideme_parse ('h',hideme_key); var дисплей = дисплей+"http   = "+http  .length+"\n";iimDisplay(дисплей)
			http.forEach(function(item, i, arr) {http[i] = item.ip+":"+item.port+":"+"http"; iimDisplay(дисплей+http.length)});
			}else{http=[];}
		if(type.search('s')){
			var https  = hideme_parse ('s',hideme_key); var дисплей = дисплей+"https  = "+https .length+"\n";iimDisplay(дисплей)
			https.forEach(function(item, i, arr) {https[i] = item.ip+":"+item.port+":"+"http";iimDisplay(дисплей+https.length)});
		}else{https=[];}
		if(type.search('4')){
			var socks4 = hideme_parse ('4',hideme_key); var дисплей = дисплей+"socks4 = "+socks4.length+"\n";iimDisplay(дисплей)
			socks4.forEach(function(item, i, arr) {socks4[i] = item.ip+":"+item.port+":"+"http";iimDisplay(дисплей+socks4.length)});
		}else{socks4=[];}
		if(type.search('5')){
			var socks5 = hideme_parse ('5',hideme_key);	var дисплей = дисплей+"socks5 = "+socks5.length+"\n";iimDisplay(дисплей)
			socks5.forEach(function(item, i, arr) {socks5[i] = item.ip+":"+item.port+":"+"http";iimDisplay(дисплей+socks5.length)});
		}else{socks5=[];}
	return http.join('\n')+https.join('\n')+socks4.join('\n')+socks5.join('\n')
}
var hideme_key = 38407009467482;	//брать тут  = vk.com/hidemy_name_keys

alert(hideme_api('s',hideme_key))
