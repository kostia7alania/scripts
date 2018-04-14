//осуждение => https://vk.com/topic-125614288_35041402 
//проверено на FF45 - на этой сборке :: vk.com/imacros_javascript
//=> функция для снятия прокси:
uP=() => {Components.utils.import("resource://gre/modules/Services.jsm");Services.prefs.setIntPref("network.proxy.type",0)} 
//=> функция для постановки прокси:
P=(ip,port,login,pass)=>{
 	Components.utils.import("resource://gre/modules/Services.jsm");
 	Services.prefs.setIntPref("network.proxy.type",1);
 	Services.prefs.setCharPref("network.proxy.http",ip);
 	Services.prefs.setIntPref("network.proxy.http_port",port);
 	base64_encode=(data)=>{/*инфа про base тут => bit.ly/2rnFVdQ*/
 		var prefs=Components.classes["@mozilla.org/preferences-service;1"] /*vk.com/club34749892 видимо))*/
 		.getService(Components.interfaces.nsIPrefBranch),
 		b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o1,o2,o3,h1,h2,h3,h4,bits,i=0,enc='';
 		do{ o1=data.charCodeAt(i++);
 			o2=data.charCodeAt(i++);
 			o3=data.charCodeAt(i++);
 			bits=o1<<16|o2<<8|o3;
 			h1=bits>>18&0x3f;
 			h2=bits>>12&0x3f;
 			h3=bits>>6&0x3f;
 			h4=bits&0x3f;
 			enc+=b64.charAt(h1)+b64.charAt(h2)+b64.charAt(h3)+b64.charAt(h4);
 		}
 		while(i<data.length);
 		switch(data.length%3){case 1:enc=enc.slice(0,-2)+'==';break;case 2:enc=enc
 			.slice(0,-1)+'=';break
 		}
 			window.console.log("enc>"+enc);
 		prefs.setCharPref("extensions.closeproxyauth.authtoken",enc); // для глючного closeproxyauth
 		prefs.setCharPref("extensions.proxyauth.authtoken"     ,enc); // для нормального proxyauth=>качать тут=> mzl.la/2EXNgmn
 		return
 	}
 	base64_encode(login+':'+pass);
 	//запасной вариант: и если не будет пахать, то вот ето еще точно поможет=>iimPlayCode(`ONLOGIN USER=${login} PASSWORD=${pass}\nURL GOTO=2ip.ru`);
	var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService); 
	var a = pref.getBranch("network.proxy."); 
	a.setCharPref("http",  ip); 
	a.setCharPref("ssl",   ip); 
	a.setCharPref("ftp",   ip); 
	a.setCharPref("socks", ip);
	a.setIntPref( "http_port", port); 
	a.setIntPref(  "ssl_port", port); 
	a.setIntPref(  "ftp_port", port); 
	a.setIntPref("socks_port", port);  
	a.setIntPref("type", 1);
	 //так можно почитать че в настройках сейчас установлено (i.e.about:config):
	var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch); 
	var myPrx = prefs.getCharPref("network.proxy.http"); 
	var myPrt = prefs.getIntPref("network.proxy.http_port");
 }
 uP();//снять прокси
 //P('185.221.161.239','9092','HUx2s2','TRk7WG');//установить прокси;
 P('185.221.163.138','9381','xjTdAF','FhHqpJ');//установить прокси;
 iimPlayCode(`url goto=2ip.ru`)