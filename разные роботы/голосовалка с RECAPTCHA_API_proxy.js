var start = new Date(); function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
 
function сменаАйпи(ип,порт) {var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);prefs.setIntPref("network.proxy.type",1); prefs.setBoolPref("network.proxy.share_proxy_settings", true); prefs.setCharPref("network.proxy.http",ип);
prefs.setIntPref("network.proxy.http_port",порт)}

// iimPlayCode('url goto=2ip.ru');

var proxy1 = imns.FIO.readTextFile(imns.FIO.openNode("C:\\proxy1.txt")).split('\n');
var proxy1 = imns.FIO.readTextFile(imns.FIO.openNode("C:\\proxy1.txt")).split('\n');
  
function статус(статус) {var лог = "proxy1.txt:"+статус+"\nСтрока проксей №"+i+"\nип:порт:"+ип+":"+порт+timming(); logi(лог);iimDisplay(лог);}

function копиБоди() {return window.document.getElementsByTagName("body")[0].textContent}
function wait(sec) {iimPlayCode('WAIT SECONDS='+sec)}

function logi(лог) { imns.FIO.appendTextFile(imns.FIO.openNode("C:\\logi_proxy1.txt"),лог); }
 
var key='6440c629b2418bf14c6ca56d0e7e21d0';
googleKey='6LfIzgwUAAAAAKwNaj_DgVpaRtkknYQ8vN91EDRh';
urlHack='couture.estel.pro/sal6285';

	var url1 = "http://rucaptcha.com/in.php?key="+key+"&method=userrecaptcha&googlekey="+googleKey+"&pageurl="+urlHack; 
	var url2 = "http://rucaptcha.com/res.php?key="+key+"&action=get&id=";
	
for(i=1;i<proxy1.length+1;i++){	
	var ип = proxy1[i].split(':')[0], порт = proxy1[i].split(':')[1]; сменаАйпи(ип,порт);
	 статус("начинаем работу!!")
	
	var чекПрокси = iimPlayCode("set !timeout_step 30\n URL GOTO=2ip.ru");
	
	if (копиБоди().search(/Узнать IP адрес/igm)) //Page is found!
	{		
		iimPlayCode(`set !replayspeed medium \n WAIT seconds=1 \n clear \n url goto=http://couture.estel.pro/sal6285`); 	wait(5);
		iimPlayCode('TAB OPEN\nTAB T=2'); 
		iimSet('url1',url1);	 iimPlayCode('url goto={{url1}}');		wait(1);
		var ответ = копиБоди().split("|")
		if(ответ[0]=="OK"){
			iimDisplay("получили трек-код для отслежки\n круг:"+i)
			var трек=ответ[1];wait(15);
			for(i=0;i<5;i++){//ждем ответного финального хеш-кода; 
				 wait(5); iimSet('url2',url2+трек)
				 iimPlayCode('url goto={{url2}}');
					var ответ2 = копиБоди().split("|");
					if(ответ2[0]=="OK"){ var i=5;//для выхода из цикла;
						iimDisplay("Получили код. С захода №"+i+"\nGO вводить код на страницу!\nВот код сам:"+ответ2[1]) 
						iimPlayCode('TAB CLOSE');
						
						iimSet('бейс',ответ2[1]);
						
						iimPlayCode('TAG POS=1 TYPE=TEXTAREA FORM=ACTION:index.php ATTR=CLASS:g-recaptcha-response* CONTENT={{бейс}}')
						
						
						iimDisplay('все ок, сматываем удочки;')
					} else{
						wait(5)
						iimDisplay('ждем. круг №'+i+'\nПолученный код:'+ответ2)
					}
				 
			}
			iimDisplay('вышли из цикла 2')
		} else{ статус("neOK-го менять айпи лучше;!!"); iimPlayCode('tab t=0 \n TAB CLOSEALLOTHERS')}
		 статус("Жмем проголосовать!!!") 
	 		iimPlayCode('wait seconds=1 \n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:form-rate ATTR=* \n wait seconds=7')
		  
	}
	else//Page is not found!
	{статус("Попался фиговый прокси! СТРАНИЦА НЕ ПРОГРУЖЕНА!!!!")}

 
	
}			
  
	