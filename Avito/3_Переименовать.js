iimPlayCode(`
					CMDLINE !DATASOURCE C:\\Users\\Диана\\Onedrive\\недвижка\\база.txt
					'количество колонок в этом файле:
					SET !DATASOURCE_COLUMNS 4
					SET !DATASOURCE_LINE 3
					SET !EXTRACT {{!COL2}}
					add !extract {{!COL4}}
`)
var СоСтроки = Number(iimGetLastExtract(1)); var ДоСтроки = Number(iimGetLastExtract(2));

for(i=СоСтроки;i<ДоСтроки+1;i++){
	
		iimDisplay('Входим в админку+Меняем айпи. Строка: '+i+'('+ДоСтроки+')');
 	iimPlayCode(`
					SET !ERRORIGNORE YES
					SET !TIMEOUT_TAG 2
					SET !TIMEOUT_STEP 3
					SET !TIMEOUT_PAGE 6
					URL GOTO=http://192.168.1.1/#broadband.globals
					wait seconds = 3
					TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:userName CONTENT=admin
					TAG POS=1 TYPE=INPUT:PASSWORD ATTR=ID:pcPassword CONTENT=admin
					TAG POS=1 TYPE=BUTTON ATTR=ID:loginBtn
					wait seconds=3
					TAG POS=1 TYPE=A ATTR=ID:menu_network
					wait seconds=4
					TAG POS=6 TYPE=TD ATTR=TXT:* EXTRACT=TXT
					'=========== МЕНЯЕМ ИП = GO в роутер:
					URL GOTO=http://192.168.1.1/#broadband.globals
					wait seconds=3
					TAG POS=1 TYPE=INPUT:BUTTON ATTR=*
					wait seconds=3
					TAG POS=1 TYPE=INPUT:BUTTON ATTR=*
					wait seconds= 15
					TAG POS=6 TYPE=TD ATTR=TXT:* EXTRACT=TXT
	`)			
		var ip1 = iimGetLastExtract(1); var ip2 = iimGetLastExtract(2);															 
		iimDisplay('Го переименовывать!;. Строка: '+i+'('+ДоСтроки+')');
		
 	var айпишки = ("Старый ип: "+ip1+"; Новый IP: "+ip2);
	iimSet("айпишки",айпишки); 	iimSet("строка",i);
	iimPlayCode(`
							'=========== смена юзерагента:
							CMDLINE !DATASOURCE useragents.txt
							'количество колонок в этом файле:
							SET !DATASOURCE_COLUMNS 1 
							SET s EVAL("var s=Math.floor(Math.random()*999 + 1); s;")
							SET !DATASOURCE_LINE {{s}}
							SET !USERAGENT {{!COL1}}
							'===========чистим кеши и куки всего компа:
							CLEAR
							'=========БАЗА:- РИНЕЙМ + почту:
							CMDLINE !DATASOURCE C:\\Users\\Диана\\OneDrive\\недвижка\\база.txt
							'количество колонок в этом файле:
							SET !DATASOURCE_COLUMNS 7
							SET !DATASOURCE_LINE {{строка}}
							SET почта kostia7alania{{!COL1}}@mail.ru
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
							SCREENSHOT TYPE=Browser FOLDER=C:\\Users\\Диана\\Onedrive\\недвижка\\результаты\\скрины FILE={{строка}}-переим-кабинет.jpg
							TAG POS=1 TYPE=SPAN ATTR=TXT:Настройки
							TAG POS=1 TYPE=A ATTR=TXT:Изменить
							TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/profile/settings/edit ATTR=ID:name CONTENT={{ринейм}}
							TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/profile/settings/edit ATTR=*	
							
							'го  делать_отчет + копировать ссылку  --- iimPlay("2_rename/4-copy-URL.iim");
							URL GOTO=https://m.avito.ru/profile
							TAG POS=1 TYPE=A ATTR=HREF:https://m.avito.ru/profile/item/*
														
							SET !EXTRACT "#{{строка}}, Ссылка: {{!URLCURRENT}}, айпишки: {{айпишки}}, дата: {{!NOW:ДАТА=dd.mm.yyyy-hh:nn}}"
							'сохраняем все ето дело:
							SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\Диана\\Onedrive\\недвижка\\результаты FILE=отчет_переименовашки.txt
							SCREENSHOT TYPE=Page FOLDER=C:\\Users\\Диана\\Onedrive\\недвижка\\\результаты\\скрины FILE={{строка}}-переименоваш-объява.jpg
							wait seconds=2
							url goto=2ip.ru
	`)
}


	