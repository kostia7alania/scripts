var имяПроекта="tj"			//имя ТАКЖЕ отобр в сттаусе - во врем яработы;
var началоПочты = "kodi"
var конецПочты = "tj@ya.ru"		 //серединой будут цифры от 1 до 8+
var путьПроекта = "C:\\avito.ru\\tj" //=все папки должны сущестовать!;
var имяРесурсов = "ресурсы"		//задается имя папки Ресурсов
var имяАвтокаунтаРина = "текущийАкк-рег+адд.txt" //Проект\ресурсы\текущийАкк-рин.txt 
var имяПапкиОтчетов = "результаты"				//Проект\результаты 
var имяПапкиСкринов = "скрины"		//Проект\результаты\скрины(все папки должны сущестовать)
	//настройки под конкретную категорию:
 var пароль = "kostia22"
 имяАвтокаунта = "текущийАкк-рег+адд.txt"
var путьКРесурсам = "C:\\avito.ru\\tj\\ресурсы"
 var автокаунтРин = "C:\\avito.ru\\tj\\ресурсы\\текущийАкк-рин.txt"
var папкаОтчетов = "C:\\avito.ru\\tj\\результаты" 
var папкаСкринов ="C:\\avito.ru\\tj\\результаты\\скрины" 
var путьИменСТелефонами = "C:\\avito.ru\\tj\\ресурсы\\именаСТелефоном.txt"
отчетРеги="1-reg-tj-"
 		   
var отчетАдда ="2---АДД--"
 //фотки для публикации:
// var папкаФоток = g[22]							//Проект\ресурсы\фото-для-подачи (все папки должны сущестовать)
// var конецПервойФотки = g[24]
// var конецВторойФотки = g[26]
// var конецТретьейФотки = g[28]
// var конецЧетвертойФотки = g[30]
// var конецПятойФотки = g[32]
						//настройки под конкретную категорию:
							//не менять!: 
// var минЦена = g[43]
// var максЦена = g[45]
var пароль = "kostia22"
var apiSms = "xdct565ohw5cjx378fhjtxpuoxg4m5dj"						//вставить свою!!;
var рукапчаКлюч = "6440c629b2418bf14c6ca56d0e7e21d0"				//вставить свою!!;
var путьКРесурсам = путьПроекта+"\\"+имяРесурсов					//не менять!!;
// var путьККатегориям = путьКРесурсам+"\\"+категории						//не менять!!;
var автокаунт = путьКРесурсам+"\\"+имяАвтокаунта 					//не менять!!;
// var путьКПриветствиюОписания = путьКРесурсам+"\\"+приветствиеОписания	//не менять!!;
// var папкаСФоткамиДляПодачи = путьКРесурсам+"\\"+папкаФоток+"\\"		//не менять!!;
// var путьКОписанию = путьКРесурсам+"\\"+описание						//не менять!!;
var имяОтчетаАдда = отчетАдда+имяПроекта+".txt"						//не менять!!;
var имяОтчетаРеги = отчетРеги+имяПроекта+".txt"						//не менять!!;
var папкаОтчетов = путьПроекта+"\\"+имяПапкиОтчетов					//не менять!!;
var папкаСкринов = папкаОтчетов+"\\"+имяПапкиСкринов				//не менять!!;
function гетСтроки() {iimSet("автокаунт",автокаунт); iimPlayCode("wait seconds=2\n TAB CLOSEALLOTHERS\n tab open\n tab open\n SET !DATASOURCE {{автокаунт}}\nSET !DATASOURCE_LINE 1\n SET !EXTRACT NULL\n SET !EXTRACT {{!COL1}}"); return  Number(iimGetLastExtract(1)); }
var строка = гетСтроки();
var почта = началоПочты+строка+конецПочты;
function genUserAg() {iimSet("строка",строка); iimPlayCode("SET !REPLAYSPEED fast\nCMDLINE !DATASOURCE useragents.txt\n SET !DATASOURCE_COLUMNS 1\nSET !DATASOURCE_LINE {{строка}}\n SET !EXTRACT {{!COL1}}"); return iimGetLastExtract(1);};
var useragent = genUserAg();
function backTab() {iimPlayCode('SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB T=0');}

