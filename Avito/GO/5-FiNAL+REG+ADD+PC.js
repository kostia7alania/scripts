var start = new Date(); var diff = new Date() - start; iimPlayCode("TAB CLOSEALLOTHERS\n tab open\ntab open")
//общие настройки:
var имяПроекта="pc"
var началоПочты ="kodi"
var конецПочты = "PC@yandex.ru"
var путьПроекта = "C:\\avito.ru\\pc"
var путьКРесурсам = "C:\\avito.ru\\pc\\ресурсы"
var имяАвтокаунта = "текущийАкк-рег+адд-pc.txt"
var пароль = "kostia22"
var автокаунт = путьКРесурсам+"\\"+имяАвтокаунта 	//не менять!!;

iimSet("автокаунт",автокаунт); iimPlay("readCount.iim"); var строка = Number(iimGetLastExtract(1)) //задаем № тек.акк реги;
var почта = началоПочты+строка+конецПочты;
iimSet("строка",строка); iimPlay("useragent.iim"); var useragent = iimGetLastExtract(1) //USERAGENT
iimPlayCode("URL GOTO=imacros://run/?m=ipCHANGE.js") 	//меняем IP;
iimSet('строка',строка); iimSet('началоПочты',началоПочты); iimSet('имяПроекта',имяПроекта);  iimPlay("=ya-reg.iim") // регаем ЯНДЕКС.ПОЧТУ;
var diff = new Date() - start;  iimDisplay(имяПроекта+": айпи сменили; --и зарегали почту!= терь го РЕГАТЬ че нить эдакое!;. Строка: "+строка+". Код выполняется уже: " + diff/1000+" секунд"); //статус работы;
function backTab() {iimPlay("backTab.iim")} //перейти в 1 вкладку
function setOperationRevise() {iimSet('id',кодОперации); iimSet('operation','setOperationRevise'); iimPlay("SmsRegAPI.iim")};
function getState() {iimSet('id',кодОперации); iimSet('operation','getState'); iimPlay("SmsRegAPI.iim"); return копиБоди();};
function копиБоди() {var x = window.document.getElementsByTagName("body")[0].textContent; return x;}
function смсКопиИподтвердить() {backTab(); s=копиБоди(); s=s.split(':')[2]; s=s.split(',')[0]; s=s.split('.')[0];s=s.split('"')[2]; if(s=="") {var s=копиБоди(); s=s.split(':')[2]; s=s.split(',')[0]; s=s.split('.')[0]; s=s.split('"')[1];}; if(String(s)=="undefined") {var s=копиБоди(); s=s.split(':')[2]; s=s.split(',')[0]; s=s.split('.')[0]; s=s.split('"')[1];}; iimSet("s",s); iimSet("useragent", useragent); iimPlayCode("SET !REPLAYSPEED fast\nSET !USERAGENT {{useragent}}\nSET !ERRORIGNORE YES\nTAB T=2\n TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:code CONTENT={{s}}\n TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Подтвердить\n wait seconds = 5\n set !extract {{!URLCURRENT}}\n"); var s=копиБоди(); backTab(); return s;}
var пауза = {сек5: "wait seconds=5", сек10: "wait seconds=10", сек20: "wait seconds=20", сек30: "wait seconds=30"}
sms6:
for(var smsREG=1;smsREG<333;smsREG++) //создадим ФОР,Чтоб ТОЛЬКО удержать тупорылого смс-рега в рельсах!!;	
{	iimDisplay(имяПроекта+ ': Итерация имени smsREG сейчас на шаге повтора:'+smsREG+'; Аккаунт №'+строка+". Код выполняется уже: " + diff/1000+" секунд");
	//гетКодОперации(); //GETing телефонa:
	iimPlayCode('url goto=http://api.sms-reg.com/getNum.php?country=ru&service=avito&apikey=xdct565ohw5cjx378fhjtxpuoxg4m5dj'); 
	id=копиБоди(); id=id.split(':')[2]; id=id.split('}')[0]; id=id.split('"')[1];
	var кодОперации=id;
	//заполнитьАвитоДанными():
	backTab(); iimSet('почта', почта); iimSet('useragent', useragent); iimPlay("avitoRegInput.iim"); 
	iimPlayCode(пауза.сек5);
	//var тестСтатусаНомера = getState();
	if(getState().search( /TZ_INPOOL/ )!=-1) {iimPlayCode(пауза.сек20)}
	if(getState().search( /TZ_INPOOL/ )!=-1) {iimPlayCode(пауза.сек30)}
	if(getState().search( /TZ_INPOOL/ )!=-1) {continue sms6}	
	if(getState().search( /TZ_NUM_PREPARE/ )==-1) {continue sms6}//тест $$+свободность номеров//++защита от WARNING_NO_NUMS
	iimDisplay(имяПроекта+ ': Телефон получен! Идем дальше! Сейчас акк= '+строка+". Код выполняется уже: " + diff/1000+" секунд")
	// = переносим телефон на авито:
	backTab(); var tel=копиБоди(); tel=tel.split(':')[2]; tel=tel.split(',')[0]; iimSet("телефон",tel); 
	iimPlayCode("SET !REPLAYSPEED fast\ntab t=2\n TAG POS=1 TYPE=INPUT:TEL FORM=NAME:NoFormName ATTR=ID:phone CONTENT={{телефон}}\n TAB T=1")
	//КОНЕЦ GETTing'a;
	cap6:
	for(var форКапча=1;форКапча<11;форКапча++)
	{	backTab(); iimSet("пароль",пароль); iimPlay("inputPassword.iim")						// ввестиПароль();
		iimDisplay(имяПроекта+ ": ща будем капчу распознавать. Код выполняется уже: " + diff/1000+" секунд");backTab();iimPlay("capRec.iim") //распознатьКапчу();
		if(копиБоди().search( /ERROR/ )!=-1) {continue cap6} 									//переразгадывать77;
		iimDisplay(имяПроекта+ ": капча распознана без телег! кликаем по Зарегаться! Сейчас акк= "+строка+". Код выполняется уже: " + diff/1000+" секунд");
		backTab();iimSet("useragent", useragent); iimPlay("clickOnReg.iim"); 					//быв. кликПоЗарегаться()
		var общийТест=копиБоди();	backTab();
/////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//////////GLOBAL//			
		if(общийТест.search( /Вы уже зарегистрированы на Avito/ )!=-1) {форКапча=11; smsREG=333; break}//идем к сл акку;
		if(общийТест.search( /Пользователь с таким адресом уже существует/ )!=-1) {форКапча=11; smsREG=333; break}//идем к сл акку
		if(общийТест.search( /Номер подтверждён в аккаунте/ )!=-1) {iimSet('id',кодОперации); iimSet('operation','setOperationUsed'); iimPlay("SmsRegAPI.iim"); continue sms6} //использованный номер!;
		if(общийТест.search( /код подтверждения/ )!=-1) {continue cap6} //школьник с капчей подставу организовал;;
		{	iimDisplay(имяПроекта+ ": все ок, тел подошел с "+smsREG+", а капча с "+форКапча+" -раза--идем дальше:все идеально. Код выполняется уже: " + diff/1000+" секунд");  
			if(форКапча!=11)
			{	форКапча=11 //чеб не возвращались к капчам;
				iimSet('useragent',useragent); iimPlay("requestCode.iim"); //запрос на выдачу ID смс-рега;
				iimSet('id',кодОперации); iimSet('operation','setReady'); iimPlay("SmsRegAPI.iim");iimPlayCode(пауза.сек30);// setReady();
			smstest4:
			for(var z=1;z<3;z++)   //для 2х итераций неверных ввода смс-кода;
			{	smstest5:	//=пошла первая проверка кода-активации.......
				for (var jj=1; jj<30; jj++) 					
				{	iimPlayCode(пауза.сек20)
					var смсТест = getState();  //запрос смс-ответа
					iimDisplay(имяПроекта+": ждем смс-код; Проверка №"+jj+"(30). Попытка №"+z+"(2). Сейчас регаем акк: "+строка+". Код выполняется уже: " + diff/1000+" секунд");
					if(смсТест.search( /TZ_NUM_WAIT/ )!=-1) continue smstest5;
					if(смсТест.search( /TZ_NUM_ANSWER/ )==-1) 
					{  //cсмс не пришел c 1 иль со 2-го разов!!;
						iimDisplay(имяПроекта+ ": НЕВЕРНЫЙ КОД АКТИВАЦИИ. Попытка №"+z+"(2). Сейчас на акке:"+строка+". Код выполняется уже: " + diff/1000+" секунд");
						setOperationRevise(); //=уточнение смс-кода;
						continue smstest4 //берем вторую и последнюю попытку смс-теста;						
					}
					else // смс пришел с 1 или 2-го раза!!;
					{	 iimDisplay(имяПроекта+ ": Смс пришел с проверки №"+jj+"(30). Попытки №"+z+"(2). Сейчас регаем акк: "+строка+". Код выполняется уже: " + diff/1000+" секунд");
						 //код прищел-копируем смс//проверка правильности смски:						
						if(смсКопиИподтвердить().search( /Проверьте ваш почтовый ящик/ )!=-1) //зарегались! УРЯ!; зови журналюг;;;
						{	iimDisplay(имяПроекта+ ": все ок - журналистов в студию! Зарегали акк: "+строка+". Код выполняется уже: " + diff/1000+" секунд");
							jj=30; z=2; smsREG=333;iimSet('id',кодОперации); iimSet('operation','setOperationOk'); 
							iimPlay("SmsRegAPI.iim"); break; // setOperationOk()
						}
						else // смс не верный! = запрашиваем уточнение:
						{	iimDisplay(имяПроекта+ ": все ок - журналистов в студию! Зарегали акк: "+строка+". Код выполняется уже: " + diff/1000+" секунд");
							setOperationRevise(); //=уточнение смс-кода;
							continue smstest4 //берем вторую и последнюю попытку смс-теста;	
						}; 
					};
				}	
			}			
			}
			iimSet('id',кодОперации); iimSet('operation','setOperationOver'); iimPlay("SmsRegAPI.iim") // setOperationOver();
		} // КОНЕЦ TRUE-варианта-глобальной проверки ссылки; отсюда выход безТЕЛЕЖНЫЙ;
		 //конец else ГЛОБАЛА -e.g.- if(window.location.href=="https://m.avito.ru/profile/registration/phone_confirm")
//////////GLOBALend//////////GLOBALend//////////GLOBALend//////////GLOBAL//////////GLOBAL//////////GLOBAL
	} //конец КАПЧИ!;
//здесь можно ничего не писать - тут будут обрабатываться в соотве со зн. smsREG:либо заново(макс 11 раз за раз),либо выход из етого цикла;
}; //ета скобка закрывает sms6: for  --для рельс smsREG --она будет грешников возращать на место!;





	
//LOVE!
iimDisplay(имяПроекта+ ": Го ОТЧЕТ по РЕГу делать на акк №: "+строка+". Код выполняется уже: " + diff/1000+" секунд");

