//тестировалось на FF 45, 47; imacros 8
//файл с отчетом должен существовать в UTF-8 bom 
 
var отчет = "C:\\FULL\\RESULTS\\gmail-отчет.txt"
var тема = "MELbet PR"
var смс = `HI!
Is it possible for you to advertise the Melbet-bookmaker on your website, if so, on what terms?

At the moment the following are relevant:


- Placement in the ranking bookmakers at the TOP-5 positions.
It must contain the MELbet logo, and a brief description of the company, bonus information and a link to the site;
 
 
What do you think about it? Do you have any opportunities?`
  
var рассылкиСписок = `contact@betseek.com
marketing@blacktype.bet
admin@onlinebookmakers.co
admin@sportsbettingapps.net
bookmakersranking@gmail.com
contact@sportwiser.com
info-eng@planetwin365.com
INFO@AMERICASBOOKIE.COM
info@completesportsnigeria.com
info@dailyodds.com
info@ebetfinder.com
info@online-betting.me.uk
info@soccer-rating.com
mgmtcontact@hostpph.com
ratingbetnet@gmail.com
rickk@surepick.com.au
Support@BettingGods.com 
support@coversmedia.com
support@freebets.co.uk.
support@kabinteractive.com 
support@punters.com.au
support@smarkets.com
support@sportsline.com 
support@thegreek.com`

iim=iimPlayCode;
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))} 
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  
var start = new Date();
function timming() {diff=(new Date()-start)/1000; return 'Затрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")}
function go(g) {return window.document.querySelectorAll(g)}
function gog(g) {return go(g)}
function randGen(min,max) {return Math.floor(Math.random() * (max - min)) + min;}
function ждем(s) {iim('wait seconds='+s)}


for(i=0;i<рассылкиСписок.length;i++){
	var email = рассылкиСписок.split('\n')[i].split('	')[0]	//email
	var finalSMS = (смс).split(' ').join('<sp>').split('\n').join('<br>') 
	iim('URL GOTO=https://mail.google.com/mail/mu/mp/482/#co')
	iim("TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:composeto CONTENT="+email)
	iim('EVENTS TYPE=KEYPRESS SELECTOR="#cmcsubj" CHARS='+тема)
	iim('EVENTS TYPE=KEYPRESS SELECTOR="#cmcbody" CHARS='+finalSMS);//txt
	iim('EVENT TYPE=CLICK SELECTOR="#cvtbt>DIV:nth-of-type(4)>DIV>DIV" BUTTON=0')
	ждем(randGen(2,6));
	 добавитьВКонец(отчет,дата() + "	" + email + "	" + timming()+"\n")

}