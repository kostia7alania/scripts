iim=iimPlayCode; 
// var sms =  `Привет! Сниму 1к квартиру долгосрочно в Москве или ближайшей области (где ездит транспорт, где можно расплатиться тройкой! Я буду с девушкой! Бюджет - 20-25к! 
// Спасибо за понимание! Ток магистратуру закончил)`

// var sms =  `= Срочно/Срочно/Срочно: Собственница. УЖЕ можно посмотреть!! 
// СОБСТВЕННИК: Сдаю КВАРТИРУ:
// 2х комнатную квартиру с евроремонтом, мебелью,wifi, ул. Новопесчанная, 250метров от м.Сокол, 3/4 эт.(сталинка).

// =50 кв м, с 2-мя балконами.
// 2 года назад сдавала впервые за 65 000 !!!! Нынешняя цена - меньше на 10 000 р!
// +7 918 822-48-77​⁠​ (WHATSAPP ЕСТЬ!
// Риэлторы, помогайте тоже! Некогда находиться в Москве, поэтому срочно сдам через любые каналы!`


var sms = `
Молодая пара (25 лет) снимет на длительный срок квартиру до 35 тыс. (все платежи включены).
Чистоту, порядок, сохранность мебели и ремонта гарантируем. Важно наличие стиральной машины).
В пешей или автобусной (где карта тройка принимается) доступности метро. Работаем на Пл Ильича. Welcome to ЛС 😉. 
`


var начинатьСоСтроки = 0

var sms = sms.split(' ').join('<sp>').split('\n').join('<br>')
// for(i=0;i<1000;i++){sms=sms.replace(' ','<sp>').replace('\n','<br>')}
// alert(sms)
iim('set !useragent Mozilla/5.0<sp>(Windows<sp>NT<sp>6.1;<sp>WOW64;<sp>rv:40.0)<sp>Gecko/20100101<sp>Firefox/40.1\n wait seconds=1')
var start = new Date();
function timming() {diff=(new Date()-start)/1000; return 'Робот работает в этой сессии:'+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")}
function randGen(min,max) {return Math.floor(Math.random() * (max - min)) + min;}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))} 
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа+"\n")}  
function ждем(s) {iim('wait seconds='+s)}

var отчет_путь = "C:\\FULL\\RESULTS\\вк-стенка-отчет-дяка.txt";	       // должна существовать; формат: login:password;ip:port

// var список_групп = читать("C:\\FULL\\resources\\vk\\список-групп.txt");
// var предложения = читать("C:\\ютуб\\тексты.txt").split('\n');
// var база=читать("C:\\ютуб\\ютуб_база.txt");		// все тхт в utf-8;
// var group_url = ключи.split('\n')[i].split(' ').join('<sp>')
		// iim('url goto='+group_url);
var запостили =0

var список_групп = window.document.querySelectorAll('.page_block_header_count')[0].innerText.replace(' ','');

for(i=начинатьСоСтроки;i<Number(список_групп);i++){
try{
	var группа = window.document.querySelectorAll('#results > div > div > div > a');
var группа_url = группа[i].href;
// alert(группа_url+" LENGTH = "+группа.length)
iim('tab open\n tab t=2\n url goto='+группа_url);
iim('set !errorignore no \n EVENT TYPE=CLICK SELECTOR="#post_field" BUTTON=0')
var a = window.document.querySelectorAll('.submit_post_field')[0].innerHTML
iim('EVENTS TYPE=KEYPRESS SELECTOR="#post_field" CHARS='+sms)
iim('EVENT TYPE=CLICK SELECTOR="#send_post" BUTTON=0')
запостили++;
window.scrollTo(0, randGen(1,10));	//листаем вниз;
var отчет = дата()+"	Запостили в группу = "+группа_url+"	групп пройдено:"+i+"	Запостили:"+запостили+"	"+timming();
}catch(e){
	var отчет = дата()+"	НЕ смогли запостить в группу = "+группа_url+"	групп пройдено:"+i+"	Запостили:"+запостили+"	"+timming();
}
добавитьВКонец(отчет_путь,отчет)
iim('tab t=0\ntab closeallothers')
ждем(randGen(15,30));
window.scrollBy(0,111);
}

	 alert("вышли\n=Групп пройдено:"+i+"\n=Запостили:"+запостили+"\n"+timming())



//	на стенку:
// TAG POS=1 TYPE=TEXTAREA ATTR=ONFOCUS:Wall.showEditPost()&&ONKEYDOWN:onCtrlEnter(event,<SP>Wall.sendPost)&&ONKEYUP:Wall.postChanged()&&CLASS:fl_l&&ID:post_field CONTENT={{!COL1}}
// TAG POS=1 TYPE=BUTTON ATTR=ONCLICK:wall.sendPost()&&ID:send_post&&CLASS:flat_button<SP>fl_l 
// SET !VAR1 EVAL("var randomNumber=Math.floor(Math.random()*15 + 5); randomNumber;") 
// WAIT SECONDS={{!VAR1}} 