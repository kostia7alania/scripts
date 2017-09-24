 var simulateClick = function(){
var evt = content.document.createEvent("MouseEvents");
evt.initMouseEvent("keypress", true, true, window, 0, 0, 0, 150, 100, false, false, false, false, 0, null);
content.document.body.dispatchEvent(evt);
}//убивает браузер мгновенно
simulateClick()

var start = new Date(); function timming() {diff=(new Date()-start)/1000; return 'Затрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}

function копиБоди() {try{var x = window.document.getElementsByTagName("body")[0].textContent;}catch(e){var x='sex'} return x;}
function getRandomInt(min, max){return Math.round(min - 0.5 + Math.random() * (max - min + 1))}
function wait(min,max){iimSet('rand',getRandomInt(min,max));iimPlayCode('wait seconds={{rand}}')}


if(копиБоди()=="recaptcha"){alert('sex')}


var txt=imns.FIO.readTextFile(imns.FIO.openNode("C:\\разн.txt"))
var massiv = txt.split('\n');

var current=imns.FIO.readTextFile(imns.FIO.openNode("C:\\current.txt")).split('\n');

for(i=current[1];i<massiv.length;i++){
	
	var s="\n"+i+"\n"+timming(); 
	imns.FIO.writeTextFile(imns.FIO.openNode("C:\\current.txt"),s) 
	
	liks=0;//ограничитель по лайкам на 1 стр;
	iimSet('url',massiv[i]);
	iimPlayCode('url goto={{url}}');

try{ 

	if(getRandomInt(1,10)>8){iimPlayCode('EVENT TYPE=CLICK SELECTOR="#friend_status>DIV>BUTTON" BUTTON=0')} //добавить в друзья 1 из 10
	
	var чеделать=getRandomInt(1,3);//генерим случайное дело:

	if(чеделать==1){//лайк по стенке:
		iimSet('randLike',getRandomInt(1,11));	iimPlayCode('TAG POS={{randLike}} TYPE=I ATTR=CLASS:i_like&&TXT:');	}
	
	
	if(чеделать==1){//клик по аве:
		iimPlayCode(`TAG POS=1 TYPE=IMG ATTR=ALT:*&&CLASS:pp_img`)
		iimPlayCode('TAG POS=1 TYPE=H1 ATTR=CLASS:hb_btn<SP>mh_header&&ID:zpv_summary extract=txt')
		var колФоток=iimGetLastExtract(0).split(/ /)
		for(i=parseInt(колФоток[0]);i<1+parseInt(колФоток[2]);i++){		
			for(ii=0;ii<getRandomInt(1,11);ii++){
				if((liks<getRandomInt(0,2))&&(getRandomInt(1,4)<3)){ liks++; //огр по лайкам+рандомайзер
					iimPlayCode(`TAG POS=1 TYPE=A ATTR=ONCLICK:return<SP>photoview.likePhoto*&&CLASS:item_button<SP>item_like*`)
					wait(1,3)
				}
					 
				 //перелистнуть вправо:
				iimSet('x',getRandomInt(1,555)); iimSet('y',getRandomInt(1,555));
				iimPlayCode(`EVENT TYPE=MOUSEDOWN SELECTOR="#pv_photo>IMG" BUTTON=0
				EVENT TYPE=MOUSEUP POINT="({{{x}},{{y}})"`);wait(1,3)
			}
		}
		//закрыть фотки авы:
		iimPlayCode(`TAG POS=1 TYPE=DIV ATTR=ID:layer`);wait(1,3)
	}
	
	
if(чеделать==3){//открыть доп.фотки:
	iimPlayCode(`TAG POS=1 TYPE=A ATTR=CLASS:page_square_photo<SP>crisp_image`); wait(1,5);
	for(iii=0;iii<getRandomInt(1,8);iii++)
	{if((liks<getRandomInt(0,2))&&(getRandomInt(1,4)<3))//огр по лайкам+рандомайзер
	{liks++;
		switch(getRandomInt(1,3)) {//=лайкаем рандомными способами)):
	  case 1: //1й способ лайка под фотой
		iimPlayCode(`TAG POS=1 TYPE=DIV ATTR=ONCLICK:Photoview.like();&&ONMOUSEOVER:Photoview.likeOver(this)&&CLASS:pv_like<SP>_like_wrap<SP>&&ID:pv_like`)
		break;
	  case 2: 	//2й способ лайка под фотой
		iimPlayCode(`TAG POS=1 TYPE=SPAN ATTR=CLASS:pv_like_link<SP>_link`)
		break;
	  case 3: 	//3й способ лайка под фотой
		iimPlayCode(`TAG POS=1 TYPE=DIV ATTR=ONCLICK:Photoview.like();&&ONMOUSEOVER:Photoview.likeOver(this)&&CLASS:pv_like<SP>_like_wrap&&ID:pv_like`)
		break;
	  default:
		wait(1,3)
		break;
		}
	};
		//перелистнуть вправо:
		iimSet('x',getRandomInt(1,555)); iimSet('y',getRandomInt(1,555));
		iimPlayCode(`EVENT TYPE=MOUSEDOWN SELECTOR="#pv_photo>IMG" BUTTON=0
		EVENT TYPE=MOUSEUP POINT="({{x}},{{y}})"`);wait(1,3)
	}
}
}catch(e){iimPlayCode('EVENT TYPE=CLICK SELECTOR="#friend_status>DIV>BUTTON" BUTTON=0')}//add to friend,if error:))


}