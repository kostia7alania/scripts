
//НАСТРОЙКИ:
var язык           		= "ru";                  						//какому языку отдавать предпочтение
 
var апиКлюч = "6440c629b2418bf14c6ca56d0e7e21d0" //rucaptcha
var путьКаптчи = 'C:\\full\\cap.jpg'
var теги = "C:\\FULL\\RESULTS\\tags.txt"

iim=iimPlayCode;
function goMobile() {iim('url goto='+window.location.href.replace(/https:\/\/vk.com/,'https:\/\/m.vk.com'))}
function goPc() {iim('url goto='+window.location.href.replace(/https:\/\/m.vk.com/,'https:\/\/vk.com'))}
function тестНаКаптчуPC() {if(window.document.querySelectorAll(".box_title").length>0){return 1}}
function тестНаКаптчуMob() {if(window.document.querySelectorAll(".captcha_img").length>0){return 1}}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  
var start = new Date();
function timming() {diff=(new Date()-start)/1000; return 'Затрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")}
	function randGen(min,max) {return Math.floor(Math.random() * (max - min)) + min;}
	
function postingVkWallPC(text) {window.document.getElementById('post_field').focus = function(){window.document.querySelector("#post_field").style.backgroundColor='red'; window.document.getElementById('post_field').click(); iim('EVENT TYPE=KEYPRESS SELECTOR=#post_field Char="a" MODIFIERS="ctrl"\n  EVENT TYPE=KEYPRESS SELECTOR=#post_field KEY=13'); window.document.getElementById('post_field').click(); iimSet('text',text); iim('EVENTS TYPE=KEYPRESS SELECTOR=#post_field CHARS={{text}}'); iim('EVENT TYPE=CLICK SELECTOR="#send_post" BUTTON=0 \n wait seconds=3')}()}

// iim('EVENT TYPE=CLICK SELECTOR="#official" BUTTON=0 \n EVENT TYPE=CLICK SELECTOR="#official" BUTTON=0'); 

function postingVkWallMob(text) {iimDisplay('Капчта! Пытаемся с моб версии..'); window.document.querySelector('TEXTAREA.textfield').focus = function(){window.document.querySelector("TEXTAREA.textfield").style.backgroundColor='red'; window.document.querySelector('TEXTAREA.textfield').click(); iimSet('text',text); iim(`SET !REPLAYSPEED medium \n EVENT TYPE=KEYPRESS SELECTOR="TEXTAREA.textfield" Char="a" MODIFIERS="ctrl" \n EVENTS TYPE=KEYPRESS SELECTOR="TEXTAREA.textfield" CHARS={{text}}\nEVENT TYPE=CLICK SELECTOR=".cp_buttons_block>INPUT" BUTTON=0 \n wait seconds=3`);}()}

 

function мотатьВверх() {window.focus = function(){ window.scrollTo(0,0); }()}  
  
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
var распознатьКапчту = () =>{window.document.querySelector(".leftMenu__header").style.display="none"; window.document.querySelector(".layout__header").style.display="none"; мотатьВверх(); iim(`ONDOWNLOAD FOLDER=C:\\full\\ FILE=cap.jpg WAIT=YES \n TAG POS=1 TYPE=IMG ATTR=SRC:*captcha* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT \n wait seconds=1`); window.document.querySelector(".captcha_img").style.border='11px double red'; return captcha(апиКлюч,путьКаптчи)} 
 
function ввестиРаспознаннуюКаптчу(text) {window.document.querySelector("input[name='captcha_key']").focus = function(){window.document.querySelector("input[name='captcha_key']").style.backgroundColor='red'; window.document.querySelector("input[name='captcha_key']").click(); iimSet('text',text); iim(`EVENTS TYPE=KEYPRESS SELECTOR="input[name='captcha_key']" CHARS={{text}}`);}(); iim('EVENT TYPE=CLICK SELECTOR=".fi_row>INPUT" BUTTON=0');}
 
//функция по сохр каптчи и тесту превышения размера каптчи >0 бит)) =ато она всегда существовала и хз как ее уловишь по др свойствам:
// var yandexCapTest = () =>{iim('window.location.href'.replace(/https://vk.com//,/https://m.vk.com//); iim(`ONDOWNLOAD FOLDER=C:\\ FILE=cap.jpg WAIT=YES \n TAG POS=1 TYPE=IMG ATTR=SRC:*captcha* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT\n wait seconds=2`); return Components.utils.import("resource://gre/modules/FileUtils.jsm").FileUtils.File(путь).fileSize}


var tags = читать(теги).split('\n');

var txt = `Последнее обновление ссылки Мелбет: 7:DATA DATA.08.2017 (GMT +3:00)
Рабочая игровая ссылка Мелбет ----- https://melbets.ml?date=DATA.08.2017
Зеркало БК Melbet ------ http://bit.ly/melbet_zerkalo?update=DATA.08.2017
YOUTUBE: 
Всегда актуальная ссылка в описании к видео - https://youtu.be/Q9iVfpAHAUw

Ссылка на зеркало сайта букмекерской конторы MelBet (Мелбет).
Ссылки ежедневно обновляются!
Подпишись на обновление зеркала MelBet!

Зеркало сайта БК MelBet (Мелбет)

Мы постоянно следим и обновляем ссылку, чтобы она была рабочей и перенаправляла на сайт MelBet

Мы против любых блокировок ресурсов, поэтому сотрудничаем с букмекерскими конторами, чтобы предоставлять вам самые актуальные возможности для входа в свой личный кабинет. Из-за запрета официальной публикации дубликатов заблокированных сайтов, мы можем только предоставить вам их лично. Чтобы получить доступ к списку MelBet (Мелбет) зеркал сайта, перейдите по ссылке на актуальное рабочее зеркало.

В некоторых случаях зайти в личный кабинет через MelBet (Мелбет) зеркало не получается. При таких проблемах свяжитесь с нами, чтобы мы могли исправить ошибку и подсказать вам другой способ обхода блокировки.
_____________________
С уважением,
поддержка партнеров Melbet
Игровая ссылка: https://melbets.ml
Заявка на регистрацию партнера Мелбет: bit.ly/melbet_reg
Email: melbetpartners@gmail.com
Skype: melbetpartners@gmail.com
Telegram: @melbet_partners
VK: vk.com/id429054886 
================
ТЕГИ:
#зеркалоМелбетDATA.08.2017
`
 
 

var date=0; 

	for(q=0;q<101;q++){
		
					if(date>31){var date = 0;} else {date++} 
					var теги_сбор = "\n";
					var hash_tags=0;
					for(tg=0;tg<50;tg++){
						var tag_gen = tags[randGen(0,818)]
						if(randGen(1,10)<6){var tag_gen = tag_gen.replace('#','')}
						if(tag_gen.search('#')>-1){
							var hash_tags = hash_tags + 1; 
							if(hash_tags>9){
								var tag_gen = tag_gen.replace('#','');
								}
							}
						
						var теги_сбор = теги_сбор + tag_gen+", ";
						}
					var теги_сбор = теги_сбор + "это было - melbet зеркало.";
					text = txt.replace(/DATA/gim,date) + теги_сбор
					
	for(Q=0;Q<33;Q++){
		
		goPc();
		postingVkWallPC(text) 
			try{
				if(тестНаКаптчуPC()>0){
					goMobile();
					
					postingVkWallMob(text); 
					
					if(тестНаКаптчуMob()>0){
						iimDisplay('С моб тож капчта вылазит. ПОшли распознавать!'); 
						var каптча = распознатьКапчту();
						if(каптча=="ERROR"){
							alert('eror был)!')
							iim('refresh');
							}
						else {
							// alert('вводим каптчу')
							ввестиРаспознаннуюКаптчу(каптча); 
							// alert('вышли из РАСП ')
							if(тестНаКаптчуMob()>0){iimDisplay('Опять капчта вылазит. ПОшли еще раз распознавать!')}
							else{Q=99} //выходим. капчи нет!
							}
					}
				}
				else{
					var Q=99;//выходим. капчи нет!
				}
			}
			catch(e){iimDisplay('какая-то ошибка')}
	}
	}