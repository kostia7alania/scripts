function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))} 
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  
function go(g) {return window.document.querySelectorAll(g)}
function gog(g) {return go(g)}

var путь_Сохр = "C:\\ютуб\\ютуб_сопост_отв.txt";	       // должна существовать; формат: login:password;ip:port

var ответы = читать("C:\\ютуб\\ютуб_ответили.txt").split('\n');		// все тхт в utf-8;
var выход = читать("C:\\ютуб\\ютуб_выход_new.txt").split('\n');		// все тхт в utf-8;

for(i=0;i<ответы.length;i++){
	try{	var videoId = ответы[i].split('watch?v=')[1].split('&')[0]		}catch(e){ alert(ответы[i]+" i= "+i) ; }
		for(g=0;g<выход.length;g++){
			if(выход[g].search(videoId)!=-1){
				var videoId2 = выход[g].split('watch?v=')[1].split(';')[0]
				// alert('g = ' + g + '\nвыход[g] = ' + выход[g] + '\nvideoId = ' + videoId + '\n i = ' + i)
				// alert(videoId+" = "+videoId2)
				var наВывод = ответы[i]+"		"+выход[g]+"\n";
				добавитьВКонец(путь_Сохр,наВывод);
				}
				
		}
		// var текст = text[i].innerText.replace(',Пользователь ','	').replace('Пользователь ','').replace(' оставил комментарий: "','	').replace(' добавил комментарий: "','	').replace('" - Оповещение','	');
		
		// var наВывод = date[i].innerText + "	" + текст +  "	" + url[i].href + "\n";
		// // alert(наВывод)
		
}
// alert("exit = " + выход[g])
			// alert("g = " + g)		