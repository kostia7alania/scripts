//тестировалось на FF 45, 47; imacros 8
//файл с отчетом должен существовать в UTF-8 bom 
 
var отчет = "C:\\FULL\\RESULTS\\gmail-отчет.txt"
var тема = "MELbet"
var смс = `HI!
Is it possible for you to advertise the Melbet BC on your website, if so, on what terms?

At the moment the following are relevant:


- Placement in the ranking bookmakers at the TOP-5 positions.
It must contain the MELbet logo, and a brief description of the company, bonus information and a link to the site;

- A video with participation in the rating of our company or an independent review of MELbet.

If  video, then we need to know how often these videos will go, where the predicted coverage will be.

What do you think about it? Do you have any opportunities?`
  
var рассылкиСписок = `contact@myracing.com
info@tonybet.com
anonymous@sharpbet.net 
bet@intertops.eu 
bettingwellcom@gmail.com 
blackmensnow@gmail.com 
boxingscene@gmail.com 
caxemirabet@gmail.com 
charlene@rorcrating.com 
client@smile-expo.com 
contact@casinoonlinerating.com 
customerservice@livecareer.com 
discovery@storyandheart.com 
disputes@bookmakersreview.com 
editorial@sportinglife.com
email@footballbettingwebsite.com 
eyran@sbpost.ie 
friends@email.com 
hello@bettercollective.com 
help@olybet.eu 
help@teamprofit.com 
timeform@timeform.com 
info@100click.com 
info@5dimes.eu 
info@aceperhead.com 
info@best-betting-sites.com 
info@bestonlinebookmakers.co 
info@bestonlinebookmakers.com 
info@betstatz.com 
info@bookmakers2u.com 
info@bookmakersrating.ru 
info@codewars.com
info@european-lotteries.org 
info@firsttouchonline.com 
info@freesupertips.co 
info@thepundits.co 
info@tipstersreview.co 
info@top100bookmakers.com 
info@topclassbet.com 
info@tourmyindia.com 
mail@freebetreview.com 
mail@semrush.com 
mb@underdogchance.com 
osga@osga.com 
pagalba@olybet.lt 
partners@esportslobby.com 
partnership@csgobets.com
predictem@hotmail.com 
rji@rjionline.org 
support@acepokersolutions.com 
support@betburger.com 
support@betclic.com 
support@bettingrunner.com 
support@codeinwp.com 
support@getkirby.com 
support@gtbets.eu
support@jbetcasino.com 
support@racingandsports.com 
support@topbet.eu 
support-ger@customerservices365.com 
tipsters@bettingadvice.com 
tony.corke@gmail.com
worldbet@email.it`

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