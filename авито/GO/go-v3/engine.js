var start = new Date(); 
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
iimPlayCode("TAB CLOSEALLOTHERS\n tab open\ntab open")
//общие настройки:
iimPlayCode('SET !REPLAYSPEED fast\nCMDLINE !DATASOURCE C:\\авито-переменные\\имяПроекта.txt\nSET !DATASOURCE_LINE 1\nset !extract {{!COL1}}');
	var имяПроекта=iimGetLastExtract(1);
iimPlayCode('SET !REPLAYSPEED fast\nCMDLINE !DATASOURCE C:\\авито-переменные\\smsRegApiKey.txt\nSET !DATASOURCE_LINE 1\nset !extract {{!COL1}}');
	var smsRegApiKey=iimGetLastExtract(1);
iimSet("имяПроекта",имяПроекта); iimPlayCode("SET !DATASOURCE {{имяПроекта}}-текущийАкк.txt\nSET !DATASOURCE_LINE 1\nSET !EXTRACT {{!COL1}}");
	var строка = Number(iimGetLastExtract(1)) //задаем № тек.акк реги;

iimSet('строка',строка);iimSet('имяПроекта',имяПроекта);
iimPlayCode(`CMDLINE !DATASOURCE {{имяПроекта}}-почты.txt\nSET !DATASOURCE_LINE {{строка}}\n SET !extract {{!COL1}}\n ADD !extract {{!COL2}}\n`);
var почта = iimGetLastExtract(1); var пароль = iimGetLastExtract(2);

