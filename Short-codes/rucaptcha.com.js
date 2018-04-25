var iim = iimPlayCode;
var antiCaptcha = (function(){function a(h,j){var k=c['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance();return k.open('POST',h,!1),k.setRequestHeader('Content-Type','application/x-www-form-urlencoded'),k.send(j),k.responseText}function b(h){var j=c['@mozilla.org/network/io-service;1'].getService(d.nsIIOService),k=j.newURI(h,null,null),l=k.QueryInterface(d.nsIFileURL).file,m=c['@mozilla.org/network/file-input-stream;1'].createInstance(d.nsIFileInputStream);m.init(l,-1,-1,!1);var n=c['@mozilla.org/binaryinputstream;1'].createInstance(d.nsIBinaryInputStream);return n.setInputStream(m),window.btoa(n.readBytes(n.available()))}var c=Components.classes,d=Components.interfaces,g={};return g.standartAntiCaptcha=function(h,j){var k={clientKey:h,task:{type:'ImageToTextTask',body:b(j),phrase:!1,case:!1,numeric:!1,math:0,minLength:0,maxLength:0}},l=JSON.parse(a('https://api.anti-captcha.com/createTask',JSON.stringify(k)));if(0==l.errorId)var m=l.taskId;else return null;for(var n={clientKey:h,taskId:m},o=1;20>=o;o++){iimPlayCode('WAIT SECONDS=5');var l=JSON.parse(a('https://api.anti-captcha.com/getTaskResult',JSON.stringify(n)));if(0!=l.errorId)return null;if('ready'==l.status)return{response:l.solution.text,id:m}}return null},g.recaptchaAntiCaptcha=function(h,j,k){var k=k||window.location.href,l=l||{},n=JSON.parse(a('https://api.anti-captcha.com/createTask',JSON.stringify({clientKey:h,task:{type:'NoCaptchaTaskProxyless',websiteURL:k,websiteKey:j}})));if(0==n.errorId)var o=n.taskId;else return null;for(var p={clientKey:h,taskId:o},q=1;20>=q;q++){iimPlayCode('WAIT SECONDS=5');var n=JSON.parse(a('https://api.anti-captcha.com/getTaskResult',JSON.stringify(p)));if(0!=n.errorId)return null;if('ready'==n.status)return{response:n.solution.gRecaptchaResponse,id:o}}return null},g.standartRuCaptcha=function(h,j){var k='method=base64&key='+encodeURIComponent(h)+'&body='+encodeURIComponent(b(j)),l=a('http://rucaptcha.com/in.php',k);if(~l.indexOf('OK'))var m=l.split('|')[1];else return null;for(var o=1;20>=o;o++){iimPlayCode('WAIT SECONDS=5');var p=c['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance();if(p.open('GET','http://rucaptcha.com/res.php?key=' h '&action=get&id=' m,!1),p.send(),~p.responseText.indexOf('OK|'))return{response:p.responseText.split('|')[1],id:m};if(0>p.responseText.indexOf('CAPCHA_NOT_READY'))return null}return null},g.recaptchaRuCaptcha=function(h,j,k){var k=k||window.location.href,l='method=userrecaptcha&key='+encodeURIComponent(h)+'&googlekey='+j+'&pageurl='+k,m=a('http://rucaptcha.com/in.php',l);if(~m.indexOf('OK'))var n=m.split('|')[1];else return null;for(var p=1;20>=p;p++){iimPlayCode('WAIT SECONDS=5');var q=c['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance();if(q.open('GET','http://rucaptcha.com/res.php?key=' h '&action=get&id=' n,!1),q.send(),~q.responseText.indexOf('OK|'))return{response:q.responseText.split('|')[1],id:n};if(0>q.responseText.indexOf('CAPCHA_NOT_READY'))return null}return null},g.reportRucaptcha=function(h,j){var l=imJS.Cc['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance();l.open('GET','http://rucaptcha.com/res.php?key=' h '&action=reportbad&id=' j,!1),l.send()},g})();
/*
var XMLHttpRequest = Components.Constructor('@mozilla.org/xmlextras/xmlhttprequest;1')
var count = prompt('Кол-во регистраций', '1');
var newPassword = prompt('Укажите пароль', 'pasword');

var dataProxy = loadFile('C:\\iMacros\\dataProxy.txt').strings;
var fileSave = 'C:\\iMacros\\dataOLX.txt';
var apiKeyRuCaptcha = '1d442bf6e2440eb7258413138fd75c1a';
var apiKeySMS = '8Ac6cd75fd0AbA8f35b3378951ec1A79';
var service = 'sn';
var country = 1;
var status = 1;


var i = 0;
var p = 0;
while (i < count) {
if (p == dataProxy.length) {
p = 0;
}
var proxyIP = dataProxy[p].split(':')[0];
var proxyPort = dataProxy[p].split(':')[1];
var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
//prefs.setIn
}

*/