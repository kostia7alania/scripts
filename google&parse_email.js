function profileDir() {a=Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("ProfD", Components.interfaces.nsIFile).path.split('\\'); return a[a.length-1]}
try{var профиль = profileDir()}catch(e){var профиль=1} //название профиля от 1 до колличества `, у переменной "запросы";
//НАСТРОЙКИ:
var ссылка_на_гугл 		= 	"http://google.ge"							// здесь все понятно);
var обработанные		= 	"C:\\FULL\\RESULTS\\GOOGLE\\old_base.txt";	// база уже обработанных сайтов
var путьСохр       		= 	"C:\\FULL\\RESULTS\\GOOGLE\\result_base.txt";	//КУДА СОХРАНЯЕМ ОТЧЕТ
var путьСохр_bad       	= 	"C:\\FULL\\RESULTS\\GOOGLE\\base_bad.txt";	//КУДА СОХРАНЯЕМ не тематич
var путьСохр_load_error = 	"C:\\FULL\\RESULTS\\GOOGLE\\load_error.txt";	//КУДА СОХРАНЯЕМ не загруженные стр;
var скок_стр_парсить  	= 	2;											//сколько страниц парсить с 1 запроса;
var начинатьСКлюча 		=	0;
// var ключи 				=	"C:\\FULL\\RESULTS\\GOOGLE\\ключи\\"+профиль+"-ключи.txt"//  
 
var simialarweb_url		= "https://www.similarweb.com/website/"		// здесь все понятно);

  
var запросы =  
/// = ключи для браузера #1:
[`Стратегия ставок на футбол рейтинг топ букмекеров
Ставки на спорт рейтинг топ букмекерские конторы
Лучшая стратегия ставок на спорт
Лучшая стратегия ставок на футбол
Лучшая стратегия ставок азартные игры
Лучшие букмекерские конторы  топ рейтинг`,			
/// = ключи для браузера #2:
`Топ спортивные ставки рейтинг
Прогнозы на спорт рейтинг топ букмекерские конторы
Прогнозы на футбол рейтинг топ букмекеров
Стратегия ставок на спорт рейтинг топ букмекеров
рейтинг ставок на спорт
Лучшие Тотализаторы топ рейтинг букмекерские конторы
Лучшая букмекерская контора
Рейтинг букмекерских контор
Ставки букмекеров топ рейтинг`,		

/// = ключи для браузера #3:
`список лучших букмекерских контор топ
букмекерские конторы для ставок рейтинг топ
рейтинг букмекерских контор мира
рейтинг букмекерских контор россии
лучшие букмекерские конторы мира
рейтинг букмекерских контор 2017
Лучшие топ букмекерских контор СНГ рейтинг
Лучшие топ букмекерских контор России рейтинг`,

/// = ключи для браузера #4:
`Лучшие топ букмекерских контор Украины рейтинг
Лучшие топ букмекерских контор Азербайджана рейтинг
Лучшие топ букмекерских контор Белорусии рейтинг
Лучшие топ букмекерских контор Узбекистан рейтинг
Лучшие топ букмекерских контор Эстонии рейтинг
Лучшие топ букмекерских контор Литвы рейтинг
Лучшие топ букмекерских контор Польши рейтинг`,

/// = ключи для браузера #5:
`Лучшие топ букмекерских контор Латвии рейтинг
Лучшие топ букмекерских контор Грузии рейтинг
Лучшие топ букмекерских контор Молдовии рейтинг
Лучшие топ букмекерских контор Армении рейтинг
Лучшие топ букмекерских контор Киргизии рейтинг
Лучшие топ букмекерских контор Таджикистана рейтинг
Лучшие топ букмекерских контор Туркмении рейтинг`]
 
 
var ключи = запросы[профиль-1].replace(/ /gim,'<sp>').split('\n') ; // запросы (разделитель - столбик)
 
var проверить = 
`Контакт
Реклам
О нас
Обратная связь
Связаться
Связь`
.split('\n');

var погуглить = `Контакты
Реклама`
.split('\n');

var ключ_тест1 = `букмекер
bookmak
bet 
бетинг
бетт
бк 
 бк`
