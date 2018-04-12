
// var iMacros = ( function() {
   // const Cu = Components.utils;
    // let {imns} = Cu.import("resource://imacros/utils.js");
    // let {SOAPClient} = Cu.import("resource://imacros/SOAPClient.js");

    // var obj = {};
  
   // window.openDialog("chrome://imacros/content/smplcopy.xul",
                              // "", "modal,centerscreen", 1);
 
	// alert(1)


	
    // obj.onUnload = function() {
        // this.unregisterObservers();
    // };        

	
    // return obj;
	// }) ();
	
	// window.addEventListener("load", function() {
    // iMacros.onLoad();
// }, false);


// window.addEventListener("unload", function() {
    // iMacros.onUnload();
// }, false);

	 
	 
 //imacros-js:showsteps no
var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
//iimPlayCode(t0+'URL GOTO=about:config');
prefs.setIntPref("browser.sessionhistory.max_total_viewer",0);
prefs.setBoolPref("config.trim_on_minimize", true);
prefs.setIntPref("browser.sessionstore.interval",20000);
prefs.setIntPref("browser.sessionhistory.max_entries",10);
prefs.setBoolPref("network.http.pipelining", true);
prefs.setIntPref("network.http.pipelining.maxrequests", 5);
prefs.setBoolPref("network.http.proxy.pipelining", true);
prefs.setBoolPref("network.prefetch-next", false); 

function iim(code) {  
    var Cc = Components.classes,
        Ci = Components.interfaces,
        wm = Cc["@mozilla.org/appshell/window-mediator;1"]
                .getService(Ci.nsIWindowMediator)
                .getMostRecentWindow("navigator:browser");
    iimPlay('CODE:' + code);
    if (iimGetLastError() == 'Macro stopped manually') {
            window.setTimeout(function() {
                wm.iMacros.panel.sidebar.document.getElementById('message-box-button-close').click()
            } , 4);
            throw 'Скрипт остановлен кнопкой стоп!';
    }
};


/////////////////////////////////////////////
 
// function loadJQ() {function loadScriptFromURL(url) {var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),async = false;request.open('GET', url, async);request.send();if (request.status !== 200) {var message = 'An error occurred while loading script at url: ' + url + ', status: ' + request.status;iimDisplay(message);return false;}eval(request.response);return true;}; loadScriptFromURL('http://devbattles.com/js/jq.for.im.js ');$ = window.$,JQuery = window.JQuery;}; loadJQ();
 
 var Cc = Components.classes,Ci = Components.interfaces,wm = Cc["@mozilla.org/appshell/window-mediator;1"].getService(Ci.nsIWindowMediator).getMostRecentWindow("navigator:browser");var mainWindow = wm.iMacros.panel.sidebar;

