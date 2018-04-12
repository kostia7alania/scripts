iim=iimPlayCode
function сменаАйпи(ип,порт) {var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);prefs.setIntPref("network.proxy.type",1); prefs.setBoolPref("network.proxy.share_proxy_settings", true); prefs.setCharPref("network.proxy.http",ип);
prefs.setIntPref("network.proxy.http_port",порт)}
var proxy = imns.FIO.readTextFile(imns.FIO.openNode("C:\\proxy.txt")).split('\n');

var _c=Components,XMLHttpRequest=_c.Constructor('@mozilla.org/xmlextras/xmlhttprequest;1');
function получитьHTML (AAA){var a=XMLHttpRequest();return a.open('GET',AAA,!1),a.send(''),a.responseText}
 



// for(i=1;i<proxy.length+1;i++){	
for(i=1;i<3331+1;i++){	
	var ип = proxy[i].split(':')[0], 
	  порт = proxy[i].split(':')[1]; 
	// сменаАйпи(ип,порт); 
iim(`url goto="http://192.168.1.1/#broadband.globals" \n TAG POS=1 TYPE=TD ATTR=TXT:Internet \n TAG POS=1 TYPE=BUTTON FORM=NAME:editor ATTR=TXT:Apply`)
try{
iim('set !errorignore yes \n set !timeout_step 30\n url goto=https://списокфирм.рф/org_fullscren.php?id=14497 \n TAG POS=1 TYPE=BUTTON FORM=ACTION:rating/rating_obr.php ATTR=TITLE:Проголосовать<SP>за<SP>компанию&&ALT:Повысить<SP>статус&&ID:myButton&&TXT:')

получитьHTML('http://moscow.cataloxy.ru/firms/vkusno-pirogi.ru.htm')
iim('url goto="http://moscow.cataloxy.ru/firms/vkusno-pirogi.ru.htm"')
iim('clear')
}catch(e){}

}
 
// iim('clear\n wait seconds=33')
 