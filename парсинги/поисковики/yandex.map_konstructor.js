 
var start = new Date(); function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function loadJQ() {function loadScriptFromURL(url) {var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),async = false;request.open('GET', url, async);request.send();if (request.status !== 200) {var message = 'An error occurred while loading script at url: ' + url + ', status: ' + request.status;iimDisplay(message);return false;}eval(request.response);return true;}; loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');$ = window.$,JQuery = window.JQuery;}; loadJQ();
iim=iimPlayCode;


 

 
 
function гоНаПечать() {iim(`TAG POS=1 TYPE=DIV ATTR=TXT:Прибытие*\n TAG POS=1 TYPE=BUTTON ATTR=ARIA-LABEL:Печать\n TAG POS=1 TYPE=BUTTON ATTR=TXT:Распечатать<SP>текст`)}
 

var округи="C:\\metro_all.txt"; 
var сохр="C:\\metro_all\\code\\1\\";//КУДА СОХРАНЯЕМ
// imns.FIO.writeTextFile(imns.FIO.openNode(округи_сохр),"") //первоначально очищаем;

var massiv = imns.FIO.readTextFile(imns.FIO.openNode(округи)).split('\n')

for(i=0;i<255;i++){ g=i;g++; 
	iimSet('округ',massiv[i].split(';')[1])
	
	iim(`
	ONDIALOG POS=1 BUTTON=OK CONTENT=
	set !errorignore yes
	URL GOTO=https://yandex.ru/map-constructor/
	refresh
TAG POS=1 TYPE=BUTTON ATTR=TXT:Создать<SP>новую<SP>карту
TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT={{округ}}
 
CLICK X=350 Y=196
CLICK X=350 Y=196
CLICK X=350 Y=196
CLICK X=350 Y=196
CLICK X=358 Y=196
CLICK X=358 Y=196
CLICK X=358 Y=196
CLICK X=358 Y=196
CLICK X=358 Y=196 

CLICK X=820 Y=94
CLICK X=815 Y=99

CLICK X=353 Y=369
CLICK X=353 Y=369
CLICK X=353 Y=369

TAG POS=1 TYPE=INPUT:TEXT ATTR=* CONTENT=Осетинские<sp>пироги<sp>{{округ}}
TAG POS=1 TYPE=TEXTAREA ATTR=PLACEHOLDER:Описание CONTENT=Доставка<sp>осетинских<sp>пирогов<sp>{{округ}}
CLICK X=143 Y=899



CLICK X=159 Y=182
CLICK X=163 Y=384
CLICK X=432 Y=394`) 
	
	iimPlayCode('EVENT TYPE=MOUSEDOWN SELECTOR="HTML>BODY>DIV:nth-of-type(7)>DIV>TEXTAREA" BUTTON=0')

	var prgpath="C:\\1.exe";    // путь до исполняемого файла, не забываем про двойные косые в пути ...
	// ... (экранирование обратного слеша "\\" при записи пути до exe-файла в OS Windows)
	var args = ['-n','6', 'google.com'];    // аргументы, все разделены пробелом. т.е. строка bla.exe -open "c:\\program files\\ololo\\ololo.txt" ...
	// ... будет иметь аргументы var args = ['-open','"c:\\program', 'files\\ololo\\ololo.txt"'];
	var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	file.initWithPath(prgpath);
	var process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
	process.init(file);
	process.run(false, args, args.length);

	iim('wait seconds=6\n SET !EXTRACT {{!CLIPBOARD}}')
	
	var контент = iimGetLastExtract(1);
 	// var контент = $(".delay-light:first").text()+"	"+$(".section-directions-trip-secondary-text>div:first").text()
 
	// var old=imns.FIO.readTextFile(imns.FIO.openNode(округи_сохр));
	// var msgAll=old+"\n"+контент;
	imns.FIO.writeTextFile(imns.FIO.openNode(сохр+g+".txt"),контент);  
	
	
	iimSet('округ',massiv[i].split(';')[1]);iimSet('скрин',massiv[i].split(';')[0])
	iim(`SCREENSHOT TYPE=Page FOLDER=C:\\metro_all\\code\\2 FILE={{скрин}}.jpg`) 
	
	iimDisplay('Круг № '+g+timming());
	}
	
