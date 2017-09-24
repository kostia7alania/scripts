				//общие настройки:
var имяПроекта="kv"							//имя ТАКЖЕ отобр в сттаусе - во врем яработы;
var началоПочты = "kodi"
var конецПочты = "kv@ya.ru"				//серединой будут цифры от 1 до 8+ почта = началоПочты+строка+конецПочты;


var путьПроекта = "C:\\avito.ru\\kv"
//задается путьПроекта 		(все папки должны сущестовать)
var имяРесурсов = "ресурсы"							//Проект\ресурсы 		//задается имя папки Ресурсов
var имяАвтокаунта = "текущийАкк-рег+адд.txt"		//Проект\ресурсы\текущийАкк-рег+адд.txt			 
var имяПапкиОтчетов = "результаты"						//Проект\результаты	 	//имя папки результатов
var отчетРеги = "1--–РЕГ-"							//Проект\результаты\отчетРеги.txt	
var отчетАдда = "2---АДД-"						//Проект\результаты\отчетАдда.txt		
var имяПапкиСкринов = "скрины"				//Проект\результаты\скрины	(все папки должны сущестовать)
						//фотки для публикации:
var папкаФоток = "фото-для-подачи"						//Проект\ресурсы\фото-для-подачи (все папки должны сущестовать)
var конецПервойФотки = "гостинная\\"
var конецВторойФотки = "ванна\\"
var конецТретьейФотки = "кухня\\"
						//настройки под конкретную категорию:
var приветствиеОписания = "приветствие-описания.txt"					//Проект\ресурсы\приветствие-описания.txt
var описание = "описание.txt"							//Проект\ресурсы\описание.txt			 
var объекты = "объекты.txt"								//Проект\ресурсы\объекты.txt			
							//не менять!: 
var минЦена = "1850"
var максЦена = "2100"
var пароль = "kostia22"
var apiSms = "xdct565ohw5cjx378fhjtxpuoxg4m5dj"						//вставить свою!!;
var рукапчаКлюч = "6440c629b2418bf14c6ca56d0e7e21d0"				//вставить свою!!;
var путьКРесурсам = путьПроекта+"\\"+имяРесурсов					//не менять!!;
var путьКОбъектам = путьКРесурсам+"\\"+объекты						//не менять!!;
var автокаунт = путьКРесурсам+"\\"+имяАвтокаунта 					//не менять!!;
var путьКПриветствиюОписания = путьКРесурсам+"\\"+приветствиеОписания	//не менять!!;
var папкаСФоткамиДляПодачи = путьКРесурсам+"\\"+папкаФоток+"\\"		//не менять!!;
var путьКОписанию = путьКРесурсам+"\\"+описание						//не менять!!;
var имяОтчетаАдда = отчетАдда+имяПроекта+".txt"						//не менять!!;
var имяОтчетаРеги = отчетРеги+имяПроекта+".txt"						//не менять!!;
var папкаОтчетов = путьПроекта+"\\"+имяПапкиОтчетов					//не менять!!;
var папкаСкринов = папкаОтчетов+"\\"+имяПапкиСкринов				//не менять!!;


function гетСтроки() {iimSet("автокаунт",автокаунт); iimPlayCode("wait seconds=5\n TAB CLOSEALLOTHERS\n tab open\n tab open\n CMDLINE !DATASOURCE {{автокаунт}}\n SET !DATASOURCE_COLUMNS 1\n SET !DATASOURCE_LINE 1\n SET !EXTRACT {{!COL1}}"); return Number(iimGetLastExtract(1));}
var строка = гетСтроки();
var почта = началоПочты+строка+конецПочты;

function genUserAg() {iimSet("строка",строка); iimPlayCode("SET !REPLAYSPEED fast\nCMDLINE !DATASOURCE useragents.txt\n SET !DATASOURCE_COLUMNS 1\nSET !DATASOURCE_LINE {{строка}}\n SET !EXTRACT {{!COL1}}"); return iimGetLastExtract(1);};
var useragent = genUserAg();
function backTab() {iimPlayCode('SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB T=0');}
iimDisplay(имяПроекта+ ': : Входим в админку+Меняем айпи. Строка: '+строка);

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




//iimSet('строка',строка); iimSet('началоПочты',началоПочты); iimSet('имяПроекта',имяПроекта);  iimPlay("=ya-reg.iim")
var diff = new Date() - start; 
iimDisplay(имяПроекта+": айпи сменили; ип1: "+ip1+"; IP2: "+ip2+"--и зарегали почту!= терь го РЕГАТЬ!;. Строка: "+строка+". Код выполняется уже: " + diff/1000+" секунд" );



