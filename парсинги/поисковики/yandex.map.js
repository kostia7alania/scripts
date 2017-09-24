

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




iimPlayCode('wait seconds=5')
iimPlayCode('prompt {{!CLIPBOARD}}')

var start = new Date(); function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function loadJQ() {function loadScriptFromURL(url) {var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),async = false;request.open('GET', url, async);request.send();if (request.status !== 200) {var message = 'An error occurred while loading script at url: ' + url + ', status: ' + request.status;iimDisplay(message);return false;}eval(request.response);return true;}; loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');$ = window.$,JQuery = window.JQuery;}; loadJQ();
iim=iimPlayCode;


 

iim('wait seconds=10')
 
function гоНаПечать() {iim(`TAG POS=1 TYPE=DIV ATTR=TXT:Прибытие*\n TAG POS=1 TYPE=BUTTON ATTR=ARIA-LABEL:Печать\n TAG POS=1 TYPE=BUTTON ATTR=TXT:Распечатать<SP>текст`)}
 

var округи="C:\\metro_all.txt"; 
var сохр="C:\\metro_all\\1";//КУДА СОХРАНЯЕМ
// imns.FIO.writeTextFile(imns.FIO.openNode(округи_сохр),"") //первоначально очищаем;

var massiv = imns.FIO.readTextFile(imns.FIO.openNode(округи)).split('\n')

for(i=233;i<255;i++){ g=i;g++;
	iim('url goto=http://bit.ly/2pozxOb')
	iimSet('округ',massiv[i].split(';')[1])
	iim('TAG POS=1 TYPE=INPUT:TEXT ATTR=* CONTENT={{округ}}')
	iim(`TAG POS=1 TYPE=BUTTON ATTR=CLASS:searchbox-searchbutton&&JSACTION:search;focus:pane.focusTooltip;blur:pane.blurTooltip&&DATA-TOOLTIP:Поиск&&ARIA-LABEL:Поиск&&TXT:`) 
	
	iimPlayCode('wait seconds=3')
	// var контент = massiv[i]+"	"+$(".delay-light:first").text()+"	"+$(".section-directions-trip-secondary-text>div:first").text()
	гоНаПечать()
	// var контент = $(".directions-mode-nontransit-groups").text()//не пашет пчему-то ;
	iim('wait seconds=5\n TAG POS=1 TYPE=DIV ATTR=CLASS:directions-mode-nontransit-groups extract=txt');
	
	var контент = iimGetLastExtract(1);
	
	// var контент = $(".delay-light:first").text()+"	"+$(".section-directions-trip-secondary-text>div:first").text()
 
	// var old=imns.FIO.readTextFile(imns.FIO.openNode(округи_сохр));
	// var msgAll=old+"\n"+контент;
	imns.FIO.writeTextFile(imns.FIO.openNode(сохр+g+".txt"),контент);  
	
	
	iimSet('округ',massiv[i].split(';')[1]);iimSet('скрин',massiv[i].split(';')[0])
	iim(`url goto=https://www.google.ru/maps/
	TAG POS=1 TYPE=INPUT:TEXT FORM=ID:searchbox_form ATTR=ID:searchboxinput CONTENT={{округ}}
	TAG POS=1 TYPE=BUTTON ATTR=ID:searchbox-searchbutton
	wait seconds=33
	SCREENSHOT TYPE=Page FOLDER=C:\\metro_all\\1 FILE={{скрин}}.jpg
	wait seconds=1
`) 
	
	iimDisplay('Круг № '+g+timming());
	}
	