// = отчетРЕГИ:
iimSet('строка',строка); iimSet("имяПроекта","pc");iimSet("действие","REG"); iimSet("папкаОтчетов","C:\\avito.ru\\PC\\результаты"); iimSet('num'," "); iimSet("телефон"," "); iimPlay("GO//GO-REPORT.iim")




iimDisplay(имяПроекта+ ": Го добавлять объяву ужеж в акк №: "+строка+". Код выполняется уже: " + diff/1000+" секунд");

			//==============ПК1:=============
do{iimSet('строка',строка);iimSet('num',1); iimSet('путьПроекта',"C:\\avito.ru\\PC"); iimSet('почта',почта); iimSet('пароль',пароль);
iimSet('метроИлиГород','all_metros.txt')//=область-замануха!!;
iimSet('имяПроекта',"PC");
iimPlay("GO//go-all-pc.iim") //=запуск !!
var x = iimGetLastExtract(1)//номер сл. картинки
iimPlayCode('set !Extract {{!URLCURRENT}}')
} while(iimGetLastExtract(1)=="https://m.avito.ru/add")
//= обходим ОШИБКУ ЗАГРУЗКИ ФОТО:
iimSet('фото-для-подачи','C:\\фотки-PC'); iimSet('x',x); iimPlay("GO//go-reload-picture.iim")
// = ОТЧЕТ:
iimSet('строка',строка); iimSet("имяПроекта","PC");iimSet("действие","add"); iimSet("папкаОтчетов","C:\\avito.ru\\PC\\результаты"); iimSet("телефон"," "); iimSet('num',"-1-"); iimPlay("GO//GO-REPORT.iim")


			//==============ПК2:=============