function asd(a) {mainWindow.document.querySelector('#imacros-message-box').setAttribute("style", "height: 10px; background:black; color:red; transform:SCALE("+a+"); font-size: 14px;")}
 

  // mainWindow.document.querySelector('#imacros-message-box-container').setAttribute("style", "width:100%!important;height: 11px!important; background:black; color:red!important; transform:SCALE(2)!important; font-size: 14px!important;")
  // iimPlayCode('wait seconds=0') 
 function toDataURL(url, callback) {
  var xhr = new window.XMLHttpRequest();
  xhr.onload = function() {
    var reader = new window.FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
  // window.document.querySelectorAll('img')[0].src=xhr.responseText;  
  // alert(11)
}

iim('wait seconds=11')

toDataURL('https://71.мвд.рф/captcha', function(dataUrl) { 
  window.document.querySelectorAll('img')[0].src=dataUrl; 
// alert(11) 
console.log('RESULT:', dataUrl)
})
// var xhr = new window.XMLHttpRequest()
// var reader = new window.FileReader()
  // xhr.open('GET', 'https://71.мвд.рф/captcha');
  // xhr.responseType = 'blob';
  // xhr.send();
  // alert(xhr.responseText)

	// var cc=Components.classes, ci=Components.interfaces;
	// var x = cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
	// x.open('POST', 'https://71.мвд.рф/captcha' , false); 
	// x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	// x.send(); 
	// var captchaId = x.responseText
	// alert(x)
	// alert(x.responseText)
	
	// for (var i=1; i<=10; i++) {
		// iim('WAIT SECONDS=3');
		// x.open('GET', 'http://rucaptcha.com/res.php?&action=get&id='+captchaId, false);
		// x.send();
		// var resp = x.responseText;
		// iimDisplay(resp);
		// if (resp.indexOf('ERROR')!=-1) {return "ERROR"}
		// if (resp.indexOf('OK')!=-1) {var cap = resp.split('|')[1]; return cap}
	// }
	 
//переЗАПИСЬ:
var saveTextPromise = (сохр_текст,путь) => {Components.utils.import("resource://gre/modules/osfile.jsm"); // загрузить модуль ОС
	var encoder = new window.TextEncoder(); //Этот encoder мб переЮзан повторно для нескок операций записи
	var array = encoder.encode(сохр_текст); // Преобразование текста в массив
	var promise = OS.File.writeAtomic(путь, array,{tmpPath: "1.txt.tmp"}); // Пишем массив атомарно в файл file.txt, используя временный;
}
	var cc=Components.classes, ci=Components.interfaces
	var file = cc["@mozilla.org/file/local;1"].createInstance(ci.nsILocalFile);
 // iim=iimPlayCode;
	// var cc=Components.classes, ci=Components.interfaces, captcha = (путь) =>{
	// var file = cc["@mozilla.org/file/local;1"].createInstance(ci.nsILocalFile); file.initWithPath(путь);
	// var contentType = cc["@mozilla.org/mime;1"].getService(ci.nsIMIMEService).getTypeFromFile(file);
	// var inputStream = cc["@mozilla.org/network/file-input-stream;1"].createInstance(ci.nsIFileInputStream); 
	// inputStream.init(file, 0x01, 0600, 0);
	// var stream = cc["@mozilla.org/binaryinputstream;1"].createInstance(ci.nsIBinaryInputStream);
	// stream.setInputStream(inputStream);
	// var encoded = window.btoa(stream.readBytes(stream.available()));
	// var base64 = "data:" + contentType + ";base64," + encoded;
	// var data = 'method=base64' + '&body=' + encodeURIComponent(base64);
// //начало хттп реквеста
	// var x = cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
	// x.open('POST', 'http://rucaptcha.com/in.php' , false); 
	// alert(x)
	// x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	// x.send(data);
	// alert(x)
	// var captchaId = x.responseText
	// alert(captchaId)
	// for (var i=1; i<=10; i++) {
		// iim('WAIT SECONDS=3');
		// x.open('GET', 'http://rucaptcha.com/res.php?&action=get&id='+captchaId, false);
		// x.send();
		// var resp = x.responseText;
		// iimDisplay(resp);
		// if (resp.indexOf('ERROR')!=-1) {return "ERROR"}
		// if (resp.indexOf('OK')!=-1) {var cap = resp.split('|')[1]; return cap}
	// }
// }
// alert(captcha("c:\\cap.jpg"))
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//////////
 
 // var cc=Components.classes, ci=Components.interfaces, captcha = (апиКлюч,путь) =>{
	// var file = cc["@mozilla.org/file/local;1"].createInstance(ci.nsILocalFile); file.initWithPath(путь);
	// var contentType = cc["@mozilla.org/mime;1"].getService(ci.nsIMIMEService).getTypeFromFile(file);
	// var inputStream = cc["@mozilla.org/network/file-input-stream;1"].createInstance(ci.nsIFileInputStream); 
	// inputStream.init(file, 0x01, 0600, 0);
	// var stream = cc["@mozilla.org/binaryinputstream;1"].createInstance(ci.nsIBinaryInputStream);
	// stream.setInputStream(inputStream);
	// var encoded = window.btoa(stream.readBytes(stream.available()));
	// var base64 = "data:" + contentType + ";base64," + encoded;
	// var data = 'method=base64' + '&key='+апиКлюч + '&body=' + encodeURIComponent(base64);
	// var x = cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
	// x.open('POST', 'http://rucaptcha.com/in.php' , false); 
	// x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	// x.send(data);
	// var captchaId = x.responseText.split('|')[1];
	// for (var i=1; i<=10; i++) {
		// iim('WAIT SECONDS=10');
		// x.open('GET', 'http://rucaptcha.com/res.php?key='+апиКлюч+'&action=get&id='+captchaId, false);
		// x.send();
		// var resp = x.responseText;
		// iimDisplay(resp);
		// if (resp.indexOf('ERROR')!=-1) {return "ERROR"}
		// if (resp.indexOf('OK')!=-1) {var cap = resp.split('|')[1]; return cap}
	// }
// }

  
	// var headers = {
    // 'Host': '71.xn--b1aew.xn--p1ai',
    // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0',
    // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    // 'Accept-Language': 'en-US,en;q=0.5',
    // 'Referer': 'https://71.xn--b1aew.xn--p1ai/%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9-%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9-2017/item/11051858/',
    // 'DNT': '1',
    // 'Connection': 'keep-alive',
    // 'Cookie': 'session=2cq48luf21rmg6saf2v46t26f7'
// };
		// var url1='https://71.мвд.рф/captcha?'
		// $.post(
			// url1,
			// headers,
			// function (response) {
				// $("img").attr('src','data:image/jpeg;base64,'+response);
				// // alert(response)
                // if (response == 'success') {alert('success = '+response)} 
            // }
        // )
		
		
 
    // // var url = 'https://71.мвд.рф/народный-участковый-2017/vote/';
	// // // alert(url);
		// // $.post(
			// // url,
			// // {uid: "",network: "",captcha: "ЕЮУ5Л",person: "11051858"},
			// // function (response) {
				// // alert(response);  
				// // response = JSON.parse(response); 
				// // alert("стрингифу = "+JSON.stringify(response));
                // // if (response == 'success') {alert('success = '+response)} 
            // // }
        // // )