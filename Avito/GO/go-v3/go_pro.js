var start = new Date(); var diff = new Date() - start; iimPlayCode("TAB CLOSEALLOTHERS\n tab open\ntab open")
//общие настройки:
var имяПроекта="all"
var началоПочты ="kodi"
var конецПочты = имяПроекта+"@yandex.ru"
var путьПроекта = "C:\\avito.ru\\"+имяПроекта

//запись в промежуточные файлы:
iimSet('имяПроекта',имяПроекта);
iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !EXTRACT {{имяПроекта}}\nFILEDELETE NAME=C:\\авито-переменные\\имяПроекта.txt\nSAVEAS TYPE=EXTRACT FOLDER=C:\\авито-переменные FILE=имяПроекта.txt')
iimSet('началоПочты',началоПочты);
iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !EXTRACT {{началоПочты}}\nFILEDELETE NAME=C:\\авито-переменные\\началоПочты.txt\nSAVEAS TYPE=EXTRACT FOLDER=C:\\авито-переменные FILE=началоПочты.txt')
iimSet('конецПочты',конецПочты);
iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !EXTRACT {{конецПочты}}\nFILEDELETE NAME=C:\\авито-переменные\\конецПочты.txt\nSAVEAS TYPE=EXTRACT FOLDER=C:\\авито-переменные FILE=конецПочты.txt')
iimSet('путьПроекта',путьПроекта);
iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !EXTRACT {{путьПроекта}}\nFILEDELETE NAME=C:\\авито-переменные\\путьПроекта.txt\nSAVEAS TYPE=EXTRACT FOLDER=C:\\авито-переменные FILE=путьПроекта.txt')

iimDisplay("УСЕ!gooooooo=Код выполняется уже: " + diff/1000+" секунд; передаем управление реге!;") 
iimPlayCode("URL GOTO=imacros://run/?m=go-v3\\starter.js")
 
 
 

var diff = new Date() - start; 
iimDisplay(имяПроекта+ ": Го ОТЧЕТ по РЕГу делать на акк №: "+строка+". Код выполняется ужэ="+ diff/1000+" секунд");
// = отчетРЕГИ:
iimSet('строка',строка); iimSet("имяПроекта","pc");iimSet("телефон",телефон); iimSet("действие","REG"); iimSet("папкаОтчетов","C:\avito.ru\PC\результаты"); iimSet('num'," "); iimPlay("GO//GO-REPORT.iim")

var diff = new Date() - start;
iimDisplay(имяПроекта+ ": Го добавлять объяву ужеж в акк №: "+строка+". Код выполняется ужэ="+ diff/1000000+" минут");

 			//==============:=============:ПК1:=============:=============
	iimDisplay(имяПроекта+ ": Го добавлять объяву пк1 ужеж в акк №: "+строка+". Код выполняется уже: " + diff/1000+" секунд");
  do{iimSet('строка',строка);iimSet('num',1); iimSet('путьПроекта',путьПроекта); iimSet('почта',почта); iimSet('пароль',пароль);
	iimSet('имяПроекта',имяПроекта);iimSet('метроИлиГород','all_metros.txt')//=область-замануха!!;
	iimPlay("шаблон-на-подачу-услуг.iim") //=запуск !!
  var счетчикКартинок = iimGetLastExtract(1)
  var ошибкаЗагрузкиФото = iimGetLastExtract(2)
	iimPlayCode('set !Extract {{!URLCURRENT}}')
	} while(iimGetLastExtract(1)=="https://m.avito.ru/add")
  if(ошибкаЗагрузкиФото!="#EANF#")	 //= обходим ОШИБКУ ЗАГРУЗКИ ФОТО:
  {	iimSet('фото-для-подачи','C:\\фотки-'+имяПроекта); iimSet('счетчикКартинок',счетчикКартинок); iimPlay("загрузить-картинку-на-авито.iim")
   }	// = ОТЧЕТ:
	iimSet('строка',строка); iimSet("имяПроекта",имяПроекта);iimSet("действие","add"); iimSet("папкаОтчетов",папкаОтчетов); iimSet("телефон",""); iimSet('num',"-1-"); iimPlay("отчет-по-авито.iim")
 				
