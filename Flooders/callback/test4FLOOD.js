var start = new Date(); function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
saveFile:
function saveFile(путь, контент) {var файл = imns.FIO.openNode(путь);
								 imns.FIO.writeTextFile(файл,контент);}
function копиБоди() {var x = window.document.getElementsByTagName("body")[0].textContent; return x;}
g=[];y=0;yy=0;
//читать весь блокнот:
var ex=imns.FIO.readTextFile(imns.FIO.openNode("C:\\jivosite.txt"))
//разбить на массив:
var arr = ex.split('\n');

for(i=0;i<arr.length;i++){
		iimSet("сайт",arr[i])
		iimPlayCode('SET !TIMEOUT_PAGE 22\nclear\n url goto={{сайт}}');
try{
	if(копиБоди().search( /jivosite/i )!=-1) {
		g[y]=arr[i];
		y++;
		saveFile("c:\\jivosite", g); // сохр в файл (перезапись,еси файл сущ);	
		iimDisplay('строка:'+(i+1)+" из "+arr.length+timming()+"\nНапаршено норм сайтов: "+g.length+"\nВот они: "+g)
	}
	else{yy++;iimDisplay('Ненорм попалась №'+yy+'\nстрока:'+(i+1)+" из "+arr.length+timming()+"\nНапаршено норм сайтов: "+g.length+"\nВот они: "+g)}

}
catch(r){
	iimDisplay('ВЫШЛА ОШИБКА! строка:'+(i+1)+timming()+"\nНапаршено норм сайтов: "+g.length)
}
	}