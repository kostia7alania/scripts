
//осуждение => https://vk.com/topic-125614288_35041402 
//проверено на FF45 - на этой сборке :: vk.com/imacros_javascript

 
  papka = "C://imacros/scripts/FB/FB-regger/" /* <== именно такие слеши! */ .replace(/\//gim,'\\');
  useragents = "useragents.txt"
  proxy = "proxy.txt"
  names = "names.txt"
  surnames = "surnames.txt"
  logs = "logs.txt"
  created = "created_accs.txt"
  photos = "photos";
  start_proxy = 0
  dateOfBirthFrom   = [1,1,1988];//dd,mm,yyyy
  dateOfBirthTo     = [28,12,2000];//dd,mm,yyyy
  sex = 'w'// 'm'-мужской,w-женский,mw-рандомный;
  
var apikey = `vdo8kwwniz5j96pf2wqa1gvo2tz9uxg6`;//sms-reg api
var smsReg = 'http://api.sms-reg.com/';         //sms-reg api
var service = "facebook"; // 'avito'            //sms-reg api

iim         = iimPlayCode;
setInterval = window.setInterval;
console     = window.console;

translit = (text, engToRus, replace) => {
    var rus = "щшчцюяёжъыэабвгдезийклмнопрстуфхь".split("")
      //eng = "shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(" ");
    var eng = "shh sh ch cz yu ya yo zh d y e a b v g d e z i j k l m n o p r s t u f x `".split(" ");
    for(var x = 0; x < rus.length; x++){
        text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
        text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());}
    if(replace){r = replace.split(",");
        try{pr = new RegExp("([^\\"+r[0]+"]+)(?=\\"+r[1]+")","g")
        text.match(pr).forEach(function(i){text=text.split(r[0]+i+r[1]).join(translit(i, engToRus ? "" : true))})}catch(e){}} return text;
} 
uP=() => {/*функция для снятия прокси=>*/Components.utils.import("resource://gre/modules/Services.jsm");Services.prefs.setIntPref("network.proxy.type",0)} 
P=(ip,port,login,pass)=>{ /*функция для постановки прокси => */
 	Components.utils.import("resource://gre/modules/Services.jsm");Services.prefs.setIntPref("network.proxy.type",1);Services.prefs.setCharPref("network.proxy.http",ip);Services.prefs.setIntPref("network.proxy.http_port",port);base64_encode=(data)=>{/*инфа про base тут => bit.ly/2rnFVdQ*/
 		var prefs=Components.classes["@mozilla.org/preferences-service;1"] /*vk.com/club34749892 видимо))*/
 		.getService(Components.interfaces.nsIPrefBranch),
 		b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o1,o2,o3,h1,h2,h3,h4,bits,i=0,enc='';
 		do{ o1=data.charCodeAt(i++);o2=data.charCodeAt(i++);o3=data.charCodeAt(i++);bits=o1<<16|o2<<8|o3;h1=bits>>18&0x3f;h2=bits>>12&0x3f;h3=bits>>6&0x3f;h4=bits&0x3f;enc+=b64.charAt(h1)+b64.charAt(h2)+b64.charAt(h3)+b64.charAt(h4);}
 		while(i<data.length);switch(data.length%3){case 1:enc=enc.slice(0,-2)+'==';break;case 2:enc=enc.slice(0,-1)+'=';break}
 			window.console.log("enc>"+enc);prefs.setCharPref("extensions.closeproxyauth.authtoken",enc); /* <=для глючного closeproxyauth*/  		prefs.setCharPref("extensions.proxyauth.authtoken"     ,enc); /*<=для нормального proxyauth=>качать тут=> mzl.la/2EXNgmn*/  		return
 	}
 	base64_encode(login+':'+pass);
 	//запасной вариант: и если не будет пахать, то вот ето еще точно поможет=>iimPlayCode(`ONLOGIN USER=${login} PASSWORD=${pass}\nURL GOTO=2ip.ru`);
	var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService); 
	var a = pref.getBranch("network.proxy."); 
	a.setCharPref("http",  ip); a.setCharPref("ssl",   ip); a.setCharPref("ftp",   ip); a.setCharPref("socks", ip);a.setIntPref( "http_port", port); a.setIntPref(  "ssl_port", port); a.setIntPref(  "ftp_port", port); a.setIntPref("socks_port", port);  a.setIntPref("type", 1);
	 //так можно почитать че в настройках сейчас установлено (i.e.about:config):
	var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch); 
	var myPrx = prefs.getCharPref("network.proxy.http"); 
	var myPrt = prefs.getIntPref("network.proxy.http_port");
 }


