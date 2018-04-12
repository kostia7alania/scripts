

  
function копиБоди() {try{var x = window.document.getElementsByTagName("body")[0].textContent;}catch(e){var x='sex'} return x;}
function wait(sec) {iimPlayCode('WAIT SECONDS='+sec)}
  		step0='SET !TIMEOUT_STEP 0\n';
		time30='SET !TIMEOUT 30\n';
		time80='SET !TIMEOUT 80\n'; 
 var modemKostia = ('SET !USERAGENT CHROME \n SET !REPLAYSPEED medium\n SET !TIMEOUT_STEP 20\nSET !EXTRACT NULL\n ONLOGIN USER=admin PASSWORD=admin1\n URL GOTO=192.168.1.1\n URL GOTO=192.168.1.1\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\n URL GOTO=http://192.168.1.1/#broadband.globals\nwait seconds=2\nTAG POS=1 TYPE=TD ATTR=CLASS:td_ip<SP>text EXTRACT=TXT\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=BUTTON FORM=NAME:editor ATTR=TXT:Apply\nwait seconds=21\nTAG POS=1 TYPE=TD ATTR=CLASS:td_ip<SP>text EXTRACT=TXT')
 function testModem1(ip1){try{x=ip1.split('.')[0]; y=ip1.split('.')[1]; ip1=x+"."+y; return ip1}catch(r){}}
 function testModem2(ip2){try{x=ip2.split('.')[0];y=ip2.split('.')[1]; ip2=x+"."+y; return ip2}catch(r){}} 
  
var Path = 'C:\\CapNum\\'
var key='6440c629b2418bf14c6ca56d0e7e21d0';
googleKey='6LfIzgwUAAAAAKwNaj_DgVpaRtkknYQ8vN91EDRh';
urlHack='couture.estel.pro/sal6285';
	var url1 = "http://rucaptcha.com/in.php?key="+key+"&method=userrecaptcha&googlekey="+googleKey+"&pageurl="+urlHack; 
	var url2 = "http://rucaptcha.com/res.php?key="+key+"&action=get&id=";
	
for(qqq=0;qqq<111;qqq++){ 
	iimPlayCode(`clear \n url goto=http://couture.estel.pro/sal6285`)  
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
						
						
						iimDisplay('все ок, сматываем удочки;')
					} else{
						wait(5)
						iimDisplay('ждем. круг №'+i+'\nПолученный код:'+ответ2)
					}
				 
			}
			iimDisplay('вышли из цикла 2')
		} else{iimDisplay('neOK-го менять айпи лучше;')}
		
	 

				iimPlayCode('TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:form-rate ATTR=*')
				wait(1)
		
		try{do{ iimPlayCode(modemKostia);ip1=iimGetLastExtract(1);ip2=iimGetLastExtract(2)} 
		while((testModem1(ip1)==testModem2(ip2))||(testModem2(ip2)=="#EANF#"))
			}catch(r){}
}			
  
	