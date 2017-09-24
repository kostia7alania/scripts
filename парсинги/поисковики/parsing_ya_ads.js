

function тестНаКаптчу() {if(iimPlayCode(`set !timeout_tag 2\n FRAME NAME="undefined"\nEVENT TYPE=CLICK SELECTOR="#recaptcha-anchor-label" BUTTON=0`)>0){alert("=пройди каптчу!;"); iimPlayCode('wait seconds=25')}}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  
var start = new Date();
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл)).split('\n')}
function читать2(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}

var регион = 56;
var список="C:\\yandex\\запросы.txt";		// запросы в столбик (ключи) в utf-8;
var ключ = читать(список);					// запросы разбиваются из столбика в массив;
var обработанные="C:\\search\\обработанные.txt";	// база уже обработанных сайтов
var путьСохр="C:\\search\\result.txt";		// КУДА СОХРАНЯЕМ;

var a = ".organic__url"
var b = ".link_outer_yes"
 
for(q=0;q<ключ.length;q++){
	iimSet('ключ',ключ[q]); 
	iim('URL GOTO=https://yandex.ru/search/ads?text='+ключ[q]+'&lr='+регион)
	тестНаКаптчу();
	for(zz=0;zz<30;zz++){
		 
			var g=[];
			var elements1 = window.document.querySelectorAll(a) 
			var elements2 = window.document.querySelectorAll(b) 
			for (var i = 0; i < elements1.length; i++) {
					try{var url = elements2[i].innerHTML}catch(e){}
					try{var url = url.replace('http://','')}catch(e){}
					try{var url = url.replace('https://','')}catch(e){}
					try{var url = url.replace('www.','')}catch(e){}
					try{var url = url.split(/[/? >#]/)[0]}catch(e){}
					try{var результат="\n#"+q+"."+zz+"."+i+"	"+url;}catch(e){alert('err')};
					if(читать2(обработанные).search(url)>0){//alert("есть в старой базе")
						}
					else{// alert('нету в старой базе') 
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
			iimPlayCode('wait seconds=3')
			тестНаКаптчу(); 
		 
	}
}
