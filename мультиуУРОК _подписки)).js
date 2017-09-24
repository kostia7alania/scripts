iim=iimPlayCode 
function translit(text, engToRus, replace){rus = "щшчцюяёжъыэабвгдезийклмнопрстуфхь".split("");eng = "shh sh ch cz yu ya yo zh `` y e a b v g d e z i j k l m n o p r s t u f x  ".split(" ");for(var x = 0; x < rus.length; x++){text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase()); 
}if(replace){r = replace.split(",");try{pr = new RegExp("([^\\"+r[0]+"]+)(?=\\"+r[1]+")","g");text.match(pr).forEach(function(i){text=text.split(r[0]+i+r[1]).join(translit(i, engToRus ? "" : true))})}catch(e){}}return text;}
//с английского на русский alert(translit("text", true)) //тоже самое, но без перевода того, что написано в [ ] alert(translit("text [text]", true, "[,]")) 
//с русского на английский- alert(translit("текст")) //тоже самое, но без перевода того, что написано в {[} {]} alert(translit("текст {[}текст{]}", true, "{[},{]}"))


var _c=Components,XMLHttpRequest=_c.Constructor('@mozilla.org/xmlextras/xmlhttprequest;1');
function получитьHTML (AAA){var a=XMLHttpRequest();return a.open('GET',AAA,!1),a.send(''),a.responseText}
 
 var start = new Date();
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function randGen(min,max) {return Math.floor(Math.random() * (max - min)) + min;}

var имена  = "https://m.vk.com/doc-125614288_450503984";
var фамилии= "https://m.vk.com/doc40778210_450651681";
var домены = "https://m.vk.com/doc-125614288_450507777";	 //почтовые домены;
 
var имена = получитьHTML(имена).split('\n')
var фамилии = получитьHTML(фамилии).split('\n')
var домены = получитьHTML(домены).split('\n') 

var скокЗарегать = 11111

 
 function логин () {
	var рандомИмя = randGen(1,имена.length);
	var рандомФам = randGen(1,фамилии.length); 
	
	var имя 	= имена[рандомИмя]
	var фамилия = фамилии[рандомФам]
	
	var домен	= домены[randGen(0,домены.length)]
 
	if(randGen(0,1)>0){
		логин = имя
		if(randGen(0,2)>0){
			var логин = логин+randGen(0,9)
		}else{
			логин = логин + фамилия;
			if(randGen(0,2)>0){
				var логин = логин+randGen(0,9)
			}
		}
	}else{
		логин = фамилия
		if(randGen(0,1)>0){
			var логин = логин+randGen(0,9)
		}else{
			логин = логин + имя;
			if(randGen(0,2)>0){
				var логин = логин+randGen(0,9)
			}
		}
	}
	var имя = имя+randGen(0,9);
	if(randGen(0,1)>0){var имя = translit(имя)+randGen(0,9)}
	if(randGen(0,1)>0){var имя = translit(фамилия)}
	if(randGen(0,1)>0){var имя = translit(имя)}
	if(randGen(0,1)>0){var имя = фамилия}
	if(randGen(0,1)>0){var имя = имя}
	
	var почта = логин+"@"+домен
	return имя+":"+translit(почта)+":"+translit(фамилия)
} 


for(i=0;i<11100;i++){
	var вход = логин();
	var имя = вход.split(':')[0]
	var почта = вход.split(':')[1]
	var пароль = вход.split(':')[2]
	
iim=iimPlayCode;
iim('clear \n URL GOTO=https://multiurok.ru/index.php/user/register')

var name = '';
if(randGen(1,2)>1){var name = читать(муж).split('\n')[randGen(0,читать(муж).split('\n').length)]}
else {var name = читать(жен).split('\n')[randGen(0,читать(жен).split('\n').length)]}

var name = name+randGen(0,1000);

iim('TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/index.php/user/register ATTR=NAME:email CONTENT='+имя+почта)
iim('TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/index.php/user/register ATTR=NAME:display_name CONTENT='+name)
iim(`TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/index.php/user/register ATTR=NAME:password CONTENT=`+пароль+`
TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/index.php/user/register ATTR=NAME:passwordVerify CONTENT=`+пароль+`
TAG POS=1 TYPE=DIV ATTR=TXT:Я<SP>ученик
TAG POS=1 TYPE=DIV ATTR=TXT:Я<SP>учитель
TAG POS=1 TYPE=DIV ATTR=TXT:Я<SP>родитель
TAG POS=1 TYPE=BUTTON FORM=ACTION:/index.php/user/register ATTR=NAME:submit
wait seconds=2
url goto=https://multiurok.ru/index.php/irinalysokon22/
TAG POS=1 TYPE=A ATTR=TXT:Подписаться
wait seconds=3`)

try{ 
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-akieny-matierial-dlia-podghotovk/'); 
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-tsikloalkany'); 
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-galoghienproizvodnyie-alkanov-ma');
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-akieny-matierial-dlia-podghotovk');
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-akany-matierial-dlia-podghotovki');
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-akadiieny-matierial-dlia-podghot');
получитьHTML('https://multiurok.ru/files/download/klassnyi-chas-tvoi-put-k-uspiekhu-10-klass');
получитьHTML('https://multiurok.ru/files/download/urok-obobshchieniie-po-nieorghanichieskoi-khimii-v');
получитьHTML('https://multiurok.ru/files/download/klassnyi-chas-uchim-pravila-dorozhnogho-dvizhieniia');
получитьHTML('https://multiurok.ru/files/download/kontrol-naia-rabota-za-1-chietviert-1');
получитьHTML('https://multiurok.ru/files/download/9-klass-praktichieskaia-rabota-1-poluchieniie-i-svoistva-soiedinienii-mietallov')
}catch(e){} 

}