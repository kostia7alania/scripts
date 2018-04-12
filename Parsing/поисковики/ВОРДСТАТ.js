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
var iim = iimPlayCode, cc=Components.classes, ci=Components.interfaces, captcha = (апиКлюч,путь) =>{
	var file = cc["@mozilla.org/file/local;1"].createInstance(ci.nsILocalFile); file.initWithPath(путь);
	var contentType = cc["@mozilla.org/mime;1"].getService(ci.nsIMIMEService).getTypeFromFile(file);
	var inputStream = cc["@mozilla.org/network/file-input-stream;1"].createInstance(ci.nsIFileInputStream); 
	inputStream.init(file, 0x01, 0600, 0);
	var stream = cc["@mozilla.org/binaryinputstream;1"].createInstance(ci.nsIBinaryInputStream);
	stream.setInputStream(inputStream);
	var encoded = window.btoa(stream.readBytes(stream.available()));
	var base64 = "data:" + contentType + ";base64," + encoded;
	var data = 'method=base64' + '&key='+апиКлюч + '&body=' + encodeURIComponent(base64);
	var x = cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
	x.open('POST', 'http://rucaptcha.com/in.php' , false); 
	x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	x.send(data);
	var captchaId = x.responseText.split('|')[1];
	for (var i=1; i<=10; i++) {
		iim('WAIT SECONDS=10');
		x.open('GET', 'http://rucaptcha.com/res.php?key='+апиКлюч+'&action=get&id='+captchaId, false);
		x.send();
		var resp = x.responseText;
		iimDisplay(resp);
		if (resp.indexOf('ERROR')!=-1) {return "ERROR"}
		if (resp.indexOf('OK')!=-1) {var cap = resp.split('|')[1]; return cap}
	}
}
var yandexCap = () =>{iim(`ONDOWNLOAD FOLDER=C:\\ FILE=cap.jpg WAIT=YES \n TAG POS=1 TYPE=IMG ATTR=SRC:*captcha* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT`); iim('EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(8)>DIV>DIV>TABLE>TBODY>TR>TD>DIV>FORM>TABLE>TBODY>TR:nth-of-type(2)>TD>SPAN>SPAN>INPUT" CHARS='+captcha(апиКлюч,путь)); iim('EVENT TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(8)>DIV>DIV>TABLE>TBODY>TR>TD>DIV>FORM>TABLE>TBODY>TR:nth-of-type(2)>TD>SPAN>SPAN>INPUT" KEY=13')}//этот хитрый яша не воспринимал никакие клики,тока имитация энтера спасла ситуацию

 
//функция по сохр каптчи и тесту превышения размера каптчи >0 бит)) =ато она всегда существовала и хз как ее уловишь по др свойствам:
var yandexCapTest = () =>{iim(`ONDOWNLOAD FOLDER=C:\\ FILE=cap.jpg WAIT=YES \n TAG POS=1 TYPE=IMG ATTR=SRC:*captcha* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT\n wait seconds=2`); return Components.utils.import("resource://gre/modules/FileUtils.jsm").FileUtils.File(путь).fileSize}

var апиКлюч = "СЕКс40c629b2418bf14c6ca56d0e7e21d0"
var путь = 'C:\\cap.jpg'
var запросы_путь = "C:\\насобирал_ключи.txt"//сами запросы

var путьСохр = запросы_путь.split('.txt')[0]+'_с частотностями.txt'//готовая стата тут будет
перезапись(путьСохр,'ключи	в""	в "" и !')
var запрос = loadFile(запросы_путь).split('\n')
  var каптч = 0;
	for(i=0;i<запрос.length;i++){
			var строка = запрос[i].replace(/\n/,"!") 
			do {var строка = строка.replace('  ',' ')} while(строка.search('  ')!=-1)
			iimDisplay('Запрос №'+i+'\nСам запрос:\n'+строка+'\nКаптч: '+каптч+timming()+запуск);
			iimSet('url',строка);
			iim('URL GOTO=https://wordstat.yandex.ru/#!/?words="{{url}}"')
		waitDisp(); 		if(yandexCapTest()>0){yandexCap()}; if(yandexCapTest()>0){yandexCap()}//2х тест на каптчу
			iim('TAG POS=5 TYPE=DIV ATTR=TXT:*месяц* extract=txt')
			var просмотры1 = iimGetLastExtract(1).replace(/^.*—.(\d{1,15}).*/igm,"$1")
			var строка2 = строка.split(' ')
			var воскл =" "; //очистка!! 
			for(g=0;g<строка2.length;g++){var воскл = воскл+" !"+строка2[g]};
			iimDisplay('Запрос №'+i+'\nСам запрос:\n'+строка+'\nКаптч: '+каптч+timming()+запуск);
			iimSet('url',воскл)
			iim('URL GOTO=https://wordstat.yandex.ru/#!/?words="{{url}}"')			
		waitDisp();  	if(yandexCapTest()>0){yandexCap()}; if(yandexCapTest()>0){yandexCap()}//2х тест на каптчу
			iim('TAG POS=5 TYPE=DIV ATTR=TXT:*месяц* extract=txt')
			var просмотры2 = iimGetLastExtract(1).replace(/^.*—.(\d{1,15}).*/igm,"$1")
			var сохр = "\n"+строка.replace(/\r|\n/g, '')+"	"+parseInt(просмотры1)+"	"+parseInt(просмотры2) 
			
			добавитьВКонец(путьСохр,сохр) 
	}
 
  
 



 
 