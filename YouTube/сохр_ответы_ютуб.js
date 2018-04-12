function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  
function go(g) {return window.document.querySelectorAll(g)}
function gog(g) {return go(g)}

var путь_Сохр = "C:\\ютуб\\ютуб_ответили.txt";	       // должна существовать; формат: login:password;ip:port

		var url = gog(".yt-uix-tile-link");
		var text = gog(".yt-uix-tile-link");
		var date = gog(".yt-lockup-byline");

for(i=0;i<url.length;i++){
	
		var текст = text[i].innerText.replace(',Пользователь ','	').replace('Пользователь ','').replace(' оставил комментарий: "','	').replace(' добавил комментарий: "','	').replace('" - Оповещение','	');
		
		var наВывод = date[i].innerText + "	" + текст +  "	" + url[i].href + "\n";
		// alert(наВывод)
		добавитьВКонец(путь_Сохр,наВывод);
		
}
