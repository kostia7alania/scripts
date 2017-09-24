var start = new Date(); function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
 
var акки="C:\\ig_pars_geo1.txt";// юзернеймы инстов в столбик
var скокАкков=510;
var акки = imns.FIO.readTextFile(imns.FIO.openNode(акки)).split('\n');
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
   
for(i=419;i<скокАкков;i++){
	iimSet('url',акки[i]);  
	iimPlayCode(`SET !VAR1 EVAL("var s=Math.floor(Math.random()*5 + 10); s;")
				 SET !VAR2 EVAL("var s=Math.floor(Math.random()*10 + 15); s;")
	url goto=instagram.com/{{url}}
	wait seconds={{!VAR1}}
	TAG POS=1 TYPE=BUTTON ATTR=TXT:*
	wait seconds={{!VAR2}}`);
	iimDisplay('Круг № '+i+timming());
	}