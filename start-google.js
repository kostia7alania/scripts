//не удалять,еси хотим юзать сайт  гугл-поиск
iimPlayCode('url goto=https://melbet-partners.ml/google-parse/ \n wait seconds=2')

var ссылка_на_гугл 	= 	"http://google.ge"	
var old_base		= 	"C:\\\\FULL\\\\RESULTS\\\\GOOGLE\\\\old_base.txt";			// база уже обработанных сайтов
var new_base       	= 	"C:\\\\FULL\\\\RESULTS\\\\GOOGLE\\\\new_base.txt";			//КУДА СОХРАНЯЕМ ОТЧЕТ
var bad_base       	= 	"C:\\\\FULL\\\\RESULTS\\\\GOOGLE\\\\bad_base.txt";			//КУДА СОХРАНЯЕМ не тематич
var load_error_base = 	"C:\\\\FULL\\\\RESULTS\\\\GOOGLE\\\\load_error_base.txt";	//КУДА СОХРАНЯЕМ не загруженные стр;

var скок_стр_парсить  	= 	2;														//сколько страниц парсить с 1 запроса;
var начинатьСКлюча 		=	0;

// var ключи 				=	"C:\\FULL\\RESULTS\\GOOGLE\\ключи\\"+профиль+"-ключи.txt"//  

var запросы =  `Стратегия ставок на футбол рейтинг топ букмекеров
Ставки на спорт рейтинг топ букмекерские конторы
Лучшая стратегия ставок на спорт
Лучшая стратегия ставок на футбол
Лучшая стратегия ставок азартные игры
Лучшие букмекерские конторы  топ рейтинг
Топ спортивные ставки рейтинг
Прогнозы на спорт рейтинг топ букмекерские конторы
Прогнозы на футбол рейтинг топ букмекеров
Стратегия ставок на спорт рейтинг топ букмекеров
рейтинг ставок на спорт
Лучшие Тотализаторы топ рейтинг букмекерские конторы
Лучшая букмекерская контора
Рейтинг букмекерских контор
Ставки букмекеров топ рейтинг
список лучших букмекерских контор топ
букмекерские конторы для ставок рейтинг топ
рейтинг букмекерских контор мира
рейтинг букмекерских контор россии
лучшие букмекерские конторы мира
рейтинг букмекерских контор 2017
Лучшие топ букмекерских контор СНГ рейтинг
Лучшие топ букмекерских контор России рейтинг
Лучшие топ букмекерских контор Украины рейтинг
Лучшие топ букмекерских контор Азербайджана рейтинг
Лучшие топ букмекерских контор Белорусии рейтинг
Лучшие топ букмекерских контор Узбекистан рейтинг
Лучшие топ букмекерских контор Эстонии рейтинг
Лучшие топ букмекерских контор Литвы рейтинг
Лучшие топ букмекерских контор Польши рейтинг
Лучшие топ букмекерских контор Латвии рейтинг
Лучшие топ букмекерских контор Грузии рейтинг
Лучшие топ букмекерских контор Молдовии рейтинг
Лучшие топ букмекерских контор Армении рейтинг
Лучшие топ букмекерских контор Киргизии рейтинг
Лучшие топ букмекерских контор Таджикистана рейтинг
Лучшие топ букмекерских контор Туркмении рейтинг`

var contacts ="Контакт,Реклам,О нас,Обратная связь,Связаться,Связь"
var google_test = "Контакты,Реклама"
var key_major = "букмекер,bookmak,bet ,бетинг,бетт,бк , бк"
var test2 = "ставк,каппер,прогнозы на спорт"
var stop = "кредит,ипотека" // =слова,которых на сайте не должно быть:
 
//САЙТЫ-прокси:
var прокси_сайты = "196.19.8.188:8000" 		//SYC IPv4 Seychelles 
//GOOGLE-прокси
var прокси_гугл = "104.238.190.248:15785" 	//FR IPv6 работает до 10.09.2017
 
 
 
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