var _0x9223=["\x73\x65\x78"];alert(_0x9223[0])

var Cc = Components.classes,
Ci = Components.interfaces,
wm = Cc["@mozilla.org/appshell/window-mediator;1"]
.getService(Ci.nsIWindowMediator)
.getMostRecentWindow("navigator:browser");
var mainWindow = wm.iMacros.panel.sidebar;

iimDisplay("test message");


function asd(a) {mainWindow.document.querySelector('#imacros-message-box').setAttribute("style", "height: 500px; background:black; color:red; transform:SCALE("+a+"); font-size: 14px;")}

for(i=1;i>0;i=i-0.1){
	asd(i)
	iimPlayCode('wait seconds=0')
}
for(i=0.1;i<1;i=i+0.1){
	asd(i)
	iimPlayCode('wait seconds=0')
}

for(i=0;i<1111;i++){window.scrollBy(0,1)}
iimPlayCode('wait seconds=3')

for(i=0;i<1111;i++){
window.scrollBy(0,1)}
iimPlayCode('wait seconds=3')


function копиБоди() {try{var x = window.document.getElementsByTagName("body")[0].textContent;}catch(e){var x='sex'} return x;}
function wait(sec) {iimPlayCode('WAIT SECONDS='+sec)}
  	step0='SET !TIMEOUT_STEP 0\n';
		time30='SET !TIMEOUT 30\n';
		time80='SET !TIMEOUT 80\n'; 

var Path = 'C:\\CapNum\\'
var key='6440c629b2418bf14c6ca56d0e7e21d0';// рукаптча апи-ключ,брать тут - https://rucaptcha.com/setting
googleKey='6LfIzgwUAAAAAKwNaj_DgVpaRtkknYQ8vN91EDRh'; //инструкция по получению тут - https://rucaptcha.com/recaptchav2_rus_instruction 
urlHack='https://www.google.com/recaptcha/api2/demo';  //ссылка где капча
	var url1 = "http://rucaptcha.com/in.php?key="+key+"&method=userrecaptcha&googlekey="+googleKey+"&pageurl="+urlHack; 
	var url2 = "http://rucaptcha.com/res.php?key="+key+"&action=get&id=";

for(qqq=0;qqq<111;qqq++){ 
	iimPlayCode('clear \n url goto=https://www.google.com/recaptcha/api2/demo')  //ссылка где капча
		 wait(3);
		iimPlayCode('TAB OPEN\nTAB T=2'); 
		iimSet('url1',url1); iimPlayCode('url goto={{url1}}');
		wait(1);
		var ответ = копиБоди().split("|")
		if(ответ[0]=="OK"){
			iimDisplay("получили трек-код для отслежки")
			var трек=ответ[1];
			for(i=0;i<5;i++){//ждем ответного финального хеш-кода; 
				 wait(5); iimSet('url2',url2+трек)
				 iimPlayCode('url goto={{url2}}');
					var ответ2 = копиБоди().split("|");
					if(ответ2[0]=="OK"){ var i=5;//для выхода из цикла;
						iimDisplay("Получили код. С захода №"+i+"\nGO вводить код на страницу!\nВот код сам:"+ответ2[1]) 
						iimPlayCode('TAB CLOSE');
						iimSet('бейс',ответ2[1]);
						iimPlayCode('TAG POS=1 TYPE=TEXTAREA FORM=ACTION:index.php ATTR=CLASS:g-recaptcha-response* CONTENT={{бейс}}')
						alert('все ок, сматываем удочки;')
					} else{
						wait(5)
						iimDisplay('neOK2. ждем. круг №'+i+'\nПолученный код:'+ответ2)
					}
			}
			alert('вышли из цикла 2')
		} else{alert('neOK')}
				iimPlayCode('TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=*')
				wait(1)
}
	




function распознатьКапчу(рукапчаКлюч) { iimSet("рукапчаКлюч", рукапчаКлюч); iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\n FILTER TYPE=IMAGES STATUS=OFF\n ONDOWNLOAD FOLDER="C:\\" FILE=cap.jpg WAIT=YES\n	TAG POS=1 TYPE=IMG ATTR=SRC:https://www.avito.ru/captcha?* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT\n TAB OPEN\nTAB T=2\n URL GOTO=http://imacros2.rucaptcha.com/new/\n TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:key CONTENT={{рукапчаКлюч}}\n TAG POS=1 TYPE=INPUT:FILE ATTR=NAME:file CONTENT="C:\\cap.jpg"\n ONDIALOG POS=1 BUTTON=OK CONTENT=\n TAG POS=1 TYPE=INPUT:SUBMIT ATTR=*\n SET !EXTRACT NULL\n WAIT SECONDS=3\n TAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT\n TAB T=1\n TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=NAME:captcha CONTENT={{!EXTRACT}}'); }; 
распознатьКапчу("6440c629b2418bf14c6ca56d0e7e21d0")

  
iimPlayCode('TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=NAME:upload_file CONTENT=C:\cap.jpg')

function loadJQ() {function loadScriptFromURL(url) {var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),async = false;request.open('GET', url, async);request.send();if (request.status !== 200) {var message = 'An error occurred while loading script at url: ' + url + ', status: ' + request.status;iimDisplay(message);return false;}eval(request.response);return true;}; loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');$ = window.$,JQuery = window.JQuery;}; loadJQ();
  

 
 var xhr = new window.XMLHttpRequest();
alert(1)
xhr.open('GET', 'http://2ip.ru');
xhr.onload = function(e) {
  var data = JSON.parse(this.response);
 alert(data)
}
alert(1)
xhr.send();
alert(1)
// function SendFile() {
	// //отправка файла на сервер
	// $$f({
		// formid:'test_form',//id формы
		// url:'http://imacros2.rucaptcha.com/new/getcapcha.php',//адрес на серверный скрипт который будет принимать файл
		// onstart:function () {//действие при начале загрузки файла
			// // $$('result','начинаю отправку файла');//в элемент с id="result" выводим результат
				// alert('начинаю отправку файла')
		// },
		// onsend:function () {//действие по окончании загрузки файла
			// // $$('result',$$('result').innerHTML+'<br />файл успешно загружен');//в элемент с id="result" выводим результат
			// alert('успех')
		// }
	// });
// }

// SendFile();


// // var data = new window.FormData(form),
// // xhr = new window.XMLHttpRequest(),
 
 
    // fileInp = "c:\\cap.jpg",  
  

 
  // // xhr.open('POST', form.action);
 
  // // xhr.onload = function (e) {
    // // alert(e.currentTarget.responseText)
  // // }
 
  // // xhr.upload.onprogress = function (e) {
    // // alert(e.loaded / e.total * 100)
  // // }
 
  // // xhr.send(data);


     // // var preview = document.querySelector('img'); //selects the query named img
       // // var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       // // var reader  = new FileReader();

       // // reader.onloadend = function () {
           // // preview.src = reader.result;
       // // }

       // // if (file) {
           // // reader.readAsDataURL(file); //reads the data as a URL
       // // } else {
           // // preview.src = "";
       // // }
  






