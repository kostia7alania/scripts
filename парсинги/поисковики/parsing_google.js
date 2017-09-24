











 ИСПОРТИЛ!
function тестНаКаптчу() {if(iimPlayCode(`set !timeout_tag 2\n FRAME NAME="undefined"\nEVENT TYPE=CLICK SELECTOR="#recaptcha-anchor-label" BUTTON=0`)>0){alert("=пройди каптчу!;"); iimPlayCode('wait seconds=25')}}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  
var start = new Date();
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл)).split('\n')}
function читать2(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}

var список="C:\\search\\запросы.txt";		// запросы в столбик (ключи) в utf-8;
var ключей = читать(список);	
var ключ = читать2(список);					// запросы разбиваются из столбика в массив;
var обработанные="C:\\search\\base.csv";	// база уже обработанных сайтов
var путьСохр="C:\\search\\result.txt";		// КУДА СОХРАНЯЕМ;

var a="h3:nth-child(1) > a:nth-child(1)"
var b="div.s > div:nth-child(1) > div:nth-child(1) > cite:nth-child(1)"
 
for(q=0;q<ключей.length;q++){
	
	iimSet('ключ',ключ[q]); iimPlayCode(`
	URL GOTO=https://google.ru
	EVENT TYPE=CLICK SELECTOR="#lst-ib" BUTTON=0
	EVENTS TYPE=KEYPRESS SELECTOR="#lst-ib" CHARS={{ключ}}
	EVENT TYPE=CLICK SELECTOR="#_fZl" BUTTON=0`)
	тестНаКаптчу();
	for(zz=0;zz<30;zz++){
		// try{ 
			var g=[];
			var elements1 = window.document.querySelectorAll(a) 
			var elements2 = window.document.querySelectorAll(b) 
			for (var i = 0; i < elements1.length; i++) {
					try{var url = elements2[i].innerHTML}catch(e){}
					try{var url = url.replace('http://','')}catch(e){}
					try{var url = url.replace('https://','')}catch(e){}
					try{var url = url.replace('www.','')}catch(e){}
					try{var url = url.split(/[/? >#]/)[0]}catch(e){}
					// try{var результат=ключ[q]+"	"+elements1[i].innerHTML+"	"+"#"+q+"."+zz+"."+i+"	"+url;}catch(e){alert('err')};
					try{var результат="\n#"+q+"."+zz+"."+i+"	"+url;}catch(e){alert('err')};
					//проверка - не дубликат-ль;
					// var бу=читать2(обработанные);alert(бу);alert(typeof(бу));alert(typeof(url));alert(бу.search(url))//отладка
					if(читать2(обработанные).search(url)>0){//alert("есть в старой базе")
						}
					else{// alert('нету в старой базе')
						// var бу2=читать2(путьСохр);alert(бу2.search(url))//отладка
						if(читать2(путьСохр).search(url)>0){	// alert("есть в NEW базе")
							}
						else{
							// alert('нету в NEW базе')
							добавитьВКонец(путьСохр,результат)
						}						
					}
					
					
			}
			  
			  iimDisplay("Страница:	"+(zz+1)+"\nКлюч:	"+ключ[q]+timming());
			  if(iimPlayCode(`set !timeout_tag 2\nTAG POS=1 TYPE=SPAN ATTR=TXT:Следующая`)>0){//след.стр существует,продолжаем.
				  }else{
					  iimDisplay("УСЕ с етим ключем!\nСтраниц спаршено: "+(zz+1)+"\nЭто был ключ: "+ключ[q]+timming()); zz=30; 
				  }
			  // window.document.querySelector("#pnnext").click() //кноппка следующая существует,иначе - выкинет на сл запрос;
			iimPlayCode('wait seconds=3')
			тестНаКаптчу();
		// }
		// catch(e){iimDisplay("УСЕ с етим ключем!\nСтраниц спаршено: "+zz+"\nЭто был ключ: "+ключ[q]+timming()); zz=30; }//кноппка следующая НЕсуществует
	}
}
