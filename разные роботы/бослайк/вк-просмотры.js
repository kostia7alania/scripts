

var копиБоди = () => {return window.document.getElementsByTagName("body")[0].textContent;}
var getRandomInt = (min, max) => {return Math.round(min - 0.5 + Math.random() * (max - min + 1))} 
var wait = (min,max) => {iimSet('rand',getRandomInt(min,max));iimPlayCode('wait seconds={{rand}}')} 
var покрутить = () => {
	var высотаСтр = window.document.body.scrollHeight; var текПозСтр = window.pageYOffset; 
	for(i=0;i<getRandomInt(0,высотаСтр-текПозСтр);i++){window.scrollBy(0,1)}; 
	for(i=0;i<getRandomInt(0,высотаСтр-текПозСтр);i++){window.scrollBy(0,-1)};
}
var мотать_и_ждать = (от,до) => {wait(от,до); покрутить(); wait(от,до)}
var iim = iimPlayCode;
var tab = (n) => {iim(a+'TAB T='+n)} 
var a="set !replayspeed fast\n Set !errorignore yes\nset !timeout_step 2\nset !replayspeed medium\n ";
var b="set !replayspeed fast\n Set !errorignore yes\nset !timeout_step 0"
var testServer = () => {if(копиБоди().search('Server')!==-1){wait(1,2);tab(0);iim(a+'tab closeallothers')}}

var иг_подписка = () =>{
	iim(a+'URL GOTO=http://bosslike.ru/tasks/instagram/subscribe/'); мотать_и_ждать(1,1); 
	iim(a+'EVENT TYPE=CLICK SELECTOR="#task_list>DIV>DIV:nth-of-type(2)>ARTICLE>DIV>DIV>ASIDE>BUTTON" BUTTON=0'); мотать_и_ждать(1,2);
	iim(a+'TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow'); iim(a+'TAG POS=1 TYPE=BUTTON ATTR=TXT:Подписаться'); мотать_и_ждать(1,2);
	tab(0); iim(a+'tab closeallothers'); мотать_и_ждать(2,4); 
}
var иг_комменты = () =>{
	iim(a+'URL GOTO=http://bosslike.ru/tasks/instagram/comment');wait(0,1);
	iim(a+'TAG POS=1 TYPE=BUTTON ATTR=TXT:*баллов');wait(1,2);
	iim(a+'TAG POS=1 TYPE=INPUT ATTR=NAME:taskComment* extract=txt');
	var ком = iimGetLastExtract(1)
	if(ком=="#EANF#"){var ком = "=приконА))++;"}
	iim('TAG POS=1 TYPE=BUTTON ATTR=TXT:Оставить<SP>комментарий'); мотать_и_ждать(2,3); 
	мотать_и_ждать(1,2);
	iim(a+'EVENT TYPE=CLICK SELECTOR="HTML>BODY>SPAN>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION:nth-of-type(2)>FORM>INPUT" BUTTON=0')
	iimSet('ком',ком)
	iim(a+'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>SPAN>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION:nth-of-type(2)>FORM>INPUT" CHARS={{ком}}')
	iim(a+'EVENT TYPE=KEYPRESS SELECTOR="HTML>BODY>SPAN>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION:nth-of-type(2)>FORM>INPUT" KEY=13')
	мотать_и_ждать(1,2); 
	tab(0);
	iim(a+'tab closeallothers'); мотать_и_ждать(2,4);  
}
var вк_комменты = () =>{
	iim(a+'URL GOTO=http://bosslike.ru/tasks/vkontakte/comment/'); мотать_и_ждать(1,1);
	iim(a+'TAG POS=1 TYPE=BUTTON ATTR=TXT:*балл*'); 			мотать_и_ждать(1,1);
	iim(a+'TAG POS=1 TYPE=I ATTR=CLASS:*like_icon*'); 			мотать_и_ждать(1,2);
	tab(0);
	iim(a+'tab closeallothers'); мотать_и_ждать(2,4);
}
var вк_лайки = () =>{
	iim(a+'URL GOTO=http://bosslike.ru/tasks/vkontakte/like/'); мотать_и_ждать(1,1);
	iim(a+'TAG POS=1 TYPE=BUTTON ATTR=TXT:*балл*'); 			мотать_и_ждать(1,2);
	iim(a+'TAG POS=1 TYPE=I ATTR=CLASS:*like_icon*'); 			мотать_и_ждать(1,2);
	tab(0);
	iim(a+'tab closeallothers'); 								мотать_и_ждать(2,4); 
}
var вк_подписка = () =>{
	iim(a+'URL GOTO=http://bosslike.ru/tasks/vkontakte/subscribe/');мотать_и_ждать(1,1);
	iim(a+'TAG POS=1 TYPE=BUTTON ATTR=TXT:*балл*'); 				мотать_и_ждать(1,2);
	iim(a+'TAG POS=1 TYPE=BUTTON ATTR=TXT:Добавить*'); 				
	iim(a+'TAG POS=1 TYPE=BUTTON ATTR=TXT:Подписаться*'); 				
	iim(a+'TAG POS=1 TYPE=BUTTON ATTR=TXT:Вступить*'); 				мотать_и_ждать(1,2); 
	tab(0);
	iim(a+'tab closeallothers'); 									мотать_и_ждать(2,4);
}
var вк_просмотры = () =>{
	iim(a+'URL GOTO=http://bosslike.ru/tasks/vkontakte/watch/');	мотать_и_ждать(1,1);
	iim(a+'TAG POS=1 TYPE=BUTTON ATTR=TXT:*балл*'); 				мотать_и_ждать(1,2);
	iim(a+'wait seconds=35'); 										мотать_и_ждать(1,2); 
	tab(0);
	iim(a+'tab closeallothers'); 									мотать_и_ждать(2,4);
}

var проверка = () => {
	iim(b+'TAG POS=1 TYPE=BUTTON ATTR=TXT:Провер* extract=txt'); 
	if(iimGetLastExtract(1)!=='#EANF#'){
		if(iimGetLastExtract(1)=="Проверить"){iim('TAG POS=1 TYPE=BUTTON ATTR=TXT:Проверить')}
		мотать_и_ждать(1,2)}
}

for(i=0;i<40;i++){
	try{
		иг_подписка();	проверка(); проверка(); проверка();
		иг_комменты();	проверка(); проверка(); проверка();
		вк_комменты();	проверка(); проверка(); проверка();
		вк_лайки();		проверка(); проверка(); проверка();
		вк_подписка();	проверка(); проверка(); проверка();
		вк_просмотры();	проверка(); проверка(); проверка();
	}catch(e) {testServer()}
}