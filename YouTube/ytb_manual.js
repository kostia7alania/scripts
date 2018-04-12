iim=iimPlayCode;
iim('set !useragent Mozilla/5.0<sp>(Windows<sp>NT<sp>6.1;<sp>WOW64;<sp>rv:40.0)<sp>Gecko/20100101<sp>Firefox/40.1 ')
var start = new Date();
function timming() {diff=(new Date()-start)/1000; return '; Робот работает в этой сессии:'+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")}
function следующееВидео() {iim('EVENT TYPE=CLICK SELECTOR="#watch7-sidebar-modules>DIV>DIV>DIV:nth-of-type(2)>UL>LI>DIV>A>SPAN:nth-of-type(3)" BUTTON=0\n wait seconds=3')}
function второеВидео() {iim('EVENT TYPE=CLICK SELECTOR="#watch-related>LI>DIV>DIV>A>SPAN" BUTTON=0\n wait seconds=3')}
function randGen(min,max) {return Math.floor(Math.random() * (max - min)) + min;}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))} 
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа+"\n")}  
function ждем(s) {iim('wait seconds='+s)}
var ключи = читать("C:\\ютуб\\ключи.txt");
var предложения = читать("C:\\ютуб\\тексты.txt").split('\n');
var база=читать("C:\\ютуб\\ютуб_база.txt");		// все тхт в utf-8;
var путь_Сохр = "C:\\ютуб\\ютуб_выход.txt";	       // должна существовать; формат: login:password;ip:port
var новая_база=читать(путь_Сохр);
  		 
			  window.scrollTo(0, randGen(333,2222));	//листаем вниз;
			  var возрастВидео = window.document.querySelectorAll(".yt-lockup-meta-info>li:nth-child(1)")[iii].innerText;
				var урлВидео = window.location.href // конкеретный результ выдачи
				var урлКанала = window.document.querySelectorAll(".yt-user-info>a")[0].href;
				var опубликовано = window.document.querySelectorAll("#watch-uploader-info")[0].innerText;
				var баян=1;
				if(опубликовано.search('2015')>-1){var баян=0};//ВИДЕО 2015 года 
				if(опубликовано.search('2016')>-1){var баян=0};//ВИДЕО 2016 года 
				if(опубликовано.search('2017')>-1){var баян=0};//ВИДЕО 2017 года 
				try{var коммыОтключены = window.document.querySelectorAll(".display-message")[0].innerText
				if(коммыОтключены=="Комментарии к этому видео отключены."){var баян=1}//сделаем вид,че ето баян, т.к. нет доступа к коментам);
				}catch(e){}
				if(база.search(урлКанала)!=-1){баян=1}
				if(новая_база.search(урлКанала)!=-1){баян=1}
				if(баян==0){
					var названиеВидео = window.document.querySelectorAll(".watch-title")[0].innerText;
						//var описание = window.document.querySelectorAll("#watch-description-text")[0].innerText; 
					var названиеКанала = window.document.querySelectorAll(".yt-user-info > a")[0].innerText;
					try{var подписота = window.document.querySelectorAll(".yt-subscription-button-subscriber-count-branded-horizontal")[0].innerText;}catch(e){var подписота = "хз"}
					добавитьВКонец(путь_Сохр,дата()+"	"+подписота+"	"+названиеВидео+"	"+опубликовано+"	"+названиеКанала+"	"+урлКанала+"	"+урлВидео+"	"+timming())
					var текст = предложения[randGen(0,предложения.length)];
					// alert(текст)
					iim('TAG POS=3 TYPE=DIV ATTR=TXT:Оставьте<SP>комментарий')
					iim('EVENT TYPE=CLICK SELECTOR="#comment-simplebox>DIV:nth-of-type(2)>DIV:nth-of-type(2)" BUTTON=0')
					iim('EVENTS TYPE=KEYPRESS SELECTOR="#comment-simplebox>DIV:nth-of-type(2)>DIV:nth-of-type(2)" CHARS='+текст)
					iim('TAG POS=1 TYPE=BUTTON ATTR=TXT:Оставить<SP>комментарий')
					ждем(1);
					//=RANDOM LIKE:
					if(randGen(1,2)==2){try{iim('TAG POS='+randGen(2,5)+' TYPE=BUTTON ATTR=ARIA-LABEL:Нравится&&ONCLICK:;return<SP>false;&&TYPE:button&&CLASS:yt-uix-button<SP>yt-uix-button-size-default<SP>yt-uix-button-default<SP>yt-uix-button-empty<SP>yt-uix-button-has-icon<SP>no-icon-markup<SP>comment-action-buttons-renderer-thumb<SP>yt-uix-sessionlink<SP>sprite-comment-actions<SP>sprite-like<SP>i-a-v-sprite-like&&TXT:')}catch(e){}}
					iimDisplay("Добавили. Ща в циклах №"+i+"."+ii+"."+iii+"\n"+дата())
				}
				else{alert("Было уже. Ща в циклах №")}
				 
 