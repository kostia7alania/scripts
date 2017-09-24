var start = new Date(); function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
iim=iimPlayCode; 
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))} 
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  
function go(g) {return window.document.querySelectorAll(g)}
function gog(g) {return go(g)}

var путь_Сохр = "C:\\vesa\\mass.txt";	       				// должна существовать; 

var parts = читать("C:\\vesa\\parts.txt")		// все тхт в utf-8;
// tr.sh:nth-child(1) > td:nth-child(5) > div:nth-child(1)

	iim(`ONDIALOG POS=1 BUTTON=OK CONTENT=
	set !errorignore yes
	URL GOTO=https://emexdwc.ae/Search.aspx#546601R100/true/$DLV$1/1499115248554`)  


for(i=0;i<parts.length;i++){
	iim(`ONDIALOG POS=1 BUTTON=OK CONTENT=
	set !errorignore yes
	EVENT TYPE=CLICK SELECTOR="#tab2>DIV>INPUT" BUTTON=0
	EVENTS TYPE=KEYPRESS SELECTOR="#tab2>DIV>INPUT" KEYS="[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]"`)
	iim('EVENTS TYPE=KEYPRESS SELECTOR="#tab2>DIV>INPUT" CHARS='+parts.split('\n')[i])
	iim(`EVENT TYPE=CLICK SELECTOR="#tab2>DIV>SPAN:nth-of-type(2)>A>SPAN" BUTTON=0
	TAG POS=1 TYPE=DIV ATTR=DATA-BIND:text:<SP>($parent.WeightGr/1000) extract=txt`);
	var massa = iimGetLastExtract(1);
				// alert('g = ' + g + '\nвыход[g] = ' + выход[g] + '\nvideoId = ' + videoId + '\n i = ' + i)
				// alert(videoId+" = "+videoId2)
	var наВывод = i+"	"+massa+"	"+parts.split('\n')[i];
	 добавитьВКонец(путь_Сохр,наВывод.replace('#EANF#','нема'));
	 iimDisplay("Строка №:"+i+"\n"+наВывод+timming())
}
		// var текст = text[i].innerText.replace(',Пользователь ','	').replace('Пользователь ','').replace(' оставил комментарий: "','	').replace(' добавил комментарий: "','	').replace('" - Оповещение','	');
		
		// var наВывод = date[i].innerText + "	" + текст +  "	" + url[i].href + "\n";
		// // alert(наВывод)
// alert("exit = " + выход[g])
			// alert("g = " + g)		