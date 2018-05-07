//допилить надо когда откроют регу. Исходники сайта особо не меняли уже более года.
iim = iimPlayCode;
location = window.location;
setInterval = window.setInterval;
setInterval = window.setTimeout;
document = window.document;
console = window.console
var start=new Date();
var diff=()=>{return (new Date()-start)/1000};
var дата=()=>{var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(",	","	")};
var timing=()=>{return 'Затрачено времени: '+Math.floor(diff()/3600)+'ч:'+(Math.floor(diff()/60)-(Math.floor(diff()/3600)*60))+'м:'+Math.round(diff()%60)+'с';};

//XMLHttpRequest = window.XMLHttpRequest;
iimD = ( ...txt ) => { iimDisplay(`${дата()}:\n${txt.reduce((sum, cur) => { return sum + '\n' + cur })}\n${timing()}`); }

var apiKeyRecaptcha = "cf2fc1467ef8d1539e573d61e4cc5595";
var rucaptchaURL = "http://rucaptcha.com/in.php";


function wait(sec) {iim('WAIT SECONDS='+sec)}
function run(prog) {var prgpath=prog; var args = ['-n','6', 'google.com']; var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile); file.initWithPath(prgpath); var process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess); process.init(file); process.run(false, args, args.length)}
function копиБоди() {try{var x = window.document.getElementsByTagName("body")[0].textContent;}catch(e){var x='sex'} return x;}


var apiKeyRecaptcha = "cf2fc1467ef8d1539e573d61e4cc5595";
var rucaptchaURL = "http://rucaptcha.com/in.php";


var cc = Components.classes, ci = Components.interfaces;
var x = cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
 
 var capUrl = 'https://rucaptcha.com/in.php';
 //var base64 = document.querySelector(".captcha_img").src //.replace("data:image/png;base64,", "");
 //var data = "method=base64" + "&key=" + apiKeyRecaptcha + "&body=" + encodeURIComponent(base64);

 var postCap = (apiKeyRecaptcha, base64) => {
 
	cc=Components.classes, ci=Components.interfaces;
	var data = "method=base64" + "&key=" + apiKeyRecaptcha + "&body=" + encodeURIComponent(base64);
	var x = cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
	x.open('POST', 'http://rucaptcha.com/in.php', false);
	x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	x.send(data);
	x.responseText==`ERROR_NO_SLOT_AVAILABLE`?alert('Все работники антикаптчи заняты! Мб поможет повышение цен;)'):"";
	var captchaId = x.response.split('|')[1];
	console.log(captchaId); 	iimD(captchaId); 	console.log(x)
	return captchaId;
}
   
 getCapOtv = (...capId) => {
	for (var i=0; i<=60; i++) {
			for (capNum = 0; capNum < capId.length; capNum++) { 
				x.open("GET", "http://rucaptcha.com/res.php?key=" + apiKeyRecaptcha + "&action=get&id=" + capId[capNum], false);
				x.send();
				var resp = x.response; 
				cc = capId.map((x, ii) => {
					if(capNum==ii){return `\n[capId${ii}] ${x} -> ${resp} (цикл: ${i})`;}
					else {return `\ncapIdn${ii}: ${x}  (цикл: ${i})`;} 
				})
				iimD(cc);
				if (resp.indexOf('ERROR')!=-1) {return "ERROR"}
				if (resp.indexOf('OK')!=-1) {var cap = resp.split('|')[1]; return cap}
				else{
					iim('WAIT SECONDS=1');
				}
			}
	}
}


var getting = `\nTAG POS=1 TYPE=img ATTR=CLASS:captcha_img EXTRACT=HTM`;
var mos = `https://www.mos.ru/pgu/ru/application/dtiu/030301/#step_1`;

if(location.href==mos){	iim(`tab open \n tab t=2 \n url goto=${mos}	 ${getting}`)}
else{	iim(`url goto=${mos}	${getting}`) }
var base64 = iimGetLastExtract(1).split('src="')[1].split('"')[0].trim(); //var base64 = document.querySelector(".captcha_img").src;

var captchaId1 = postCap(apiKeyRecaptcha, base64); iim('wait seconds=0')
var captchaId2 = postCap(apiKeyRecaptcha, base64); iim('wait seconds=0')
var captchaId3 = postCap(apiKeyRecaptcha, base64);
iimD(`Каптчи отправлены на распознвание:
	captchaId1: ${captchaId1}, 
	captchaId2: ${captchaId2}, 
	captchaId3: ${captchaId3}
`)
 

