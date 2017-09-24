 
  
var start = new Date(); function timming() {diff=(new Date()-start)/1000; return 'Затрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function getRandomInt (min, max) {return Math.round(min - 0.5 + Math.random() * (max - min + 1))}
function wait(min,max){iimSet('rand',getRandomInt(min,max));iimPlayCode('wait seconds={{rand}}')}
function запись (путь,новое) {var old=imns.FIO.readTextFile(imns.FIO.openNode(путь));var All=old+"\n"+новое;imns.FIO.writeTextFile(imns.FIO.openNode(путь),All)}
 
var нашлиФоллоу=1;

	var группа = prompt('Дай ид или короткое имя юзера:', "vkusnopirogi1"); 
	
	iimSet('url','https://www.instagram.com/'+группа);	iimPlayCode('url goto={{url}}')
	
	if(confirm('Кого будем фоловить:\n1) фолловеров (жми ОК)\nили\n2)воловингов (жми ОТМЕНА)\nюзера?')){var когоФоловить=1}
	else{var когоФоловить=2}
	//узнаем язык интерфейса);))

	if(window.document.getElementsByTagName("body")[0].textContent.search(/follow/igm)!==-1){
			//английский
		if(когоФоловить==1){var кого="followers"}else{var кого="following"};	}
	else{	//русский
		if(когоФоловить==1){var кого="подписчиков"}else{var кого="подписки"};	}
	iimSet('кого',кого);
	iimPlayCode(`TAG POS=1 TYPE=A ATTR=TXT:*{{кого}}`)
	
	var пауза=prompt('Скок сек делать паузу (рекомендую от 25 до 35):', "25-35").split(/-/);
	var скокФолловить = prompt('Скок юзеров фоловить?\n(в день-от 800 до 1200 - рекомендую)', "800")

	var путь = prompt('Сохранить кого зафоловили за эту сессию?\n-если да,то укажи путь;\n-либо - жми отмену', "C:\\фолловим-"+когоФоловить+"-"+группа+".txt")
	try{imns.FIO.readTextFile(imns.FIO.openNode(путь))} catch(e){if(путь){imns.FIO.writeTextFile(imns.FIO.openNode(путь),"")}}//создание блокнота,если нету его;
	 
	 	 window.document.querySelectorAll("._4zhc5").focus;
	 	 window.document.querySelectorAll("._4zhc5").blur;
	 	 window.document.querySelectorAll("._q44m8").blur;
	 	 window.document.querySelectorAll("._q44m8").focus;
	 
	for(i=parseInt(prompt('С какого фолловера начать?', '1'));i<скокФолловить;i++){
		  iimPlayCode(`EVENT TYPE=CLICK SELECTOR="HTML>BODY" BUTTON=0  \n EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY" KEYS="[40,40,40]" `)
		 
		 iimPlayCode('tab open \n tab t=2 \n tab close \n tab t=1')
		try{
			 var урлПрофиля =window.document.querySelectorAll("._4zhc5")[i].href;
			iimDisplay('Круг: '+i+';\nСайчас:\n'+урлПрофиля+';\n'+timming());
			iimSet('url',урлПрофиля);
			iimPlayCode('TAB OPEN \n tab t=2 \n url goto={{url}} \n wait seconds=2 \n TAG POS=1 TYPE=BUTTON ATTR=TXT:* extract=txt')
			var кнопка = iimGetLastExtract(0);
			if(кнопка=="Подписаться"||кнопка=="Follow"){//кнопка фоллоу есть:
				if(кнопка=="Follow"){iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow')}//жмем ФОЛЛОУ:
				if(кнопка=="Подписаться"){iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:Подписаться')}//жмем подписаться:
				if(путь){запись(путь,урлПрофиля)}//сохраняем,,если надо сохранять зафоловленных);
				wait(parseInt(пауза[0]),parseInt(пауза[1]))
				
			}	//еси мы подписаны,то просто как обычно-сматываем удочки(ну,или можно прикрутить лайки к этим страницам;)
			iimPlayCode(`TAB CLOSE	\n	TAB T=0 
			EVENT TYPE=CLICK SELECTOR="HTML>BODY" BUTTON=0  \n EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY" KEYS="[40,40]" `)
			
		}
		catch(e){i--; iimDisplay("минусуем цикл + мы прокрутили окошко ниже(ибо уже нету элементов в зоне видимости)"); wait(1,2)
		iimPlayCode(`EVENT TYPE=CLICK SELECTOR="HTML>BODY" BUTTON=0  \n EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY" KEYS="[40,40,40]" `)}
		
	}