iimPlayCode("SET !REPLAYSPEED fast\n TAB CLOSEALLOTHERS\n SET !DATASOURCE_DELIMITER ;\n CMDLINE !DATASOURCE C:\\Users\\user\\Onedrive\\tj\\база-tj-kodi.csv\n SET !DATASOURCE_COLUMNS 4\n SET !DATASOURCE_LINE 2\n SET !EXTRACT {{!COL2}}\n add !extract {{!COL4}}")
var СоСтроки = Number(iimGetLastExtract(1)); 
var ДоСтроки = Number(iimGetLastExtract(2));

for(i=СоСтроки;i<ДоСтроки+1;i++){
	

	iimDisplay('Входим в админку+Меняем айпи. Строка: '+строка+'('+ДоСтроки+')');
	//МОДЕМ-КОСТЯ!; 
	var modemKostia = `clear\n ONLOGIN USER=admin PASSWORD=admin\n URL GOTO=192.168.1.1\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\nwait seconds=2\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=NO\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nwait seconds=5\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=5\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=YES\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nwait seconds=11\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT\n`
	function testModem1(){x=iimGetLastExtract(1); x=x.split('.')[0]; x+="."; y=iimGetLastExtract(1);y=y.split('.')[1]; x+=y; return x;}	
	function testModem2(){x=iimGetLastExtract(2); x=x.split('.')[0]; x+="."; y=iimGetLastExtract(2);y=y.split('.')[1]; x+=y; return x;}
	
	do{ iimPlayCode(modemKostia)
	}while(testModem1()==testModem2()||testModem1()=="#EANF#.undefined"||testModem2()=="#EANF#.undefined"||testModem1()=="None.undefined"||testModem2()=="None.undefined")
	var айпишки = ("ип1: "+iimGetLastExtract(1)+"; IP2: "+iimGetLastExtract(2));
 	iimDisplay('айпи сменили: '+айпишки+'-- терь го РЕГАТЬ!;. Строка: '+строка+'('+ДоСтроки+')');	
	
	iimSet("айпишки",айпишки); iimSet("строка",i);
			
		iimPlayCode(`
								'=========== смена юзерагента:
							SET !USERAGENT {{useragent}}
							SET !ERRORIGNORE YES
							SET !REPLAYSPEED medium
							wait seconds=2
							URL GOTO=https://m.avito.ru/profile
							SET почта kodi{{строка}}tj@mail.ru						
							SET !ERRORIGNORE YES
							SET !REPLAYSPEED medium
							wait seconds=2
							TAG POS=1 TYPE=INPUT:EMAIL FORM=ACTION:/profile/login ATTR=NAME:login CONTENT={{почта}}
							TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/profile/login ATTR=NAME:password CONTENT=kostia22
							TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/profile/login ATTR=*								
						WAIT SECONDS=5
						URL GOTO=https://m.avito.ru/add
'предложение услуг:
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:category_id CONTENT=%114
'кат=ремонт и строительство
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_716 CONTENT=%10208
'ОПИСАНИЕ:
						SET !DATASOURCE_DELIMITER ;					
						CMDLINE !DATASOURCE C:\\Users\\User\\OneDrive\\tj\\база-tj-kodi.csv
						SET !DATASOURCE_COLUMNS 10
						SET !DATASOURCE_LINE {{строка}}
						set описалово {{!COL10}}
						set подкатегория {{!COL7}}
						set заголовок {{!COL9}}
						SET ценник EVAL("var randomNumber=Math.floor(Math.random()*(2222-1444+1)+1444); randomNumber;")					
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:param_1378 CONTENT=%{{подкатегория}}
						TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:title CONTENT={{заголовок}}
						TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=ID:description CONTENT={{описалово}}
						TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:price CONTENT={{ценник}} 
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:region_id CONTENT=%637640
						SET метро EVAL("var randomNumber=Math.floor(Math.random()*147 + 1); randomNumber;")
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:metro_id CONTENT=%{{метро}}
'КАРТИНКА:
						SET !REPLAYSPEED medium
						TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=ID:image_upload CONTENT=C:\\Users\\User\\OneDrive\\tj\\фото-для-подачи-tj\\dsc<SP>({{строка}}).jpg					
						wait seconds=7
			'клик по ПРОДОЛЖИТЬ:
						TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*
						TAG POS=1 TYPE=SPAN ATTR=TXT:Обычная<SP>продажа
						TAG POS=1 TYPE=INPUT:RADIO FORM=NAME:NoFormName ATTR=ID:service_no
						TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:service_premium CONTENT=NO
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:service_vip CONTENT=NO
						TAG POS=1 TYPE=INPUT:CHECKBOX FORM=NAME:NoFormName ATTR=ID:service_highlight CONTENT=NO
						TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*
						TAG POS=1 TYPE=A ATTR=TXT:Перейти<SP>к<SP>объявлению
			'скрин+отчет:
							URL GOTO=https://m.avito.ru/profile
							wait seconds=1
							TAG POS=1 TYPE=A ATTR=HREF:https://m.avito.ru/profile/item/*
							wait seconds=1
							SET !EXTRACT #{{строка}},<sp>{{!NOW:dd.mm.yyyy}}<sp>[{{!NOW:hh:nn}}],<sp>{{!URLCURRENT}},<sp>{{айпишки}}
							'сохраняем все ето дело:
							SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\User\\Onedrive\\tj\\результаты FILE=#2---ADD-tj.txt
							SCREENSHOT TYPE=Page FOLDER=C:\\Users\\User\\Onedrive\\tj\\результаты\\скрины FILE={{строка}}---2ADD-tj-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}].jpg
 							wait seconds = 111		
							`)
	 
}


//LOVE!