.toUpperCase()
.split('\n');

var ключ_тест2 = 
`ставк
каппер
прогнозы на спорт`
.toUpperCase()
.split('\n');

var ключ_тест3 = 
`новости спорт
новости футбол`
.toUpperCase()
.split('\n');

var стопСлова = `кредит
ипотека`
.toUpperCase()
.split('\n'); // =слова,которые на сайте не должно быть!;



 
var минусСлова=" "
for(w=0;w<стопСлова.length;w++){var минусСлова = минусСлова+" -"+стопСлова[w];}
  
var таймаут = "set !TIMEOUT_STEP 0\n"

//САЙТЫ:
var прокси_сайты = "196.19.8.188:8000" 		//SYC IPv4 Seychelles
var прокси_сайты = "196.18.13.97:8000" 		//SYC IPv4 Seychelles
var прокси_сайты = "196.19.8.188:8000" 		//SYC IPv4 Seychelles
var прокси_сайты = "196.19.8.188:8000" 		//SYC IPv4 Seychelles
var прокси_сайты = "196.19.8.188:8000" 		//SYC IPv4 Seychelles

//GOOGLE
var прокси_гугл = "104.238.190.248:15785" 	//FR IPv6 работает до 10.09.2017
var прокси_гугл = "217.29.53.85:20378" 		//RU IPv6
var прокси_гугл = "104.238.190.248:15785" 	//FR
var прокси_гугл = "104.238.190.248:15785" 	//FR
var прокси_гугл = "104.238.190.248:15785" 	//FR
var прокси_гугл = "108.61.251.204:13756" 	//AU  IPv6 работает до 11.09.2017



var prox = 'PROXY ADDRESS='+прокси_сайты+'\n'
var prox_g = 'PROXY ADDRESS='+прокси_гугл+'\n'


var заголовок_выдачи 	=	".g>div>div>h3>a" 
iim = iimPlayCode;
function добавитьВКонец(путь, инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь), инфа)}
var start = new Date();
function timming() {diff = (new Date() - start) / 1000;return Math.floor(diff / 3600) + 'ч:' + (Math.floor(diff / 60) - (Math.floor(diff / 3600) * 60)) + 'м:' + Math.round(diff % 60) + 'с';}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл)).split('\n')}
function читать2(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function дата() { var d = new Date(); var day = d.getDate();var month = d.getMonth() + 1;var year = d.getFullYear();return d.toLocaleString().replace(", ", "	")}
function randGen(min, max) {return Math.floor(Math.random() * (max - min)) + min;}
function ждем(s) {iim('wait seconds=' + s)}
function копиБоди() {try {var x = window.document.getElementsByTagName("body")[0].innerHTML;} catch (e) {var x = 'sex'}return x;}
function копиУрл() {return window.location.href}
function тестНаКаптчу() {if (window.document.querySelector('body').innerHTML.search('recaptcha') > 0) {alert("=пройди каптчу!;");iimPlayCode('wait seconds=25')}}
function удалитьСлово(a,b) {window.document.body.innerHTML=window.document.body.innerHTML.replace(RegExp( a, "gim" ), b)}
function unique(arr) { var obj = {};for (var i = 0; i < arr.length; i++) {  var str = arr[i];obj[str] = true; }// запомнить строку в виде свойства объекта
	return Object.keys(obj); } // или собрать ключи перебором для IE8- //<<===оставить тока уник эл-ты массива;

function verifyEmail(mail) {return window.document.querySelector('html').innerHTML.match(/[a-zA-Z0-9\.\-]+@[a-zA-Z0-9-]{2,33}\.[a-z]{2,10}/g).join(', ')}
function verifyEmail2(почта) {var a=window.document.querySelector('html').innerHTML.match(/[a-zA-Z0-9\.\-]+@[a-zA-Z0-9-]{2,33}\.[a-z]{2,10}/g);
for(y=0;y<a.length;y++){if(a[y].search('.jpg')>0){a[y]=''}}; 
for(y=0;y<a.length;y++){if(a[y].search('.gif')>0){a[y]=''}}; 
for(y=0;y<a.length;y++){if(a[y].search('.png')>0){a[y]=''}}; 
for(y=0;y<a.length;y++){if(a[y].search('.jpeg')>0){a[y]=''}}; 
for(y=0;y<a.length;y++){if(a[y].search('.tif ')>0){a[y]=''}}; 
var почта = почта.split(' ');
// alert(почта.length)
for(z=0;z<почта.length;почта++){ if(почта[z]==a[y]){a[y]=''}} try{}catch(e){alert(e)} return unique(a)} // alert(почта[z]+"\n"+a[y])

// var ключи = читать2(ключи).replace(/ /gim,'<sp>').split('\n') ; // запросы (разделитель - столбик)

function setProxy(ip,port) {var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);prefs.setIntPref("network.proxy.type", 1);prefs.setBoolPref("network.proxy.share_proxy_settings", true);prefs.setCharPref("network.proxy.http", ip);prefs.setIntPref("network.proxy.http_port", port)}
var отчет = дата() +"	Стартуем! \n"
//добавитьВКонец(путьСохр, отчет);// =запарило уже!;
 
