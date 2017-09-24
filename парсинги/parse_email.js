iim = iimPlayCode;

function добавитьВКонец(путь, инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь), инфа)}
var start = new Date();
function timming() {diff = (new Date() - start) / 1000;return Math.floor(diff / 3600) + 'ч:' + (Math.floor(diff / 60) - (Math.floor(diff / 3600) * 60)) + 'м:' + Math.round(diff % 60) + 'с';}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function дата() { var d = new Date(); var day = d.getDate();var month = d.getMonth() + 1;var year = d.getFullYear();return d.toLocaleString().replace(", ", "	")}
function randGen(min, max) {return Math.floor(Math.random() * (max - min)) + min;}
function ждем(s) {iim('wait seconds=' + s)}
function копиБоди() {try {var x = window.document.getElementsByTagName("body")[0].innerHTML;} catch (e) {var x = 'sex'}return x;}
function копиУрл() {return window.location.href}

function тестНаКаптчу() {if (window.document.querySelector('body').innerHTML.search('recaptcha') > 0) {alert("=пройди каптчу!;");iimPlayCode('wait seconds=25')}}
function verifyEmail(mail) {return mail.match(/[a-zA-Z0-9\.\-]+@[a-zA-Z0-9]{2,15}\.[a-z]{2,10}/g).join(', ')}


var таймаут = "set !TIMEOUT_STEP 1\n"
var исключитьСлово1 = "Rating@Mail.ru"
var исключитьСлово2 = "username@gmail.com"

var urls = "C:\\FULL\\RESULTS\\\email\\urls.txt"; 					//url
var путьСохр = "C:\\FULL\\RESULTS\\\email\\sites_parse_email.txt";	//КУДА СОХРАНЯЕМ ОТЧЕТ
var заголовок_выдачи = ".g>div>div>h3>a"
var url = читать(urls).split('\n');
var ссылка_на_гугл 		= "http://google.ru"

var проверить = 
`Контакт
Реклам
О нас
Обратная связь
Связаться
Связь`
.split('\n');

var погуглить = 
`Контакты
Реклама`
.split('\n');

var ключ_тест1 = 
``
.split('\n');

var ключ_тест2 = 
``
.split('\n');

var ключ_тест3 = 
``
.split('\n');

var отчет = "дата		q	домен	почта на главной	затрачено\n"
добавитьВКонец(путьСохр, отчет);

for (q = 0; q < url.length; q++) {
    var тематика = ""
	try {var домен=url[q].replace('http://', '').replace('https://', '').replace('www.', '').split(/[/? >#]/)[0]
    }catch(e){var домен=url[q]}
	
    if (iim('set !TIMEOUT_PAGE 30 \n url goto=' + url[q]) > 0) {
		ждем(1);var боди = копиБоди();
		var тайтл = window.document.title;
        try {var почта = verifyEmail(боди)} catch (e) {var почта = 0}
		for(cop=0;cop<ключ_тест1.length;cop++){if(боди.search(ключ_тест1[cop]))>0{var тематика = тематика+"1"}}
		for(cop=0;cop<ключ_тест2.length;cop++){if(боди.search(ключ_тест2[cop]))>0{var тематика = тематика+"	2"}}
		for(cop=0;cop<ключ_тест3.length;cop++){if(боди.search(ключ_тест3[cop]))>0{var тематика = тематика+"	3"}}
		var гуглить = 1;test = null; test = [];	//clean test
        for (i = 0; i < проверить.length; i++) {
            if (iim(таймаут + 'TAG POS=1 TYPE=A ATTR=TXT:' + проверить[i].replace(' ', '<sp>') + "*") > 0) {
                ждем(3);
                try {		test[i] = verifyEmail(копиБоди())
				} catch(e){	test[i] = '';
					if(копиБоди().search('<textarea')>0){test[i] = test[i]+копиУрл()+' (textAR) ';	гуглить = 0;	}else{
						if (копиБоди().search('<form')>0) {test[i] = test[i]+копиУрл()+' (form) ';	гуглить = 0;	}else{
						if (копиБоди().search('<input')>0){test[i] = test[i]+копиУрл()+' (input) ';	гуглить = 0;	}
						}
					}
				}
            } else {test[i] = " "}
        }
        google = null;google = [];
        if (гуглить > 1) {
            for (ii = 0; ii < погуглить.length; ii++) {
                iim('url goto='+ссылка_на_гугл);
				iim('EVENT TYPE=CLICK SELECTOR="#lst-ib" BUTTON=0')
				iim('EVENTS TYPE=KEYPRESS SELECTOR="#lst-ib" CHARS='+'site:' + домен + '<sp>' + погуглить[ii])
				iim('TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:tsf ATTR=NAME:btnK')
                try{тестНаКаптчу()}catch(e){}
                try {
                    var заголовок = window.document.querySelectorAll(заголовок_выдачи)
                    google[ii] = '';google[ii] = заголовок[0].innerText + "	" + заголовок[0].href; //заголовок и ссылка 1 выдачи
                } catch (e) {google[ii] = "хз	X3"}
                ждем(3)
            }
        } else {google[0]=0;google[1]=0} 
        try{
			
			var отчет = дата()+"	"+q+"	"+домен + "	"+тайтл+"	"+почта+"	";
			for(t=0;t<test.length;t++){var отчет = отчет+test[t]+"	"}
			for(t=0;t<google.length;t++){var отчет = отчет+google[t]+"	"}
			
			var отчет = отчет+timming()+"	"+тематика;
			
		}catch(e){
            var отчет = дата() + "	" + q + "	" + домен + "	" + "ошибка->" + e
        }
		
    } else {
        var отчет = дата() + "	" + q + "	" + домен + "	" + "не загрузился сайт!"
    }
    iimDisplay(отчет)
	var отчет = отчет.replace(исключитьСлово1, '').replace(исключитьСлово2, '') + "\n"
    добавитьВКонец(путьСохр, отчет);
}