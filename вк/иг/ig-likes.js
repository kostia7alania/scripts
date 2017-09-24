 
var start = new Date(); 

function getRandomInt(min, max){return Math.round(min - 0.5 + Math.random() * (max - min + 1))}

var Datasources="C:\\Users\\user\\OneDrive\\imacros\\Datasources\\"


function копиБоди() {try{var x = window.document.getElementsByTagName("body")[0].textContent;}catch(e){var x='sex'} return x;}
var modemKostia = ('SET !REPLAYSPEED medium\n SET !TIMEOUT_STEP 20\nSET !EXTRACT NULL\n ONLOGIN USER=admin PASSWORD=admin1\n URL GOTO=192.168.1.1\n URL GOTO=192.168.1.1\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\n URL GOTO=http://192.168.1.1/#broadband.globals\nwait seconds=2\nTAG POS=1 TYPE=TD ATTR=CLASS:td_ip<SP>text EXTRACT=TXT\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=BUTTON FORM=NAME:editor ATTR=TXT:Применить\nwait seconds=21\nTAG POS=1 TYPE=TD ATTR=CLASS:td_ip<SP>text EXTRACT=TXT')
try{function testModem1(ip1){x=ip1.split('.')[0]; y=ip1.split('.')[1]; ip1=x+"."+y; return ip1};function testModem2(ip2){x=ip2.split('.')[0];y=ip2.split('.')[1]; ip2=x+"."+y; return ip2};do{ iimPlayCode(modemKostia);ip1=iimGetLastExtract(1);ip2=iimGetLastExtract(2)} while((testModem1(ip1)==testModem2(ip2))||(testModem2(ip2)=="#EANF#"))} catch(r){}

function loadFile(путь) {var файл = imns.FIO.openNode(путь); return imns.FIO.readTextFile(файл)}

function saveFile(путь, контент) {var файл = imns.FIO.openNode(путь); imns.FIO.writeTextFile(файл,контент)}
var логи="c:\\ig_"+date+".txt"

txt=loadFile(Datasources+"useragents-pc.txt");var massiv = txt.split('\n');useragent=massiv[getRandomInt(1, massiv.length-1)];  // useragent
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
раменское=498089618;
жуковский=274041159;
function geo(sity) {iimSet('sity',sity);iimSet('useragent',useragent);iimPlayCode(`set !USERAGENT {{useragent}} \n URL GOTO=https://www.instagram.com/explore/locations/{{sity}}/ \n	TAG POS=1 TYPE=DIV ATTR=CLASS:_jjzlb`)}
	
var date=String(Date()); var date=date.replace(/ /ig,'-').replace(/:/ig,'_');  
function logs(инфа) {log='Сейчас в цикле: '+инфа+'\nЛайки по ГЕО: '+geoLikes+'\nПодписки по ГЕО: '+geoSubs+'\nРама='+ram+'\nЖук'+juk+'UserAgent='+useragent; saveFile(логи, log); iimDisplay(log);}

var geoLikes=0;
var geoSubs=0; 
var ram=0;
var juk=0;

	if(getRandomInt(1,9)<8){
		//по гео;
		logs("ГЕО")//отображение инфы на экранчике + ведение логов
		if(getRandomInt(1,10)<5){geo(раменское); ram++}else{geo(жуковский);juk++}
		  for(g=getRandomInt(1,100);g<100;g++)
			{	
				
				iimSet('useragent',useragent);iimPlayCode(`set !USERAGENT {{useragent}} \n TAG POS=1 TYPE=A ATTR=CLASS:_de018<SP>coreSpriteRightPaginationArrow&&HREF:*`)//направо перелистали
				
				if(getRandomInt(1,10)<5){iimSet('useragent',useragent);iimPlayCode(`set !USERAGENT {{useragent}} \n TAG POS=1 TYPE=SPAN ATTR=CLASS:_soakw<SP>coreSpriteHeartOpen \n set !extract 1`); if(iimGetLastExtract(0)==1){geoLikes++;logs("Поставили лайки по ГЕО!")}} //лайкнули
				
				if(getRandomInt(1,10)<5){iimSet('useragent',useragent);iimPlayCode(`set !USERAGENT {{useragent}} \n TAG POS=1 TYPE=BUTTON ATTR=TXT:Подписаться \n set !extract 2`); if(iimGetLastExtract(0)==1){geoSubs++;logs("Подписались по ГЕО!")}}//подписались
			}
		}
	else(alert('выходной)!'))