do{iimSet('строка',строка);iimSet('num',2); iimSet('путьПроекта',"C:\\avito.ru\\PC"); iimSet('имяПроекта',"PC"); iimSet('почта',почта); iimSet('пароль',пароль);

iimSet('метроИлиГород','all_podmsk.txt')//=область-замануха!!;
iimPlay("GO//go-all-pc.iim") //=запуск !!
var x = iimGetLastExtract(1)//номер сл. картинки
iimPlayCode('set !Extract {{!URLCURRENT}}')
} while(iimGetLastExtract(1)=="https://m.avito.ru/add")
//= обходим ОШИБКУ ЗАГРУЗКИ ФОТО:
iimSet('фото-для-подачи','C:\\фотки-PC'); iimSet('x',x); iimPlay("GO//go-reload-picture.iim")
// = ОТЧЕТ:
iimSet('строка',строка); iimSet("имяПроекта","pc");iimSet("действие","add"); iimSet("папкаОтчетов","C:\\avito.ru\\PC\\результаты"); iimSet("телефон"," "); iimSet('num',"-2-"); iimPlay("GO//GO-REPORT.iim")
 


//	'каунт++:
iimSet('строка',строка); 
iimSet('путьКРесурсам',путьКРесурсам);iimSet('имяАвтокаунта',имяАвтокаунта); iimSet('автокаунт',автокаунт); 
iimPlayCode(`ADD строка 1
			 SET !EXTRACT NULL
			 SET !EXTRACT {{строка}}
			 FILEDELETE NAME={{автокаунт}}
			 SAVEAS TYPE=EXTRACT FOLDER={{путьКРесурсам}} FILE={{имяАвтокаунта}}`)

			 
