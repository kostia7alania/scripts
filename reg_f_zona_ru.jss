var юзерагент = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"
function UserAgent(){iimPlay("CODE:URL GOTO=2ip.ru\n WAIT SECONDS=1");        
       var Cc=Components.classes, Ci=Components.interfaces; 
       var prf=Cc['@mozilla.org/preferences-service;1'].getService(Ci.nsIPrefBranch);
       var str=Cc['@mozilla.org/supports-string;1'].createInstance(Ci.nsISupportsString);     
       str.data=юзерагент	 // Перюключение UserAgent     
       prf.setComplexValue('general.useragent.override',Ci.nsISupportsString,str);
}
UserAgent(); 
 

iim = iimPlayCode;
 
function randGen(min, max) {return Math.floor(Math.random() * (max - min)) + min;}
var _c=Components,XMLHttpRequest=_c.Constructor('@mozilla.org/xmlextras/xmlhttprequest;1');
function получитьHTML (AAA){var a=XMLHttpRequest();return a.open('GET',AAA,!1),a.send(''),a.responseText}
function translit(text, engToRus, replace){rus = "щшчцюяёжъыэабвгдезийклмнопрстуфхь".split("");eng = "shh sh ch cz yu ya yo zh `` y e a b v g d e z i j k l m n o p r s t u f x  ".split(" ");for(var x = 0; x < rus.length; x++){text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase()); 
}if(replace){r = replace.split(",");try{pr = new RegExp("([^\\"+r[0]+"]+)(?=\\"+r[1]+")","g");text.match(pr).forEach(function(i){text=text.split(r[0]+i+r[1]).join(translit(i, engToRus ? "" : true))})}catch(e){}}return text;}
//с английского на русский alert(translit("text", true)) //тоже самое, но без перевода того, что написано в [ ] alert(translit("text [text]", true, "[,]")) 
//с русского на английский- alert(translit("текст")) //тоже самое, но без перевода того, что написано в {[} {]} alert(translit("текст {[}текст{]}", true, "{[},{]}"))


// ================ настройки ============
var путьСохр = "C:\\FULL\\report.txt";	//КУДА СОХРАНЯЕМ ОТЧЕТ
var скокЗарегать = 10;
var имена  = "https://m.vk.com/doc-125614288_450503984";
var фамилии= "https://m.vk.com/doc40778210_450651681";
var домены = "https://m.vk.com/doc-125614288_450507777";	 //почтовые домены;
var юзерагенты = "https://m.vk.com/doc-125614288_450514098"; //useragent
var ждатьОт = 3;
var ждатьДо = 5;

var имена = получитьHTML(имена).split('\n')
var фамилии = получитьHTML(фамилии).split('\n')
var домены = получитьHTML(домены).split('\n')
var юзерагенты = получитьHTML(юзерагенты).split('\n')
function логин () {
	var рандомИмя = randGen(1,имена.length);
	var рандомФам = randGen(1,фамилии.length); 
	
	var имя 	= имена[рандомИмя]
	var фамилия = фамилии[рандомФам]
	
	var домен	= домены[randGen(0,домены.length)]
 
	if(randGen(0,1)>0){
		логин = имя
		if(randGen(0,2)>0){
			var логин = логин+randGen(0,9)
		}else{
			логин = логин + фамилия;
			if(randGen(0,2)>0){
				var логин = логин+randGen(0,9)
			}
		}
	}else{
		логин = фамилия
		if(randGen(0,1)>0){
			var логин = логин+randGen(0,9)
		}else{
			логин = логин + имя;
			if(randGen(0,2)>0){
				var логин = логин+randGen(0,9)
			}
		}
	}
	var имя = имя+randGen(0,9);
	if(randGen(0,1)>0){var имя = translit(имя)+randGen(0,9)}
	if(randGen(0,1)>0){var имя = translit(фамилия)}
	if(randGen(0,1)>0){var имя = translit(имя)}
	if(randGen(0,1)>0){var имя = фамилия}
	if(randGen(0,1)>0){var имя = имя}
	
	var почта = логин+"@"+домен
	return имя+":"+translit(почта)+":"+translit(фамилия)
} 

