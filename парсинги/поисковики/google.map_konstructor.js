 
var start = new Date(); function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function loadJQ() {function loadScriptFromURL(url) {var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),async = false;request.open('GET', url, async);request.send();if (request.status !== 200) {var message = 'An error occurred while loading script at url: ' + url + ', status: ' + request.status;iimDisplay(message);return false;}eval(request.response);return true;}; loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');$ = window.$,JQuery = window.JQuery;}; loadJQ();


iim=iimPlayCode; 
function run(prog) {var prgpath=prog; var args = ['-n','6', 'google.com']; var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile); file.initWithPath(prgpath); var process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess); process.init(file); process.run(false, args, args.length)}
 
 
var округи="C:\\metro_all.txt"; 
var сохр="C:\\metro_all\\code\\код.txt";//КУДА СОХРАНЯЕМ
var сохр_адреса="C:\\metro_all\\code\\адреса.txt";//КУДА СОХРАНЯЕМ
// imns.FIO.writeTextFile(imns.FIO.openNode(округи_сохр),"") //первоначально очищаем;

var massiv = imns.FIO.readTextFile(imns.FIO.openNode(округи)).split('\n')

for(i=253;i<255;i++){ g=i;g++; 
for(q=0;q<555;q++){
	
	iim(`set !replayspeed fast
	ONDIALOG POS=1 BUTTON=OK CONTENT=
	set !errorignore yes
	URL GOTO=https://www.google.com/maps/d/u/0/
	TAG POS=1 TYPE=SPAN ATTR=TXT:+<SP>Создать<SP>новую<SP>карту
`)

iim('TAG POS=1 TYPE=B ATTR=* extract=txt')
if(iimGetLastExtract(1)=="429."){iim('wait seconds=555')}else{q=555}

}

iimSet('округ',massiv[i].split(';')[1])
iim(`TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:mapsprosearch-field CONTENT=Москва,<sp>ЦАО
TAG POS=1 TYPE=IMG ATTR=SRC:https://ssl.gstatic.com/ui/v1/button/search-white.png

TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:mapsprosearch-field CONTENT={{округ}} 
TAG POS=1 TYPE=IMG ATTR=SRC:https://ssl.gstatic.com/ui/v1/button/search-white.png
wait seconds=2
TAG POS=1 TYPE=DIV ATTR=CLASS:gm-style-iw EXTRACT=HTM`)
var адрес = iimGetLastExtract(1).split('</div><div>')[1].split('</div><div>')[0];

// var адрес = $(".gm-style-iw>div>div>div>div:nth-child(2)").text()
 iimDisplay('АДРЕС:'+адрес+'\nКруг № '+g+timming());
iimSet('округ',massiv[i].split(';')[1])
iim(` set !errorignore yes
TAG POS=1 TYPE=DIV ATTR=ID:addtomap-button
 TAG POS=1 TYPE=LI ATTR=ID:map-infowindow-edit-button 
 EVENTS TYPE=KEYPRESS SELECTOR="#map-infowindow-attr-название-value" KEYS="[46,46,46,46,46,46,8,8,8,8,8,8,8,46,46,46,46,46,46,8,8,8,8,8,8,8,46,46,46,46,46,46,8,8,8,8,8,8,8]"
EVENTS TYPE=KEYPRESS SELECTOR="#map-infowindow-attr-описание-value" KEYS="[46,46,46,46,46,46,8,8,8,8,8,8,8,46,46,46,46,46,46,8,46,8,46,8,46,8,46,8,8,8,46,8,46,8,46,8,46,8,46,8,8,8,8,8,46,46,46,46,46,46,8,8,8,8,8,8,8]"
EVENTS TYPE=KEYPRESS SELECTOR="#map-infowindow-attr-название-value" CHARS=Осетинские<sp>пироги<sp>{{округ}}
EVENTS TYPE=KEYPRESS SELECTOR="#map-infowindow-attr-описание-value" CHARS=Доставка<sp>осетинских<sp>пирогов<sp>{{округ}}<sp>-<sp>http://vkusno-pirogi.ru/
 
TAG POS=1 TYPE=DIV ATTR=TXT:Сохранить

TAG POS=1 TYPE=LI ATTR=ID:map-infowindow-style-button 
CLICK X=848 Y=473
CLICK X=843 Y=533
CLICK X=563 Y=628
CLICK X=572 Y=848

TAG POS=1 TYPE=DIV ATTR=ID:sr-layer-status

TAG POS=1 TYPE=DIV ATTR=CLASS:*&&DATA-TOOLTIP:Открыть<SP>меню&&ARIA-LABEL:Открыть<SP>меню&&TXT:
'кликаем по РЕДАКТ СЛОЯ 5 раз=)
set !replayspeed fast
CLICK X=148 Y=225
CLICK X=103 Y=309
CLICK X=110 Y=312 
CLICK X=117 Y=290
CLICK X=73 Y=307
CLICK X=119 Y=408
wait seconds=2
EVENTS TYPE=KEYPRESS SELECTOR="#update-layer-name>DIV:nth-of-type(2)>INPUT" CHARS=Осетинские<sp>пироги<sp>{{округ}}
TAG POS=3 TYPE=INPUT:TEXT ATTR=* CONTENT=Осетинские<sp>пироги<sp>{{округ}}
TAG POS=1 TYPE=BUTTON ATTR=NAME:save
wait seconds=2
TAG POS=1 TYPE=LI ATTR=ID:map-action-share
EVENTS TYPE=KEYPRESS SELECTOR="#rename-map>DIV:nth-of-type(2)>INPUT" CHARS={{округ}} 
TAG POS=1 TYPE=TEXTAREA ATTR=PLACEHOLDER:Добавьте<SP>описание<SP>карты<SP>для<SP>удобства<SP>пользователей&&DIR:auto&&CLASS:*&&TXT: CONTENT=Доставка<sp>осетинских<sp>пирогов<sp>{{округ}}<sp>-<sp>http://vkusno-pirogi.ru/
TAG POS=2 TYPE=BUTTON ATTR=NAME:ok
set !replayspeed medium
FRAME F=6
TAG POS=1 TYPE=DIV ATTR=TXT:Изменить...`);
run("C:\\click.exe")//прокликивание+копирование в буфер выделенного
	iim('wait seconds=15\n SET !EXTRACT {{!CLIPBOARD}}')
	
	var контент = iimGetLastExtract(1);
	
 	// var контент = $(".delay-light:first").text()+"	"+$(".section-directions-trip-secondary-text>div:first").text()
	// var old=imns.FIO.readTextFile(imns.FIO.openNode(округи_сохр));
	// var msgAll=old+"\n"+контент;
	
	imns.FIO.appendTextFile(imns.FIO.openNode(сохр),g+"	"+контент+"\n");  
	imns.FIO.appendTextFile(imns.FIO.openNode(сохр_адреса),g+"	"+адрес+"\n");
	
	iimSet('округ',massiv[i].split(';')[1]);iimSet('скрин',massiv[i].split(';')[0])
	iim(`SCREENSHOT TYPE=Page FOLDER=C:\\metro_all\\code\\2 FILE={{скрин}}.jpg`) 
	
	iimDisplay('Круг № '+g+timming());
	}
	
