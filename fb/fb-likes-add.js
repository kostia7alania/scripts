var start = new Date();
function timming() {diff=(new Date()-start)/1000; return 'Затрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function randGen(min,max) {return Math.floor(Math.random() * (max - min)) + min;}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")}
function wait(n) {iimPlayCode('wait seconds='+n)}
iim=iimPlayCode;

var проверять 	= 4 	// скок раз проверять значений;
var пауза_мин 	= 2 	// пауза меж добавлением в друзья;
var пауза_макс 	= 4 	// пауза меж добавлением в друзья;
var пауза 		= 2		//	между выполнением команд
var вниз		= 333	// px
var скокДобавить = 5;

// window.document.querySelectorAll('#facebook').click

var счетчик =0;
for(col=0;col<1000;col++){
var posts = window.document.querySelectorAll('._4arz')
	for(i=0;i<posts.length;i++){
		posts[i].click();
		wait(пауза)
		iim('EVENTS TYPE=KEYPRESS SELECTOR=".uiLayer>div>div>div>div>div>.uiScrollableArea>.uiScrollableAreaWrap" KEYS="[40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]"')
		wait(пауза)
		
		var addButtons_li = window.document.querySelectorAll('.uiLayer>div>div>div>div>div>.uiScrollableArea>.uiScrollableAreaWrap>.uiScrollableAreaBody>.uiScrollableAreaContent>div>ul>li')
		var addButtons = window.document.querySelectorAll('.uiLayer>div>div>div>div>div>.uiScrollableArea>.uiScrollableAreaWrap>.uiScrollableAreaBody>.uiScrollableAreaContent>div>ul>li>div>div>div>div>div>span>.FriendButton>.FriendRequestAdd')
		
		for (var ii = 0; ii < addButtons.length; ii++) {
			if (addButtons_li[ii].innerText.search("Добавить в друзья")>0) {
				addButtons[ii].click();				
				wait(пауза)
				var закрыть = window.document.querySelectorAll('div>div>div>div>div>div>div>div>div>.autofocus');
				if(закрыть.length>0){закрыть[0].click();
				iimDisplay("Нажали на close\n"+дата()+"\nДобавили из списка юзера №"+ii+"\nПост №"+i+"\nДобавили всего уже юзеров: "+счетчик+"\n"+timming()) 
				}else{счетчик++;
				iimDisplay(дата()+"\nДобавили из списка юзера №"+ii+"\nПост №"+i+"\nДобавили всего уже юзеров: "+счетчик+"\n"+timming())
				}
				wait(randGen(пауза_мин,пауза_макс))
			}
		}
		
		// iim('EVENT TYPE=CLICK SELECTOR="#facebook>BODY>DIV:nth-of-type(28)>DIV" BUTTON=0') 
		// = или так:
		iim('EVENT TYPE=CLICK SELECTOR="#globalContainer" BUTTON=0')
		 
		window.scrollBy(0,вниз)
		if(счетчик>скокДобавить){
			alert('лайки превышены	'); 
			break}
		
	}  
		if(счетчик>скокДобавить){break}
}

 
 alert('все!')