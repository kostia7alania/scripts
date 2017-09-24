
 
 

iim = iimPlayCode;
 
function randGen(min, max) {return Math.floor(Math.random() * (max - min)) + min;}
var _c=Components,XMLHttpRequest=_c.Constructor('@mozilla.org/xmlextras/xmlhttprequest;1');
function получитьHTML (AAA){var a=XMLHttpRequest();return a.open('GET',AAA,!1),a.send(''),a.responseText}
 

// ================ настройки ============
var путьСохр = "C:\\FULL\\report.txt";	//КУДА СОХРАНЯЕМ ОТЧЕТ
 
var email = prompt('Список [UTF-8 BOM] => email:пароль', "https://m.vk.com/doc40778210_450699272")
var ждатьОт = prompt('После успешной регистрации ждать от, сек', 4)
var ждатьДо = prompt('После успешной регистрации ждать до, сек', 10)

 
var email = получитьHTML(email).split('\n')  
 

function добавитьВКонец(путь, инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь), инфа)}
var start = new Date();
function timming() {diff = (new Date() - start) / 1000;return Math.floor(diff / 3600) + 'ч:' + (Math.floor(diff / 60) - (Math.floor(diff / 3600) * 60)) + 'м:' + Math.round(diff % 60) + 'с';}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл)).split('\n')}
function дата() { var d = new Date(); var day = d.getDate();var month = d.getMonth() + 1;var year = d.getFullYear();return d.toLocaleString().replace(", ", "	")}

function ждем(s) {iim('wait seconds=' + s)}
function копиБоди() {try {var x = window.document.getElementsByTagName("body")[0].innerHTML;} catch (e) {var x = 'sex'}return x;}
  
for (q = 0; q < email.length; q++) { 
 	var вход = email[q];

	var имя = вход.split('@')[0]
	var почта = вход.split(':')[0]
	var пароль = вход.split(':')[1]
	alert(имя)
	alert(почта)
	alert(пароль)
	iim(`set !replaySpeed fast \n set !TIMEOUT_STEP 0 \n clear \n set !errorignore yes 	\n tab open\n 
	tab t=2 \n 
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
	iim(` wait seconds=1
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