// setProxy(прокси_ип,прокси_порт);


 for(q=начинатьСКлюча;q<ключи.length;q++){
	iim('set !replayspeed fast\n clear \n tab closeallothers \n')
	// setProxy(прокси_ип,прокси_порт)
	iim(prox_g+'url goto='+ссылка_на_гугл+'/preferences')
	var запрос = ключи[q]+минусСлова; iimSet('запрос',запрос)
// 'TAG POS=1 TYPE=A ATTR=ID:abar_button_opt&&HREF:/preferences
// 'TAG POS=1 TYPE=A ATTR=HREF:/preferences?hl=de&prev=*&&ROLE:menuitem&&CLASS:_VJq*
	iim(`ONDIALOG POS=1 BUTTON=OK CONTENT=
	TAG POS=1 TYPE=DIV ATTR=CLASS:goog-slider-thumb
	EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(5)>FORM>DIV>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>DIV>DIV:nth-of-type(2)" BUTTON=0
	EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(5)>FORM>DIV>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>DIV" KEYS="[39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39]"
	EVENT TYPE=click SELECTOR="#form-buttons>DIV" BUTTON=0
	EVENT TYPE=CLICK SELECTOR="#lst-ib" BUTTON=0`)
	var запрос = ключи[q]+минусСлова
	iimSet('запрос',запрос)
	iim('EVENTS TYPE=KEYPRESS SELECTOR="#lst-ib" CHARS={{запрос}}')
	iim('TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:tsf ATTR=NAME:btnK')
 

    try{тестНаКаптчу()}catch(e){} 

	for(zz=0;zz<скок_стр_парсить;zz++){
		try{var заголовок = window.document.querySelectorAll(заголовок_выдачи)}catch(e){заголовок = ""}
		for (var i = 0; i < заголовок.length; i++) {
			try{var домен1 = заголовок[i].href; var домен1_титл = заголовок[i].innerText }catch(e){var домен1_титл = домен1="fall"}
			try{var домен=домен1.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/? >#]/)[0]}catch(e){}
			if(читать2(обработанные).search(домен)>0){//alert("есть в старой базе")
						}
					else{// alert('нету в старой базе')
						// var бу2=читать2(путьСохр);alert(бу2.search(url))//отладка
						if(читать2(путьСохр).search(домен)>0){	// alert("есть в NEW базе")
							}
						else{
							if(читать2(путьСохр_bad).search(домен)>0){	// alert("есть в bad базе")
							}
							else{ // alert('нету в списке пропущенных сайтов;')
							if(читать2(путьСохр_load_error).search(домен)>0){	// alert("есть в не прогруженных сайтах")
							}
							else{
							var тематика = "" 
							if (iim(prox+'TAB OPEN \n TAB T=2 \n TAB OPEN \n TAB T=3 \n URL GOTO=' + домен) > 0) {
								ждем(3);
								try{var боди = копиБоди().toUpperCase()}catch(e){боди=e};
								// alert(боди)
								for(cop=0;cop<ключ_тест1.length;cop++){if(боди.search(ключ_тест1[cop])>0){var тематика = тематика+ключ_тест1[cop]+"; "}}
									if(тематика!==""){
										for(cop=0;cop<ключ_тест2.length;cop++){if(боди.search(ключ_тест2[cop])>0){var тематика = тематика+ключ_тест2[cop]+"; "}}
										for(cop=0;cop<ключ_тест3.length;cop++){if(боди.search(ключ_тест3[cop])>0){var тематика = тематика+ключ_тест3[cop]+"; "}}
										for(cop=0;cop<стопСлова.length;cop++){if(боди.search(стопСлова[cop])>0){var тематика = ""}}
									}
									
								//alert(тематика)
								var тайтл = window.document.title;
								if(тематика!==""){
									var почта = ""
									try{var почта = verifyEmail2(почта)+" "} catch (e) {}
									var гуглить = 1; test = [];	//clean test
									for (iii = 0; iii < проверить.length; iii++) {
										test[iii]= "";
										удалитьСлово('mailto:',"");
										if (iim(prox+таймаут + 'TAG POS=1 TYPE=A ATTR=TXT:' + проверить[iii].replace(' ', '<sp>') + "*") > 0) {
										try {var почта=почта+verifyEmail2(почта)+" "} catch (e) {};											
											ждем(3);
											try{if(копиБоди().search('<textarea')>0){		
													test[iii] = test[iii]+копиУрл()+' (textAR) ';	гуглить = 0;
													}else{
														if (копиБоди().search('<form')>0){test[iii] = test[iii]+копиУрл()+' (form) ';	гуглить = 0;
														}else{
															if(копиБоди().search('<input')>0){
																test[iii] = test[iii]+копиУрл()+' (input) ';	гуглить = 0;
															}
														}
													}
											} catch(e){	test[iii] = '';}
											
										} else {test[iii] = '';}
									}
									google = null;google = [];
									if (гуглить > 1) {
										for (ii = 0; ii < погуглить.length; ii++) {
											iim(prox_g+'url goto='+ссылка_на_гугл);
											iim(prox_g+'EVENT TYPE=CLICK SELECTOR="#lst-ib" BUTTON=0')
											iim(prox_g+'EVENTS TYPE=KEYPRESS SELECTOR="#lst-ib" CHARS='+'site:' + домен + '<sp>' + погуглить[ii])
											iim(prox_g+'TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:tsf ATTR=NAME:btnK')
											try{тестНаКаптчу()}catch(e){}
											try {
												var заголовок2 = window.document.querySelectorAll(заголовок_выдачи)
												google[ii] = '';google[ii] = заголовок2[0].innerText + "	" + заголовок2[0].href; //заголовок и ссылка 1 выдачи
											} catch (e) {google[ii] = "хз	X3"}
											ждем(3)
										}
									} else {google[0]="";google[1]=""} 
									
									
										iim(prox+'set !errorignore yes\n SET !TIMEOUT_PAGE 22 \n url goto='+simialarweb_url+домен);
											// try{тестНаКаптчу()}catch(e){}
											
try{var визитов = window.document.querySelectorAll('.engagementInfo-valueNumber')[0].innerText;}catch(e){визитов="хз"}
try{	if(window.document.querySelectorAll('.engagementInfo-value>.websitePage-relativeChange--up').length>0){
		 var визитов_дельта = " (+"+window.document.querySelectorAll('.engagementInfo-value>.websitePage-relativeChange--up')[0].innerText}
	else{var визитов_дельта = " (-"+window.document.querySelectorAll('.engagementInfo-value>.websitePage-relativeChange--up')[0].innerText+")"}
		 var визитов = визитов+визитов_дельта+")"
}catch(e){}
try		{var категория = window.document.querySelectorAll('.rankingItem-subTitle')[2].innerText}catch(e){категория="хз"}
try{var страна1 = window.document.querySelectorAll('.country-name')[0].innerText+" ("+window.document.querySelectorAll('.traffic-share-valueNumber')[0].innerText+")"}catch(e){страна1="хз"}
try{var страна2 = window.document.querySelectorAll('.country-name')[1].innerText+" ("+window.document.querySelectorAll('.traffic-share-valueNumber')[1].innerText+")"}catch(e){страна2="хз"}
try{var страна3 = window.document.querySelectorAll('.country-name')[2].innerText+" ("+window.document.querySelectorAll('.traffic-share-valueNumber')[2].innerText+")"}catch(e){страна3="хз"}
try{var страна4 = window.document.querySelectorAll('.country-name')[3].innerText+" ("+window.document.querySelectorAll('.traffic-share-valueNumber')[3].innerText+")"}catch(e){страна4="хз"}
try{var страна5 = window.document.querySelectorAll('.country-name')[4].innerText+" ("+window.document.querySelectorAll('.traffic-share-valueNumber')[4].innerText+")"}catch(e){страна5="хз"} 
										 
								
					try{ 
								var отчет = дата()+"	"+домен + "	"+тайтл+"	"+unique(почта.split(' ')).join(' ')+"	";
								var отчет = отчет+timming()+"	"+визитов+"	"+категория+"	"+страна1+"	"+страна2+"	"+страна3+"	"+страна4+"	"+страна5+"	ключ="+ключи[q].replace(/<sp>/gim,' ')+"	"+q+"|"+zz+"|"+i+"	"
										// for(t=0;t<test.length;t++){var отчет = отчет+test[t]+"	"}
										for(t=0;t<google.length;t++){var отчет = отчет+google[t]+"	"}
										var отчет = отчет+unique(test).join(' ');
										 
									}catch(e){var отчет = дата() + "	"+q+"|"+zz+"|"+i+"	" + домен + "	ошибка->"+e+"	"+timming()}
								
									var отчет = отчет.replace(/Rating@Mail.ru/gim, '').replace(/username@gmail.com/gim, '').replace(/undefined/gim,'🛠').replace(/jivosite@chat.jivosite/gim,'').replace(/example@mymail.com/gim,'').replace(RegExp("example@example.com","gim"),'')+тематика + "\n"
									добавитьВКонец(путьСохр, отчет);
									
								}else{
									var отчет = дата() + "	"+q+"|"+zz+"|"+i+"	" + домен+"	"+тайтл+"	"+домен1_титл+"	"+домен1+"	"+timming();
									добавитьВКонец(путьСохр_bad, отчет+ "\n");
								// alert('1отчет')
								}
							
							} else {
									var отчет = дата() + "	"+q+"|"+zz+"|"+i+"	" + домен+"	"+домен1_титл+"	"+домен1+"	"+timming() + "	==не загрузился=="+ "\n";
									добавитьВКонец(путьСохр_load_error, отчет);
									}
iim('set !replayspeed fast \n  set !errorignore yes\n set !timeout_tag 0\n tab t=0 \n tab t=0 \n tab t=0 \n tab closeallothers')
							iimDisplay(отчет)
							// alert('второй отчет')
							}
						}
					}
			}
		}
	 iimDisplay("Циклы:		"+q+"|"+zz+"\nСтраница:		"+(zz+1)+"\nКлюч:		"+ключи[q].replace(/<sp>/gim,' ')+"\n"+timming());
	// setProxy(прокси_ип,прокси_порт) 
	if(iim(prox_g+'set !timeout_tag 1\nEVENT TYPE=MOUSEDOWN SELECTOR="#pnnext>SPAN" BUTTON=0')>0){ //след.стр существует,продолжаем.
	if(iim(prox_g+'EVENT TYPE=CLICK SELECTOR="#pnnext>SPAN" BUTTON=0')>0){}else{iim(prox_g+'EVENT TYPE=CLICK SELECTOR="#pnnext>SPAN" BUTTON=0')} //если гугл будет тормозить,жмем еще раз;
				}else{
					  iimDisplay("УСЕ с етим ключем!\nСтраниц спаршено: "+(zz+1)+"\nЭто был ключ: "+ключи[q]+timming()); zz=30; 
				  }
		ждем(3);тестНаКаптчу();
		iim('set !replayspeed fast \n  set !errorignore yes\n set !timeout_tag 0\n tab t=0 \n tab t=0 \n tab t=0 \n tab closeallothers')
	}
}