//==============ПК2:=============
do{iimSet('строка',строка);iimSet('num',2); iimSet('путьПроекта',"C:\\avito.ru\\all\\PC"); iimSet('почта',почта); iimSet('пароль',пароль);
iimSet('метроИлиГород','all_metros.txt')//=область-замануха!!;
iimSet('имяПроекта',"PC");
iimPlay("GO//go-all-pc.iim") //=запуск !!
var x = iimGetLastExtract(1)//номер сл. картинки
iimPlayCode('set !Extract {{!URLCURRENT}}')
} while(iimGetLastExtract(1)=="https://m.avito.ru/add")
//= обходим ОШИБКУ ЗАГРУЗКИ ФОТО:
iimSet('фото-для-подачи','C:\\фотки-PC'); iimSet('x',x); iimPlay("GO//go-reload-picture.iim")
// = ОТЧЕТ:
iimSet('строка',строка); iimSet("имяПроекта","PC");iimSet("действие","add"); iimSet("папкаОтчетов","C:\\avito.ru\\all\\PC"); iimSet("телефон",телефон); iimSet('num',"-2-"); iimPlay("GO//GO-REPORT.iim")


	
	
	
	////=====ВРЕМЯ ВЫПОЛНЕНИЯ=====
var diff = new Date() - start; iimDisplay(имяПроекта+ ": Го добавлять пк2!!! объяву в акк №: "+строка+". Код выполняется  ужэ="+ diff/1000000+" минут");
	
	
			//==============ПК2:=============
do{iimSet('строка',строка);iimSet('num',2); iimSet('путьПроекта',"C:\\avito.ru\\all\\PC"); iimSet('имяПроекта',"PC"); iimSet('почта',почта); iimSet('пароль',пароль);
iimSet('метроИлиГород','all_podmsk.txt')//=область-замануха!!;
iimPlay("GO//go-all-pc.iim") //=запуск !!
var x = iimGetLastExtract(1)//номер сл. картинки
iimPlayCode('set !Extract {{!URLCURRENT}}')
} while(iimGetLastExtract(1)=="https://m.avito.ru/add")
//= обходим ОШИБКУ ЗАГРУЗКИ ФОТО:
iimSet('фото-для-подачи','C:\\фотки-PC'); iimSet('x',x); iimPlay("GO//go-reload-picture.iim")
// = ОТЧЕТ:
iimSet('строка',строка); iimSet("имяПроекта","pc");iimSet("действие","add"); iimSet("папкаОтчетов","C:\\avito.ru\\all\\PC"); iimSet("телефон",телефон); iimSet('num',"-2-"); iimPlay("GO//GO-REPORT.iim")
 


	////=====ВРЕМЯ ВЫПОЛНЕНИЯ=====
var diff = new Date() - start; iimDisplay(имяПроекта+ ": Го добавлять ТАДЖИКОВ!!! объяву в акк №: "+строка+". Код выполняется  ужэ="+ diff/1000000+" минут");
			
			//=====ТАДЖИКИ:=====
iimSet('строка',строка); iimPlay("GO//go-all-tj.iim") 
iimSet('строка',строка); iimPlay("GO//GO-PUBLISH.iim") //клик по продолжить - публикация:
//= обходим ОШИБКУ ЗАГРУЗКИ ФОТО:
	iimSet('фото-для-подачи1','C:\\avito.ru\\all\\tj\\фото-для-подачи');iimSet('постфикс1','');iimSet('строка',строка); 
	iimPlay("GO//go-reload-picture.iim")
// = ОТЧЕТ:
iimSet('строка',строка); iimSet('имяПроекта',"tj"); iimSet("телефон",телефон); iimSet('num'," ");iimSet('папкаОтчетов',"C:\\avito.ru\\all\\tj\\"); 
iimPlay("GO\\GO-REPORT.iim")
 
 
	//====ВРЕМЯ ВЫПОЛНЕНИЯ:=====
var diff = new Date() - start; iimDisplay(имяПроекта+ ": Го добавлять КВ!!! объяву в акк №: "+строка+". Код выполняется  ужэ="+ diff/1000000+" минут");
							//=====КВАРТИРА:=====
