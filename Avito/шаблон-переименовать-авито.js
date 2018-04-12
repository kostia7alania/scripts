var start = new Date(); 
//общие настройки:
	iimPlayCode('SET !REPLAYSPEED fast\nCMDLINE !DATASOURCE C:\\авито-переменные\\имяПроекта.txt\nSET !DATASOURCE_LINE 1\nset !extract {{!COL1}}');
var имяПроекта=iimGetLastExtract(1);
  //==задаем № тек.акк ринА:
	iimSet("имяПроекта",имяПроекта);iimPlayCode("SET !DATASOURCE {{имяПроекта}}-текущийАкк-рин.txt\nSET !DATASOURCE_LINE 1\nSET !EXTRACT {{!COL1}}");
var строка = Number(iimGetLastExtract(1))
  //===задаем акк реги--для сравнения:
	iimSet("имяПроекта",имяПроекта);iimPlayCode("SET !DATASOURCE {{имяПроекта}}-текущийАкк.txt\nSET !DATASOURCE_LINE 1\nSET !EXTRACT {{!COL1}}"); 
var строкаРеги = Number(iimGetLastExtract(1)) 

iimDisplay('разница между строкаРеги-строкиРинейма = '+(строкаРеги-строка)+"; >2? = "+(строкаРеги-строка>2))