var start = new Date();
var diff = new Date() - start;
iimDisplay(имяПроекта+ ': Входим в админку+Меняем айпи. Строка: '+строка+". Код выполняется уже: " + diff/1000 +" секунд" );
try {
var modemKostia = ('SET !REPLAYSPEED medium\n SET !TIMEOUT_STEP 55\nSET !EXTRACT NULL\n ONLOGIN USER=admin PASSWORD=admin\n URL GOTO=192.168.1.1\n URL GOTO=192.168.1.1\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\n URL GOTO=http://192.168.1.1/#broadband.globals\nwait seconds=2\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=NO\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nwait seconds=2\n URL GOTO=http://192.168.1.1/#broadband.globals\n wait seconds=2\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=5\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=YES\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nwait seconds=21\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT')
function testModem1(ip1){x=ip1.split('.')[0]; y=ip1.split('.')[1]; ip1=x+"."+y; return ip1};
function testModem2(ip2){x=ip2.split('.')[0];y=ip2.split('.')[1]; ip2=x+"."+y; return ip2};
do{ iimPlayCode(modemKostia);ip1=iimGetLastExtract(1);ip2=iimGetLastExtract(2)} while((testModem1(ip1)==testModem2(ip2))||(testModem2(ip2)=="#EANF#"))	
var diff = new Date() - start; 
iimDisplay(имяПроекта+": айпи сменили; ип1: "+ip1+"; IP2: "+ip2+"-- терь го РЕГАТЬ!;. Строка: "+строка+". Код выполняется уже: " + diff/1000+" секунд" );	
} catch (r) {
var prgpath="C:\\r.vbs";    // путь до исполняемого файла, не забываем про двойные косые в пути ...
// ... (экранирование обратного слеша "\\" при записи пути до exe-файла в OS Windows)
var args = ['-n','6', 'google.com'];    // аргументы, все разделены пробелом. т.е. строка bla.exe -open "c:\\program files\\ololo\\ololo.txt" ...
// ... будет иметь аргументы var args = ['-open','"c:\\program', 'files\\ololo\\ololo.txt"'];
var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
file.initWithPath(prgpath);
var process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
process.init(file);
process.run(false, args, args.length);
iimPlayCode('wait seconds=60')
}


iimDisplay(имяПроекта+ ': айпи сменили: -- терь го РЕГАТЬ!;. Строка: '+строка);	
		
function ввестиПароль() { backTab(); iimSet("пароль",пароль); iimPlayCode("TAB T=2\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:password CONTENT={{пароль}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:confirm CONTENT={{пароль}}\n TAB T=1"); };

