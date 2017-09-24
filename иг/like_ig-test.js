var start = new Date(); function timming() {diff=(new Date()-start)/1000; return 'Затрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}

function getRandomInt(min, max){return Math.round(min - 0.5 + Math.random() * (max - min + 1))}
function wait(min,max){iimSet('rand',getRandomInt(min,max));iimPlayCode('wait seconds={{rand}}')}

var txt=imns.FIO.readTextFile(imns.FIO.openNode("C:\\dodo.txt"))
var massiv = txt.split('\n');

var current=imns.FIO.readTextFile(imns.FIO.openNode("C:\\current.txt")).split('\n');

for(i=current[1];i<massiv.length;i++){
	var s="\n"+i+"\n"+timming(); 
	imns.FIO.writeTextFile(imns.FIO.openNode("C:\\current.txt"),s) 
	liks=0;//ограничитель по лайкам на 1 стр;
iimSet('url',massiv[i]);
iimPlayCode('url goto={{url}}');

try{
	
	
var чеделать=getRandomInt(1,3);//генерим случайное дело:
if(чеделать==1){//лайк по стенке:
	iimSet('randLike',getRandomInt(1,11));
	iimPlayCode('TAG POS={{randLike}} TYPE=SPAN ATTR=CLASS:post_like_link<SP>_link');
	}
	
	
if(чеделать==1){//клик по аве:
	 iimPlayCode(`TAG POS=1 TYPE=IMG ATTR=CLASS:page_avatar_img`)
	for(ii=0;ii<getRandomInt(1,11);ii++)
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
		EVENT TYPE=MOUSEUP POINT="({{{x}},{{y}})"`);wait(1,3)
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
}catch(e){
	iimPlayCode('EVENT TYPE=CLICK SELECTOR="#friend_status>DIV>BUTTON" BUTTON=0')
	
}//тут мб раб над ошибками 


}