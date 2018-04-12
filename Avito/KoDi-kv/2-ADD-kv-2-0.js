iimPlayCode("SET !REPLAYSPEED fast\n TAB CLOSEALLOTHERS\n SET !DATASOURCE_DELIMITER ;\n CMDLINE !DATASOURCE C:\\Users\\user\\Onedrive\\недвижка\\база-недвижка-kodi.csv\n SET !DATASOURCE_COLUMNS 4\n SET !DATASOURCE_LINE 2\n SET !EXTRACT {{!COL2}}\n add !extract {{!COL4}}")
var СоСтроки = Number(iimGetLastExtract(1)); 
var ДоСтроки = Number(iimGetLastExtract(2));

for(i=СоСтроки;i<ДоСтроки+1;i++){
	
	
iimPlayCode("URL GOTO=file://C:\Windows\Media\chimes.wav")
iimDisplay("Входим в админку+Меняем айпи. Строка: "+i+"("+ДоСтроки+")");

//МОДЕМ-КОСТЯ!; 
iimPlayCode("clear\nSET !REPLAYSPEED medium\nONLOGIN USER=admin PASSWORD=admin\n URL GOTO=192.168.1.1\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\nwait seconds=2\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=NO\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nwait seconds=5\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=YES\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nURL GOTO=http://192.168.1.1/#broadband.globals\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=YES\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\n wait seconds=60\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT");

var айпишки = ("IP1: "+iimGetLastExtract(1)+"; ip2: "+iimGetLastExtract(2));	
iimDisplay('Го добавлять!;. Строка: '+i+'('+ДоСтроки+')'+'айпишки = '+айпишки);
iimSet("айпишки",айпишки); iimSet("строка",i);
			
		iimPlayCode(`
							'=========== смена юзерагента:
							CMDLINE !DATASOURCE useragents.txt
							'количество колонок в этом файле:
							SET !DATASOURCE_COLUMNS 1 
							SET !DATASOURCE_LINE {{строка}}
							SET !USERAGENT {{!COL1}}
							'===========чистим кеши и куки всего компа:
							CLEAR
							SET почта kodi{{строка}}kv@mail.ru							
							SET !ERRORIGNORE YES
							SET !REPLAYSPEED medium
							wait seconds=2
	URL GOTO=https://m.avito.ru/profile
							wait seconds=2
	URL GOTO=https://m.avito.ru/profile
							TAG POS=1 TYPE=INPUT:EMAIL FORM=ACTION:/profile/login ATTR=NAME:login CONTENT={{почта}}
							TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/profile/login ATTR=NAME:password CONTENT=kostia22
							TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/profile/login ATTR=*								
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
					   'Генерируем случайный АДРЕС и связанный с ним ид_МЕТРО:
						SET !VAR1 EVAL("var randomNumber=Math.floor(Math.random()*254 + 1); randomNumber;")
						CMDLINE !DATASOURCE metro+addr.2-0.txt
					    'количество колонок в этом файле:
						SET !DATASOURCE_COLUMNS 5
						SET !DATASOURCE_LINE {{!VAR1}}
						set метро {{!COL4}}
						set адрес {{!COL5}}
						set этаж {{!COL2}}
						set этажей {{!COL3}}
						set площадь {{!COL1}}
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:metro_id CONTENT=%{{метро}}
						TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:param_493 CONTENT={{адрес}}					
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_501 CONTENT={{этаж}}
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_502 CONTENT={{этажей}}
						TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:param_500 CONTENT={{площадь}}
						'клик на ДОП ПАРАМЕТРЫ:
						URL GOTO=javascript:window.scrollBy(0,444)
						TAG POS=1 TYPE=SPAN ATTR=TXT:Дополнительные<SP>параметры
						URL GOTO=javascript:window.scrollBy(0,444)
						'Генерируем диваны и спальни
						SET кроватей EVAL("var randomNumber=Math.floor(Math.random()*3 + 1); randomNumber;")
						SET мест EVAL("var randomNumber=Math.floor(Math.random()*(4 -2+1)+1); randomNumber;")
						'кл-во кроватей
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_1514_0_1351 CONTENT={{кроватей}}
						'кол-во спальных мест
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_1349_0_1350 CONTENT={{мест}}
						'пошли птички:
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1352_0_1353_15264 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1352_0_1353_15265 CONTENT=YES
						URL GOTO=javascript:window.scrollBy(0,444)
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1352_0_1353_15266 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1354_0_1355_15267 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1354_0_1355_15268 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1354_0_1355_15269 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1354_0_1355_15270 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1354_0_1355_15271 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1356_0_1357_15273 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1354_0_1355_15272 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1356_0_1357_15274 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1356_0_1357_15275 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1356_0_1357_15276 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1358_0_1359_15281 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1358_0_1359_15280 CONTENT=YES
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:param_1358_0_1359_15279 CONTENT=YES
						URL GOTO=javascript:window.scrollBy(0,444)
			'ОПИСАНИЕ:
						SET !DATASOURCE_DELIMITER ;					
						CMDLINE !DATASOURCE C:\\Users\\User\\OneDrive\\недвижка\\база-недвижка-kodi.csv
						SET !DATASOURCE_COLUMNS 10
						SET !DATASOURCE_LINE {{строка}}
						set описалово {{!COL10}}
						TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=ID:description CONTENT={{описалово}}
			' ценник:
						SET ценник EVAL("var randomNumber=Math.floor(Math.random()*(2222-1444+1)+1444); randomNumber;")
						TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:price CONTENT={{ценник}}
			'КАРТИНКА:
						SET !REPLAYSPEED medium
						TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=ID:image_upload CONTENT=C:\\Users\\User\\OneDrive\\недвижка\\фото-для-подачи-кв\\dsc<SP>({{строка}}).jpg						
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
							SET !EXTRACT #{{строка}},<sp>{{!NOW:dd.mm.yyyy}}<sp>[{{!NOW:hh:nn}}],<sp>{{!URLCURRENT}},<sp>{{айпишки}}
							'сохраняем все ето дело:
							SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\User\\Onedrive\\недвижка\\результаты FILE=#2---добавляшки-кв.txt
							SCREENSHOT TYPE=Page FOLDER=C:\\Users\\User\\Onedrive\\недвижка\\результаты\\скрины FILE={{строка}}---2добавляшки-кв-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}].jpg
 							wait seconds = 111		
							`)
	 
}


//LOVE!
