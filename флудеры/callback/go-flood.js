var start = new Date(); 
function копиБоди() {try{var x = window.document.getElementsByTagName("body")[0].textContent;}catch(e){var x='sex'} return x;}

function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}

var телефон="89160797062"

//alert(window['lb_timer_result'].html)
//читать весь блокнот:
var ex=imns.FIO.readTextFile(imns.FIO.openNode("C:\\4flood\\leadback.txt"))
//разбить на массив:
var arr = ex.split('\n');

//alert("кол-во строк arr: " +arr.length+" !!\n =разбили на строки:\n"+arr+"\n =без разбивки:\n"+ex+"\n первая строка: \n"+arr[0])
	for(i=1;i<arr.length;i++)
	{	var error = 0;
		iimDisplay('строка:'+i+timming())
		iimSet("сайт",arr[i])
		iimPlayCode('SET !TIMEOUT_PAGE 10\nclear\n url goto={{сайт}}');
try{
	if(копиБоди().search(/leadback/i)!=-1)
		{try{iimPlayCode(`SET !ERRORIGNORE YES \n SET !TIMEOUT_TAG 2\n EVENT TYPE=CLICK SELECTOR="#lb_button-call>DIV>DIV" BUTTON=0 \n EVENT TYPE=CLICK SELECTOR="#lb_phone" BUTTON=0`)}
		catch(e){error++}
			// window['lb_button-call'].click();
			// iimPlayCode('wait seconds=1')
			// window['lb_phone'].value = телефон;
			// iimPlayCode('wait seconds=1')
			iimSet("телефон",телефон);
			try{iimPlayCode(`SET !ERRORIGNORE YES \n SET !TIMEOUT_TAG 2\nTAG POS=1 TYPE=INPUT:TEXT ATTR=ID:lb_phone CONTENT={{телефон}}`)} catch(e){error++}
			try{window['lb_send'].click()}catch(e){error++}
			iimSet("телефон",телефон);try{iimPlayCode(`'2вариант
				SET !ERRORIGNORE YES \n 
				SET !TIMEOUT_TAG 1
				EVENT TYPE=CLICK SELECTOR="#lb_phone" BUTTON=0 
				EVENT TYPE=CLICK SELECTOR="#lb_button-call>DIV>DIV" BUTTON=0
				EVENT TYPE=CLICK SELECTOR="#lb_button-call>DIV" BUTTON=0
				TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT={{телефон}} 
				EVENT TYPE=CLICK SELECTOR="#lb_send" BUTTON=0 
				 EVENT TYPE=CLICK SELECTOR="#lb_send" BUTTON=0
				 EVENT TYPE=CLICK SELECTOR="#lb_send" BUTTON=0
			EVENT TYPE=CLICK SELECTOR="#lb_button-call>DIV" BUTTON=0`)}catch(e){error++};
				 try{window['lb_send'].click()}catch(e){error++}
		};
	} catch(r){iimDisplay('СЛОВИЛИ ОШИБКУ!!!-строка:'+i+timming())}
	if(error>1){ 
		try {
			//USERAGENT:
			iimDisplay('ГОКАЕМ МЕНТЬ АЙПИ!  \nстрока:'+i+timming())
			iimSet("строка",i); iimPlayCode("SET !REPLAYSPEED fast\nCMDLINE !DATASOURCE useragents.txt\nSET !DATASOURCE_LINE {{строка}}\nSET !EXTRACT {{!COL1}}"); var useragent = iimGetLastExtract(1);
			var modemKostia = ('SET !REPLAYSPEED medium\n SET !TIMEOUT_STEP 20\nSET !EXTRACT NULL\n ONLOGIN USER=admin PASSWORD=admin1\n URL GOTO=192.168.1.1\n URL GOTO=192.168.1.1\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\n URL GOTO=http://192.168.1.1/#broadband.globals\nwait seconds=2\nTAG POS=1 TYPE=TD ATTR=CLASS:td_ip<SP>text EXTRACT=TXT\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=BUTTON FORM=NAME:editor ATTR=TXT:Применить\nwait seconds=14\nTAG POS=1 TYPE=TD ATTR=CLASS:td_ip<SP>text EXTRACT=TXT')
			function testModem1(ip1){x=ip1.split('.')[0]; y=ip1.split('.')[1]; ip1=x+"."+y; return ip1};
			function testModem2(ip2){x=ip2.split('.')[0];y=ip2.split('.')[1]; ip2=x+"."+y; return ip2};
			do{ iimPlayCode(modemKostia);ip1=iimGetLastExtract(1);ip2=iimGetLastExtract(2)} while((testModem1(ip1)==testModem2(ip2))||(testModem2(ip2)=="#EANF#"))
			iimDisplay("айпи сменили; ип1: "+ip1+"; IP2: "+ip2);	
			} catch (r) {}		
	}
		iimPlayCode('wait seconds=2')
	
	// if((i==10)||(i==20)||(i==30)||(i==40)||(i==50)||(i==60)||(i==70)||(i==80)||(i==90)||(i==100)||(i==110)||(i==130)||(i==140))
	// {

	// }	
			if(i==150){var i=1;}
	}
	