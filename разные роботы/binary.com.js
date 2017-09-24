
  
var start = new Date();
function timming() {diff=(new Date()-start)/1000; return 'Затрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function randGen(min,max) {return Math.floor(Math.random() * (max - min)) + min;}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")}
function wait(n) {iimPlayCode('wait seconds='+n)}
iim=iimPlayCode;

var путь = "C:\\FULL\\сохр.txt";		// сохранение в файл значений выше опред уровня
var лимитRet1 = 110; //уровень1,> которого идем к проверке ret2;
var лимитRet2 = 90; //уровень2,> которого сохраняем значения return 1 и 2 в "путь";;
var циклов = 11100//скок раз проверять значений;
var пауза = 5 // пауза меж проверками;

// var url = 'https://www.binary.com/en/trading.html?currency=AUD&market=forex&underlying=frxAUDJPY&formname=risefall&date_start=now&duration_amount=10&duration_units=t&expiry_type=duration&amount=10&amount_type=payout' //урл с опционами;
// iim('URL GOTO='+url)

var счетчик = 0;

for(i=0;i<циклов;i++){
	
	var return1 = window.document.querySelectorAll(".col .price_comment")[0].innerText
	var return2 = window.document.querySelectorAll(".col .price_comment")[1].innerText
	
	var ret1 = return1.split('Return ')[1].split('%')[0]
	var ret2 = return2.split('Return ')[1].split('%')[0]
	if(лимитRet1<parseFloat(ret1)){		//меньше или больше - уже сам можешь выбирать здесь
		var счетчик = счетчик + 1;
		if(лимитRet2<parseFloat(ret2)){	//меньше или больше - уже сам можешь выбирать здесь
		добавитьВКонец(путь,дата()+"	"+return1+"	"+return2+"	"+timming()+"\n");
		}
	}
	iimDisplay(дата()+"	"+"\nЦикл: "+i+"\nСчетчик: "+счетчик+"\n"+return1+"\n"+return2+"\n"+timming())
	wait(пауза)
}
 