﻿iim=iimPlayCode 
var _c=Components,XMLHttpRequest=_c.Constructor('@mozilla.org/xmlextras/xmlhttprequest;1');
function получитьHTML (AAA){var a=XMLHttpRequest();return a.open('GET',AAA,!1),a.send(''),a.responseText}
 
 var start = new Date();
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function randGen(min,max) {return Math.floor(Math.random() * (max - min)) + min;}

var муж="C:\\FULL\\ресурсы\\мужские-имена-транслит.txt";		// имена в столбик в utf-8;
var жен="C:\\FULL\\ресурсы\\женские-имена-транслит.txt";		// имена в столбик в utf-8;

 
 
for(i=0;i<11100;i++){
iim=iimPlayCode;
iim('clear \n URL GOTO=https://multiurok.ru/index.php/user/register')

var name = '';
if(randGen(1,2)>1){var name = читать(муж).split('\n')[randGen(0,читать(муж).split('\n').length)]}
else {var name = читать(жен).split('\n')[randGen(0,читать(жен).split('\n').length)]}
var name = name+randGen(0,999999999);
iim('TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/index.php/user/register ATTR=NAME:email CONTENT='+name+'@mail.ru')
iim('TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/index.php/user/register ATTR=NAME:display_name CONTENT='+name)
iim(`TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/index.php/user/register ATTR=NAME:password CONTENT=kostia22
TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/index.php/user/register ATTR=NAME:passwordVerify CONTENT=kostia22
TAG POS=1 TYPE=DIV ATTR=TXT:Я<SP>ученик
TAG POS=1 TYPE=DIV ATTR=TXT:Я<SP>учитель
TAG POS=1 TYPE=DIV ATTR=TXT:Я<SP>родитель
TAG POS=1 TYPE=BUTTON FORM=ACTION:/index.php/user/register ATTR=NAME:submit
wait seconds=2
url goto=https://multiurok.ru/index.php/irinalysokon22/
TAG POS=1 TYPE=A ATTR=TXT:Подписаться
wait seconds=2`)

try{ 
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-akieny-matierial-dlia-podghotovk/')
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-tsikloalkany')
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-galoghienproizvodnyie-alkanov-ma')
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-akieny-matierial-dlia-podghotovk')
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-akany-matierial-dlia-podghotovki')
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-akadiieny-matierial-dlia-podghot')
получитьHTML('https://multiurok.ru/files/download/klassnyi-chas-tvoi-put-k-uspiekhu-10-klass')
получитьHTML('https://multiurok.ru/files/download/urok-obobshchieniie-po-nieorghanichieskoi-khimii-v')
получитьHTML('https://multiurok.ru/files/download/klassnyi-chas-uchim-pravila-dorozhnogho-dvizhieniia')
получитьHTML('https://multiurok.ru/files/download/kontrol-naia-rabota-za-1-chietviert-1')
получитьHTML('https://multiurok.ru/files/download/9-klass-praktichieskaia-rabota-1-poluchieniie-i-svoistva-soiedinienii-mietallov')
 // iim('url goto=https://multiurok.ru/files/opornyi-konspiekt-akieny-matierial-dlia-podghotovk.html')
//iim('clear')
}catch(e){}

iim(`url goto=https://multiurok.ru/index.php/blog/kursy-povyshieniia-kvalifikatsii-42.html
url goto=https://multiurok.ru/index.php/blog/pozdravlieniie-584.html
url goto=https://multiurok.ru/index.php/files/opornyi-konspiekt-tsikloalkany.html
TAG POS=1 TYPE=SPAN ATTR=TXT:*оммент*\n wait seconds=3 \n TAG POS=1 TYPE=TEXTAREA FORM=ID:new_comment ATTR=ID:comment_text CONTENT=Спасибо \n TAG POS=1 TYPE=BUTTON FORM=ID:new_comment ATTR=TXT:Отправить \n wait seconds=4
url goto=https://multiurok.ru/index.php/files/opornyi-konspiekt-galoghienproizvodnyie-alkanov-ma.html
TAG POS=1 TYPE=SPAN ATTR=TXT:*оммент*\n wait seconds=3 \n TAG POS=1 TYPE=TEXTAREA FORM=ID:new_comment ATTR=ID:comment_text CONTENT=Спасибо \n TAG POS=1 TYPE=BUTTON FORM=ID:new_comment ATTR=TXT:Отправить \n wait seconds=4
url goto=https://multiurok.ru/index.php/files/opornyi-konspiekt-akieny-matierial-dlia-podghotovk.html
TAG POS=1 TYPE=SPAN ATTR=TXT:*оммент*\n wait seconds=3 \n TAG POS=1 TYPE=TEXTAREA FORM=ID:new_comment ATTR=ID:comment_text CONTENT=Спасибо \n TAG POS=1 TYPE=BUTTON FORM=ID:new_comment ATTR=TXT:Отправить \n wait seconds=4
url goto=https://multiurok.ru/index.php/files/opornyi-konspiekt-akany-matierial-dlia-podghotovki.html
TAG POS=1 TYPE=SPAN ATTR=TXT:*оммент*\n wait seconds=3 \n TAG POS=1 TYPE=TEXTAREA FORM=ID:new_comment ATTR=ID:comment_text CONTENT=Спасибо \n TAG POS=1 TYPE=BUTTON FORM=ID:new_comment ATTR=TXT:Отправить \n wait seconds=4
url goto=https://multiurok.ru/index.php/files/opornyi-konspiekt-akadiieny-matierial-dlia-podghot.html
TAG POS=1 TYPE=SPAN ATTR=TXT:*оммент*\n wait seconds=3 \n TAG POS=1 TYPE=TEXTAREA FORM=ID:new_comment ATTR=ID:comment_text CONTENT=Спасибо \n TAG POS=1 TYPE=BUTTON FORM=ID:new_comment ATTR=TXT:Отправить \n wait seconds=4
url goto=https://multiurok.ru/index.php/files/klassnyi-chas-tvoi-put-k-uspiekhu-10-klass.html
TAG POS=1 TYPE=SPAN ATTR=TXT:*оммент*\n wait seconds=3 \n TAG POS=1 TYPE=TEXTAREA FORM=ID:new_comment ATTR=ID:comment_text CONTENT=Спасибо \n TAG POS=1 TYPE=BUTTON FORM=ID:new_comment ATTR=TXT:Отправить \n wait seconds=4
url goto=https://multiurok.ru/index.php/files/urok-obobshchieniie-po-nieorghanichieskoi-khimii-v.html
TAG POS=1 TYPE=SPAN ATTR=TXT:*оммент*\n wait seconds=3 \n TAG POS=1 TYPE=TEXTAREA FORM=ID:new_comment ATTR=ID:comment_text CONTENT=Спасибо \n TAG POS=1 TYPE=BUTTON FORM=ID:new_comment ATTR=TXT:Отправить \n wait seconds=4
url goto=https://multiurok.ru/index.php/files/klassnyi-chas-uchim-pravila-dorozhnogho-dvizhieniia.html
TAG POS=1 TYPE=SPAN ATTR=TXT:*оммент*\n wait seconds=3 \n TAG POS=1 TYPE=TEXTAREA FORM=ID:new_comment ATTR=ID:comment_text CONTENT=Спасибо \n TAG POS=1 TYPE=BUTTON FORM=ID:new_comment ATTR=TXT:Отправить \n wait seconds=4
url goto=https://multiurok.ru/index.php/files/kontrol-naia-rabota-za-1-chietviert-1.html
TAG POS=1 TYPE=SPAN ATTR=TXT:*оммент*\n wait seconds=3 \n TAG POS=1 TYPE=TEXTAREA FORM=ID:new_comment ATTR=ID:comment_text CONTENT=Спасибо \n TAG POS=1 TYPE=BUTTON FORM=ID:new_comment ATTR=TXT:Отправить \n wait seconds=4
url goto=https://multiurok.ru/index.php/files/9-klass-praktichieskaia-rabota-1-poluchieniie-i-svoistva-soiedinienii-mietallov.html
TAG POS=1 TYPE=SPAN ATTR=TXT:*оммент*\n wait seconds=3 \n TAG POS=1 TYPE=TEXTAREA FORM=ID:new_comment ATTR=ID:comment_text CONTENT=Спасибо \n TAG POS=1 TYPE=BUTTON FORM=ID:new_comment ATTR=TXT:Отправить \n wait seconds=4
url goto=https://multiurok.ru/index.php/album/photo/niedielia-khimii-v-shkolie/96580/
url goto=https://multiurok.ru/index.php/album/photo/niedielia-khimii-v-shkolie/96571/
url goto=https://multiurok.ru/index.php/album/photo/niedielia-khimii-v-shkolie/96570/ 
url goto=https://multiurok.ru/index.php/album/photo/niedielia-khimii-v-shkolie/96572/
url goto=https://multiurok.ru/index.php/album/photo/niedielia-khimii-v-shkolie/96573/
url goto=https://multiurok.ru/index.php/album/photo/niedielia-khimii-v-shkolie/96574/
url goto=https://multiurok.ru/index.php/album/photo/niedielia-khimii-v-shkolie/96575/
url goto=https://multiurok.ru/index.php/album/photo/niedielia-khimii-v-shkolie/96576/
url goto=https://multiurok.ru/index.php/album/photo/niedielia-khimii-v-shkolie/96577/
url goto=https://multiurok.ru/index.php/album/photo/niedielia-khimii-v-shkolie/96578/
url goto=https://multiurok.ru/index.php/album/photo/niedielia-khimii-v-shkolie/96579/
url goto=https://multiurok.ru/index.php/files/opornyi-konspiekt-galoghienproizvodnyie-alkanov-ma.html
url goto=https://multiurok.ru/index.php/files/opornyi-konspiekt-akieny-matierial-dlia-podghotovk.html
url goto=https://multiurok.ru/index.php/files/opornyi-konspiekt-akany-matierial-dlia-podghotovki.html
url goto=https://multiurok.ru/index.php/files/opornyi-konspiekt-akadiieny-matierial-dlia-podghot.html
url goto=https://multiurok.ru/index.php/files/klassnyi-chas-tvoi-put-k-uspiekhu-10-klass.html
url goto=https://multiurok.ru/index.php/files/urok-obobshchieniie-po-nieorghanichieskoi-khimii-v.html
url goto=https://multiurok.ru/index.php/blog/kursy-povyshieniia-kvalifikatsii-42.html
url goto=https://multiurok.ru/index.php/files/9-klass-praktichieskaia-rabota-1-poluchieniie-i-svoistva-soiedinienii-mietallov.html`)



try{ 
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-akieny-matierial-dlia-podghotovk/'); iim('clear')
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-tsikloalkany'); iim('clear')
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-galoghienproizvodnyie-alkanov-ma');iim('clear')
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-akieny-matierial-dlia-podghotovk');iim('clear')
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-akany-matierial-dlia-podghotovki');iim('clear')
получитьHTML('https://multiurok.ru/files/download/opornyi-konspiekt-akadiieny-matierial-dlia-podghot');iim('clear')
получитьHTML('https://multiurok.ru/files/download/klassnyi-chas-tvoi-put-k-uspiekhu-10-klass');iim('clear')
получитьHTML('https://multiurok.ru/files/download/urok-obobshchieniie-po-nieorghanichieskoi-khimii-v');iim('clear')
получитьHTML('https://multiurok.ru/files/download/klassnyi-chas-uchim-pravila-dorozhnogho-dvizhieniia');iim('clear')
получитьHTML('https://multiurok.ru/files/download/kontrol-naia-rabota-za-1-chietviert-1');iim('clear')
получитьHTML('https://multiurok.ru/files/download/9-klass-praktichieskaia-rabota-1-poluchieniie-i-svoistva-soiedinienii-mietallov');iim('clear')
 // iim('url goto=https://multiurok.ru/files/opornyi-konspiekt-akieny-matierial-dlia-podghotovk.html')
//iim('clear')
}catch(e){} 

}