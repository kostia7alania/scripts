﻿//iimPlay("3_rename/get-numbers.iim");
iimPlayCode(`
					SET !DATASOURCE_DELIMITER ;
					CMDLINE !DATASOURCE C:\\Users\\user\\Onedrive\\tj\\база-tj-kodi.csv
					'количество колонок в этом файле:
					SET !DATASOURCE_COLUMNS 4
					SET !DATASOURCE_LINE 3
					SET !EXTRACT {{!COL2}}
					add !extract {{!COL4}}
`)
var СоСтроки = Number(iimGetLastExtract(1)); var ДоСтроки = Number(iimGetLastExtract(2));

for(var строка=СоСтроки;строка<ДоСтроки+1;строка++){
	
		iimDisplay('Входим в админку+Меняем айпи. Строка: '+строка+'('+ДоСтроки+')');
	 
//МОДЕМ: ДИАНА--ОСЕТИЯ	    
//iimPlayCode("SET !ERRORIGNORE YES\nURL GOTO=http://192.168.1.1/\nwait seconds = 3\n	TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:userName CONTENT=admin\n TAG POS=1 TYPE=INPUT:PASSWORD ATTR=ID:pcPassword CONTENT=admin\n TAG POS=1 TYPE=BUTTON ATTR=ID:loginBtn\n wait seconds=3\n TAG POS=1 TYPE=A ATTR=ID:menu_network\n wait seconds=4\nTAG POS=6 TYPE=TD ATTR=TXT:* EXTRACT=TXT\n URL GOTO=http://192.168.1.1/#broadband.globals\n wait seconds=3\n TAG POS=1 TYPE=INPUT:BUTTON ATTR=*\n	wait seconds=7\n TAG POS=1 TYPE=INPUT:BUTTON ATTR=*\nwait seconds= 15\nTAG POS=6 TYPE=TD ATTR=TXT:* EXTRACT=TXT");		

// //МОДЕМ--ДИАНА---Ростов!!:
// var modem = (`
		// '=========== роутер Диана-РОСТОВ=:
		// ONLOGIN USER=admin PASSWORD=admin 
		// URL GOTO=192.168.1.1
		// SET !EXTRACT_TEST_POPUP NO
		// wait seconds=2
		// TAG POS=8 TYPE=TD ATTR=TXT:* EXTRACT=TXT
		// URL GOTO=192.168.1.1/RU/broadband/globals.html
		// SET !REPLAYSPEED medium
		// TAG POS=1 TYPE=TD ATTR=TXT:kosta010 
		// TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:_enabled CONTENT=NO
		// TAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:_submit
		// TAG POS=1 TYPE=TD ATTR=TXT:kosta010
		// TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:_enabled CONTENT=YES
		// TAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:_submit
		// URL GOTO=192.168.1.1
		// wait seconds=21
		// TAG POS=8 TYPE=TD ATTR=TXT:* EXTRACT=TXT
		// SET !REPLAYSPEED fast
		// set !var1 {{!extract}}
	// `);	iimPlayCode(modem);	
	
	//МОДЕМ-КОСТЯ!; 
	iimPlayCode("clear\nSET !REPLAYSPEED medium\nONLOGIN USER=admin PASSWORD=admin\n URL GOTO=192.168.1.1\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\nwait seconds=2\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=NO\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nwait seconds=5\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=YES\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nURL GOTO=http://192.168.1.1/#broadband.globals\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=YES\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\n wait seconds=60\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT");
		var айпишки = ("ип1: "+iimGetLastExtract(1)+"; IP2: "+iimGetLastExtract(2));

 		iimDisplay('айпи сменили: '+айпишки+'-- терь го переименовывать!;. Строка: '+строка+'('+ДоСтроки+')');
		
	//iimPlay("2_rename/3-logIN+rename.iim"); + 	//iimPlay("2_rename/5-otchet.iim");
	
	iimSet("айпишки",айпишки); 	iimSet("строка",строка);
	iimPlayCode(`
							'=========== смена юзерагента:
							CMDLINE !DATASOURCE useragents.txt
							'количество колонок в этом файле:
							SET !DATASOURCE_COLUMNS 1 
							SET !DATASOURCE_LINE {{строка}}
							SET !USERAGENT {{!COL1}}
							'===========чистим кеши и куки всего компа:
							CLEAR							
							SET почта kodi{{строка}}tj@mail.ru						
							SET !DATASOURCE_DELIMITER ;
							CMDLINE !DATASOURCE C:\\Users\\user\\Onedrive\\tj\\база-tj-kodi.csv
							'количество колонок в этом файле:
							SET !DATASOURCE_COLUMNS 6
							SET !DATASOURCE_LINE {{строка}}
							SET ринейм {{!COL6}}
							SET !ERRORIGNORE YES
							SET !REPLAYSPEED medium
							wait seconds=2
							URL GOTO=https://m.avito.ru/profile
							wait seconds=2
							URL GOTO=https://m.avito.ru/profile
							TAG POS=1 TYPE=INPUT:EMAIL FORM=ACTION:/profile/login ATTR=NAME:login CONTENT={{почта}}
							TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/profile/login ATTR=NAME:password CONTENT=kostia22
							TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/profile/login ATTR=*
							SCREENSHOT TYPE=Browser FOLDER=C:\\Users\\user\\Onedrive\\tj\\результаты\\скрины\\{{строка}}  FILE={{строка}}---3переим-tj-каб-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}].jpg
							TAG POS=1 TYPE=SPAN ATTR=TXT:Настройки
							TAG POS=1 TYPE=A ATTR=TXT:Изменить
							TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/profile/settings/edit ATTR=ID:name CONTENT={{ринейм}}
							TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/profile/settings/edit ATTR=*	
							
							'го  делать_отчет + копировать ссылку  --- iimPlay("2_rename/4-copy-URL.iim");
							URL GOTO=https://m.avito.ru/profile
							TAG POS=1 TYPE=A ATTR=HREF:https://m.avito.ru/profile/item/*														
							SET !EXTRACT #{{строка}},<sp>{{!NOW:dd.mm.yyyy}}<sp>[{{!NOW:hh:nn}}],<sp>{{!URLCURRENT}},<sp>{{айпишки}}
							'сохраняем все ето дело:
							SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\user\\Onedrive\\tj\\результаты FILE=3-переим-tj.txt
							SCREENSHOT TYPE=Page FOLDER=C:\\Users\\user\\Onedrive\\tj\\\результаты\\скрины\\ FILE={{строка}}---3переим-tj-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}].jpg
							wait seconds=2
							url goto=2ip.ru
	`)
}


	