var путьИмениСТелефоном = имяПроекта+"-имена-с-телефонами.txt" // НЕ ТРОЖ,Если не помнишь -где ето лежит!; :-)));
if((строкаРеги-строка)>2)
{
	GoAgainRename:
	for(i=0;i<20;i++)
	{

		iimSet('строка',строка);iimSet('имяПроекта',имяПроекта);
		iimPlayCode(`CMDLINE !DATASOURCE {{имяПроекта}}-почты.txt\nSET !DATASOURCE_LINE {{строка}}\n SET !extract {{!COL1}}\n ADD !extract {{!COL2}}\n`);
		var почта = iimGetLastExtract(1); var пароль = iimGetLastExtract(2);

		var папкаСкринов = "C:\\фотки-"+имяПроекта+"\\скрины"
		//USERAGENT:
		iimSet("строка",строка); iimPlayCode("SET !REPLAYSPEED fast\nCMDLINE !DATASOURCE useragents.txt\nSET !DATASOURCE_LINE {{строка}}\nSET !EXTRACT {{!COL1}}"); var useragent = iimGetLastExtract(1)
		//меняем IP;
		try {
			var modemKostia = ('SET !REPLAYSPEED medium\n SET !TIMEOUT_STEP 55\nSET !EXTRACT NULL\n ONLOGIN USER=admin PASSWORD=admin\n URL GOTO=192.168.1.1\n URL GOTO=192.168.1.1\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\n URL GOTO=http://192.168.1.1/#broadband.globals\nwait seconds=2\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=NO\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nwait seconds=2\n URL GOTO=http://192.168.1.1/#broadband.globals\n wait seconds=2\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=5\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=YES\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nwait seconds=21\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT')
			function testModem1(ip1){x=ip1.split('.')[0]; y=ip1.split('.')[1]; ip1=x+"."+y; return ip1};
			function testModem2(ip2){x=ip2.split('.')[0];y=ip2.split('.')[1]; ip2=x+"."+y; return ip2};
			do{ iimPlayCode(modemKostia);ip1=iimGetLastExtract(1);ip2=iimGetLastExtract(2)} while((testModem1(ip1)==testModem2(ip2))||(testModem2(ip2)=="#EANF#"))
			iimDisplay("айпи сменили; ип1: "+ip1+"; IP2: "+ip2);	
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

		iimDisplay(имяПроекта+': Айпи сменили:- терь го переименовывать!;. Строка: '+строка);

		iimSet("строка",строка); 
		iimSet('почта',почта); iimSet('пароль',пароль);
			iimPlayCode(`			SET !REPLAYSPEED FAST
									'=========== смена юзерагента:
									CMDLINE !DATASOURCE useragents.txt
									SET !DATASOURCE_LINE {{строка}}
									SET !USERAGENT {{!COL1}}
									'===========чистим кеши и куки всего компа:
									CLEAR
									URL GOTO=https://m.avito.ru/profile
									SET !REPLAYSPEED medium
									wait seconds=5		
									URL GOTO=https://m.avito.ru/profile
									TAG POS=1 TYPE=INPUT:EMAIL FORM=ACTION:/profile/login ATTR=NAME:login CONTENT={{почта}}
									TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/profile/login ATTR=NAME:password CONTENT={{пароль}}
									TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/profile/login ATTR=*
									'TAG POS=1 TYPE=H3 ATTR=CLASS:main-header<SP>padding-bottom EXTRACT=TXT	`)
								//if(window.document.getElementsByTagName("body")[0].textContent.search( /Неверная электронная почта или пароль/ )==-1)
	iimSet('путьИмениСТелефоном',путьИмениСТелефоном);
		iimSet("имяПроекта",имяПроекта);
		iimSet("строка",строка);
		iimSet("папкаСкринов",папкаСкринов);
									iimPlayCode(`
									SET !REPLAYSPEED FAST
									SET !ERRORIGNORE YES
									SET !DATASOURCE {{путьИмениСТелефоном}}
									SET !DATASOURCE_LINE {{строка}}
									set имя {{!COL1}}
									'=========== смена юзерагента:
									CMDLINE !DATASOURCE useragents.txt
									SET !DATASOURCE_LINE {{строка}}
									SET !USERAGENT {{!COL1}}
									SET баня7 EVAL("var d='[не бан++++]'; var s='{{!URLCURRENT}}'; if(s=='https://m.avito.ru/profile/login'){s='[забанен---]';s;} else d;")
									set !EXTRACT {{баня7}}
									SCREENSHOT TYPE=Browser FOLDER={{папкаСкринов}} FILE={{строка}}---3переим-{{имяПроекта}}-каб-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}]-{{баня7}}.jpg
									TAG POS=1 TYPE=SPAN ATTR=TXT:Настройки
									TAG POS=1 TYPE=A ATTR=TXT:Изменить
									TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/profile/settings/edit ATTR=ID:name CONTENT={{имя}}
									TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/profile/settings/edit ATTR=*	
							'отчет:	
									URL GOTO=https://m.avito.ru/profile
									TAG POS=1 TYPE=A ATTR=HREF:https://m.avito.ru/profile/item/*
									SET !EXTRACT #{{строка}},<sp>{{баня7}},<sp>{{!NOW:dd.mm.yyyy}}<sp>[{{!NOW:hh:nn}}],<sp>{{!URLCURRENT}}
									'сохраняем все ето дело:
									SAVEAS TYPE=EXTRACT FOLDER=* FILE={{имяПроекта}}--–РИН.txt
									SCREENSHOT TYPE=Page FOLDER={{папкаСкринов}} FILE={{строка}}---3-РИН-{{имяПроекта}}-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}]-{{баня7}}.jpg
									wait seconds=2`)
									//cointer++!!-!!-!!-!!;
									строка++; iimSet("строка",строка); 
									iimSet('имяПроекта',имяПроекта);
									iimPlayCode(`FILEDELETE NAME={{имяПроекта}}-текущийАкк-рин.txt
									set !extract {{строка}}
									SAVEAS TYPE=EXTRACT FOLDER=* FILE={{имяПроекта}}-текущийАкк-рин.txt`)
			if(строкаРеги-строка>2){iimDisplay('строкаРеги-строкиРинейма='+(строкаРеги-строка)+"; >2? = "+(строкаРеги-строка>2));
			continue GoAgainRename}
			else{break}
	}
	var статусПереименовки = "НпЕрЕИМеновали"+i+"-акков в етой сессии!;"
} else {var статусПереименовки = "НИ%УЯ нЕ пЕрЕИМеновали в етой сессии!;"}




iimPlayCode("URL GOTO=imacros://run/?m=go-v3\\kv-start.js")

// if(имяПроекта=="kv"){
	// iimDisplay('KV:разница между строкаРеги-строкиРинейма = '+(строкаРеги-строка)+"; >2? = "+(строкаРеги-строка>2)+"; ГО добАвлЯть TJ!! "+статусПереименовки) 
	// iimPlayCode("wait seconds=5\n URL GOTO=imacros://run/?m=go-v3\\tj-start.js")}

// if(имяПроекта=="tj"){
	// iimDisplay('TJ:разница между строкаРеги-строкиРинейма = '+(строкаРеги-строка)+"; >2? = "+(строкаРеги-строка>2)+"; ГО добАвлЯть PC!! "+статусПереименовки) 
	// iimPlayCode("wait seconds=5\n URL GOTO=imacros://run/?m=go-v3\\kv-start.js")}

	// if(имяПроекта=="pc"){
	// iimDisplay('PC:разница между строкаРеги-строкиРинейма = '+(строкаРеги-строка)+"; >2? = "+(строкаРеги-строка>2)+"; ГО добАвлЯть KV!! "+статусПереименовки) 
	// iimPlayCode("wait seconds=5\n URL GOTO=imacros://run/?m=go-v3\\kv-start.js")}

	
// iimPlayCode("URL GOTO=imacros://run/?m=go-v3\\tj-start.js")