iim(`TAG POS=1 TYPE=DIV ATTR=TXT:Категория<SP>заявителя:*<SP>Физическое<SP>лицо<SP>Индивидуал*
TAG POS=1 TYPE=LABEL FORM=NAME:form ATTR=TXT:Индивидуальный<SP>предприниматель
TAG POS=2 TYPE=INPUT:RADIO FORM=NAME:form ATTR=NAME:field[internal.person_type] `)
 
// Группа товаров:*
iim(`EVENT TYPE=CLICK SELECTOR="#tovar_group_chosen>A" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#tovar_group_chosen>DIV>UL>LI:nth-of-type(4)" BUTTON=0 `)

// //выбираем округ: 
iim(`EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>A>DIV>B" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV>DIV>DIV>A>DIV>B" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV>DIV>DIV>DIV>UL>LI:nth-of-type(12)" BUTTON=0`)


//Дополнительный ассортимент *
iim(`EVENT TYPE=CLICK SELECTOR="#dop_ass>DIV:nth-of-type(2)>DIV:nth-of-type(3)>DIV>LABEL" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#dop_ass>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>LABEL" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#dop_ass>DIV:nth-of-type(2)>DIV:nth-of-type(9)>DIV>LABEL" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#dop_ass>DIV:nth-of-type(2)>DIV:nth-of-type(14)>DIV>LABEL" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#dop_ass>DIV:nth-of-type(2)>DIV:nth-of-type(15)>DIV>LABEL" BUTTON=0`)



/*для теста->*/ iim(`EVENT TYPE=CLICK SELECTOR="#button_next" BUTTON=0`) //Продолжить: (для теста ! УДАЛИТЬ ПОТОМ! )
 var otvet = getCapOtv(captchaId1, captchaId2, captchaId2);//3 потока =)
 alert('КАПТЧА РАСПОЗНАНА:\n' + otvet);

// Период проведения ярмарок:*
iim(`set !errorignore yes\nEVENT TYPE=CLICK SELECTOR="#period_chosen>A" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#period_chosen>DIV>UL>LI" BUTTON=0`)


// run("C:\\enter.exe") // имитация enter
 
// Район*
iim(`EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>A" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>DIV>UL>LI:nth-of-type(11)" BUTTON=0  `)
  
 // Район* (надо допилить);
iim(`set !errorignore yes\nEVENT TYPE=CLICK SELECTOR="#yarmarka_chosen>A" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#yarmarka_chosen>DIV>UL>LI:nth-of-type(1)" BUTTON=0 `)




//Продолжить:
iim(`EVENT TYPE=CLICK SELECTOR="#button_next" BUTTON=0`)

//Торговые периоды:
iim(`EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV>DIV>DIV>A" BUTTON=0
TAG POS=1 TYPE=LABEL FORM=ID:form_element ATTR=TXT:25.08.2017-27.08.2017
TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:form_element ATTR=ID:field[internal.yarmarka.56.period_0] CONTENT=YES`)


 //Продолжить:
iim(`EVENT TYPE=CLICK SELECTOR="#button_next" BUTTON=0`)




//Сведения о ИП:
iim(`set !errorignore yes
EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(2)>DIV:nth-of-type(3)>DIV>INPUT" BUTTON=0
EVENTS TYPE=KEYPRESS SELECTOR="#step_3>FIELDSET:nth-of-type(2)>DIV:nth-of-type(3)>DIV>INPUT" CHARS="304482226400192"
EVENTS TYPE=KEYPRESS SELECTOR="#step_3>FIELDSET:nth-of-type(2)>DIV:nth-of-type(4)>DIV>INPUT" CHARS="482603651706"`)

//согласия на условия
iim(`EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(7)>DIV>DIV>LABEL" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(7)>DIV:nth-of-type(2)>DIV>LABEL" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(7)>DIV:nth-of-type(3)>DIV>LABEL" BUTTON=0`)

 
//КАПТЧА!!!!!!!!!!!!!
		  

 iim('wait seconds=10')
//КАПТЧА!!!!!!!!!!!!!


//далее:
iim('TAG POS=1 TYPE=A ATTR=ID:button_next')
 