var start   = new Date();
var timming = () => {diff=(new Date()-start)/1000; return 'Робот работает: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
var date    = () => {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	");}
var читать  = (файл) => {return imns.FIO.readTextFile(imns.FIO.openNode(файл))} 
var добавитьВКонец = (путь, инфа) => {console.log(путь,инфа); imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  
function randGen(min,max) {return Math.floor(Math.random() * (max - min)) + min;}


var toDisp = (...args) => {
    var predefVars = [proxy,papka];
    Array.prototype.push.apply(args, predefVars);
    var arr; args.forEach( (e) => arr += e + "\n");
    var out = args.reduce((sum,cur)=>{return cur?sum+'\n'+cur+'':sum},date())+"\n"+timming();
    typeof iimDisplay == "function" ?iimDisplay(out):console.log(out);
}

toLog = (toLog,...args) => {
    TextToLog = args.reduce((sum,cur)=>{return cur?sum+' '+cur+' ':sum},date())+'    '+timming()+'\n';
    var file = toLog==1?logs:created;
    добавитьВКонец(papka + file, TextToLog); 
}

// toLog(1, 2, 3); toDisp(1, 2, 3);  
var proxys      = читать(papka + proxy).split("\n");
var names       = читать(papka + names).split("\n");
var surnames    = читать(papka + surnames).split("\n"); 
var useragents  = читать(papka + useragents).split("\n"); 

if(sex!='m' || sex!='w') {sex = randGen(0,2)>0?'m':'w'; }
 



loadScriptFromURL = (url) => {
    var request = Components.classes["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance(Components.interfaces.nsIXMLHttpRequest), async = false;
    request.open("GET", url, async); request.send();
    if (request.status !== 200) {var message ="Ошибка при запросе к урл: " + url +", status: " +request.status; iimDisplay(message); return false;};return request.response;
}
 


function getFile(url) {
  // функция гет запроса
  var XMLHttpRequest = Components.Constructor(
    "@mozilla.org/xmlextras/xmlhttprequest;1",
    "nsIXMLHttpRequest"
  );
  var req = new XMLHttpRequest();
  req.open("GET", url, false);
  req.send(null);
  return req.responseText;
}
function dataFile(url) { // функция для чтения папок (в данном случае);
  var arrData = [];
  var getStart = getFile(url); // гет запрос локально
  var decodeText = decodeURIComponent(getStart); // декодируем в UTF-8 ответ
  var arrText = decodeText.split("\n"); // разделяем строки по переносу
  for (i = 2; i < arrText.length - 1; i++) {
    // начинаем с третьей строки(первые 2 - ненужная инфа)
    var arrFile = [];
    var spGSM = arrText[i].split(" GMT "); //разделяем по GMT
    var spCom = spGSM[0].split(", "); // разделяем по запятой
    var spSpace = spCom[spCom.length - 2].split(" "); // оставшееся разделяем по пробелу
    arrFile.push(spGSM[1].replace(" ", "")); //  добавляем  в массив каталог это или файл
    arrFile.push(new Date(spCom[spCom.length - 1])); //  добавляем  в массив дату последнего изменения
    var sumBit = spSpace[spSpace.length - 2]; // вес файла
    arrFile.push(sumBit); //  добавляем  в массив сколько килобайт весит файл
    arrFile.push(spGSM[0].split(" " + sumBit)[0].substring(5)); //  добавляем  в массив имя файла
    arrData.push(arrFile);
  }
  return arrData;
} 
  
getBalance  = apikey => {var a = loadScriptFromURL(smsReg + `getBalance.php?apikey=${apikey}`); b = a.search(`"response":"1"`) > 0 ? JSON.parse(a).balance : "Balance не получен!=>"; return b;}
getCodeOperation  = (apikey, service) => {var a = loadScriptFromURL(smsReg+`getNum.php?country=ru&service=${service}&apikey=${apikey}`); b = a.search(`"response":"1"`) > 0 ? JSON.parse(a).tzid:false; return b;}
 getState = (apikey, codeOperation, stage) => {var stt, otv;
    for(stt=0;stt<30;stt++){
        var state = loadScriptFromURL(smsReg + `getState.php?tzid=${codeOperation}&apikey=${apikey}`);
            if( (state.search('TZ_INPOOL')   > 0)
             || (state.search('TZ_NUM_WAIT') > 0) ){iimPlayCode('wait seconds=5')}
            else if (state.search('TZ_NUM_PREPARE') && (stage==0)) {otv = JSON.parse(state).number; break;}
            else if (state.search('TZ_NUM_ANSWER')  && (stage==1)) {otv = JSON.parse(state).msg;    break;} 
            else if (state.search('WARNING_NO_NUMS')) { otv = false; break;} 
            else if(1) { alert("ОШибка при codeOperation => " + state);}
    }
    return (stt < 29)?otv:false;
} 
setReady = (apikey, codeOperation) => {var a = loadScriptFromURL(smsReg + `setReady.php?tzid=${codeOperation}&apikey=${apikey}`); return a.search(`"response":"1"`) > -1 ? true:false}



//////////////////START?//////////////////////////////

for (var i = start_proxy; i < proxys.length; i++ ){
var usAg = `\n SET !USERAGENT "${useragents[randGen(0, useragents.length)].trim().replace(/"/gim,"'")}" \n`; //генерируем случайный юзерагент
 
    iim(`clear`);
    var [prox_ip, prox_port, prox_log, prox_pas] = proxys[i].trim().split(":"); //распаковка;
    uP(); //снять прокси
//ЕСЛИ НАДО МЕНЯТЬ ПРОКСИ, РАСКОМЕНТИРУЙ СЛЕД СТРОКУ:::
    // P(prox_ip, prox_port, prox_log, prox_pas); //установить прокси; 

var balance = getBalance(apikey); //alert(balance);       //1
    balance < 2 ? alert('бабки на смс-реге закончились!!'):'';
        toDisp("Баланс: "+balance);
var codeOperation = getCodeOperation(apikey, service); //alert(codeOperation);        //2
        toDisp("Баланс: " + balance, "Код операции: " + codeOperation);
var number = getState(apikey, codeOperation, 0); !number?alert("Недождались number!"):'';// alert("number => "+number); //3
        toDisp("Баланс: " + balance, "Получили номер: " + number);    
    name    = names[randGen(0, names.length)].trim();
    surname = surnames[randGen(0, surnames.length)].trim();
    mail = translit(surname + randGen(0, 100) + name + randGen(0, 100)).trim();
    pass = translit(surname + randGen(0, 100) + name + randGen(0, 100)).trim();
   /*
    iimPlayCode(` 
        URL GOTO=https://www.facebook.com/
        TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reg ATTR=ID:u_0_k CONTENT=${name.trim()}
        TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reg ATTR=ID:u_0_m CONTENT=${surname.trim()}` +
        //TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reg ATTR=ID:u_0_p CONTENT=${mail}@mail.ru
        //TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reg ATTR=ID:u_0_s CONTENT=${mail}@mail.ru
        //TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reg ATTR=ID:u_0_p CONTENT=${number}
        `
        EVENTS TYPE=KEYPRESS SELECTOR="#u_0_p" CHARS="+${number.trim()}"
        prompt 1
        TAG POS=1 TYPE=INPUT:TEXT FORM=ID:reg ATTR=ID:u_0_p CONTENT="+${number}"
        TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:reg ATTR=ID:u_0_w CONTENT=${pass}
        TAG POS=1 TYPE=SELECT FORM=ID:reg ATTR=ID:day   CONTENT=%${randGen(dateOfBirthFrom[0], dateOfBirthTo[0])}
        TAG POS=1 TYPE=SELECT FORM=ID:reg ATTR=ID:month CONTENT=%${randGen(dateOfBirthFrom[1], dateOfBirthTo[1])}
        TAG POS=1 TYPE=SELECT FORM=ID:reg ATTR=ID:year  CONTENT=%${randGen(dateOfBirthFrom[2], dateOfBirthTo[2])}
        ${sex == "m" ? "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:reg ATTR=ID:u_0_b" : "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:reg ATTR=ID:u_0_a"}
        TAG POS=1 TYPE=BUTTON FORM=ID:reg ATTR=ID:u_0_12 `)
*/
    d=randGen(dateOfBirthFrom[0], dateOfBirthTo[0]);
    m=randGen(dateOfBirthFrom[1], dateOfBirthTo[1]);
    y=randGen(dateOfBirthFrom[2], dateOfBirthTo[2]);
    iim(`${usAg}
        clear \n '<=чистим куки
        URL GOTO=https://www.facebook.com/
        EVENT TYPE=CLICK SELECTOR="#u_0_k" BUTTON=0
        EVENTS TYPE=KEYPRESS SELECTOR="#u_0_k" CHARS="${name}"
        EVENT TYPE=KEYPRESS SELECTOR="#u_0_k" KEY=9
        EVENTS TYPE=KEYPRESS SELECTOR="#u_0_m" CHARS="${surname}"
        EVENT TYPE=KEYPRESS SELECTOR="#u_0_m" KEY=9
        EVENTS TYPE=KEYPRESS SELECTOR="#u_0_p" CHARS="+${number}"
        EVENT TYPE=KEYPRESS SELECTOR="#u_0_p" KEY=9
        EVENTS TYPE=KEYPRESS SELECTOR="#u_0_w" CHARS="${pass}"        
        TAG POS=1 TYPE=SELECT FORM=ID:reg ATTR=ID:day   CONTENT=%${d}
        TAG POS=1 TYPE=SELECT FORM=ID:reg ATTR=ID:month CONTENT=%${m}
        TAG POS=1 TYPE=SELECT FORM=ID:reg ATTR=ID:year  CONTENT=%${y}

        

        ${sex == "m" ? "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:reg ATTR=NAME:sex&&VALUE:1" : "TAG POS=1 TYPE=INPUT:RADIO FORM=ID:reg ATTR=NAME:sex&&VALUE:2"}
        EVENT TYPE=CLICK SELECTOR="#u_0_12" BUTTON=0
        wait seconds=5
    `);
var err = window.document.querySelectorAll(".hidden_elem > #reg_error_inner");
    err.length > 0?alert('ошибка => '+err[0].value):'';

        toDisp("Баланс: " + balance, "Номер: " + number, "Поля заполнили. Оповещаем смс-рег, что код можно ждать.");
    var ready = setReady (apikey, codeOperation); !ready ? alert("Ошибка переключения в режим 'Готов принять смс'!") : ""; //4
        toDisp("Баланс: " + balance, "Номер: " + number, "Опрашиваем СМС-рег - не пришел ли код...");
    var cod = getState(apikey, codeOperation, 1);  
    !cod?alert("Недождались кода!") : ""; alert("код => " + cod); //3

    if (iim(`${usAg}
        EVENT TYPE=CLICK SELECTOR="#code_in_cliff" BUTTON=0
        EVENTS TYPE=KEYPRESS SELECTOR="#code_in_cliff" CHARS="${cod.trim()}"
        EVENT TYPE=CLICK SELECTOR="#u_4_m" BUTTON=0
        EVENT TYPE=CLICK SELECTOR="#code_in_cliff" BUTTON=0
        EVENT TYPE=KEYPRESS SELECTOR="#code_in_cliff" KEY=13
        wait seconds=10
        TAG POS=1 TYPE=DIV ATTR=TXT:Аккаунт<sp>подтвержден
    `) == 1) {
      var photo = dataFile("file:///" + papka + photos); // не забывайте добавлять 'file:///'
      photo = photo[randGen(0,photo.length-1)][3];//случайная фотка;
      photo = papka + photos + "\\" + photo;

      iim(`${usAg} set !errorignore yes
            TAG POS=1 TYPE=A ATTR=TXT:OK
            TAG POS=1 TYPE=BUTTON FORM=ID:* ATTR=VALUE:1&&NAME:confirm&&TYPE:submit&&ID:*
            TAG POS=1 TYPE=A ATTR=ROLE:button&&CLASS:*<SP>layerCancel<SP>uiOverlayButton<SP>selected<SP>*&&HREF:#&&ONCLICK:goURI("\/",<SP>true);&&TABINDEX:0
        `);
      var stat = iim(`${usAg}
            url goto=https://www.facebook.com/home.php?ref=wizard 
            TAG POS=1 TYPE=INPUT:FILE FORM=ID:* ATTR=TITLE:Выберите<SP>файл<SP>для<SP>загрузки&&ACCEPT:image/*&&NAME:file&&ID:js_*&&TYPE:file CONTENT=${photo}
            wait seconds=2
        `) == 1 ? "С аватаром" : "Без аватара";
      toLog(1, `${name} ${surname}   ${number}:${pass}   ${prox_ip}:${prox_port}:${prox_log}:${prox_pas}    ${d}.${m}.${y} ${sex} ${balance}   ${stat}  ${photo}`);
    } else {
      alert("%ЕРНЯ случилась,шеф!");
      iim("SCREENSHOT TYPE=BROWSER FOLDER=* FILE=*");
      toLog(0, `${name} ${surname}   ${number}:${pass}    ${d}.${m}.${y} ${sex} ${balance}   Из-за каокй-то херни не смогли закончить!`);
    }

   
}