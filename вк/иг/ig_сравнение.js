var start = new Date(); function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
 

// function loadJQ() {function loadScriptFromURL(url) {var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),async = false;request.open('GET', url, async);request.send();if (request.status !== 200) {var message = 'An error occurred while loading script at url: ' + url + ', status: ' + request.status;iimDisplay(message);return false;}eval(request.response);return true;}; loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');$ = window.$,JQuery = window.JQuery;}; loadJQ();

function saving(путь) {imns.FIO.writeTextFile(imns.FIO.openNode(путь),imns.FIO.readTextFile(imns.FIO.openNode(путь)).replace(/,/ig,'\n'));}

var массив1="C:\\ig_pars_geo.txt"; 
var массив2="C:\\ig_pars_geo1.txt";

var объед="C:\\объед.txt";
var перес="C:\\перес.txt";
var разн="C:\\разн.txt";

// var массив2=3000;

   let massiv1= new Set(imns.FIO.readTextFile(imns.FIO.openNode(массив1)).split('\n'))
   let massiv2= new Set(imns.FIO.readTextFile(imns.FIO.openNode(массив2)).split('\n'))
    
	let объединение = new Set([...massiv1, ...massiv2]); 
	let пересечение= new Set([...massiv1].filter(x => massiv2.has(x)));
	let разность = new Set([...massiv1].filter(x => !massiv2.has(x))); 

	imns.FIO.writeTextFile(imns.FIO.openNode(объед),[...объединение]);
	imns.FIO.writeTextFile(imns.FIO.openNode(перес),[...пересечение]);
	imns.FIO.writeTextFile(imns.FIO.openNode(разн),[...разность]);
	
	saving(объед);
	saving(перес);
	saving(разн);
	
	alert(timming()) 	
    // alert("Oбъединение: \n"+[...объединение]+"\nПересечение:\n"+[...пересечение]+"\nРазность:\n"+[...разность])
	// alert(.replace(/,/ig,'\n'))
	// imns.FIO.writeTextFile(imns.FIO.openNode(блокнот),msgAll); 

// for(i=0;i<скокАкковСобрать;i++){
	// var юзернейм = window.document.getElementsByClassName("_ook48")[0].textContent;
	
	// var old=imns.FIO.readTextFile(imns.FIO.openNode(блокнот));
	// var msgAll=old+"\n"+юзернейм;
	// imns.FIO.writeTextFile(imns.FIO.openNode(блокнот),msgAll); 
	
	// window.document.getElementsByClassName("_de018")[0].click()
	
	// iimPlayCode('wait seconds=0.5')
	// iimDisplay('Круг № '+i+timming());
	// }
	
