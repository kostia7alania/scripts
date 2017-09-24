//не удалять,еси хотим юзать сайт  гугл-поиск
iimPlayCode('url goto=https://melbet-partners.ml/google-parse/ \n wait seconds=2')

var страна 				=	"Russia" 							//	для gogoduck
// var страна 			=	"Vietnam" 							//	для gogoduck
// var страна 			=	"France" 							//	для gogoduck
// var страна 			=	"Brazil" 							//	для gogoduck
// var страна 			=	"Canada (fr)" 						//	для gogoduck
// var страна 			=	"Belgium (fr)" 						//	для gogoduck
// var страна 			=	"Spain" 							//	для gogoduck
// var страна 			=	"Portugal" 							//	для duckduckgo

var ссылка_на_гугл 	= 	"google.com.ua"
// var ссылка_на_гугл 	= 	"duckduckgo.com"

var папка 			= 	"\\\\Kost-acer-work\\\\GOOGLE\\\\GOOGLE_RU"
var old_base		= 	папка+"\\\\old_base.txt";			// база уже обработанных сайтов
var new_base       	= 	папка+"\\\\new_base.txt";			//КУДА СОХРАНЯЕМ ОТЧЕТ
var bad_base       	= 	папка+"\\\\bad_base.txt";			//КУДА СОХРАНЯЕМ не тематич
var load_error_base = 	папка+"\\\\load_error_base.txt";	//КУДА СОХРАНЯЕМ не загруженные стр;

var скок_стр_парсить  	= 	2;														//сколько страниц парсить с 1 запроса;
var начинатьСКлюча 		=	0;

// var ключи 				=	"C:\\FULL\\RESULTS\\GOOGLE\\ключи\\"+профиль+"-ключи.txt"//  


var запросы = 
`прогноз и ставки на спорт рейтинг прогнозистов
ставки на спорт рейтинг
ставки на спорт рейтинг букмекеров
ставки на спорт рейтинг контор
ставки на спорт онлайн рейтинг
прогноз и ставки на спорт рейтинг прогнозистов
ставки на спорт рейтинг сайтов
прогноз і ставки на спорт рейтинг прогнозистів
ставки на спорт рейтинг
ставки на спорт рейтинг букмекерів
ставки на спорт рейтинг контор
ставки на спорт онлайн рейтинг
прогноз і ставки на спорт рейтинг прогнозистів
ставки на спорт рейтинг сайтів`


var contacts =
`Контакт
Реклам
О нас
Обратная связь
Связаться
Связь
Про нас
Про сайт
Зворотн
Зв'язатися
Зв'язок
Звязатися
Звязок
Contact
Adversiting
About us
Feedback
Contact
Communication`
.split('\n').join(',')

var google_test = `Контакты
Реклама`
.split('\n').join(',')

var key_major = 
`букмекер
bookmak
bet
бетинг
бк 
 бк
рейтинг бк
легальные бк
бетінг
gambl
rating bookmak
Odds
контор`
 .split('\n').join(',')
 
var test2 =
`футбол
спорт
Экспресс
каппер
Вилк
вилки
ставк
новости спорт
новости футбол
прогноз
Football
Sport
Express
Forecast`
.split('\n').join(',')

var stop = 
`кредит
ипоте
погод
экономика
полити
іпотека
економі
політи
credit
motrgage
Economic
Politic
hypothec`
.split('\n').join(',')
 // =слова,которых на сайте не должно быть:
 
 
//САЙТЫ-прокси:
var прокси_сайты = "196.19.8.188:8000" 		//SYC IPv4 Seychelles 
//GOOGLE-прокси
var прокси_гугл = "91.237.244.18:17971" 	//FR IPv6 работает до 10.09.2017

 
  
window.document.querySelector('input[name="strana"]').value=страна;
window.document.querySelector('input[name="old_base"]').value=old_base;
window.document.querySelector('input[name="new_base"]').value=new_base
window.document.querySelector('input[name="bad_base"]').value=bad_base
window.document.querySelector('input[name="load_error_base"]').value=load_error_base
window.document.querySelector('input[name="google"]').value=ссылка_на_гугл;
window.document.querySelector('textarea[name="keywords"]').value=запросы;
window.document.querySelector('input[name="contacts"]').value=contacts;
window.document.querySelector('input[name="google_test"]').value=google_test
window.document.querySelector('input[name="key_major"]').value=key_major
window.document.querySelector('input[name="test2"]').value=test2
window.document.querySelector('input[name="stop"]').value=stop
window.document.querySelector('input[name="proxy_sites"]').value=прокси_сайты
window.document.querySelector('input[name="proxy_google"]').value=прокси_гугл



function getRandomInt(min, max){return Math.round(min - 0.5 + Math.random() * (max - min + 1))}
 
function loadScriptFromURL(url) {
    var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),
        async = false;
    request.open('GET', url, async);
    request.send();
    if (request.status !== 200) {
        var message = 'an error occurred while loading script at url: ' + url + ', status: ' + request.status;
        iimDisplay(message);
        return false;
    }
    eval(request.response);
    return true;
} 

  loadScriptFromURL('https://melbet.ml/robot/google.js?v='+getRandomInt(1,111111)); 
  iimPlayCode('wait seconds=5')