function распознатьКапчу() { backTab(); iimSet("рукапчаКлюч", рукапчаКлюч); iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\n TAB T=2\n FILTER TYPE=IMAGES STATUS=OFF\n ONDOWNLOAD FOLDER="C:\\" FILE=cap.jpg WAIT=YES\n	TAG POS=1 TYPE=IMG ATTR=SRC:https://m.avito.ru/captcha?* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT\n TAB T=3\n URL GOTO=http://imacros2.rucaptcha.com/new/\n TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:key CONTENT={{рукапчаКлюч}}\n TAG POS=1 TYPE=INPUT:FILE ATTR=NAME:file CONTENT="C:\\cap.jpg"\n ONDIALOG POS=1 BUTTON=OK CONTENT=\n TAG POS=1 TYPE=INPUT:SUBMIT ATTR=*\n SET !EXTRACT NULL\n WAIT SECONDS=3\n TAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT\n TAB T=2\n TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:captcha CONTENT={{!EXTRACT}}\n TAB T=3'); };

function получитьКод() {iimSet('useragent',useragent); iimPlayCode('SET !ERRORIGNORE YES\nSET !USERAGENT {{useragent}}\nTAB T=2\n TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Получить<SP>код\n EVENT TYPE=KEYPRESS SELECTOR="HTML>BODY>SECTION>FORM>DIV:nth-of-type(26)>DIV>DIV>INPUT" KEY=13\nEVENT TYPE=KEYPRESS SELECTOR="HTML>BODY>SECTION>FORM>DIV:nth-of-type(26)>DIV>DIV>INPUT" CHAR=" "\nTAB T=1'); backTab();};

function кликПоЗарегаться() {iimSet("useragent", useragent); iimPlayCode("SET !ERRORIGNORE YES\nSET !USERAGENT {{useragent}}\nTAB T=2\n TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*\n wait seconds=5\n"); var s=копиБоди(); backTab(); return s };

function setOperationOver() {backTab(); iimSet('x',кодОперации); iimSet('apiSms',apiSms); iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nTAB T=0\nSET !TIMEOUT_STEP 3\nURL GOTO=http://api.sms-reg.com/setOperationOver.php?tzid={{x}}&apikey={{apiSms}}\nwait seconds=2')};

function setOperationUsed() {backTab(); iimSet('x',кодОперации); iimSet('apiSms',apiSms); iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nTAB T=0\nSET !TIMEOUT_STEP 3\nURL GOTO=http://api.sms-reg.com/setOperationUsed.php?tzid={{x}}&apikey={{apiSms}}\nwait seconds=2')};

function setOperationRevise() {backTab(); iimSet('x',кодОперации); iimSet('apiSms',apiSms); iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nTAB T=0\nSET !TIMEOUT_STEP 3\nURL GOTO=http://api.sms-reg.com/setOperationRevise.php?tzid={{x}}&apikey={{apiSms}}\nwait seconds=2')}

function setOperationOk() {iimSet('x',кодОперации); iimSet('apiSms',apiSms); iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nTAB T=0\nSET !TIMEOUT_STEP 3\nURL GOTO=http://api.sms-reg.com/setOperationOk.php?tzid={{x}}&apikey={{apiSms}}\nwait seconds=2')}

function setReady() {iimSet('x',кодОперации); iimSet('apiSms',apiSms); iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nTAB T=0\nSET !TIMEOUT_STEP 3\nURL GOTO=http://api.sms-reg.com/setReady.php?tzid={{x}}&apikey={{apiSms}}\nwait seconds=2')}

function getState() {iimSet('x',кодОперации); iimSet('apiSms',apiSms); iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nTAB T=0\nSET !TIMEOUT_STEP 3\nURL GOTO=http://api.sms-reg.com/getState.php?tzid={{x}}&apikey={{apiSms}}\nwait seconds=2'); return копиБоди(); }

function гетКодОперации(){iimSet('apiSms',apiSms); iimPlayCode('url goto = http://api.sms-reg.com/getNum.php?country=ru&service=avito&apikey={{apiSms}}'); x=копиБоди(); x=x.split(':')[2]; x=x.split('}')[0]; x=x.split('"')[1]; iimDisplay(имяПроекта+ ': кодОперации = '+x); return x; }

function копиБоди() {var x = window.document.getElementsByTagName("body")[0].textContent; return x;}

function copyPastTelNum(){backTab(); var tel=копиБоди(); tel=tel.split(':')[2]; tel=tel.split(',')[0]; iimSet("телефон",tel); iimPlayCode("SET !REPLAYSPEED fast\ntab t=2\n TAG POS=1 TYPE=INPUT:TEL FORM=NAME:NoFormName ATTR=ID:phone CONTENT={{телефон}}\n TAB T=1");}

function смсКопиИподтвердить() {backTab(); sms=копиБоди(); sms=sms.split(':')[2]; sms=sms.split(',')[0]; sms=sms.split('.')[0];sms=sms.split('"')[2]; if(sms=="") {var sms=копиБоди(); sms=sms.split(':')[2]; sms=sms.split(',')[0]; sms=sms.split('.')[0]; sms=sms.split('"')[1];}; if(String(sms)=="undefined") {var sms=копиБоди(); sms=sms.split(':')[2]; sms=sms.split(',')[0]; sms=sms.split('.')[0]; sms=sms.split('"')[1];}; iimSet("sms",sms); iimSet("useragent", useragent); iimPlayCode("SET !REPLAYSPEED fast\nSET !USERAGENT {{useragent}}\nSET !ERRORIGNORE YES\nTAB T=2\n TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:code CONTENT={{sms}}\n TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Подтвердить\n wait seconds = 5\n set !extract {{!URLCURRENT}}\n"); var s=копиБоди(); backTab(); return s;}

function заполнитьАвитоДанными(){backTab(); iimSet('почта', почта); iimSet('useragent', useragent); iimPlayCode(`SET !ERRORIGNORE YES\nclear\n SET !USERAGENT {{useragent}}\nTAB T=2\n URL GOTO=https://m.avito.ru/profile/\n URL GOTO=https://m.avito.ru/profile/registration\nwait seconds=3\nEVENT TYPE=CLICK SELECTOR="#name" BUTTON=0\EVENTS TYPE=KEYPRESS SELECTOR="#email" KEYS="[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]"\n EVENTS TYPE=KEYPRESS SELECTOR="#email" CHARS="{{почта}}"\nCMDLINE !DATASOURCE names4reg.txt\n SET !DATASOURCE_COLUMNS 1\n SET !VAR1 EVAL("var s=Math.floor(Math.random()*100 + 1); s;")\n SET !DATASOURCE_LINE {{!VAR1}}\n SET имя {{!COL1}}\n EVENT TYPE=CLICK SELECTOR="#name" BUTTON=0\nEVENTS TYPE=KEYPRESS SELECTOR="#name" KEYS="[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]"\nEVENTS TYPE=KEYPRESS SELECTOR="#name" CHARS="{{имя}}"\n tab t=1`);};
	
var пауза = {сек5: "wait seconds=5", сек10: "wait seconds=10", сек20: "wait seconds=20", сек30: "wait seconds=30"}

sms6:
for(var smsREG=1;smsREG<333;smsREG++) //создадим ФОР,Чтоб ТОЛЬКО удержать тупорылого смс-рега в рельсах!!;	
{	iimDisplay(имяПроекта+ ': Итерация имени smsREG сейчас на шаге повтора:'+smsREG+'; Аккаунт №'+строка);
	кодОперации=гетКодОперации(); //GETing телефонa;
	заполнитьАвитоДанными();
	iimPlayCode(пауза.сек5)	
	//var тестСтатусаНомера = getState();
	if(getState().search( /TZ_INPOOL/ )!=-1) {iimPlayCode(пауза.сек20)}
	if(getState().search( /TZ_INPOOL/ )!=-1) {iimPlayCode(пауза.сек30)}
	if(getState().search( /TZ_INPOOL/ )!=-1) {continue sms6}	
	if(getState().search( /TZ_NUM_PREPARE/ )==-1) {continue sms6}//тест $$+свободность номеров//++защита от WARNING_NO_NUMS
	iimDisplay(имяПроекта+ ': Телефон получен! Идем дальше! Сейчас акк= '+строка)
	//переносим телефон на авито
	copyPastTelNum();//КОНЕЦ GETTing'a;
	cap6:
	for(var форКапча=1;форКапча<11;форКапча++)
	{	ввестиПароль(); 
		iimDisplay(имяПроекта+ ": ща будем капчу распознавать"); 
		распознатьКапчу();
		if(копиБоди().search( /ERROR/ )!=-1) {continue cap6} //переразгадывать77;
		iimDisplay(имяПроекта+ ": капча распознана без телег! кликаем по Зарегаться! Сейчас акк= "+строка); //ERROR_IMAGE_TYPE_NOT_SUPPORTED") "ERROR_CAPTCHA_UNSOLVABLE
		backTab(); backTab();
		 
		var общийТест=кликПоЗарегаться();		
/////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//			
		if(общийТест.search( /Вы уже зарегистрированы на Avito/ )!=-1) {форКапча=11; smsREG=333; break}//идем к сл акку;
		if(общийТест.search( /Пользователь с таким адресом уже существует/ )!=-1) {форКапча=11; smsREG=333; break}//идем к сл акку
		if(общийТест.search( /Номер подтверждён в аккаунте/ )!=-1) {setOperationUsed(); continue sms6} //берем др номер;
		if(общийТест.search( /код подтверждения/ )!=-1) {continue cap6} //школьник с капчей подставу организовал;;
		{	iimDisplay(имяПроекта+ ": все ок, тел подошел с "+smsREG+", а капча с "+форКапча+" -раза--идем дальше:все идеально;");  
			
			if(форКапча!=11)
			{	форКапча=11 //чеб не возвращались к капчам;
				получитьКод();		setReady(); 	iimPlayCode(пауза.сек30);			
			smstest4:
			for(var z=1;z<3;z++)   //для 2х итераций неверных ввода смс-кода;
			{	smstest5:	//=пошла первая проверка кода-активации.......
				for (var jj=1; jj<30; jj++) 					
				{	iimPlayCode(пауза.сек20)
					var смсТест = getState();  //запрос смс-ответа
					iimDisplay(имяПроекта+": ждем смс-код; Проверка №"+jj+"(30). Попытка №"+z+"(2). Сейчас регаем акк: "+строка);
					if(смсТест.search( /TZ_NUM_WAIT/ )!=-1) continue smstest5;
					if(смсТест.search( /TZ_NUM_ANSWER/ )==-1) 
					{  //cсмс не пришел c 1 иль со 2-го разов!!;
						iimDisplay(имяПроекта+ ": НЕВЕРНЫЙ КОД АКТИВАЦИИ. Попытка №"+z+"(2). Сейчас на акке:"+строка);
						setOperationRevise(); //=уточнение смс-кода;
						continue smstest4 //берем вторую и последнюю попытку смс-теста;						
					}
					else
					{	//смс пришел с 1 или 2-го раза!!;
						iimDisplay(имяПроекта+ ": Смс пришел с проверки №"+jj+"(30). Попытки №"+z+"(2). Сейчас регаем акк: "+строка);
						 //код прищел-копируем смс
						//проверка правильности смски:
						if(смсКопиИподтвердить().search( /Проверьте ваш почтовый ящик/ )!=-1) 
						{	//зарегались! УРЯ!; зови журналюг;;;
							iimDisplay(имяПроекта+ ": все ок - журналистов в студию! Зарегали акк: "+строка);
							jj=30; z=2; smsREG=333; setOperationOk(); break;
						}
						else //  смс не верный! = запрашиваем уточнение:
						{	iimDisplay(имяПроекта+ ": все ок - журналистов в студию! Зарегали акк: "+строка);
							setOperationRevise(); //=уточнение смс-кода;
							continue smstest4 //берем вторую и последнюю попытку смс-теста;	
						}; 
					};
				}	
			}			
			}
			setOperationOver();
		} // КОНЕЦ TRUE-варианта-глобальной проверки ссылки; отсюда выход безТЕЛЕЖНЫЙ;
		 //конец else ГЛОБАЛА -e.g.- if(window.location.href=="https://m.avito.ru/profile/registration/phone_confirm")
//////////GLOBALend//////////GLOBALend//////////GLOBALend//////////GLOBAL//////////GLOBAL//////////GLOBAL
	} //конец КАПЧИ!;
//здесь можно ничего не писать - тут будут обрабатываться в соотве со зн. smsREG:либо заново(макс 11 раз за раз),либо выход из етого цикла;
}; //ета скобка закрывает sms6: for  --для рельс smsREG --она будет грешников возращать на место!;
	
//LOVE!
iimDisplay(имяПроекта+ ": Го ОТЧЕТ по РЕГу делать на акк №: "+строка);
//СборОтчета:
iimSet("useragent", useragent);  iimSet("строка",строка); iimSet("папкаСкринов",папкаСкринов);iimSet("папкаОтчетов",папкаОтчетов); iimSet("имяОтчетаРеги",имяОтчетаРеги);

//отчетРЕГИ:
iimPlayCode("SET !REPLAYSPEED fast\n SET !USERAGENT {{useragent}}\ntab t=2\nURL GOTO=https://m.avito.ru/profile/settings\nwait seconds=2\nSCREENSHOT TYPE=Page FOLDER={{папкаСкринов}} FILE={{строка}}---1-рег---{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}].jpg\n SET !EXTRACT #{{строка}},<sp>{{!NOW:dd.mm.yyyy}}<sp>[{{!NOW:hh:nn}}]\n SAVEAS TYPE=EXTRACT FOLDER={{папкаОтчетов}} FILE={{имяОтчетаРеги}}\nTab t=1")

iimDisplay(имяПроекта+ ": Го добавлять объяву ужеж в акк №: "+строка);
iimSet('почта',почта); iimSet('пароль',пароль);
iimSet("useragent", useragent); iimSet("папкаСкринов",папкаСкринов);iimSet("папкаОтчетов",папкаОтчетов); iimSet("имяОтчетаРеги",имяОтчетаРеги);
iimSet('строка',строка);iimSet('путьКРесурсам',путьКРесурсам);iimSet('имяАвтокаунта',имяАвтокаунта); iimSet('автокаунт',автокаунт); 
iimPlayCode(`				SET !REPLAYSPEED fast
					'=========== смена юзерагента:
							SET !USERAGENT {{useragent}}
							SET !ERRORIGNORE YES		
							URL GOTO=https://m.avito.ru/profile
			EVENT TYPE=CLICK SELECTOR="HTML>BODY>SECTION>FORM>DIV>DIV:nth-of-type(2)>DIV>INPUT" BUTTON=0
			EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>SECTION>FORM>DIV>DIV:nth-of-type(2)>DIV>INPUT" CHARS={{почта}}
			EVENT TYPE=CLICK SELECTOR="HTML>BODY>SECTION>FORM>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>INPUT" BUTTON=0
			EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>SECTION>FORM>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>INPUT" CHARS={{пароль}}			
			EVENT TYPE=CLICK SELECTOR="HTML>BODY>SECTION>FORM>DIV:nth-of-type(3)>DIV>DIV>INPUT" BUTTON=0			
							SET !REPLAYSPEED medium
						URL GOTO=https://m.avito.ru/add
						URL GOTO=https://m.avito.ru/add	
						URL GOTO=https://m.avito.ru/add
'предложение услуг:
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:category_id CONTENT=%114
'кат=ремонт и строительство
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_716 CONTENT=%10208
						
						set !extract null
	'Ген МЕТРО:				
						SET randGen EVAL("var randomNumber=Math.floor(Math.random()*(1-0+1)+1); randomNumber;")
						SET testRand EVAL("var s='{{randGen}}'; if(s>'1'){'all_podmsk.txt'} else { 'all_metros.txt' };")
						SET !DATASOURCE_DELIMITER ,
						CMDLINE !DATASOURCE {{testRand}}
						SET !DATASOURCE_LINE {{строка}}
		'ген метрая
						CMDLINE !DATASOURCE {{testRand}}
						SET !DATASOURCE_LINE {{строка}}
						set город {{!COL1}}
						set метроИлиГород {{!COL2}} 
						
	'ген ПОдкатЕгорию конкр РАБот: 15712-рем кв; 15704-отделка; 15710-рем кухни; 15711-котедж; 15708-ванна; 15706=офис	
	
						SET randGen EVAL("var randomNumber=Math.floor(Math.random()*(6-1+1)+1); randomNumber;")
						SET testRand EVAL("var s='{{randGen}}'; if(s=='1'){'15712'} else { '2' };")
						SET testRand EVAL("var s='{{randGen}}'; var old='{{testRand}}'; if(s=='2'){'15704'} else { old };")
						SET testRand EVAL("var s='{{randGen}}'; var old='{{testRand}}'; if(s=='3'){'15710'} else { old };")
						SET testRand EVAL("var s='{{randGen}}'; var old='{{testRand}}'; if(s=='4'){'15711'} else { old };")
						SET testRand EVAL("var s='{{randGen}}'; var old='{{testRand}}'; if(s=='5'){'15708'} else { old };")
						SET testRand EVAL("var s='{{randGen}}'; var old='{{testRand}}'; if(s=='6'){'15706'} else { old };")
  						set подкатегория {{testRand}}

						'город:
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:region_id CONTENT=%{{город}}
						'метро (или гоород -в области)
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:metro_id CONTENT=%{{метроИлиГород}}
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:metro_id CONTENT=%{{метроИлиГород}}
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:location_id CONTENT=%{{метроИлиГород}}
						'подкатегория
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_1378 CONTENT=%{{подкатегория}}
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:params[1378] CONTENT=%{{подкатегория}}
						
		'описание + заголовок:						
						SET !DATASOURCE_DELIMITER ;
						CMDLINE !DATASOURCE smsREG-описание-tj.txt
						SET !DATASOURCE_LINE {{строка}}
						set описание {{!COL1}}
						
						CMDLINE !DATASOURCE smsREG-заголовки-tj.txt
						SET !DATASOURCE_LINE {{строка}}
						set заголовок {{!COL1}}
						
						TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:title CONTENT={{заголовок}}
						TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=ID:description CONTENT={{описалово}}
						
			' ценник:
						SET ценник EVAL("var randomNumber=Math.floor(Math.random()*(2222-1444+1)+1444); randomNumber;")
						TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:price CONTENT={{ценник}}
			'КАРТИНКА:
						SET !REPLAYSPEED medium
						TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=ID:image_upload CONTENT=C:\\avito.ru\\tj\\фото-для-подачи\\{{строка}}.jpg		
						CLICK X=734 Y=363
						wait seconds=7
			'клик по ПРОДОЛЖИТЬ:
						TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*
						TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:service_no
						TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:service_premium CONTENT=NO
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:service_vip CONTENT=NO
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:service_highlight CONTENT=NO
						TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*
			'скрин+отчет:
							URL GOTO=https://m.avito.ru/profile
							wait seconds=1
							TAG POS=1 TYPE=A ATTR=HREF:https://m.avito.ru/profile/item/*
							wait seconds=1
							SET !EXTRACT #{{строка}},<sp>{{!NOW:dd.mm.yyyy}}<sp>[{{!NOW:hh:nn}}],<sp>{{!URLCURRENT}}
							'сохраняем все ето дело:
							SAVEAS TYPE=EXTRACT FOLDER=C:\\avito.ru\\tj\\результаты FILE=#2---добавляшки-tj.txt
							SCREENSHOT TYPE=Page FOLDER=C:\\avito.ru\\tj\\результаты\\скрины FILE={{строка}}---2добавляшки-tj-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}].jpg
 							wait seconds = 11
'=====================GOOOOOOOOOOOOOOOOOOOOOOOOOOO

SET максЦена 5555
SET минЦена 5
						URL GOTO=https://m.avito.ru/add
						'продукты питания:
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:category_id CONTENT=%82
						set !extract null
	'Ген МЕТРО:				
						SET randGen EVAL("var randomNumber=Math.floor(Math.random()*(1-0+1)+1); randomNumber;")
						SET testRand EVAL("var s='{{randGen}}'; if(s>'1'){'all_podmsk.txt'} else { 'all_metros.txt' };")
						SET !DATASOURCE_DELIMITER ,
						CMDLINE !DATASOURCE {{testRand}}
						SET !DATASOURCE_LINE {{строка}}
		'ген метра
						CMDLINE !DATASOURCE {{testRand}}
						SET !DATASOURCE_LINE {{строка}}
						set город {{!COL1}}
						set метроИлиГород {{!COL2}} 
				'город:
						SET !REPLAYSPEED MEDIUM
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:region_id CONTENT=%{{город}}
				'метро (или гоород -в области)
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:metro_id CONTENT=%{{метроИлиГород}}
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:metro_id CONTENT=%{{метроИлиГород}}
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:location_id CONTENT=%{{метроИлиГород}}	
		'описание + заголовок:						
						SET !DATASOURCE_DELIMITER ;
						CMDLINE !DATASOURCE smsREG-описание-чурчхела.txt
						SET !DATASOURCE_LINE {{строка}}
						set описание {{!COL1}}						
						CMDLINE !DATASOURCE smsREG-заголовки-чурчхела.txt
						SET !DATASOURCE_LINE {{строка}}
						set заголовок {{!COL1}}
						
						TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:title CONTENT={{заголовок}}
						TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=ID:description CONTENT={{описание}}
			' ценник:
						SET ценник EVAL("var randomNumber=Math.floor(Math.random()*({{максЦена}}-{{минЦена}}+1)+{{минЦена}}); randomNumber;")
						TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:price CONTENT={{ценник}}

			'КАРТИНКА:
						SET !REPLAYSPEED medium
						TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=ID:image_upload CONTENT=C:\\avito.ru\\ch\\фото-для-подачи-ch\\{{строка}}.jpg		

						wait seconds=7
						CLICK X=734 Y=363
			'клик по ПРОДОЛЖИТЬ:
						TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*
						TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:service_no
						TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:service_premium CONTENT=NO
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:service_vip CONTENT=NO
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:service_highlight CONTENT=NO
						TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*
			'скрин+отчет:
							URL GOTO=https://m.avito.ru/profile
							wait seconds=1
							TAG POS=1 TYPE=A ATTR=HREF:https://m.avito.ru/profile/item/*
							wait seconds=1
							SET !EXTRACT #{{строка}},<sp>{{!NOW:dd.mm.yyyy}}<sp>[{{!NOW:hh:nn}}],<sp>{{!URLCURRENT}}
							'сохраняем все ето дело:
							SAVEAS TYPE=EXTRACT FOLDER=C:\\avito.ru\\ch\\результаты FILE=#2---добавляшки-ЧУЧЪЕЛА.txt
							SCREENSHOT TYPE=Page FOLDER=C:\\avito.ru\\ch\\результаты\\скрины FILE={{строка}}---2добавляшки-ЧУЧЪЕЛА-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}]-чуч.jpg
 							wait seconds = 10				
		'-----СУХОФРУКТЫ!)!))!)::: погнали!!!!!!!:
						URL GOTO=https://m.avito.ru/add
						'продукты питания:
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:category_id CONTENT=%82
						set !extract null
	'Ген МЕТРО:				
						SET randGen EVAL("var randomNumber=Math.floor(Math.random()*(1-0+1)+1); randomNumber;")
						SET testRand EVAL("var s='{{randGen}}'; if(s>'1'){'all_podmsk.txt'} else { 'all_metros.txt' };")
						SET !DATASOURCE_DELIMITER ,
						CMDLINE !DATASOURCE {{testRand}}
						SET !DATASOURCE_LINE {{строка}}
		'ген метра
						CMDLINE !DATASOURCE {{testRand}}
						SET !DATASOURCE_LINE {{строка}}
						set город {{!COL1}}
						set метроИлиГород {{!COL2}} 
				'город:
						SET !REPLAYSPEED MEDIUM
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:region_id CONTENT=%{{город}}
				'метро (или гоород -в области)
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:metro_id CONTENT=%{{метроИлиГород}}
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:metro_id CONTENT=%{{метроИлиГород}}
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:location_id CONTENT=%{{метроИлиГород}}	
		'описание + заголовок:
						
						SET !DATASOURCE_DELIMITER ;
						CMDLINE !DATASOURCE smsREG-описание-сухофрукты.txt
						SET !DATASOURCE_LINE {{строка}}
						set описание {{!COL1}}
						
						CMDLINE !DATASOURCE smsREG-заголовки-сухофрукты.txt
						SET !DATASOURCE_LINE {{строка}}
						set заголовок {{!COL1}}
						
						TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:title CONTENT={{заголовок}}
						TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=ID:description CONTENT={{описание}}
			' ценник:
						SET ценник EVAL("var randomNumber=Math.floor(Math.random()*({{максЦена}}-{{минЦена}}+1)+{{минЦена}}); randomNumber;")
						TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:price CONTENT={{ценник}}

			'КАРТИНКА:
						SET !REPLAYSPEED medium
						TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=ID:image_upload CONTENT=C:\\avito.ru\\ch\\фото-для-подачи-df\\{{строка}}.jpg		
						wait seconds=7
						CLICK X=734 Y=363						
			set !EXTRACT NULL
		TAG POS=1 TYPE=DIV ATTR=CLASS:popup-content extract=txt
	set ошибкаЗагрузкиФото {{!EXTRACT}}
			'клик по ПРОДОЛЖИТЬ:
						TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*
						TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:service_no
						TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:service_premium CONTENT=NO
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:service_vip CONTENT=NO
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:service_highlight CONTENT=NO
						TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*
			'скрин+отчет:
							URL GOTO=https://m.avito.ru/profile
							wait seconds=1
							TAG POS=1 TYPE=A ATTR=HREF:https://m.avito.ru/profile/item/*
							wait seconds=1
							SET !EXTRACT #{{строка}},<sp>{{!NOW:dd.mm.yyyy}}<sp>[{{!NOW:hh:nn}}],<sp>{{!URLCURRENT}}
							'сохраняем все ето дело:
							SAVEAS TYPE=EXTRACT FOLDER=C:\\avito.ru\\ch\\результаты FILE=#2---добавляшки-СУХОФРУКтЫ.txt
							SCREENSHOT TYPE=Page FOLDER=C:\\avito.ru\\ch\\результаты\\скрины FILE={{строка}}---2добавляшки-СУХОФРУКтЫ-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}]-чуч.jpg
 							wait seconds = 10			
				
		'каунт++:
							ADD строка 1
							SET !EXTRACT NULL
							SET !EXTRACT {{строка}}
							FILEDELETE NAME={{автокаунт}}
							SAVEAS TYPE=EXTRACT FOLDER={{путьКРесурсам}} FILE={{имяАвтокаунта}}						
	
'КАРТИНКА:
						SET !REPLAYSPEED medium
						TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=ID:image_upload CONTENT=C:\\avito.ru\\ch\\фото-для-подачи-df\\{{строка}}.jpg		
						wait seconds=7
						CLICK X=734 Y=363						
			set !EXTRACT NULL
		TAG POS=1 TYPE=DIV ATTR=CLASS:popup-content extract=txt
	set ошибкаЗагрузкиФото {{!EXTRACT}}
	
	set !EXTRACT {{ошибкаЗагрузкиФото}}	
'//LOVE!`)
	
iimPlayCode('URL GOTO=imacros://run/?m=GO/4-FINAL-RENAME-PC.js')


//iimPlayCode('URL GOTO=imacros://run/?m=GO/6-FINAL-RENAME-kv.js')