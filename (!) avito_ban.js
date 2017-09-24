var start = new Date();
function timming() {diff=(new Date()-start)/1000; return 'Затрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function randGen(min,max) {return Math.floor(Math.random() * (max - min)) + min;}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")}
function wait(n) {iimPlayCode('wait seconds='+n)}
function покрутить() {var высотаСтр = window.document.body.scrollHeight; var текПозСтр = window.pageYOffset; for(i=0;i<getRandomInt(0,высотаСтр-текПозСтр);i++){window.scrollBy(0,1)}; for(i=0;i<getRandomInt(0,высотаСтр-текПозСтр);i++){window.scrollBy(0,-1)}}
function мотать_и_ждать(от,до){wait(от,до); покрутить(); wait(от,до);}
// function распознатьКапчу(рукапчаКлюч) { iimSet("рукапчаКлюч", рукапчаКлюч); iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\n FILTER TYPE=IMAGES STATUS=OFF\n ONDOWNLOAD FOLDER="C:\\" FILE=cap.jpg WAIT=YES\n	TAG POS=1 TYPE=IMG ATTR=SRC:https://www.avito.ru/captcha?* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT\n TAB OPEN\nTAB T=2\n URL GOTO=http://imacros2.rucaptcha.com/new/\n TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:key CONTENT={{рукапчаКлюч}}\n TAG POS=1 TYPE=INPUT:FILE ATTR=NAME:file CONTENT="C:\\cap.jpg"\n ONDIALOG POS=1 BUTTON=OK CONTENT=\n TAG POS=1 TYPE=INPUT:SUBMIT ATTR=*\n SET !EXTRACT NULL\n WAIT SECONDS=3\n TAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT\n TAB T=1\n TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=NAME:captcha CONTENT={{!EXTRACT}}'); }; 
iim=iimPlayCode;
function сменаАйпи(ип,порт) {var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);prefs.setIntPref("network.proxy.type",1); prefs.setBoolPref("network.proxy.share_proxy_settings", true); prefs.setCharPref("network.proxy.http",ип); prefs.setIntPref("network.proxy.http_port",порт)}
function вырубитьПрокси() {var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);prefs.setIntPref("network.proxy.type",1); prefs.setBoolPref("network.proxy.share_proxy_settings", false)}

//НАСТРОЙКИ
var путь_причины = "C:\\FULL\\reasons.txt";
var путь_юзерагенты = "C:\\FULL\\useragents\\Windows-Chrome.txt";		// юзерагенты в столбик в utf-8;
var путь_прокси = "C:\\FULL\\proxy.txt";					// прокси 192.168.1.1:8080 в столбик в utf-8;


var причины = читать(путь_причины).split('\n');
var юзерагенты = читать(путь_юзерагенты).split('\n');
var прокси = читать(путь_прокси).split('\n');


for(q=0;q<10;q++){
	
	
	
}
var useragent = юзерагенты[randGen(0,юзерагенты.length)] //выбираем случайный юзерагент;


var причина = причины[randGen(0,причины.length)] //выбираем случайную причину;
iimSet('num',randGen(window.document.querySelectorAll('.js-abuse-radio-btn').length)); //смотрим скок причин,чеб случайную нажать;
iim('TAG POS={{num}} TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=TYPE:radio&&CLASS:js-abuse-radio-btn')
//пишем случайную причину:
iimSet('причина',причина); iim(`set !errorignore\nSET !TIMEOUT_STEP 1 \n EVENT TYPE=CLICK SELECTOR=".js-required-field" BUTTON=0
EVENTS TYPE=KEYPRESS SELECTOR=".js-required-field" CHARS={{причина}}`)
 

var описание = window.document.querySelector('.item-description-text').innerText
iim('EVENT TYPE=CLICK SELECTOR=".js-item-phone-button_card" BUTTON=0') //открыть телефон


