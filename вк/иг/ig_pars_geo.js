var start = new Date(); function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
 
var блокнот="C:\\ig_pars_geo.txt";//КУДА СОХРАНЯЕМ
var скокАкковСобрать=3000;
 
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
imns.FIO.writeTextFile(imns.FIO.openNode(блокнот),"") //первоначально очищаем;

for(i=0;i<скокАкковСобрать;i++){
	var юзернейм = window.document.getElementsByClassName("_ook48")[0].textContent;
	
	var old=imns.FIO.readTextFile(imns.FIO.openNode(блокнот));
	var msgAll=old+"\n"+юзернейм;
	imns.FIO.writeTextFile(imns.FIO.openNode(блокнот),msgAll); 
	
	window.document.getElementsByClassName("_de018")[0].click()
	
	iimPlayCode('wait seconds=0.5')
	iimDisplay('Круг № '+i+timming());
	}
	