//USERAGENT:
iimSet("строка",строка); iimPlayCode("SET !REPLAYSPEED fast\nCMDLINE !DATASOURCE useragents.txt\nSET !DATASOURCE_LINE {{строка}}\nSET !EXTRACT {{!COL1}}"); var useragent = iimGetLastExtract(1);
//меняем IP;
try {
var modemKostia = ('SET !REPLAYSPEED medium\n SET !TIMEOUT_STEP 55\nSET !EXTRACT NULL\n ONLOGIN USER=admin PASSWORD=admin\n URL GOTO=192.168.1.1\n URL GOTO=192.168.1.1\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\n URL GOTO=http://192.168.1.1/#broadband.globals\nwait seconds=2\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=NO\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nwait seconds=2\n URL GOTO=http://192.168.1.1/#broadband.globals\n wait seconds=2\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=5\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=YES\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nwait seconds=21\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT')
function testModem1(ip1){x=ip1.split('.')[0]; y=ip1.split('.')[1]; ip1=x+"."+y; return ip1};
function testModem2(ip2){x=ip2.split('.')[0];y=ip2.split('.')[1]; ip2=x+"."+y; return ip2};
do{ iimPlayCode(modemKostia);ip1=iimGetLastExtract(1);ip2=iimGetLastExtract(2)} while((testModem1(ip1)==testModem2(ip2))||(testModem2(ip2)=="#EANF#"))
iimDisplay("айпи сменили; ип1: "+ip1+"; IP2: "+ip2+timming());	
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

iimDisplay('регаем яшу') //==яндекс.почта== :  // регаем ЯНДЕКС.ПОЧТУ; 
//iimPlay("=ya-reg.iim"); iimDisplay('зарегали яшу')
iimDisplay(имяПроекта+": айпи сменили; --и зарегали почту!= терь го РЕГАТЬ че нить эдакое!;. Строка: "+строка+timming()); //статус работы;

function backTab() {iimPlayCode("SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB T=0\nTAB T=-1\nTAB T=-2");} //перейти в 1 вкладку
SmsRegAPI="code:SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nTAB T=0\nTAB T=-1\nTAB T=-2\n\nSET !TIMEOUT_STEP 3\nURL GOTO=http://api.sms-reg.com/{{operation}}.php?tzid={{id}}&apikey={{smsRegApiKey}}\nwait seconds=2"
function setOperationRevise() {iimSet('id',кодОперации); iimSet('operation','setOperationRevise');iimSet('smsRegApiKey',smsRegApiKey); iimPlay(SmsRegAPI)};
function getState() {iimSet('id',кодОперации); iimSet('operation','getState'); iimSet('smsRegApiKey',smsRegApiKey); iimPlay(SmsRegAPI); return копиБоди();};
function копиБоди() {var x = window.document.getElementsByTagName("body")[0].textContent; return x;}
function смсКопиИподтвердить() {backTab(); s=копиБоди(); s=s.split(':')[2]; s=s.split(',')[0]; s=s.split('.')[0];s=s.split('"')[2]; if(s=="") {var s=копиБоди(); s=s.split(':')[2]; s=s.split(',')[0]; s=s.split('.')[0]; s=s.split('"')[1];}; if(String(s)=="undefined") {var s=копиБоди(); s=s.split(':')[2]; s=s.split(',')[0]; s=s.split('.')[0]; s=s.split('"')[1];}; backTab(); iimSet("s",s); iimSet("useragent", useragent); iimPlayCode("SET !REPLAYSPEED fast\nSET !USERAGENT {{useragent}}\nSET !ERRORIGNORE YES\nTAB T=2\n TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:code CONTENT={{s}}\n TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Подтвердить\n wait seconds = 5\n set !extract {{!URLCURRENT}}\n"); var s=копиБоди(); backTab(); return s;}
function смсКопиИподтвердитьДляСбрученныхАкков() {backTab(); s=копиБоди(); s=s.split(':')[2]; s=s.split(',')[0]; s=s.split('.')[0];s=s.split('"')[2]; if(s=="") {var s=копиБоди(); s=s.split(':')[2]; s=s.split(',')[0]; s=s.split('.')[0]; s=s.split('"')[1];}; if(String(s)=="undefined") {var s=копиБоди(); s=s.split(':')[2]; s=s.split(',')[0]; s=s.split('.')[0]; s=s.split('"')[1];}; backTab(); iimSet("s",s); iimSet("useragent", useragent); iimPlayCode("SET !REPLAYSPEED fast\nSET !USERAGENT {{useragent}}\nSET !ERRORIGNORE YES\nTAB T=2\n TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=NAME:code CONTENT={{s}}\nTAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Подтвердить\n wait seconds = 5\n set !extract {{!URLCURRENT}}\n"); var s=копиБоди(); backTab(); return s;}

var пауза = {сек5: "wait seconds=5", сек10: "wait seconds=10", сек20: "wait seconds=20", сек30: "wait seconds=30"}
sms6:
for(var smsREG=1;smsREG<111;smsREG++) //создадим ФОР,Чтоб ТОЛЬКО удержать тупорылого смс-рега в рельсах!!;	
{	iimDisplay(имяПроекта+ ': Итерация имени smsREG сейчас на шаге повтора:'+smsREG+'; Аккаунт №'+строка+timming())
	//гетКодОперации(); //GETing телефонa:
	iimSet('smsRegApiKey',smsRegApiKey);
	iimPlayCode('url goto=http://api.sms-reg.com/getNum.php?country=ru&service=avito&apikey={{smsRegApiKey}}'); 
 	try{id=копиБоди(); id=id.split(':')[2]; id=id.split('}')[0]; id=id.split('"')[1];
	var кодОперации=id; backTab();}
	catch (r){
		iimDisplay(имяПроекта+': =по-видимому, телеги с сетью!;'+timming())
		iimPlayCode('wait seconds=60\n url goto=http://api.sms-reg.com/getNum.php?country=ru&service=avito&apikey={{smsRegApiKey}}'); 
		id=копиБоди(); id=id.split(':')[2]; id=id.split('}')[0]; id=id.split('"')[1];
		var кодОперации=id; backTab();
	}
	//заполнитьАвитоДанными():
	iimSet('почта', почта); iimSet('пароль',пароль); iimSet("строка",строка);
	if(пароль=="kostia22") //ПРОВЕРКА нА ПОКУПНЫЕ АККИ:
		{	iimPlayCode(`SET !REPLAYSPEED FAST\n CMDLINE !DATASOURCE useragents.txt\n SET !DATASOURCE_LINE {{строка}}\n	SET !USERAGENT {{!COL1}}\n CLEAR
						SET !ERRORIGNORE YES\n TAB T=2\n SET !REPLAYSPEED MEDIUM\n URL GOTO=https://m.avito.ru/profile/\n	URL GOTO=https://m.avito.ru/profile/registration\n wait seconds=3\n EVENT TYPE=CLICK SELECTOR="#name" BUTTON=0\n EVENTS TYPE=KEYPRESS SELECTOR="#email" CHARS="{{почта}}"\n CMDLINE !DATASOURCE names4reg.txt\n SET !DATASOURCE_COLUMNS 1\n SET !VAR1 EVAL("var s=Math.floor(Math.random()*100 + 1); s;")\n	SET !DATASOURCE_LINE {{!VAR1}}\n SET имя {{!COL1}}\n	EVENT TYPE=CLICK SELECTOR="#name" BUTTON=0\n EVENTS TYPE=KEYPRESS SELECTOR="#name" CHARS="{{имя}}"\n tab t=1`); 
		}
	else {	iimPlayCode(`SET !REPLAYSPEED FAST\n CMDLINE !DATASOURCE names4reg.txt\n SET !DATASOURCE_COLUMNS 1\n SET !VAR1 EVAL("var s=Math.floor(Math.random()*100 + 1); s;")\n	SET !DATASOURCE_LINE {{!VAR1}}\n SET имя {{!COL1}}\n
	CMDLINE !DATASOURCE useragents.txt\n SET !DATASOURCE_LINE {{строка}}\n	SET !USERAGENT {{!COL1}}\n CLEAR
								SET !ERRORIGNORE YES\n TAB T=2\n URL GOTO=https://m.avito.ru/profile\n  SET !REPLAYSPEED medium\n URL GOTO=https://m.avito.ru/profile
								TAG POS=1 TYPE=INPUT:EMAIL FORM=ACTION:/profile/login ATTR=NAME:login CONTENT={{почта}}
								TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/profile/login ATTR=NAME:password CONTENT={{пароль}}
								TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/profile/login ATTR=*
					URL GOTO=https://m.avito.ru/profile/settings
					TAG POS=1 TYPE=A ATTR=TXT:Изменить
					
					TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/profile/settings/edit ATTR=NAME:name CONTENT={{имя}}
				TAG POS=1 TYPE=SELECT FORM=ACTION:/profile/settings/edit ATTR=NAME:regionId CONTENT=%625670
				TAG POS=1 TYPE=SELECT FORM=ACTION:/profile/settings/edit ATTR=NAME:locationId CONTENT=%625700
					TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/profile/settings/edit ATTR=*`)
		 };
		 
if(пароль!="kostia22")//УДАЛЕнИЕ старинных объяв;
{	iimSet("строка",строка); iimPlayCode(`SET !REPLAYSPEED FAST\nCMDLINE !DATASOURCE useragents.txt\n SET !DATASOURCE_LINE {{строка}}\n
										  SET !USERAGENT {{!COL1}}\n SET !ERRORIGNORE YES\n SET !REPLAYSPEED MEDIUM
	url goto=m.avito.ru/profile/
	TAG POS=1 TYPE=DIV ATTR=CLASS:status-header<SP>status-old extract=txt`)
 try{ss=iimGetLastExtract(1); ss=ss.split('(')[1]; ss=ss.split(')')[0];
	 for(i=1;i<ss+1;i++)
	 { iimDisplay(имяПроекта+'\n Удаление всех объяв на АВИТО; #'+i+'('+ss+')'+timming())
		iimSet("строка",строка); iimPlayCode(`SET !REPLAYSPEED FAST\n CMDLINE !DATASOURCE useragents.txt\n SET !DATASOURCE_LINE {{строка}}\n	SET !USERAGENT {{!COL1}}\n SET !REPLAYSPEED MEDIUM
		TAG POS=1 TYPE=A ATTR=HREF:https://m.avito.ru/profile/item/*
		TAG POS=1 TYPE=A ATTR=TXT:Удалить<SP>навсегда
		TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=NAME:yes`)
	 }
   }catch (r) { 
 	}
}


	iimPlayCode(пауза.сек5);
	//var тестСтатусаНомера = getState();
	if(getState().search( /TZ_INPOOL/ )!=-1) {iimPlayCode(пауза.сек20)}
	if(getState().search( /TZ_INPOOL/ )!=-1) {iimPlayCode(пауза.сек30)}
	if(getState().search( /TZ_INPOOL/ )!=-1) {continue sms6}	
	if(getState().search( /TZ_NUM_PREPARE/ )==-1) {continue sms6}//тест $$+свободность номеров//++защита от WARNING_NO_NUMS
	iimDisplay(имяПроекта+ ': Телефон получен! Идем дальше! = терь переносим телефон на авито; Сейчас акк= '+строка+timming())
	// = переносим телефон на авито:
	backTab(); var tel=копиБоди(); tel=tel.split(':')[2]; tel=tel.split(',')[0]; iimSet("телефон",tel); 
	if(пароль=="kostia22")
		 {iimPlayCode("SET !REPLAYSPEED fast\ntab t=2\n TAG POS=1 TYPE=INPUT:TEL FORM=NAME:NoFormName ATTR=ID:phone CONTENT={{телефон}}\n TAB T=1")}
	else {iimPlayCode("SET !REPLAYSPEED fast\ntab t=2\n TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:* ATTR=NAME:phone_other CONTENT={{телефон}}\n TAB T=1")}
		//КОНЕЦ GETTing'a;
	cap6:
	for(var форКапча=1;форКапча<11;форКапча++)
	{	backTab();
		if(пароль=="kostia22")
		{	iimSet("пароль",пароль); iimPlayCode("set !ERRORIGNORE YES\nTAB T=2\nTAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:password CONTENT={{пароль}}\nTAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:confirm CONTENT={{пароль}}"); backTab();// ввестиПароль();
			iimDisplay(имяПроекта+ ": ща будем капчу распознавать"+timming());
			backTab(); iimPlayCode('SET !REPLAYSPEED fast\nset !ERRORIGNORE YES\nTAB T=2\nFILTER TYPE=IMAGES STATUS=OFF\nONDOWNLOAD FOLDER="C:\" FILE=cap.jpg WAIT=YES\nTAG POS=1 TYPE=IMG ATTR=SRC:https://m.avito.ru/captcha?* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT\nTAB T=3\nURL GOTO=http://imacros2.rucaptcha.com/new\nTAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:key CONTENT=6440c629b2418bf14c6ca56d0e7e21d0\nTAG POS=1 TYPE=INPUT:FILE ATTR=NAME:file CONTENT="C:\\cap.jpg"\nONDIALOG POS=1 BUTTON=OK CONTENT=\nTAG POS=1 TYPE=INPUT:SUBMIT ATTR=*\nSET !EXTRACT NULL\nWAIT SECONDS=3\nTAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT\nTAB T=2\nTAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:captcha CONTENT={{!EXTRACT}}\nTAB T=3'); //распознатьКапчу();
			if(копиБоди().search( /ERROR/ )!=-1) {continue cap6}                    //переразгадывать77;
			iimDisplay(имяПроекта+ ": капча распознана без телег! кликаем по Зарегаться! Сейчас акк= "+строка+timming());
			backTab();backTab();
		} // кликПоЗарегаться():
		
		if(пароль=="kostia22")
		{	iimSet("строка",строка); iimPlayCode(`CMDLINE !DATASOURCE useragents.txt\n SET !DATASOURCE_LINE {{строка}}\n SET !USERAGENT {{!COL1}}
			TAB T=2\nTAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=TYPE:submit&&CLASS:control-self<SP>control-self-submit<SP>button<SP>button-solid<SP>button-blue<SP>button-large&&VALUE:Зарегистрироваться`);
		} else 
		{ 	//if(window.location.href=="https://m.avito.ru/profile/item/125170381/edit")
	//alert("if = while(window.location.href.search( /confirm/ )==-1) ---- "+(window.location.href.search( /confirm/ )==-1))

			iimSet("телефон",tel);iimSet("строка",строка);
iimPlayCode(` SET !ERRORIGNORE YES\n SET !REPLAYSPEED FAST\n tab t=2
			  CMDLINE !DATASOURCE useragents.txt\n SET !DATASOURCE_LINE {{строка}}\n SET !USERAGENT {{!COL1}}
 			SET !REPLAYSPEED medium\n URL GOTO=https://m.avito.ru/add
			set !timeout_step 3
			TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:category_id CONTENT=%92
			TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=NAME:title CONTENT=Yfpdfybtw
			TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=NAME:description CONTENT=w<SP>jgbcfybt
			TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:region_id CONTENT=%625670
			wait seconds=3
			TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=NAME:location_id CONTENT=%625810
			'EVENT TYPE=CLICK SELECTOR="HTML>BODY>SECTION>FORM>DIV:nth-of-type(15)>DIV:nth-of-type(2)>DIV>SELECT>OPTION:nth-of-type(6)" BUTTON=0
			'EVENT TYPE=CLICK SELECTOR="HTML>BODY>SECTION>FORM>DIV:nth-of-type(16)>DIV:nth-of-type(2)>DIV>SELECT>OPTION:nth-of-type(16)" BUTTON=0
			 	  TAG POS=1 TYPE=SELECT FORM=ACTION:* ATTR=NAME:phone CONTENT=%other
				  TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:* ATTR=NAME:phone_other CONTENT={{телефон}}
			TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=*\n wait seconds=3`)
		};
		
		 iimPlayCode(пауза.сек5);
		 var общийТест=копиБоди();
/////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//			
		if(общийТест.search( /Вы уже зарегистрированы на Avito/ )!=-1) {backTab(); форКапча=11; smsREG=333; break}//идем к сл акку;
		if(общийТест.search( /Пользователь с таким адресом уже существует/ )!=-1) { backTab(); форКапча=11; smsREG=333; break}//идем к сл акку
		if(общийТест.search( /Номер подтверждён в аккаунте/ )!=-1) { backTab(); iimSet('id',кодОперации); iimSet('operation','setOperationUsed'); iimSet('smsRegApiKey',smsRegApiKey);iimPlay(SmsRegAPI); continue sms6} //использованный номер!;
		if(общийТест.search( /код подтверждения/ )!=-1) {continue cap6} //школьник с капчей подставу организовал;;
		{	iimDisplay(имяПроекта+ ": все ок, тел подошел с "+smsREG+", а капча с "+форКапча+" -раза--идем дальше:все идеально"+timming());  
			if(форКапча!=11)
			{	форКапча=11 //чеб не возвращались к капчам;
				backTab(); iimSet('useragent',useragent); 
				if(пароль=="kostia22")
					{iimPlayCode('set !ERRORIGNORE YES\n SET !USERAGENT {{useragent}}\nTAB T=2\nTAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Получить<SP>код\nEVENT TYPE=KEYPRESS SELECTOR="HTML>BODY>SECTION>FORM>DIV:nth-of-type(26)>DIV>DIV>INPUT" KEY=13\nEVENT TYPE=KEYPRESS SELECTOR="HTML>BODY>SECTION>FORM>DIV:nth-of-type(26)>DIV>DIV>INPUT" CHAR=" "')} //запрос на выдачу ID смс-рега;
				else
					{iimPlayCode('set !ERRORIGNORE YES\n SET !USERAGENT {{useragent}}\n TAB T=2\n TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Получить<SP>код\n tab t=1')}
				backTab(); iimSet('id',кодОперации);iimSet('operation','setReady');
				iimSet('smsRegApiKey',smsRegApiKey);iimPlay(SmsRegAPI); // setReady();
				iimPlayCode(пауза.сек30);
			smstest4:
			for(var z=1;z<3;z++)   //для 2х итераций неверных ввода смс-кода;
				{	smstest5:	//=пошла первая проверка кода-активации.......
					for (var jj=1; jj<30; jj++) 					
					{	iimPlayCode(пауза.сек20)
						var смсТест = getState();  //запрос смс-ответа
						iimDisplay(имяПроекта+": ждем смс-код; Проверка №"+jj+"(30). Попытка №"+z+"(2). Сейчас регаем акк: "+строка+timming());
						if(смсТест.search( /TZ_NUM_WAIT/ )!=-1) continue smstest5;
						if(смсТест.search( /TZ_NUM_ANSWER/ )==-1) 
						{  //cсмс не пришел c 1 иль со 2-го разов!!;
							iimDisplay(имяПроекта+ ": НЕВЕРНЫЙ КОД АКТИВАЦИИ. Попытка №"+z+"(2). Сейчас на акке:"+строка+timming());
							setOperationRevise(); //=уточнение смс-кода;
							continue smstest4 //берем вторую и последнюю попытку смс-теста;						
						}
						else // смс пришел с 1 или 2-го раза!!;
						{ iimDisplay(имяПроекта+ ": Смс пришел с проверки №"+jj+"(30). Попытки №"+z+"(2). Сейчас регаем акк: "+строка+timming());
							 //код прищел-копируем смс//+проверка правильности смски:	
						if(пароль=="kostia22")
							{ if(смсКопиИподтвердить().search( /Проверьте ваш почтовый ящик/ )!=-1) //зарегались! УРЯ!; зови журналюг;;;
								{	iimDisplay(имяПроекта+ ": все ок - журналистов в студию! Зарегали акк: "+строка+timming());
									jj=30; z=2; smsREG=333;iimSet('id',кодОперации); iimSet('operation','setOperationOk'); 
									iimSet('smsRegApiKey',smsRegApiKey);iimPlay(SmsRegAPI); break; // setOperationOk()
								}
							  else // смс не верный! = запрашиваем уточнение:
								{	iimDisplay(имяПроекта+ ": все ок - журналистов в студию! Зарегали акк: "+строка+timming());
									setOperationRevise(); //=уточнение смс-кода;
									continue smstest4 //берем вторую и последнюю попытку смс-теста;	
								}; 
							}
						else{	if(смсКопиИподтвердитьДляСбрученныхАкков().search( /Введите код подтверждения/ )==-1) //зарегались! УРЯ!; зови журналюг;;;
								{	iimDisplay(имяПроекта+ ": все ок - журналистов в студию! Зарегали акк: "+строка+timming());
									jj=30; z=2; smsREG=333;iimSet('id',кодОперации); iimSet('operation','setOperationOk'); 
									iimSet('smsRegApiKey',smsRegApiKey);iimPlay(SmsRegAPI); break; // setOperationOk()
								}
							  else // смс не верный! = запрашиваем уточнение:
								{	iimDisplay(имяПроекта+ ": все ок - журналистов в студию! Зарегали акк: "+строка+timming());
									setOperationRevise(); //=уточнение смс-кода;
									continue smstest4 //берем вторую и последнюю попытку смс-теста;	
								}; 
							};
						}
					}	
				}			
			}
			iimSet('id',кодОперации); iimSet('operation','setOperationOver');iimSet('smsRegApiKey',smsRegApiKey); iimPlay(SmsRegAPI) // setOperationOver();
		} // КОНЕЦ TRUE-варианта-глобальной проверки ссылки; отсюда выход безТЕЛЕЖНЫЙ;
		 //конец else ГЛОБАЛА -e.g.- if(window.location.href=="https://m.avito.ru/profile/registration/phone_confirm")
//////////GLOBALend//////////GLOBALend//////////GLOBALend//////////GLOBAL//////////GLOBAL//////////GLOBAL
	} //конец КАПЧИ!;
	backTab();
//здесь можно ничего не писать - тут будут обрабатываться в соотве со зн. smsREG:либо заново(макс 11 раз за раз),либо выход из етого цикла;
}; //ета скобка закрывает sms6: for  --для рельс smsREG --она будет грешников возращать на место!;

//}//========================КОНЕЦ ПРОВЕРКИ FOREIGN акка -- если акк куплен - то перекинет сюда;====================

//музыка:
try{
    var Cc=Components.classes, Ci=Components.interfaces, args=[''];
    var proc=Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
    var file=Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
    file.initWithPath('C:\\1.mp3');
    proc.init(file); proc.run(false, args, args.length);
} catch (r) {iimDisplay(имяПроекта+': Рега окончена! но файла 1.мп3 в корне C:\ =не нашли;;'+timming())}


//LOVE!
iimDisplay(имяПроекта+ ": Го ОТЧЕТ по РЕГу делать на акк №: "+строка+timming());

// = отчетРЕГИ:
iimSet('строка',строка); iimSet("имяПроекта",имяПроекта); iimSet("действие","REG");  iimSet('num',""); iimSet("телефон",""); iimPlay("отчет-по-авито.iim")
 	
//	'каунт++:
iimSet('строка',строка); iimSet('имяПроекта',имяПроекта); 
iimPlayCode('ADD строка 1\nSET !EXTRACT {{строка}}\nFILEDELETE NAME={{имяПроекта}}-текущийАкк.txt\nSAVEAS TYPE=EXTRACT FOLDER=* FILE={{имяПроекта}}-текущийАкк.txt')


//LOVE!
if(имяПроекта=="kv"){
		iimDisplay(имяПроекта+ ": Го добавлять; ужеж в акк №: "+строка+timming());
		do{ iimSet('строка',строка);iimSet('имяПроекта',имяПроекта); 
		iimSet('почта',почта);iimSet('пароль',пароль);
			iimPlay("шаблон-на-подачу-квартиры.iim"); //=запуск !!
		    var ошибкаЗагрузкиФото = iimGetLastExtract(1)
			iimPlayCode('set !Extract {{!URLCURRENT}}')
		  } while(iimGetLastExtract(1)=="https://m.avito.ru/add")
	   if(ошибкаЗагрузкиФото!="#EANF#")	 //= обходим ОШИБКУ ЗАГРУЗКИ ФОТО:
	     {iimSet('строка',строка);iimSet('имяПроекта',имяПроекта);iimPlay("загрузить-картинку-на-авито.iim")}//передобавить фотку!;
  // = ОТЧЕТ:
	iimSet('строка',строка); iimSet("имяПроекта",имяПроекта); iimSet("действие","add"); iimSet("телефон","");iimSet('num','');
	iimPlay("отчет-по-авито.iim"); //го отчетить!
 }

if((имяПроекта=="tj")||(имяПроекта=="pc"))
{  for(i=1;i<3;i++){ //==============:=============:TJ||PC 1-2:=============:=============
		iimDisplay(имяПроекта+ ": Го добавлять - итерация №"+i+"(2); ужеж в акк №: "+строка+timming());
		do{ iimSet('строка',строка); iimSet('num',i); iimSet('почта',почта); iimSet('пароль',пароль);
			iimSet('имяПроекта',имяПроекта);
		if(имяПроекта=="pc"){
	 		if(i==1){iimSet('метроИлиГород','osetia1.txt')}//=метро-замануха!!;
			if(i==2){iimSet('метроИлиГород','osetia2.txt')}//=область-замануха!!;		
			iimPlay("шаблон-на-подачу-услуг-в-осетии.iim") //=запуск !!	
		}
		if(имяПроекта=="tj"){
	 		if(i==1){iimSet('метроИлиГород','all_metros.txt')}//=метро-замануха!!;
			if(i==2){iimSet('метроИлиГород','all_podmsk.txt')}//=область-замануха!!;	
			
			iimPlay("шаблон-на-подачу-услуг.iim") //=запуск !!
		}

		    var ошибкаЗагрузкиФото = iimGetLastExtract(1)
			iimPlayCode('set !Extract {{!URLCURRENT}}')
		  } while(iimGetLastExtract(1)=="https://m.avito.ru/add")
	   if(ошибкаЗагрузкиФото!="#EANF#")	 //= обходим ОШИБКУ ЗАГРУЗКИ ФОТО:
	     { iimSet('строка',строка); iimSet('имяПроекта',имяПроекта); iimPlay("загрузить-картинку-на-авито.iim")
		 }	// = ОТЧЕТ:
	iimSet('строка',строка); iimSet("имяПроекта",имяПроекта); iimSet("действие","add"); iimSet("телефон",""); j="-"+i+"-";iimSet('num',j);iimPlay("отчет-по-авито.iim");//го отчет!;
	}
	//--чучи;;
	do{iimDisplay(имяПроекта+ ": Го добавлять ТОвАры; акк№:"+строка+timming());
		iimSet('строка',строка); iimPlay("шаблон-на-подачу-товара.iim") //=запуск чуч+df!!
		iimPlayCode('set !Extract {{!URLCURRENT}}')
		} while(iimGetLastExtract(1)=="https://m.avito.ru/add")
	
 }	 

iimPlayCode("URL GOTO=imacros://run/?m=go-v3\\kv-rename.js")
// if(имяПроекта=="kv"){iimPlayCode("URL GOTO=imacros://run/?m=go-v3\\tj-start.js")}
//if(имяПроекта=="tj"){iimPlayCode("URL GOTO=imacros://run/?m=go-v3\\tj-start.js")}
// if(имяПроекта=="pc"){iimPlayCode("URL GOTO=imacros://run/?m=go-v3\\kv-start.js")}