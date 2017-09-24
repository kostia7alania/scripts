//общие настройки:
	var имяПроекта="kv"									//имя ТАКЖЕ отобр в сттаусе - во врем яработы;
	var началоПочты = "kodi"
	var конецПочты = "kv@mail.ru"						//серединой будут цифры от 1 до 8+
	var путьПроекта = "C:\\avito.ru\\kv"	//задается путьПроекта 		(все папки должны сущестовать)
	var имяРесурсов = "ресурсы"							//Проект\ресурсы 		//задается имя папки Ресурсов
	var имяАвтокаунтаРина = "текущийАкк-рин.txt"		//Проект\ресурсы\текущийАкк-рин.txt			 
	var имяПапкиОтчетов ="результаты"					//Проект\результаты	 	//имя папки результатов
	var отчетРина = "3--–РИН-"							//Проект\результаты\отчетАдда.txt		
	var имяПапкиСкринов ="скрины"						//Проект\результаты\скрины	(все папки должны сущестовать)
//настройки под конкретную категорию:
	var приветствиеОписания = "приветствие-описания.txt"					//Проект\ресурсы\приветствие-описания.txt
	var описание = "описание.txt"							//Проект\ресурсы\описание.txt			 
	var объекты = "объекты.txt"							//Проект\ресурсы\объекты.txt			
 	var имяИменСТелефонами="именаСТелефоном.txt"						//именя файла с телефонами -для поля ИМЯ
//не менять!: 
	var пароль = "kostia22"
	var путьКРесурсам = "C:\\avito.ru\\kv\\ресурсы"					//не менять!!;
	var путьКОбъектам = "C:\\avito.ru\\kv\\ресурсы\\объекты.txt"						//не менять!!;
	var автокаунтРин = "C:\\avito.ru\\kv\\ресурсы\\текущийАкк-рин.txt"
	var имяОтчетаРина = "3--–РИН-kv.txt"						//не менять!!;
	var папкаОтчетов = "C:\\avito.ru\\kv\\результаты" //не менять!!;
	var папкаСкринов = "C:\\avito.ru\\kv\\результаты\\скрины"				//не менять!!;
 	var путьИменСТелефонами = "C:\\avito.ru\\kv\\ресурсы\\именаСТелефоном.txt"

	function гетСтроки() {iimSet("автокаунтРин",автокаунтРин); iimPlayCode("wait seconds=5\n TAB CLOSEALLOTHERS\n CMDLINE !DATASOURCE {{автокаунтРин}}\n SET !DATASOURCE_COLUMNS 1\n SET !DATASOURCE_LINE 1\n SET !EXTRACT {{!COL1}}"); return Number(iimGetLastExtract(1));}
	var строка = гетСтроки();
	var почта = началоПочты+строка+конецПочты;
	 
//МОДЕМ-КОСТЯ!; 
	iimDisplay(имяПроекта+': RENAME! - Входим в админку+Меняем айпи. Акк # '+строка);

	
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
iimDisplay(имяПроекта+ ': айпи сменили:- терь го РЕГАТЬ!;. Строка: '+строка);	

iimSet("строка",строка); iimSet('путьИменСТелефонами',путьИменСТелефонами); 

iimPlayCode('SET !DATASOURCE {{путьИменСТелефонами}}\n SET !DATASOURCE_LINE {{строка}}\n set !EXTRACT {{!COL1}}'); 
var имяСТелефоном = iimGetLastExtract(1);

iimSet("имяСТелефоном",имяСТелефоном);
 iimSet("строка",строка); 
iimSet('почта',почта); iimSet('пароль',пароль);
	iimPlayCode(`			SET !REPLAYSPEED FAST
	SET !TIMEOUT_PAGE 20
							'=========== смена юзерагента:
							CMDLINE !DATASOURCE useragents.txt
							SET !DATASOURCE_LINE {{строка}}
							SET !USERAGENT {{!COL1}}
							'===========чистим кеши и куки всего компа:
							CLEAR
							SET !ERRORIGNORE YES
							URL GOTO=https://m.avito.ru/profile
							SET !REPLAYSPEED medium
							wait seconds=5		
							URL GOTO=https://m.avito.ru/profile
							TAG POS=1 TYPE=INPUT:EMAIL FORM=ACTION:/profile/login ATTR=NAME:login CONTENT={{почта}}
							TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/profile/login ATTR=NAME:password CONTENT={{пароль}}
							TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/profile/login ATTR=*
							'TAG POS=1 TYPE=H3 ATTR=CLASS:main-header<SP>padding-bottom EXTRACT=TXT	`)
						if(window.document.getElementsByTagName("body")[0].textContent.search( /Неверная электронная почта или пароль/ )==-1)
						{	iimSet("имяСТелефоном",имяСТелефоном);
 	iimSet("строка",строка);iimSet("папкаСкринов",папкаСкринов);
							iimSet("папкаОтчетов",папкаОтчетов);
							iimSet("имяОтчетаРина",имяОтчетаРина);
							iimPlayCode(`				
							'=========== смена юзерагента:
							CMDLINE !DATASOURCE useragents.txt
							SET !DATASOURCE_LINE {{строка}}
							SET !USERAGENT {{!COL1}}
							SET баня7 EVAL("var d=\\"[не бан++++]\\"; var s=\\"{{!URLCURRENT}}\\"; if(s==\\"https://m.avito.ru/profile/login\\"){s=\\"[забанен---]\\";s;} else d;")
							set !EXTRACT {{баня7}}
							SCREENSHOT TYPE=Browser FOLDER={{папкаСкринов}}  FILE={{строка}}---3переим-кв-каб-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}]-{{баня7}}.jpg
							TAG POS=1 TYPE=SPAN ATTR=TXT:Настройки
							TAG POS=1 TYPE=A ATTR=TXT:Изменить
							TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/profile/settings/edit ATTR=ID:name CONTENT={{имяСТелефоном}}
							TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/profile/settings/edit ATTR=*
							'ОТЧЕТ:
							URL GOTO=https://m.avito.ru/profile
							TAG POS=1 TYPE=A ATTR=HREF:https://m.avito.ru/profile/item/*														
							SET !EXTRACT #{{строка}},<sp>{{баня7}},<sp>{{!NOW:dd.mm.yyyy}}<sp>[{{!NOW:hh:nn}}],<sp>{{!URLCURRENT}}
							'сохраняем все ето дело:
							SAVEAS TYPE=EXTRACT FOLDER={{папкаОтчетов}} FILE={{имяОтчетаРина}}
							SCREENSHOT TYPE=Page FOLDER={{папкаСкринов}}  FILE={{строка}}---3переименовашки-кв-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}]-{{баня7}}.jpg
							wait seconds=2
							`)							
						}					
				//cointer++!!-!!-!!-!!;
							строка++;	
							iimSet("строка",строка); 
					
							iimPlayCode(`set !extract {{строка}}					
							FILEDELETE NAME=C:\\avito.ru\\kv\\ресурсы\\текущийАкк-рин.txt
							SAVEAS TYPE=EXTRACT FOLDER=C:\\avito.ru\\kv\\ресурсы FILE=текущийАкк-рин.txt
							url goto=2ip.ru
							`)
						
						
//iimPlayCode('URL GOTO=imacros://run/?m=GO/2-REG-tj-GO.js')
//iimPlayCode("URL GOTO=imacros://run/?m=GO/6-FINAL-RENAME-kv.js");

iimPlayCode('URL GOTO=imacros://run/?m=GO/1-FiNAL+REG+ADD+KV.js')

//iimPlayCode('URL GOTO=imacros://run/?m=GO/4-FINAL-RENAME-PC.js')