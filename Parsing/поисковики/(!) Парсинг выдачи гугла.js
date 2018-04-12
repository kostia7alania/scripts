var ключи =
`Лучшие Тотализаторы и букмекерские конторы
Рейтинг букмекерских контор
Рейтинг букмекерских контор СНГ
Ставки букмекеров
Лучшие букмекерские конторы
Топ спортивные ставки
Где поставить ставки на спорт
Где поставить ставки футбол
Где поставить ставки азартные игры
Прогнозы на ставки
Прогнозы на спорт
Прогнозы на футбол
Лучшие тотализаторы
Стратегия ставок на спорт
Стратегия ставок на футбол
Обмануть букмекерскую контору
Бесплатные ставки на спорт
Лучшая стратегия ставок на спорт
Лучшая стратегия ставок на футбол
Лучшая стратегия ставок азартные игры
Заработать на ставках
Обзор стратегий ставок
Стратегии ставок на спорт
Стратегии ставок на азартные игры
список лучших букмекерских контор
букмекерские конторы для ставок в россии`
.replace(/ /gim,'<sp>').split('\n'); ; // запросы (разделитель - столбик)
 
//26'7'2017 =остановились на jogos em directo

var начинатьСКлюча = 50; //sorteio da liga dos campeoes 24.08.17
var начинатьСКлюча = 57; //sorteio da liga 28.08.17
var начинатьСКлюча = 63; //da liga dos campeoes 29.08.17
var начинатьСКлюча = 0; //29.08.17
var начинатьСКлюча = 12; //29.08.17


iim=iimPlayCode;
function тестНаКаптчу() {if(window.document.querySelector('body').innerHTML.search('recaptcha')>0) {alert("=пройди каптчу!;"); iimPlayCode('wait seconds=25')}}
 

function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  
var start = new Date();
function timming() {diff=(new Date()-start)/1000; return 'Затрачено:	'+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")}


//НАСТРОЙКИ:
var ссылка_на_гугл 		= "http://google.ru"							// здесь все понятно);
var обработанные		= "C:\\FULL\\RESULTS\\GOOGLE\\old_base.txt";	// база уже обработанных сайтов
var путьСохр       		= "C:\\FULL\\RESULTS\\GOOGLE\\result_base.txt";	//КУДА СОХРАНЯЕМ ОТЧЕТ
var скок_стр_парсить  	= 5;											//сколько страниц парсить с 1 запроса;
var заголовок_выдачи = ".g>div>div>h3>a"
 

for(q=начинатьСКлюча;q<ключ.length;q++){
	iim('url goto='+ссылка_на_гугл);
	iim('EVENT TYPE=CLICK SELECTOR="#lst-ib" BUTTON=0')
	iim('EVENTS TYPE=KEYPRESS SELECTOR="#lst-ib" CHARS='+ключ[q])
	iim('TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:tsf ATTR=NAME:btnK')
	try{тестНаКаптчу()}catch(e){}
	for(zz=0;zz<скок_стр_парсить;zz++){
		// try{alert(1)
			var заголовок = window.document.querySelectorAll(заголовок_выдачи)
			for (var i = 0; i < заголовок.length; i++) {
				try{var url = заголовок[i].href				}catch(e){var url="fall"}
				try{var url=url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/? >#]/)[0]}catch(e){}
				try{var отчет = дата()+"	"+q+"."+zz+"."+i+"	"+ключ[q].replace(/<sp>/gim,' ')+"	"+заголовок[i].innerText+"	"+url+"	"+заголовок[i].href+"	"+timming()+"\n";
				}catch(e){alert('error!!')}; // "тест", "пройден"
				if(читать(обработанные).search(url)>0){//alert("есть в старой базе")
						}
					else{// alert('нету в старой базе')
						// var бу2=читать2(путьСохр);alert(бу2.search(url))//отладка
						if(читать(путьСохр).search(url)>0){	// alert("есть в NEW базе")
							}
						else{ 
							// alert('нету в NEW базе')
							добавитьВКонец(путьСохр,отчет)
						}						
					}
			}
						  iimDisplay("Циклы:		"+q+"."+zz+"\nСтраница:		"+(zz+1)+"\nКлюч:		"+ключ[q].replace(/<sp>/gim,' ')+"\n"+timming());

			  if(iim('set !timeout_tag 2\nEVENT TYPE=CLICK SELECTOR="#pnnext>SPAN" BUTTON=0')>0){//след.стр существует,продолжаем.
			  
				  }else{
					  iimDisplay("УСЕ с етим ключем!\nСтраниц спаршено: "+(zz+1)+"\nЭто был ключ: "+ключ[q]+timming()); zz=30; 
				  }
				iimPlayCode('wait seconds=3')
				тестНаКаптчу();
		// }
		// catch(e){iimDisplay("УСЕ с етим ключем!\nСтраниц спаршено:"+zz+"\nЭто был ключ = "+ключ[q]+timming());zz=30; } //кноппка следующая НЕсуществует
	}
}
