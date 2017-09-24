
var Cc = Components.classes,
Ci = Components.interfaces,
wm = Cc["@mozilla.org/appshell/window-mediator;1"]
.getService(Ci.nsIWindowMediator)
.getMostRecentWindow("navigator:browser");
var mainWindow = wm.iMacros.panel.sidebar;

function дисплей(a,b) {mainWindow.document.querySelector('#imacros-message-box').setAttribute("style", "height: "+b+"px; background:black; color:green; transform:SCALE("+a+"); font-size: 14px;")}
start = new Date(); 
var запуск = "\nЗапустили:\n"+start.toLocaleDateString()+" в "+start.toLocaleTimeString()
 

function дата(){var ld = new Date();return ld.toLocaleDateString()+"_"+ld.toLocaleTimeString()+":"}
function timming() {diff=(new Date()-start)/1000; return '\nЗатрачено времени: \n'+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function getRandomInt(min, max){return Math.round(min - 0.5 + Math.random() * (max - min + 1))}
function wait(min,max){iimSet('rand',getRandomInt(min,max));iimPlayCode('wait seconds={{rand}}')} 
function waitDisp() {for(u=250;u>0;u-=10){дисплей(1,u)};for(u=0;u<250;u+=10){дисплей(1,u)}; for(uu=1;uu>0;uu-=0.1){дисплей(uu,200)};for(uu=0.1;uu<1;uu+=0.1){дисплей(uu,200)};} 
function перезапись (путь,инфа) { imns.FIO.writeTextFile(imns.FIO.openNode(путь),инфа)}
function loadFile(путь) {return imns.FIO.readTextFile(imns.FIO.openNode(путь))}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  



// var headers = {
    // 'Host', 'xn--h1aafjhelcc6a.xn--p1ai','User-Agent', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0','Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    // 'Accept-Language', 'en-US,en;q=0.5','Connection', 'keep-alive','Cookie', 'OAID=244c6c5cf93e1de84daed75f26cc1cae; _ym_uid=1490972984311592243; _ym_isad=2; _ym_visorc_15854191=w'
// };

var iim = iimPlayCode, cc=Components.classes, ci=Components.interfaces, 

captcha = () =>{ 
 	var x = cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
	x.open('GET', 'https://списокфирм.рф/rating/rating_obr.php' , false); 
	x.setRequestHeader('Host', 'xn--h1aafjhelcc6a.xn--p1ai','User-Agent', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0','Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8','Accept-Language', 'en-US,en;q=0.5','Connection', 'keep-alive','Cookie', 'OAID=244c6c5cf93e1de84daed75f26cc1cae; _ym_uid=1490972984311592243; _ym_isad=2; _ym_visorc_15854191=w')
	x.send('https://списокфирм.рф/rating/rating_obr.php');
	alert(x.responseText)
 
}
 captcha()
 