iimSet('строка',строка); iimPlay("GO//go-all-kv.iim") 
//публикация:
iimSet('строка',строка); iimPlay("GO//GO-PUBLISH.iim")
//= обходим ОШИБКУ ЗАГРУЗКИ ФОТО:
	iimSet('фото-для-подачи1','C:\avito.ru\all\kv\фото-для-подачи');iimSet('постфикс1','-гостинная');
	iimSet('фото-для-подачи2','C:\avito.ru\all\kv\фото-для-подачи');iimSet('постфикс2','-кухня');
	iimSet('фото-для-подачи3','C:\avito.ru\all\kv\фото-для-подачи');iimSet('постфикс3','-ванна');
	iimSet('строка',строка);
	iimPlay("GO//go-reload-picture.iim")
// = ОТЧЕТ: 
iimSet('строка',строка); 
iimSet('имяПроекта',"kv"); 
iimSet("телефон",телефон); 
iimSet('num'," ");
iimSet('папкаОтчетов',"C:\avito.ru\all\kv"); 
iimPlay("GO//GO-REPORT.iim")
 

	//====ВРЕМЯ ВЫПОЛНЕНИЯ:=====
var diff = new Date() - start; 
iimDisplay(имяПроекта+ ": Го добавлять КВ!!! объяву в акк №: "+строка+". Код выполняется  ужэ="+ diff/1000000+" минут");
				//=====ЧУЧА:=====
iimSet("загоовок","заголовки-чурчхела.txt"); 
iimSet("описание","описание-чурчхела.txt");
iimSet('имяПроекта','чурчхела'); 
iimSet("путьПроекта","C:\avito.ru\all\plody");
iimSet('строка',строка); 
iimPlay("GO//go-plody.iim") 
//публикация:
iimSet('строка',строка); 
iimPlay("GO//GO-PUBLISH.iim");
//= обходим ОШИБКУ ЗАГРУЗКИ ФОТО:
	iimSet('фото-для-подачи1','C:\avito.ru\all\plody\фото-для-подачи-чуч');
	iimSet('постфикс1',''); 
	iimSet('строка',строка);
	iimPlay("GO//go-reload-picture.iim")
// = ОТЧЕТ: 
iimSet('строка',строка); 
iimSet('имяПроекта',"чурчхела"); 
iimSet("телефон",телефон); 
iimSet('num'," ");
iimSet('папкаОтчетов',"C:\avito.ru\all\plody"); 
iimPlay("GO//GO-REPORT.iim")
 

	//====ВРЕМЯ ВЫПОЛНЕНИЯ:=====
var diff = new Date() - start; 
iimDisplay(имяПроекта+ ": Го добавлять КВ!!! объяву в акк №: "+строка+". Код выполняется  ужэ="+ diff/1000000+" минут");
				//=====СУХ:=====
iimSet("загоовок","заголовки-сухофрукты.txt"); 
iimSet("описание","описание-сухофрукты.txt");
iimSet('имяПроекта','сухофрукты'); 
iimSet("путьПроекта","C:\avito.ru\all\plody");
iimSet('строка',строка); 
iimPlay("GO//go-plody.iim") 
//публикация:
iimSet('строка',строка); 
iimPlay("GO//GO-PUBLISH.iim")
//= обходим ОШИБКУ ЗАГРУЗКИ ФОТО:
	iimSet('фото-для-подачи1','C:\\avito.ru\all\plody\фото-для-подачи-сух');
	iimSet('постфикс1',''); 
	iimSet('строка',строка);
	iimPlay("GO//go-reload-picture.iim")
// = ОТЧЕТ: 
iimSet('строка',строка); 
iimSet('имяПроекта',"сухофрукты");
iimSet("телефон",телефон); 
iimSet('num'," ");
iimSet('папкаОтчетов',"C:\avito.ru\all\plody"); 
iimPlay("GO//GO-REPORT.iim")
 

iimPlayCode('URL GOTO=2ip.ru')

iimPlayCode('URL GOTO=imacros://run/?m=GO/go_pro.js')