//оставлю одну объяву по чучам -для прикола!;
iimSet('строка',строка); 
iimPlayCode(`
				SET !REPLAYSPEED fast
				SET !TIMEOUT_PAGE 20
					set !extract null
					CMDLINE !DATASOURCE useragents.txt
					SET !DATASOURCE_COLUMNS 14
					SET !DATASOURCE_LINE {{строка}}
					SET !USERAGENT {{!COL1}}
						URL GOTO=https://m.avito.ru/add
			'Генерируем АДРЕС и связанный с ним ид_МЕТРО:	
						SET !DATASOURCE_DELIMITER ;
						CMDLINE !DATASOURCE C:\\avito.ru\\pc\\чуч+сух\\база-чуч+сух-kodi.csv
			'количество колонок в этом файле:
						SET !DATASOURCE_COLUMNS 14
						SET !DATASOURCE_LINE {{строка}}
						set город {{!COL1}}
						set метроИлиГород {{!COL2}}
						set продактыПитания {{!col4}}
						set заголовок {{!COL11}}
						set colz {{!col1}}
						set colzmetro {{!COL8}}
						set colzsity {{!COL9}}
						SET проверкаГорода EVAL("var d=\\"{{colzsity}}\\"; var z=\\"{{colzmetro}}\\"; var s=\\"{{colz}}\\"; if(s==\\"637640\\"){z;} else d;")
						set началоМетроЗаманухи {{проверкаГорода}}
						set самаОбъява {{!COL12}}
						set метроСловами {{!COL3}}
						set конецМетроЗаманухи {{!COL10}}
						set описалово {{самаОбъява}}
						add описалово {{началоМетроЗаманухи}}
						add описалово {{метроСловами}}
						add описалово {{конецМетроЗаманухи}}
						SET !REPLAYSPEED medium
			'продукты питания:
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:category_id CONTENT=%{{продактыПитания}}
			'город:
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:region_id CONTENT=%{{город}}
			'метро (или гоород -в области)
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:metro_id CONTENT=%{{метроИлиГород}}
						TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:location_id CONTENT=%{{метроИлиГород}}
						TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:title CONTENT={{заголовок}}
						TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=ID:description CONTENT={{описалово}}
			' ценник:
						SET ценник EVAL("var randomNumber=Math.floor(Math.random()*(45-85+1)+85); randomNumber;")
						TAG POS=1 TYPE=INPUT:NUMBER FORM=NAME:NoFormName ATTR=ID:price CONTENT={{ценник}}
			'КАРТИНКА:
						SET !REPLAYSPEED medium
						TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=ID:image_upload CONTENT=C:\\avito.ru\\pc\\чуч+сух\\фото-для-подачи-чуч+сух\\{{строка}}.jpg		
						wait seconds=7
						CLICK X=734 Y=363										 
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
							SAVEAS TYPE=EXTRACT FOLDER=C:\\avito.ru\\pc\\чуч+сух\\результаты FILE=#2---добавляшки-чуч+сух.txt
							SCREENSHOT TYPE=Page FOLDER=C:\\avito.ru\\pc\\чуч+сух\\результаты\\скрины FILE={{строка}}---2добавляшки-чуч+сух-{{!NOW:dd.mm.yyyy}}-[{{!NOW:hh:nn}}].jpg
 							wait seconds = 10`)		


iimDisplay("УСЕ!=Код выполняется уже: " + diff/1000+" секунд")
iimPlayCode('URL GOTO=imacros://run/?m=GO/6-FINAL-RENAME-kv.js')