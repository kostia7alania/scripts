//КОсти база:
iimPlayCode(`SET !REPLAYSPEED fast\n TAB CLOSEALLOTHERS\n tab open\n tab open\n SET !DATASOURCE_DELIMITER ;\n CMDLINE !DATASOURCE C:\\Users\\user\\Onedrive\\tj\\автопилот-рег+адд-tj.txt\n SET !DATASOURCE_COLUMNS 1\n SET !DATASOURCE_LINE 1\n SET !EXTRACT {{!COL1}}`)


var СоСтроки = Number(iimGetLastExtract(1));   var ДоСтроки =99;


for(var строка=СоСтроки;строка<ДоСтроки+1;строка++)
{	//МОДЕМ-КОСТЯ!; 
	var modemKostia = `clear\n ONLOGIN USER=admin PASSWORD=admin\n URL GOTO=192.168.1.1\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\nwait seconds=2\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=NO\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nwait seconds=5\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=YES\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nwait seconds=15\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT\n`
	function testModem1(){x=iimGetLastExtract(1); x=x.split('.')[0]; x+="."; y=iimGetLastExtract(1);y=y.split('.')[1]; x+=y; return x;}	
	function testModem2(){x=iimGetLastExtract(2); x=x.split('.')[0]; x+="."; y=iimGetLastExtract(2);y=y.split('.')[1]; x+=y; return x;}
	var g=1;
	do{ iimDisplay('Входим в админку+Меняем айпи. Попытка #'+g+'. Строка: '+строка+'('+ДоСтроки+')');
	iimPlayCode(modemKostia);
	g++;
	}while(testModem1()==testModem2()||testModem1()=="#EANF#.undefined"||testModem2()=="#EANF#.undefined"||testModem1()=="None.undefined"||testModem2()=="None.undefined")
	var айпишки = ("ип1: "+iimGetLastExtract(1)+"; IP2: "+iimGetLastExtract(2));
 	iimDisplay('айпи сменили c попытки №'+g+'; '+айпишки+'-- терь го РЕГАТЬ!;. Строка: '+строка+'('+ДоСтроки+')');	
	
	var	avtoPilotCount = `set counter {{строка}}\n ADD counter 1\n SET !EXTRACT {{counter}}\n FILEDELETE NAME=C:\\Users\\user\\OneDrive\\tj\\автопилот-рег+адд-tj.txt\n SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\user\\OneDrive\\tj FILE=автопилот-рег+адд-tj.txt`

	var ADD = `			'=========== смена юзерагента:
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
						SET !DATASOURCE_COLUMNS 14
						SET !DATASOURCE_LINE {{строка}}
						set заголовок {{!COL13}}	
						set описалово {{!COL14}}	
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
 							wait seconds = 11
	'////////GO22222222222222222\\\\\\\\\\
							
							SET !EXTRACT NULL
						URL GOTO=https://m.avito.ru/add
						URL GOTO=https://m.avito.ru/add
'продукты питания:
						'Генерируем АДРЕС и связанный с ним ид_МЕТРО:
						SET !DATASOURCE_DELIMITER ;					
						CMDLINE !DATASOURCE C:\\Users\\User\\Onedrive\\ch\\база-ch-kodi.csv
						'количество колонок в этом файле:
						SET !DATASOURCE_COLUMNS 14
						SET !DATASOURCE_LINE {{строка}}
						SET категория {{!COL6}}
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:category_id CONTENT=%{{категория}}
						'город:
						set город {{!COL8}}
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:region_id CONTENT=%{{город}}
						'метро (или гоород -в области)
						set метроИлиГород {{!COL9}}						
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:metro_id CONTENT=%{{метроИлиГород}}
						'метро или подмск
						set заголовок {{!COL13}}
						set описалово {{!COL14}}
						TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:title CONTENT={{заголовок}}					
						TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=ID:description CONTENT={{описалово}} 
			' ценник:
						SET ценник EVAL("var randomNumber=Math.floor(Math.random()*(45-85+1)+85); randomNumber;")
						TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:price CONTENT={{ценник}}
			'КАРТИНКА:
						SET !REPLAYSPEED medium
						TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=ID:image_upload CONTENT=C:\\Users\\User\\OneDrive\\ch\\фото-для-подачи-ch\\{{строка}}.jpg		
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
							SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\User\\Onedrive\\ch\\результаты FILE=#2---добавляшки-ch.txt
							SCREENSHOT TYPE=Page FOLDER=C:\\Users\\User\\Onedrive\\ch\\результаты\\скрины FILE={{строка}}---2добавляшки-ch-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}].jpg
 							wait seconds = 11
							iimPlayCode("URL GOTO=imacros://run/?m=path/file.js")
							
'//LOVE!`
		
	var пас=`TAB T=2\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:password CONTENT=kostia22\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:confirm CONTENT=kostia22\n TAB T=1`;	
	var кап = `SET !ERRORIGNORE YES\n TAB T=2\n FILTER TYPE=IMAGES STATUS=OFF\n ONDOWNLOAD FOLDER="C:\\" FILE=cap.jpg WAIT=YES\n	TAG POS=1 TYPE=IMG ATTR=SRC:https://m.avito.ru/captcha?* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT\n TAB T=3\n URL GOTO=http://imacros2.rucaptcha.com/new/\n TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:key CONTENT=6440c629b2418bf14c6ca56d0e7e21d0\n TAG POS=1 TYPE=INPUT:FILE ATTR=NAME:file CONTENT="C:\\cap.jpg"\n ONDIALOG POS=1 BUTTON=OK CONTENT=\n TAG POS=1 TYPE=INPUT:SUBMIT ATTR=*\n SET !EXTRACT NULL\n WAIT SECONDS=3\n TAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT\n TAB T=2\n TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:captcha CONTENT={{!EXTRACT}}\n TAB T=1`;
	var ПолучитьКод = `SET !ERRORIGNORE YES\nSET !USERAGENT {{useragent}}\nTAB T=2\n TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Получить<SP>код\n TAB T=1`
	var avito_std_zap=`SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !USERAGENT {{useragent}}\nTAB T=2\n URL GOTO=https://m.avito.ru/profile/registration\nSET !DATASOURCE_DELIMITER ;\n CMDLINE !DATASOURCE C:\\Users\\User\\Onedrive\\tj\\база-tj-kodi.csv\n SET !DATASOURCE_COLUMNS 13\n SET !DATASOURCE_LINE {{строка}}\n SET почта {{!COL1}}{{строка}}{{!COL2}}\n TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=ID:email CONTENT={{почта}}\nCMDLINE !DATASOURCE names4reg.txt\n SET !DATASOURCE_COLUMNS 1\n SET !VAR1 EVAL("var s=Math.floor(Math.random()*100 + 1); s;")\n SET !DATASOURCE_LINE {{!VAR1}}\n SET имя {{!COL1}}\n TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:name CONTENT={{имя}}\n tab t=1`;
	var ВставитьТелефон = `SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\ntab t=2\n TAG POS=1 TYPE=INPUT:TEL FORM=NAME:NoFormName ATTR=ID:phone CONTENT={{телефон}}\n TAB T=1` 
	var ПодтвердитьСмс=`SET !REPLAYSPEED fast\nSET !USERAGENT {{useragent}}\nSET !ERRORIGNORE YES\nTAB T=2\n TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:code CONTENT={{sms}}\n TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Подтвердить\n wait seconds = 5\n set !extract {{!URLCURRENT}}\n tab t=1`;
	var Зарегаться=`SET !ERRORIGNORE YES\nSET !USERAGENT {{useragent}}\nTAB T=2\n TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*\n wait seconds=5\n TAB T=1`
	//отчетКОСТЯ:
	var отчет=`SET !REPLAYSPEED fast\n SET !USERAGENT {{useragent}}\n SET !ERRORIGNORE YES\ntab t=2\nURL GOTO=https://m.avito.ru/profile/settings\nwait seconds=2\nSCREENSHOT TYPE=Page FOLDER=C:\\Users\\user\\OneDrive\\tj\\результаты\\скрины FILE={{строка}}---1регистрация-tj-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}].jpg\n SET !EXTRACT #{{строка}},<sp>{{!NOW:dd.mm.yyyy}}<sp>[{{!NOW:hh:nn}}],<sp>{{!URLCURRENT}},<sp>{{айпишки}}\n SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\user\\OneDrive\\tj\\результаты FILE=1---регистрация-tj.txt\nTab t=1`;

	var setOperationOver=`SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nTAB T=0\nSET !TIMEOUT_STEP 3\nURL GOTO=http://api.sms-reg.com/setOperationOver.php?tzid={{x}}&apikey=xdct565ohw5cjx378fhjtxpuoxg4m5dj\nwait seconds=2`;
	var setOperationUsed=`SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nTAB T=0\nSET !TIMEOUT_STEP 3\nURL GOTO=http://api.sms-reg.com/setOperationUsed.php?tzid={{x}}&apikey=xdct565ohw5cjx378fhjtxpuoxg4m5dj\nwait seconds=2`;
	var setOperationRevise=`SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nTAB T=0\nSET !TIMEOUT_STEP 3\nURL GOTO=http://api.sms-reg.com/setOperationRevise.php?tzid={{x}}&apikey=xdct565ohw5cjx378fhjtxpuoxg4m5dj\nwait seconds=2`;
	var setReady=`SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nTAB T=0\nSET !TIMEOUT_STEP 3\nURL GOTO=http://api.sms-reg.com/setReady.php?tzid={{x}}&apikey=xdct565ohw5cjx378fhjtxpuoxg4m5dj\nwait seconds=2`;
	var getState=`SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nTAB T=0\nSET !TIMEOUT_STEP 3\nURL GOTO=http://api.sms-reg.com/getState.php?tzid={{x}}&apikey=xdct565ohw5cjx378fhjtxpuoxg4m5dj\nwait seconds=2`;
	function getNum1(){x=копиБоди(); x=x.split(':')[1]; x=x.split(',')[0]; x=x.split('"')[1]; return x;}//берет "1" из getNum {"response":"1","tzid":"22613497"} 	
	function гетКодОперации(){var x=копиБоди(); x=x.split(':')[2]; x=x.split('}')[0]; x=x.split('"')[1]; iimDisplay('кодОперации = '+x); return x;}
	function копиБоди() {var x = window.document.getElementsByTagName("body")[0].textContent; return x;}
	function copyPastTelNum(){iimPlayCode('SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB T=0\n'); var tel=копиБоди(); tel=tel.split(':')[2]; tel=tel.split(',')[0]; iimSet("телефон",tel); iimPlayCode(ВставитьТелефон);}
	function smsAnswerTest() {var smstest=копиБоди(); smstest=smstest.split(':')[1]; smstest=smstest.split(',')[0]; return smstest;}
	function смсКопиИподтвердить() {iimPlayCode("SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB T=0"); sms=копиБоди(); sms=sms.split(':')[2]; sms=sms.split(',')[0]; sms=sms.split('.')[0];sms=sms.split('"')[2]; if(sms=="") {var sms=копиБоди(); sms=sms.split(':')[2]; sms=sms.split(',')[0]; sms=sms.split('.')[0]; sms=sms.split('"')[1];}; if(String(sms)=="undefined") {var sms=копиБоди(); sms=sms.split(':')[2]; sms=sms.split(',')[0]; sms=sms.split('.')[0]; sms=sms.split('"')[1];}; iimSet("sms",sms); iimSet("useragent", useragent); iimPlayCode(ПодтвердитьСмс);}
	function сборОтчета(строка) {iimSet("useragent", useragent); iimSet("айпишки", айпишки); iimSet("строка",строка); iimPlayCode(отчет); iimSet("строка",строка); iimPlayCode(avtoPilotCount); iimSet("строка",строка);  iimSet("useragent", useragent); iimPlayCode(ADD);}; 
	function заполнитьАвитоДанными(строка){iimSet("строка", строка); iimSet("useragent", useragent); iimPlayCode(avito_std_zap);};
	var пауза = {сек5: 'wait seconds=5', сек10: 'wait seconds=10', сек20: 'wait seconds=20'}
	function копиУрлАвито()  {iimPlayCode("SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB T=0\n"); iimPlayCode("tab t=2"); iimPlayCode("SET !REPLAYSPEED fast\nset !extract {{!urlcurrent}}\n SET !TIMEOUT_STEP 0\nTAB T=0\n"); x=iimGetLastExtract(1); return x;}
	//function узнатьБаянностьТелефона()  {var s=content.document.getElementsByClassName('row-message message-error')[0].innerHTML;   return s; }
	var тестоваяпеременная=0
	var genUserAg = `SET !REPLAYSPEED fast\nCMDLINE !DATASOURCE useragents.txt\n SET !DATASOURCE_COLUMNS 1\nSET !DATASOURCE_LINE {{строка}}\n SET !EXTRACT {{!COL1}}\n`
	iimSet("строка",строка); iimPlayCode(genUserAg); var useragent = iimGetLastExtract(1);
		sms6:
		for(var smsREG=1;smsREG<333;smsREG++) //создадим ФОР,Чтоб ТОЛЬКО удержать тупорылого смс-рега в рельсах!!;	
		{	iimDisplay('Итерация имени smsREG сейчас на шаге повтора:'+smsREG);
			iimPlayCode('url goto = http://api.sms-reg.com/getNum.php?country=ru&service=avito&apikey=xdct565ohw5cjx378fhjtxpuoxg4m5dj')
			iimPlayCode(пауза.сек10);
			//заполнение базовых данных на авито;
			заполнитьАвитоДанными(строка);
			//GETing телефонa:
			кодОперации=гетКодОперации(); iimSet('x',кодОперации); iimPlayCode(getState);
			if(getNum1()=='TZ_INPOOL') {iimPlayCode(пауза.сек20);}
			iimSet('x',кодОперации); iimPlayCode(getState)
			if(getNum1()!='TZ_NUM_PREPARE') continue sms6//проверка баланса+свободность номеров//защита от WARNING_NO_NUMS
			iimDisplay('Телефон получен! Идем дальше! Сейчас акк= '+строка)
			//переносим телефон на авито
			copyPastTelNum();//КОНЕЦ GETTing'a;
			cap6:
			for(var форКапча=0;форКапча<11;форКапча++)
			{	iimPlayCode(пас);
				iimDisplay("ща будем капчу распознавать-внутри смс-рега"); iimPlayCode("SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB T=0"); 
				iimPlayCode(кап);//переразгадывать7; p.s:больше 2х раз не бывает подстав-поетому капчу можно не замарачивать);
				if(iimGetLastExtract(1)=="ERROR_CAPTCHA_UNSOLVABLE") {iimDisplay("=ГО перераспознавать!!;"); iimPlayCode('SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB T=0'); iimPlayCode(кап); }
				if(iimGetLastExtract(1)=="ERROR_IMAGE_TYPE_NOT_SUPPORTED") {iimDisplay("=ГО перераспознавать!!;"); iimPlayCode('SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB T=0'); iimPlayCode(кап); }
				iimDisplay("капча распознана без телег"); 
				iimSet("useragent", useragent);	iimPlayCode(Зарегаться); //клик по зарегаться
//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//
				//НАЧАЛО глобальной проверки ссылки - где мы нах-ся: а если ссылка не та, то идем проверять-ЧТО ИМЕННО НЕ ТАК!;				
				if(копиУрлАвито()=="https://m.avito.ru/profile/registration/phone_confirm")
				{	iimDisplay("все ок, т.е. тел не by и капча тож подошла; с 1 раза--идем дальше:все идеально;");  
					iimSet("useragent", useragent); iimPlayCode(ПолучитьКод); 
					iimSet('x',кодОперации); iimPlayCode(setReady)
					//=пошла первая проверка кода-активации.......
					smstest5:
					for (var jj=0; jj<30; jj++) 					
					{	iimSet('x',кодОперации); 
						iimPlayCode(getState); //запрос смс-ответа
						iimDisplay("ждем смс-код; Проверка №"+jj+"(30); Сейчас регаем акк: "+строка+"("+ДоСтроки+")");
						iimPlayCode(пауза.сек20);//ТЕСТ: TZ_NUM_ANSWER-код получен; TZ_NUM_WAIT=ждем;;
						var smstest = smsAnswerTest(); iimDisplay("если TZ_NUM_ANSWER - то код получен; TZ_NUM_WAIT - го на паузу;");
						if (smstest=='"TZ_NUM_WAIT"') continue smstest5;
						if (smstest!='"TZ_NUM_ANSWER"') break; //т.е. номер не пригоден-сделаем как бы код не пришел)!;=шли на повторный запрос;!!!;
						//если код пришел -- сюда писать продолжение					
						//код прищел -все хорошо: +копируем смску+урл
						смсКопиИподтвердить();
						//проверка ссылки-2 (правильность-смски):
						if(копиУрлАвито()=="https://m.avito.ru/profile/registration?success=true") //зарегались! УРЯ!; зови журналюг;;;
						{iimDisplay("все ок - журналистов в студию !"); сборОтчета(строка); jj=30; форКапча=11; smsREG=11; break;}
						else //  смс-ка не подошла = запрашиваем уточнение:
						{	iimDisplay("НЕВЕРНЫЙ КОД АКТИВАЦИИ. Сейчас на акке:"+строка+"("+ДоСтроки+")");
							iimSet('x',кодОперации); iimPlayCode(setOperationRevise) //=уточнение смс-кода;
							smstest6:
							for (var jjjj=0; jjjj<25; jjjj++) //++++ЛОГИКА ПРОПИСАНА ПОЛНОСТЬЮ!!++++++;
							{	iimSet('x',кодОперации); iimPlayCode(getState); 
								iimDisplay("ждем смс-код, второй заход; Проверка №"+jjjj+"(25); Сейчас регаем акк: "+строка+"("+ДоСтроки+")"); 
								iimPlayCode(пауза.сек20);
								var smstest = smsAnswerTest(); 
 								if (smstest=='"TZ_NUM_WAIT"') continue smstest6;
								if (smstest=='"TZ_NUM_WAIT2"') continue smstest6;
								if (smstest!='"TZ_NUM_ANSWER2"') 
									{iimDisplay("У меня для тя нейтральный новости - мы гокаем мимо поезда;;;") //код не пришел - запрос на брак - setOperationOver
									iimSet('x',кодОперации); iimPlayCode(setOperationOver); jjjj=25; jj=30;	форКапча=11; break;}
								else //код пришел(со 2 раза) --> сюда писать продолжение	- надо взять код и проверить!
								{	смсКопиИподтвердить(); //проверка №2 ссылки-2 (правильность-смски):							
									if(копиУрлАвито()=="https://m.avito.ru/profile/registration?success=true") //зарегались!;
									{	iimDisplay("зарегались-со 2го раза-журналистов в студию !"); сборОтчета(строка); jjjj=25; jj=30; smsREG=11;	}
									else 
									{	iimDisplay("смс не подошла =со 2 раза-уходим!"); // не зарегались=со 2 раза-уходим!:
										iimDisplay("смс не подошла =со 2 раза-уходим! Сейчас на акке:"+строка+"("+ДоСтроки+")");
										iimSet('x',кодОперации); iimPlayCode(setOperationOver); jjjj=25; jj=30; 
									}; 
								}; 
							break // выход из 	for (var jjjj=0					
							}; //закончили! for (var jjjj=0; jjjj<25; jjjj++) {
						};
					break//гарантированный выход из фора;  for (var jj=0; jj<30; jj++) 
					}; //=КОНЕЦ ПЕРВОЙ ПРОВЕРКИ кода-активации.......
						//1)капча+++++++++++;
						//2)телефон+++++++++;
						//3)смс-------------; НУЖНО ПРОВЕРИТЬ TZ_NUM_WAIT,если НЕ ЭТО состояние,то идем на выкидыш!; иначе-нужен setOperationRevise;
					if(smsREG!=11) //доп проверка - на законопослушных переменных_граждан// чтоб отсчеь зареганные пути;
					{	var smstest = smsAnswerTest(); //мб код так и не пришел В ТЕЧ первых 10 мин- уточним код = setOperationRevise;
							iimDisplay("НЕ пришел код в первые 10 мин!; го на попытку #2!; если TZ_NUM_WAIT - го ревизию; иначе - фиг с етим номером!; сейчас 1=вариант)");
							iimPlayCode('SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB T=0'); iimSet('x',кодОперации); iimPlayCode(setOperationRevise)
							smstest6:
							for (var jjj=0; jjj<25; jjj++) 
							{	iimSet('x',кодОперации); iimPlayCode(getState); 
								iimDisplay("ждем 2-й раз смс-код; Проверка №"+jjj+"(25); Сейчас регаем акк: "+строка+"("+ДоСтроки+")");
								iimPlayCode(пауза.сек20)
								var smstest = smsAnswerTest();
								iimDisplay("TZ_NUM_ANSWER2 - код получен; TZ_NUM_WAIT2 - го на паузу; Сейчас у нас смстест = "+smstest);
								if (smstest=='"TZ_NUM_WAIT"') continue smstest6;
								if (smstest=='"TZ_NUM_WAIT2"') continue smstest6;
								if (smstest!='"TZ_NUM_ANSWER2"') break; //выкинуть нафиг! ужеж;
								//код пришел(со 2.2 раза) --> сюда писать продолжение		
								смсКопиИподтвердить(); //проверка №2 ссылки-2 (правильность-смски):						
								if(копиУрлАвито()=="https://m.avito.ru/profile/registration?success=true") //зарегались!;
								{	iimDisplay("зарегались-со 2.2.го раза-журналистов в студию !"); сборОтчета(строка); форКапча=11; jjjj=25; jjj=30; smsREG=11;}
								else 
								{	iimDisplay("смс не подошла =со 2 раза-уходим!"); // не зарегались=со 2 раза-уходим!:
									iimDisplay("смс не подошла =со 2 раза-уходим! Сейчас на акке:"+строка+"("+ДоСтроки+")");
									iimSet('x',кодОперации); iimPlayCode(setOperationOver); jjjj=25; jjj=30; 
								}; 
							}
							//доп проверка на вшивость;и шлем их нах;
							if(smsREG!=11)
							{	iimDisplay("У меня для тя нейтральная новость - мы гокаем мимо поезда;;;//код не пришел - запрос на брак - setOperationOver") 
								iimSet('x',кодОперации); iimPlayCode(setOperationOver);
								iimPlayCode(пауза.сек5); форКапча=11;
							}
					}
					else //эвакуируем народ));
					{  //ничего!;		 	if(smsREG!=11) 
					}; //ничего!; 			if(smsREG!=11) 					
				} // КОНЕЦ TRUE-варианта-глобальной проверки ссылки; отсюда выход безТЕЛЕЖНЫЙ;
				else // мы вылетели с самого начала - номер б.у. или капча не верная;
				{	iimDisplay("проверка - в чем ИМЕННО загвоздка возникла в НАЧАЛЕ");
					//здесь еще трехтомник надо писать...х_х; ОМГ!!;
					//и так - мы вылетели с самой первой проверки - вероятно чето с капчей или тел-ом; И ТАК: проверим и то и другое;
		
					//СТОПЭ писать +100500-томник!!; -= мы жеж smsREG поставили -пусть туда и идут !;
						iimPlayCode("SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB T=0"); iimPlayCode("SET !REPLAYSPEED fast\ntab t=2")
						тестКодПодтверждения = копиБоди().search( /код подтверждения/ )
						тестТелефона=копиБоди().search( /авторизуйтесь/ )
						iimPlayCode("SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB T=0");
						
					for(var i2=0;i2<11;i2++)
					{	if (тестТелефона!=-1){iimDisplay("спалили баяниский телефон!!!"); iimSet('x',кодОперации);iimPlayCode(setOperationUsed); форКапча=11; iimPlayCode(пауза.сек5); break}
						if (тестКодПодтверждения!==-1){iimDisplay("спалили неправильную капчу!!"); тестоваяпеременная=11; break}
						alert("ниуя не спалили"); 
					}; 		
						//////////копия доп проверки смс-рега НАЧАЛО
							
					if(тестоваяпеременная!=11) //доп проверка - на законопослушных переменных_граждан// чтоб отсчеь зареганные пути;
					{	smstest = smsAnswerTest(); //мб код так и не пришел В ТЕЧ первых 10 мин- уточним код = setOperationRevise;
						iimDisplay("тестовая переменная - вошла в иф - значит - смс)");
						iimPlayCode("SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB T=0"); iimSet('x',кодОперации); iimPlayCode(setOperationRevise)
						smstest6:
						for (var jjj2=0; jjj2<25; jjj2++) 
						{	iimSet('x',кодОперации); iimPlayCode(getState); 
							iimDisplay("ждем 2-й раз смс-код; Проверка №"+jjj2+"(25); Сейчас регаем акк: "+строка+"("+ДоСтроки+")");
							iimPlayCode(пауза.сек20)
							var smstest = smsAnswerTest();
							iimDisplay("TZ_NUM_ANSWER2 - код получен; TZ_NUM_WAIT2 - го на паузу; Сейчас у нас смстест = "+smstest);
							if (smstest=='"TZ_NUM_WAIT"') continue smstest6;
							if (smstest=='"TZ_NUM_WAIT2"') continue smstest6;
							if (smstest!='"TZ_NUM_ANSWER2"') break; //выкинуть нафиг! ужеж;
								//код пришел(со 2.2 раза) --> сюда писать продолжение		
								смсКопиИподтвердить(); //проверка №2 ссылки-2 (правильность-смски):						
							if(копиУрлАвито()=="https://m.avito.ru/profile/registration?success=true") //зарегались!;
							{	iimDisplay("зарегались-со 2.2.го раза-журналистов в студию !"); сборОтчета(строка); форКапча=11; jjjj=25; jjj2=30; smsREG=11; }
							else 
							{	iimDisplay("смс не подошла =со 2 раза-уходим!"); // не зарегались=со 2 раза-уходим!:
								iimDisplay("смс не подошла =со 2 раза-уходим! Сейчас на акке:"+строка+"("+ДоСтроки+")");
								iimSet('x',кодОперации); iimPlayCode(setOperationOver); jjjj=25; jjj2=30; 
							}; 
						}
							//доп проверка на вшивость;и шлем их нах;
						if(smsREG!=11)
						{	iimDisplay("У меня для тя нейтральная новость - мы гокаем мимо поезда;;;//код не пришел - запрос на брак - setOperationOver") 
							iimSet('x',кодОперации); iimPlayCode(setOperationOver);
							iimPlayCode(пауза.сек5);  форКапча=11;
						}
					}
					else //эвакуируем народ));
					{  //ничего!;		 	if(smsREG!=11) 
					}; //ничего!; 			if(smsREG!=11) 		
							
							
							
						///КОНЕЦ КОПИИ доп проверки смс-рега!!!
							
						
			
				}; //конец else ГЛОБАЛА -e.g.- if(window.location.href=="https://m.avito.ru/profile/registration/phone_confirm")
//////////GLOBALend//////////GLOBALend//////////GLOBALend//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL				
			} //конец КАПЧИ!;
		//здесь можно ничего не писать - тут будут обрабатываться в соотве со зн. smsREG:либо заново(макс 11 раз за раз),либо выход из етого цикла;
		}; //ета скобка закрывает sms6: for  --для рельс smsREG --она будет грешников возращать на место!;
	
}			
	//1. Запросить номер с необходимыми параметрами (страна, для какого сервиса);
	//2. Использовать номер в требуемом сервисе и установить транзакцию в состояние "Готов";
	//3. Подождать 1 минуту (среднее время ответа операторов) и запустить цыкл, который будет проверять состояние транзакции и когда поступит ответ - выдаст ответ;
 	//5. Если ответ не подошел - запросить проверку, выждать минуту и снова запустить цыкл, проверяющий состояние транзакции и который выдаст проверенный ответ;
 	//7. Если ответ не верный - отправить уведомления о неверном коде для учета статистики.

	
	//LOVE!



	