iimPlayCode(`	'=========== смена юзерагента:
							SET !USERAGENT {{useragent}}
							SET !ERRORIGNORE YES
							SET !REPLAYSPEED medium
							wait seconds=2
						URL GOTO=https://m.avito.ru/profile
						URL GOTO=https://m.avito.ru/add						
						URL GOTO=https://m.avito.ru/add
'предложение услуг:
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:category_id CONTENT=%114
'кат=ремонт и строительство
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_716 CONTENT=%10208
						
						'Генерируем АДРЕС и связанный с ним ид_МЕТРО:	
						SET !DATASOURCE_DELIMITER ;					
						CMDLINE !DATASOURCE C:\\Users\\User\\Onedrive\\tj\\база-tj-kodi.csv
						'количество колонок в этом файле:
						SET !DATASOURCE_COLUMNS 13
						SET !DATASOURCE_LINE {{строка}}
						set заголовок {{!COL12}}	
						set описалово {{!COL13}}	
						set город {{!COL8}}
						set метроИлиГород {{!COL9}}
						set подкатегория {{!COL6}} 
						
						'город:
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:region_id CONTENT=%{{город}}
						'метро (или гоород -в области)
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:metro_id CONTENT=%{{метроИлиГород}}
						'метро или подмск
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_1378 CONTENT=%{{подкатегория}}
						TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:title CONTENT={{заголовок}}
						TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=ID:description CONTENT={{описалово}}
			' ценник:
						SET ценник EVAL("var randomNumber=Math.floor(Math.random()*(2222-1444+1)+1444); randomNumber;")
						TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:price CONTENT={{ценник}}
			'КАРТИНКА:
						SET !REPLAYSPEED medium
						TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=ID:image_upload CONTENT=C:\\Users\\User\\OneDrive\\tj\\фото-для-подачи-tj\\{{строка}}.jpg		
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
							SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\User\\Onedrive\\tj\\результаты FILE=#2---добавляшки-tj.txt
							SCREENSHOT TYPE=Page FOLDER=C:\\Users\\User\\Onedrive\\tj\\результаты\\скрины FILE={{строка}}---2добавляшки-tj-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}].jpg
 							wait seconds = 60
							`)






	// function копиБоди() {var x = window.document.getElementsByTagName("body")[0].textContent; return x;}

	// // function getNum1(){x=копиБоди(); x=x.split(':')[1]; x=x.split(',')[0]; x=x.split('"')[1]; return x;}//берет "1" из getNum {"response":"1","tzid":"22613497"} 	
	// // function гетКодОперации(){var x=копиБоди(); x=x.split(':')[2]; x=x.split('}')[0]; x=x.split('"')[1]; iimDisplay('кодОперации = '+x); return x;}
	
	// // function смсКопиИподтвердить() {var sms=копиБоди(); sms=sms.split(':')[2]; sms=sms.split(',')[0];  sms=sms.split('.')[0]; sms=sms.split('"')[2]; if(sms=="") {var sms=копиБоди(); sms=sms.split(':')[2]; sms=sms.split(',')[0]; sms=sms.split('.')[0]; sms=sms.split('"')[1];}; if(String(sms)=="undefined") {var sms=копиБоди(); sms=sms.split(':')[2]; sms=sms.split(',')[0]; sms=sms.split('.')[0]; sms=sms.split('"')[1];}; iimPlayCode(ПодтвердитьСмс); }
	
	
	// // var ПодтвердитьСмс=`TAB T=2\n TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:code  CONTENT={{sms}}`;		
		
// // смсКопиИподтвердить();



	// function сборОтчета(строка) {iimSet("useragent", useragent); iimSet("айпишки", айпишки); iimSet("строка",строка); iimPlayCode(отчет); iimSet("строка",строка); iimPlayCode(avtoPilotCount); iimSet("строка",строка);  iimSet("useragent", useragent); iimPlayCode(ADD);}; 
	// function заполнитьАвитоДанными(строка){iimSet("строка", строка); iimSet("useragent", useragent); iimPlayCode(avito_std_zap);};
	// var пауза = {сек5: 'wait seconds=5', сек10: 'wait seconds=10', сек20: 'wait seconds=20'}
	// function копиУрлАвито()  {iimPlayCode("SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB T=0\n"); iimPlayCode("tab t=2"); iimPlayCode("SET !REPLAYSPEED fast\nset !extract {{!urlcurrent}}\n SET !TIMEOUT_STEP 0\nTAB T=0\n"); x=iimGetLastExtract(1); return x;}
	// //function узнатьБаянностьТелефона()  {var s=content.document.getElementsByClassName('row-message message-error')[0].innerHTML;   return s; }
	// var тестоваяпеременная=0
	// var genUserAg = `SET !REPLAYSPEED fast\nCMDLINE !DATASOURCE useragents.txt\n SET !DATASOURCE_COLUMNS 1\nSET !DATASOURCE_LINE {{строка}}\n SET !EXTRACT {{!COL1}}\n`
	// iimSet("строка",строка); iimPlayCode(genUserAg); var useragent = iimGetLastExtract(1);

	
		// function смсКопиИподтвердить() {iimPlayCode("SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB T=0"); sms=копиБоди(); sms=sms.split(':')[2]; sms=sms.split(',')[0]; sms=sms.split('.')[0]; sms=sms.split('"')[2]; if(sms=="") {var sms=копиБоди(); sms=sms.split(':')[2]; sms=sms.split(',')[0]; sms=sms.split('.')[0]; sms=sms.split('"')[1];}; if(String(sms)=="undefined") {var sms=копиБоди(); sms=sms.split(':')[2]; sms=sms.split(',')[0]; sms=sms.split('.')[0]; sms=sms.split('"')[1];}; iimSet("sms",sms); iimSet("useragent", useragent); iimPlayCode(ПодтвердитьСмс);}