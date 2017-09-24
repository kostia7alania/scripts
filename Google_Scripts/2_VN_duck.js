//не удалять,еси хотим юзать сайт  гугл-поиск
iimPlayCode('url goto=https://melbet-partners.ml/google-parse/ \n wait seconds=2')

// var страна 				=	"Russia" 							//	для gogoduck
var страна 			=	"Vietnam" 							//	для gogoduck
// var страна 			=	"France" 							//	для gogoduck
// var страна 			=	"Brazil" 							//	для gogoduck
// var страна 			=	"Canada (fr)" 						//	для gogoduck
// var страна 			=	"Belgium (fr)" 						//	для gogoduck
// var страна 			=	"Spain" 							//	для gogoduck
// var страна 			=	"Portugal" 							//	для duckduckgo

// var ссылка_на_гугл 	= 	"google.ru"
var ссылка_на_гугл 	= 	"duckduckgo.com"

var папка 			= 	"\\\\Kost-acer-work\\\\GOOGLE\\\\GOOGLE_VN"
var old_base		= 	папка+"\\\\old_base.txt";			// база уже обработанных сайтов
var new_base       	= 	папка+"\\\\new_base.txt";			//КУДА СОХРАНЯЕМ ОТЧЕТ
var bad_base       	= 	папка+"\\\\bad_base.txt";			//КУДА СОХРАНЯЕМ не тематич
var load_error_base = 	папка+"\\\\load_error_base.txt";	//КУДА СОХРАНЯЕМ не загруженные стр;

var скок_стр_парсить  	= 	2;														//сколько страниц парсить с 1 запроса;
var начинатьСКлюча 		=	0;

// var ключи 				=	"C:\\FULL\\RESULTS\\GOOGLE\\ключи\\"+профиль+"-ключи.txt"//  
 
var запросы = 
`Bản xếp hạng nhà cái tốt nhất
nhà cái tốt nhất
Xếp hạng nhà cái
Đặt cá cược nhà cái xếp hạng
Xếp hạng nhà cái tốt nhất
Top cá cược thể thao
Dự đoán thể thao top nhà cái
Dự đoán bóng đá top nhà cái
Chiến lược top nhà cái thể thao
Chiến lược top nhà cái bóng đá
Đặt cá cược top nhà cái thể thao
Chiến lược tốt nhất cá cược thể thao
Chiến lược tốt nhất cá cược bóng đá
Chiến lueoejc tốt nhất cá cược cờ bạc
danh sách nhà cá cược tốt nhất
Top nhà cá cược xếp hạng 
Top nhà cá cược tốt nhất Vietnam`

var contacts =
`Liên hệ
Quảng cáo
Mô tả về chúng tôi
Phản hồi
Liên lạc
Liên hệ`

var google_test = 
`Liên hệ
Quảng cáo`

var key_major = 
`nhà cái
bet`
 
var test2 = 
`Bóng đá
Thể thao
Express
dự đoán
Thời sự thể thao
Thới sự bóng đá`

var stop = // =слова,которых на сайте не должно быть:
`bank
dụng
chấp
kinh
chính` 
 
//САЙТЫ-прокси:
var прокси_сайты = "196.19.8.188:8000" 		//SYC IPv4 Seychelles 
//GOOGLE-прокси
var прокси_гугл = "91.237.244.18:17631" 	//FR IPv6 работает до 10.09.2017
  
  var contacts=contacts.split('\n').join(',')
 var google_test=google_test.split('\n').join(',')
 var key_major=key_major.split('\n').join(',')
 var test2=test2.split('\n').join(',')
 var stop=stop.split('\n').join(',')
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