function добавитьВКонец(путь, инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь), инфа)}
var start = new Date();
function timming() {diff = (new Date() - start) / 1000;return Math.floor(diff / 3600) + 'ч:' + (Math.floor(diff / 60) - (Math.floor(diff / 3600) * 60)) + 'м:' + Math.round(diff % 60) + 'с';}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл)).split('\n')}
function дата() { var d = new Date(); var day = d.getDate();var month = d.getMonth() + 1;var year = d.getFullYear();return d.toLocaleString().replace(", ", "	")}

function ждем(s) {iim('wait seconds=' + s)}
function копиБоди() {try {var x = window.document.getElementsByTagName("body")[0].innerHTML;} catch (e) {var x = 'sex'}return x;}
function копиУрл() {return window.location.href}
 
for (q = 0; q < скокЗарегать; q++) { 
	var юзерагент = юзерагенты[randGen(1,юзерагенты.length-1)].replace(/ /gim,'<sp>')
	var вход = логин();
	var имя = логин().split(':')[0]
	var почта = логин().split(':')[1]
	var пароль = логин().split(':')[2]
	iim(`set !replaySpeed fast \n set !TIMEOUT_STEP 0 \n clear\nset !errorignore yes \n SET !USERAGENT `+юзерагент+`  \n 
	\n tab open\n 
	tab t=2\n 
	tab closeallothers	
	set !replaySpeed medium \n
	URL GOTO=https://f-zona.ru/login/login 
	set !replaySpeed medium \n 
	TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:register/register ATTR=TYPE:text&&AUTOCOMPLETE:off&&AUTOFOCUS:true&&ID:*&&CLASS:textCtrl CONTENT=`+имя+`
	TAG POS=1 TYPE=INPUT:EMAIL FORM=ACTION:register/register ATTR=TYPE:email&&ID:*&&CLASS:textCtrl&&DIR:ltr CONTENT=`+почта+`
	EVENTS TYPE=KEYPRESS SELECTOR="FORM>DL:nth-of-type(4)>DD>INPUT" KEYS="[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]"
	EVENTS TYPE=KEYPRESS SELECTOR="FORM>DL:nth-of-type(4)>DD>INPUT" CHARS=`+почта+`
	TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:register/register ATTR=TYPE:password&&AUTOCOMPLETE:off&&ID:*&&CLASS:textCtrl<SP>OptOut CONTENT=`+пароль+`
	TAG POS=2 TYPE=INPUT:PASSWORD FORM=ACTION:register/register ATTR=TYPE:password&&ID:*&&CLASS:textCtrl<SP>OptOut CONTENT=`+пароль+`
	
	EVENTS TYPE=KEYPRESS SELECTOR="FORM>FIELDSET>DL:nth-of-type(2)>DD>INPUT" KEYS="[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]"
	EVENTS TYPE=KEYPRESS SELECTOR="FORM>FIELDSET>DL:nth-of-type(2)>DD>INPUT" CHARS=`+пароль+`
	
	EVENTS TYPE=KEYPRESS SELECTOR="FORM>FIELDSET>DL:nth-of-type(3)>DD>INPUT" KEYS="[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]"	
	EVENTS TYPE=KEYPRESS SELECTOR="FORM>FIELDSET>DL:nth-of-type(3)>DD>INPUT" CHARS="adsasdsad"`+пароль+`
	
	TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ACTION:register/register ATTR=TYPE:checkbox&&CLASS:Disabler&&ID:ctrl_agree&&VALUE:1&&NAME:agree CONTENT=YES
	wait seconds=2`)
    try{window.document.querySelectorAll('.textCtrl')[4].value=имя;
    window.document.querySelectorAll('.textCtrl')[5].value=почта;
    window.document.querySelectorAll('.textCtrl')[7].value=window.document.querySelectorAll('.textCtrl')[8].value=пароль;}catch(e){}
	iim(`SET !USERAGENT `+юзерагент+` \n 	wait seconds=1
	set !replaySpeed fast \n
	TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:register/register ATTR=TYPE:submit&&ID:SubmitButton&&CLASS:button<SP>primary&&ACCESSKEY:s&&VALUE:Регистрация
	wait seconds=2
	EVENT TYPE=CLICK SELECTOR="#SubmitButton" BUTTON=0`)

	if(копиБоди().search('успешно')>-1){	
		var отчет = дата()+"	"+q+"	"+вход.replace(/\r/gim,'').replace(/\n/gim,'')+timming()+"\n"
		iimDisplay(отчет) 
		добавитьВКонец(путьСохр, отчет);
		ждем(randGen(ждатьОт,ждатьДо));
	}
	else{q--;}
	
}