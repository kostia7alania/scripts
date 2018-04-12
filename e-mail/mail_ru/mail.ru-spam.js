//тестировалось на FF 45, 47; imacros 8
//все указываемые пути должны существовать в UTF-8+bom 

var start = new Date();
function timming() {diff=(new Date()-start)/1000; return 'Затрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(",	","	")}
function копиБоди() {try{var x = window.document.getElementsByTagName("body")[0].innerHTML;}catch(e){var x='sex'} return x;}
iim=iimPlayCode;
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function randGen(min,max) {return Math.floor(Math.random() * (max - min)) + min;}
function ждем(s) {iim('wait seconds='+s)}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}

var инвалид_база 	=	"C:\\FULL\\RESULTS\\GOOGLE\\инвалид_база.txt"// инвалид_база (здесь будут сохраняться не работающие адреса);

var тема = "MELbet"
var текст = `Добрый день!

Возможно ли Вы размещение рекламы БК Melbet на Вашем сайте, если да, то на каких условиях?

Для нас в данный момент актуальны следующее:

- Размещение в рейтинге букмекеров на позициях ТОП-5, который должен содержать логотип MELbet, краткое описание компании, информация о бонусе и ссылка с переходом на сайт;
- Аналогичное видео с участием в рейтинге нашей компании или обзор просто независимый MELbet.

Если видео, то нам нужно знать с какой частотой будут выходить эти видео, на каком месте будут находиться и прогнозируемый охват.

Что Вы об этом думаете? Есть у Вас есть такие возможности?`

var текст_en = `Hello!
// Do you consider placing an advertisement for the Melbet bookmaker on your website, if so, on what terms?`

// var текст = предложения[randGen(0,предложения.length)];


var emails	= `topcapper.ru@ya.ru
smartbetting.biz@bk.ru
info@csesport.com 
visor181@gmail.com 
support@king-bet.club
berek89@yandex.ru
berek89@yandex.ru
support-ru@lobbet.com
support@betspan.ru
info@a-bets.com 
bukmekerskaya.online@gmail.com 
support@sport-trades.net
football-rostov@yandex.ru 
info@boxinggu.ru 
admin@freeviptip.com 
admin@probukmeker.com
support@betsovet.com
support@positivebet.com`		// почты
.split('\n')



for(i=0;i<emails.length;i++){
		
		var смс = текст;// = уникализация текста )); =В
		if(randGen(1,2)==2){var смс = смс.replace(/a/gm,'а')};
		if(randGen(1,2)==2){var смс = смс.replace(/e/gm,'e')};
		if(randGen(1,2)==2){var смс = смс.replace(/y/gm,'у')};
		if(randGen(1,2)==2){var смс = смс.replace(/c/gm,'с')};
		if(randGen(1,2)==2){var смс = смс.replace(/B/gm,'В')};
		if(randGen(1,2)==2){var смс = смс.replace(/p/gm,'р')};
		if(randGen(1,2)==2){var смс = смс.replace(/C/gm,'C')};
	iimSet('тема',тема)
	iimSet('смс',смс)
	iimSet('почта',emails[i])
	iim(`url goto = https://e.mail.ru/messages/inbox/
	TAG POS=1 TYPE=SPAN ATTR=TXT:Написать<SP>письмо
	TAG POS=1 TYPE=TEXTAREA ATTR=WRAP:off&&TABINDEX:4&&DATA-ORIGINAL-NAME:To&&CLASS:js-input<SP>compose__labels__input&&AUTOCOMPLETE:off&&TXT: CONTENT={{почта}}
	TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:Subject CONTENT={{тема}}
	FRAME NAME="toolkit-*composeEditor_ifr_name"
	EVENT TYPE=CLICK SELECTOR="#tinymce" BUTTON=0
	EVENT TYPE=KEYPRESS SELECTOR=#tinymce Char="a" MODIFIERS="ctrl" 
	EVENTS TYPE=KEYPRESS SELECTOR="#tinymce" CHARS={{смс}}
	FRAME F=0
	TAG POS=1 TYPE=SPAN ATTR=CLASS:b-toolbar__btn__text`)
	// ждем(randGen(2,6));
			ждем(1,2);

		if(копиБоди().search('заблокир')>-1){ 
		// alert("почта заблоч  ена")
			добавитьВКонец(инвалид_база,дата()+"	ПОЧТА ЗАБЛОЧЕНА=>	"+emails[i]+"	"+timming()+"\n")
			 
			}
			
			
}