function ввестиПароль() { backTab(); iimSet("пароль",пароль); iimPlayCode("TAB T=2\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:password CONTENT={{пароль}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:confirm CONTENT={{пароль}}\n TAB T=1"); };

function распознатьКапчу() { backTab(); iimSet("рукапчаКлюч", рукапчаКлюч); iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\n TAB T=2\n FILTER TYPE=IMAGES STATUS=OFF\n ONDOWNLOAD FOLDER="C:\\" FILE=cap.jpg WAIT=YES\n	TAG POS=1 TYPE=IMG ATTR=SRC:https://m.avito.ru/captcha?* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT\n TAB T=3\n URL GOTO=http://imacros2.rucaptcha.com/new/\n TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:key CONTENT={{рукапчаКлюч}}\n TAG POS=1 TYPE=INPUT:FILE ATTR=NAME:file CONTENT="C:\\cap.jpg"\n ONDIALOG POS=1 BUTTON=OK CONTENT=\n TAG POS=1 TYPE=INPUT:SUBMIT ATTR=*\n SET !EXTRACT NULL\n WAIT SECONDS=3\n TAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT\n TAB T=2\n TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:captcha CONTENT={{!EXTRACT}}\n TAB T=3'); };

function получитьКод() {iimSet('useragent',useragent); iimPlayCode('SET !ERRORIGNORE YES\nSET !USERAGENT {{useragent}}\nTAB T=2\nCLICK X=380 Y=227\n TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Получить<SP>код\n CLICK X=380 Y=227\n EVENT TYPE=KEYPRESS SELECTOR="HTML>BODY>SECTION>FORM>DIV:nth-of-type(26)>DIV>DIV>INPUT" KEY=13\nEVENT TYPE=KEYPRESS SELECTOR="HTML>BODY>SECTION>FORM>DIV:nth-of-type(26)>DIV>DIV>INPUT" CHAR=" "\nTAB T=1'); backTab();};

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

function заполнитьАвитоДанными(){backTab(); iimSet('почта', почта); iimSet('useragent', useragent); iimPlayCode(`SET !ERRORIGNORE YES\nclear\n SET !USERAGENT {{useragent}}\nTAB T=2\nURL GOTO=https://m.avito.ru/ \n URL GOTO=https://m.avito.ru/profile/registration \n wait seconds=3 \n EVENT TYPE=CLICK SELECTOR="#name" BUTTON=0\EVENTS TYPE=KEYPRESS SELECTOR="#email" KEYS="[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]"\n EVENTS TYPE=KEYPRESS SELECTOR="#email" CHARS="{{почта}}"\nCMDLINE !DATASOURCE names4reg.txt\n SET !DATASOURCE_COLUMNS 1\n SET !VAR1 EVAL("var s=Math.floor(Math.random()*100 + 1); s;")\n SET !DATASOURCE_LINE {{!VAR1}}\n SET имя {{!COL1}}\n EVENT TYPE=CLICK SELECTOR="#name" BUTTON=0\nEVENTS TYPE=KEYPRESS SELECTOR="#name" KEYS="[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]"\nEVENTS TYPE=KEYPRESS SELECTOR="#name" CHARS="{{имя}}"\n tab t=1`);};
	
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
iimSet("useragent", useragent); iimSet("строка",строка); iimSet("папкаСкринов",папкаСкринов);iimSet("папкаОтчетов",папкаОтчетов); iimSet("имяОтчетаРеги",имяОтчетаРеги);

//отчетРЕГИ:
iimPlayCode("SET !REPLAYSPEED fast\n SET !USERAGENT {{useragent}}\ntab t=2\nURL GOTO=https://m.avito.ru/profile/settings\nwait seconds=2\nSCREENSHOT TYPE=Page FOLDER={{папкаСкринов}} FILE={{строка}}---1-рег---{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}].jpg\n SET !EXTRACT #{{строка}},<sp>{{!NOW:dd.mm.yyyy}}<sp>[{{!NOW:hh:nn}}]\n SAVEAS TYPE=EXTRACT FOLDER={{папкаОтчетов}} FILE={{имяОтчетаРеги}}\nTab t=1")

iimDisplay(имяПроекта+ ": Го добавлять объяву ужеж в акк №: "+строка);
iimSet('путьКПриветствиюОписания',путьКПриветствиюОписания); iimSet("строка",строка);
iimPlayCode('SET !DATASOURCE {{путьКПриветствиюОписания}}\n SET !DATASOURCE_LINE {{строка}}\n set !EXTRACT {{!COL1}}'); 
var началоОписалова = iimGetLastExtract(1);

iimSet('путьКОписанию',путьКОписанию); iimSet("строка",строка);
iimPlayCode('SET !DATASOURCE_DELIMITER ;\nCMDLINE !DATASOURCE {{путьКОписанию}}\nSET !DATASOURCE_LINE {{строка}}\nset !EXTRACT {{!COL1}}');
var конецОписалова = iimGetLastExtract(1);

iimSet('почта',почта); iimSet('пароль',пароль);
iimSet("useragent",useragent); iimSet("строка",строка);
iimSet("папкаСкринов",папкаСкринов);
iimSet("папкаОтчетов",папкаОтчетов);
iimSet("имяОтчетаАдда",имяОтчетаАдда);
iimSet('папкаСФоткамиДляПодачи',папкаСФоткамиДляПодачи); 
iimSet('конецПервойФотки',конецПервойФотки); iimSet('конецВторойФотки',конецВторойФотки); iimSet('конецТретьейФотки',конецТретьейФотки); 
iimSet('началоОписалова',началоОписалова); 
iimSet('конецОписалова',конецОписалова); 
iimSet('путьКОбъектам',путьКОбъектам);
iimSet('минЦена',минЦена); iimSet('максЦена',максЦена)
iimSet("автокаунт",автокаунт);
iimSet("имяАвтокаунта",имяАвтокаунта);
iimSet("путьКРесурсам",путьКРесурсам);
//здесь АДД ставить!
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
						WAIT SECONDS=5
						'квартира
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:category_id CONTENT=%24
						'сдам:
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_201 CONTENT=%1060	
						'кол-во комнат
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_550 CONTENT=%5703
						'тип дома:
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_503 CONTENT=%5249					
						'ПОСУТОЧНО:
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_504 CONTENT=%5257			
						'москва:
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:region_id CONTENT=%637640
					   'Генерируем АДРЕС и связанный с ним ид_МЕТРО:	
						SET !REPLAYSPEED fast			
						CMDLINE !DATASOURCE {{путьКОбъектам}}
						SET !DATASOURCE_LINE {{строка}}
						set площадь {{!COL1}}						
						set этаж {{!COL2}}
						add этаж 1
						set этажей {{!COL3}}
						add этажей 1
						set метро {{!COL4}}
						set словамиМетро {{!COL5}}
						set адрес {{!COL6}}						
						set описалово {{началоОписалова}}
						add описалово {{словамиМетро}}
						add описалово {{конецОписалова}}
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:metro_id CONTENT=%{{метро}}
						TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:param_493 CONTENT={{адрес}}			
						TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:* ATTR=ID:param_493 CONTENT={{адрес}}						
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_501 CONTENT={{этаж}}
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_502 CONTENT={{этажей}}
						TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:param_500 CONTENT={{площадь}}
						URL GOTO=javascript:window.scrollBy(0,777)
						SET !REPLAYSPEED medium
						'клик на ДОП ПАРАМЕТРЫ:
						TAG POS=1 TYPE=SPAN ATTR=TXT:Дополнительные<SP>параметры
						'Генерируем диваны и спальни
						SET кроватей EVAL("var randomNumber=Math.floor(Math.random()*2 + 3); randomNumber;")
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_1514_0_1351 CONTENT={{кроватей}}
						'кол-во спальных мест
						SET спальныйМест EVAL("var randomNumber=Math.floor(Math.random()*3 + 3); randomNumber;")
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_1349_0_1350 CONTENT={{спальныйМест}}
					'пошли птички:	
						SET !REPLAYSPEED fast						
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1352_0_1353_15264 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1352_0_1353_15265 CONTENT=YES	
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1352_0_1353_15266 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1354_0_1355_15267 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1354_0_1355_15268 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1354_0_1355_15269 CONTENT=YES
					SET рандом EVAL("var d=\\"YES\\"; var s=Math.floor(Math.random()*2+1); if(s==\\"2\\"){s=\\"NO\\";s;} else d;")
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1354_0_1355_15270 CONTENT=рандом
					SET рандом EVAL("var d=\\"YES\\"; var s=Math.floor(Math.random()*2+1); if(s==\\"2\\"){s=\\"NO\\";s;} else d;")
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1354_0_1355_15271 CONTENT=рандом
					SET рандом EVAL("var d=\\"YES\\"; var s=Math.floor(Math.random()*2+1); if(s==\\"2\\"){s=\\"NO\\";s;} else d;")
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1356_0_1357_15273 CONTENT=рандом
					SET рандом EVAL("var d=\\"YES\\"; var s=Math.floor(Math.random()*2+1); if(s==\\"2\\"){s=\\"NO\\";s;} else d;")
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1354_0_1355_15272 CONTENT=рандом
					'камин:
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1356_0_1357_15274 CONTENT=NO
					SET рандом EVAL("var d=\\"YES\\"; var s=Math.floor(Math.random()*2+1); if(s==\\"2\\"){s=\\"NO\\";s;} else d;")
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1356_0_1357_15275 CONTENT=рандом
					SET рандом EVAL("var d=\\"YES\\"; var s=Math.floor(Math.random()*2+1); if(s==\\"2\\"){s=\\"NO\\";s;} else d;")
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1356_0_1357_15276 CONTENT=рандом
					SET рандом EVAL("var d=\\"YES\\"; var s=Math.floor(Math.random()*2+1); if(s==\\"2\\"){s=\\"NO\\";s;} else d;")
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1358_0_1359_15281 CONTENT=рандом
					SET рандом EVAL("var d=\\"YES\\"; var s=Math.floor(Math.random()*2+1); if(s==\\"2\\"){s=\\"NO\\";s;} else d;")
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1358_0_1359_15280 CONTENT=рандом
					SET рандом EVAL("var d=\\"YES\\"; var s=Math.floor(Math.random()*2+1); if(s==\\"2\\"){s=\\"NO\\";s;} else d;")
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1358_0_1359_15279 CONTENT=рандом
					
						URL GOTO=javascript:window.scrollBy(0,1234)
						SET !REPLAYSPEED medium
			'ОПИСАНИЕ:
						TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=ID:description CONTENT={{описалово}}
			' ценник:
						SET ценник EVAL("var randomNumber=Math.floor(Math.random()*({{максЦена}}-{{минЦена}}+1)+{{минЦена}}); randomNumber;")
						TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:price CONTENT={{ценник}}
			'КАРТИНКА:
						TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=ID:image_upload CONTENT={{папкаСФоткамиДляПодачи}}{{конецПервойФотки}}{{строка}}.jpg
						wait seconds=2
						TAG POS=1 TYPE=BUTTON ATTR=TXT:OK
						CLICK X=734 Y=363
						TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=ID:image_upload CONTENT={{папкаСФоткамиДляПодачи}}{{конецВторойФотки}}{{строка}}.jpg
						wait seconds=2
						TAG POS=1 TYPE=BUTTON ATTR=TXT:OK
						CLICK X=734 Y=363
						TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=ID:image_upload CONTENT={{папкаСФоткамиДляПодачи}}{{конецТретьейФотки}}{{строка}}.jpg
						wait seconds=10
						TAG POS=1 TYPE=BUTTON ATTR=TXT:OK
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
							SAVEAS TYPE=EXTRACT FOLDER={{папкаОтчетов}} FILE={{имяОтчетаАдда}}
							SCREENSHOT TYPE=Page FOLDER={{папкаСкринов}} FILE={{строка}}---2добавляшки-кв-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}].jpg
 							wait seconds = 11							
						'каунт++:
						set counter {{строка}}
						ADD counter 1
						SET !EXTRACT {{counter}}
						FILEDELETE NAME={{автокаунт}}
						SAVEAS TYPE=EXTRACT FOLDER={{путьКРесурсам}} FILE={{имяАвтокаунта}}
 set !EXTRACT {{ошибкаЗагрузкиФото}}						
'//LOVE!
`)
if(iimGetLastExtract(0)!="#EANF#") {iimSet('строка',строка); iimSet('фото-для-подачи','C:\avito.ru\kv\ресурсы\фото-для-подачи\гостинная'); iimSet('фото-для-подачи2','C:\avito.ru\kv\ресурсы\фото-для-подачи\кухня'); iimSet('фото-для-подачи3','C:\avito.ru\kv\ресурсы\фото-для-подачи\ванна'); iimPlay("GO//go-reload-picture.iim") } //передобавить фотку!;

//iimPlayCode('URL GOTO=imacros://run/?m=GO/4-FINAL-RENAME-PC.js')

iimPlayCode('URL GOTO=imacros://run/?m=GO/2-FINAL-RENAME-TJ.js')


//iimPlayCode("URL GOTO=imacros://run/?m=GO/6-FINAL-RENAME-kv.js");