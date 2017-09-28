 iim=iimPlayCode;
	var cc=Components.classes, ci=Components.interfaces, captcha = (путь) =>{
	var file = cc["@mozilla.org/file/local;1"].createInstance(ci.nsILocalFile); file.initWithPath(путь);
	var contentType = cc["@mozilla.org/mime;1"].getService(ci.nsIMIMEService).getTypeFromFile(file);
	var inputStream = cc["@mozilla.org/network/file-input-stream;1"].createInstance(ci.nsIFileInputStream); 
	inputStream.init(file, 0x01, 0600, 0);
	var stream = cc["@mozilla.org/binaryinputstream;1"].createInstance(ci.nsIBinaryInputStream);
	stream.setInputStream(inputStream);
	var encoded = window.btoa(stream.readBytes(stream.available()));
	var base64 = "data:" + contentType + ";base64," + encoded;
	var data = 'method=base64' + '&body=' + encodeURIComponent(base64);
	var x = cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
	x.open('POST', 'http://rucaptcha.com/in.php' , false); 
	x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	x.send(data);
	alert(x)
	var captchaId = x.responseText
	alert(captchaId)
	for (var i=1; i<=10; i++) {
		iim('WAIT SECONDS=3');
		x.open('GET', 'http://rucaptcha.com/res.php?&action=get&id='+captchaId, false);
		x.send();
		var resp = x.responseText;
		iimDisplay(resp);
		if (resp.indexOf('ERROR')!=-1) {return "ERROR"}
		if (resp.indexOf('OK')!=-1) {var cap = resp.split('|')[1]; return cap}
	}
}

alert(captcha("c:\\cap.jpg"))

 
	// function loadJQ() {function loadScriptFromURL(url) {var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),async = false;request.open('GET', url, async);request.send();if (request.status !== 200) {var message = 'An error occurred while loading script at url: ' + url + ', status: ' + request.status;iimDisplay(message);return false;}eval(request.response);return true;}; loadScriptFromURL('http://devbattles.com/js/jq.for.im.js ');$ = window.$,JQuery = window.JQuery;}; loadJQ();
 
 
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
				// alert(response);   
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