var причина=[];
	var i=0;
	var f1 = true //Неверная цена true или false
		if(f1){причина[i]="Уже сдано";i++}
	var f2 = true //Не дозвониться
		if(f2){причина[i]="Вымышленный объект";i++}
	var f3 = true //Контакты и ссылки в описании
		if(f3){причина[i]="Неверная цена";i++}
	var f4 = true //Контакты и ссылки в описании
		if(f4){причина[i]="Неверный адрес";i++}
	var f5 = true //Контакты и ссылки в описании
		if(f5){причина[i]="Не дозвониться";i++}
	var f6 = true //Контакты и ссылки в описании
		if(f6){причина[i]="Контакты и ссылки в описании";} 
		
		var имя = window.document.querySelector('.ban_names').value.split('\n');
		var почта = window.document.querySelector('.ban_emails').value.split('\n');
		var текст = window.document.querySelector('.ban_text').value.split('\n');
		
		причина[i]="Мошенничество с деньгами";}

	var f8 = true//Контакты и ссылки в описании
		if(f8){	var текст2 = window.document.querySelector('.ban_text2').value.split('\n');
			причина[i]="Другая причина";}
			
 
 
			
 	var proxy="off" //не юзаем проксию;
  	var proxy = 1;// x блок обявления - x прокся
	var proxy_list = $('.proxy_list').val().split(/\n/) // Список прокси:
	var w = -1; //счетчик строк проксей;
	} 
	var сохранить7 = window.document.querySelector('#сохранить7').checked; 
	if(сохранить7){ var путь = $('input[name=путь_sp]').val(); очистить (путь); }
	
	if(сохранить7){добавитьВКонец(путь,"==========Начало работы с YTB-'баннером')); ==========")}

	for(iii=0;iii<ban_list.length;iii++){ var i=iii;

		if(ban_list[i].match('_')){var a = ban_list[i].split('_'); var url = "avito.ru\\"+a[a.length - 1];}else{var a = ban_list[i].split('/'); var url = "avito.ru\\"+a[a.length - 1];}//сокращение ссылки авиты;

		if(proxy=="off"){вырубитьПрокси(); iimDisplay("Строка урл №"+(i+1)+timming()); 
			if(сохранить7){добавитьВКонец(путь,"= Строка урл №"+(i+1)+"; Без проксей;")}
				
		}else{	
			if(g<proxy.lenght){var g = g+1; }else{var w = w+1; var g = 0 }; // x обявлений - к Х проксям
			сменаАйпи(proxy_list[w].split(/:/)[0],proxy_list[w].split(/:/)[1])
			iimDisplay("Строка урл №"+(i+1)+"\nСтрока прокси №"+(w+1)+timming())
			if(сохранить7){добавитьВКонец(путь,"= Строка урл №"+(i+1)+"; Прокся: "+proxy_list[w])}
		}
			   iim('clear\n tab open\n tab t=2\n url goto='+ban_list[i]);					мотать_и_ждать(1,2)
	           iim('TAG POS=1 TYPE=BUTTON ATTR=TXT:Пожаловаться');							мотать_и_ждать(1,2)
				var рандомПричина = причина[getRandomInt(0,причина.length-1)];
					 
			 

				if(копиБоди().search("Срок размещения этого объявления истёк")!==-1){var рандомПричина = "Срок размещения этого объявления истёк"}
				else{
	try{iimSet('причина',рандомПричина);iim('TAG POS=1 TYPE=SPAN ATTR=TXT:{{причина}}')}catch(e){}
																			мотать_и_ждать(1,2)
	try{			if(рандомПричина=="Мошенничество с деньгами"){
					iimSet("имя",имя[getRandomInt(0,причина.length-1)]); 
					iimSet("почта",почта[getRandomInt(0,причина.length-1)]); 
					iimSet("текст",текст[getRandomInt(0,текст.length-1)]); 
					iim(`
EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(9)>DIV:nth-of-type(3)>DIV>DIV>FORM>DIV:nth-of-type(10)>DIV>FIELDSET>DIV>INPUT" CHARS={{имя}}
wait seconds=1
EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(9)>DIV:nth-of-type(3)>DIV>DIV>FORM>DIV:nth-of-type(10)>DIV>FIELDSET:nth-of-type(2)>DIV>INPUT" CHARS={{почта}}
wait seconds=1
EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(9)>DIV:nth-of-type(3)>DIV>DIV>FORM>DIV:nth-of-type(10)>DIV>FIELDSET:nth-of-type(3)>DIV>TEXTAREA" CHARS={{текст}}	
wait seconds=1
EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(9)>DIV:nth-of-type(3)>DIV>DIV>FORM>DIV:nth-of-type(10)>DIV>FIELDSET:nth-of-type(4)>DIV>INPUT" CHARS="asas"`)
					распознатьКапчу(apiKey)
				}
				if(рандомПричина=="Другая причина"){
					iimSet("текст",текст2[getRandomInt(0,текст2.length-1)]); 
					iim(`EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(9)>DIV:nth-of-type(3)>DIV>DIV>FORM>DIV:nth-of-type(9)>DIV>DIV>TEXTAREA" CHARS={{текст}}
						TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=NAME:comment CONTENT={{текст}}`); 	мотать_и_ждать(1,2)	
					} 
	}catch(e){alert("поймали ошибку"); var рандомПричина="Нaверная цена"; iim('TAG POS=1 TYPE=SPAN ATTR=TXT:Неверн*'); }
						try{iim(`TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Отправить`)}
			catch(e){alert("поймали ошибку"); var рандомПричина="Нaверная цена"; iim('TAG POS=1 TYPE=SPAN ATTR=TXT:Неверн*'); }
				}
		
		  

		мотать_и_ждать(2,3);
		try{if(сохранить7){добавитьВКонец(путь,"УРЛ: "+url+"; Причина - " + рандомПричина)} }catch(e){добавитьВКонец(путь,"не смогли ниче добавить чет")}
		iim(`tab t=0\n tab closeallothers`);
		 
	} 
		iimDisplay(timming())
 } 