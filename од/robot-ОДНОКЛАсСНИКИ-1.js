start = new Date(); 
function копиБоди() {var x = window.document.getElementsByTagName("body")[0].textContent; return x;}
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function getRandomInt(min, max){return Math.round(min - 0.5 + Math.random() * (max - min + 1))}

function loadScriptFromURL(url) {
    var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),
        async = false;
    request.open('GET', url, async);
    request.send();
    if (request.status !== 200) {
        var message = 'an error occurred while loading script at url: ' + url + ', status: ' + request.status;
        iimDisplay(message);
        return false;
    }
    eval(request.response);
    return true;
}
	
	loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');		
	$ = window.$,
	JQuery = window.JQuery;

 

	город = $("#город").val();
	циклов = $("#циклов").val();
	выборПола = $('input[name="выборПола"]:checked').val()// м.б. "Рандом" или "Выбрать"
    if(выборПола==null){выборПола="Рандом"}//рандом по-умолч
	муж = $('input[name="муж"]:checked').val()
	жен = $('input[name="жен"]:checked').val()

vozrOt = $('input[name="vozrOt"]:checked').val()// м.б. "Рандом" или "Выбрать"

vozrDo = $('input[name="vozrDo"]:checked').val()// м.б. "Рандом" или "Выбрать"

if(vozrOt=="Выбрать"){возрастОТ2=возрастОТ1=$("#возрастОТ :selected").text()}
if(vozrDo=="Выбрать"){возрастДО2=возрастДО1=$("#возрастДО :selected").text()}

if(vozrOt=="Рандом"){
	возрастОТ1 = $("#возрастОТ1 :selected").text();
	возрастОТ2 = $("#возрастОТ2 :selected").text();}
 if(vozrDo=="Рандом"){
	возрастДО1 = $("#возрастДО1 :selected").text();
	возрастДО2 = $("#возрастДО2 :selected").text();}
	 
iimPlayCode("tab open\n tab t=2")

for(abvgd=1;abvgd<циклов;abvgd++)
 {

if(копиБоди().search( /Помогите в борьбе со спамом!/i )!=-1){alert('капча!')}

	if(выборПола=="Выбрать"){
			if((муж==null)&(жен==null)){выборПола="Рандом"}
			if(муж==null){муж=0}
		    if(жен==null){жен=0}}
	if(выборПола=="Рандом"){
				s1=getRandomInt(0,1); s2=getRandomInt(0,1);
				if(s1==1){муж=0}else{муж=1}
				if(s2==1){жен=0}else{жен=1}	
		возрастОТ=getRandomInt(возрастОТ1,возрастОТ2);
		возрастДО=getRandomInt(возрастДО1,возрастДО2)
	}
	iimDisplay("Входим в ОК!\n Цикл №"+abvgd+"("+циклов+")"+timming())	
		мж=0//по-умолчанию +м+ж
		if(муж==0){мж=2}
		if(жен==0){мж=1}
		iimSet('город',город);iimSet('возрастОТ',возрастОТ);iimSet('возрастДО',возрастДО);
		iimSet('мж',мж); iimPlayCode(`'0:-1; мж:0; м:1; ж:2;
		url goto=m.ok.ru/dk?st.cmd=usersOnline&st.city={{город}}&st.ageFrom={{возрастОТ}}&st.genders={{мж}}&st.ageTo={{возрастДО}}&_prevCmd=usersOnline
		EVENT TYPE=CLICK SELECTOR="#user-friends>LI>A" BUTTON=0`)
	
	if(копиБоди().search( /Помогите в борьбе со спамом!/i )!=-1){alert('капча!')}
	
	try{//трай - чтобы не вылетал при ошибках;
		if(копиБоди().search( /доступна только друзьям/i )==-1)  //акк заблочен;
		  {	//логика - лайкать или просто пригласить в группу (вероятность - 50/50):
			if(getRandomInt(0,10)<5)
			  {	 iimDisplay("Рандомайзер выбрал клик по аве и игру с ним в лайки));!\n Цикл №"+abvgd+"("+циклов+")"+timming())//вывод инфы в дисплейчиг);
				//клик по фотке-для лайков:
				iimPlayCode('TAG POS=1 TYPE=A ATTR=ARIA-LABEL:Увеличить*')
				for(i=0;i<7;i++) 
					{	var rand=getRandomInt(1,10)
						iimDisplay("ИГРА в лайки)) №"+i+";!\n Цикл №"+abvgd+"("+циклов+")"+timming())//вывод инфы в дисплейчиг);
					if(rand>9){iimPlayCode(`' = 5-ка ::::\n TAG POS=1 TYPE=A ATTR=ROLE:button&&CLASS:np_mark<SP>np_mark5&&DATA-FUNC:mark&&DATA-MARK:5&&TXT:`)}
						if(rand<5){iimPlayCode(`'=сл фотка-1\n TAG POS=1 TYPE=A ATTR=ROLE:button&&CLASS:np_near<SP>np_next&&DATA-FUNC:next&&ARIA-LABEL:Следующая<SP>фотография&&TXT:`)}
						if(rand>5){iimPlayCode(`'=сл фотка-2::\n SET !TIMEOUT_STEP 1
						EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(4)>DIV:nth-of-type(4)>A" BUTTON=0`)}
						if(копиБоди().search( /Ваша оценка/i )!=-1){i=99}  //фотки закончились
					}
			  }
			else
			 {	iimDisplay("Рандомайзер выбрал пригл в группу со стр юзера!\n Цикл №"+abvgd+"("+циклов+")"+timming())
				//====пригласить в группу из страницы юзера: 1 и 2 - две продвигаемые группы:
				iimPlayCode(`SET названиеГруппы EVAL("var s=Math.floor(Math.random()*2+1); if(s==2){'Осетинские пироги Раменское, Жуковский, доставка'} else 'ВКУСНО - ПИРОГИ! ДОСТАВКА ОСЕТИНСКИХ ПИРОГОВ'")
				TAG POS=1 TYPE=SPAN ATTR=CLASS:ic<SP><SP>ic-more<SP>__empty<SP>ic16&&TXT:
				TAG POS=2 TYPE=SPAN ATTR=TXT:Пригласить<SP>в<SP>группу
				TAG POS=1 TYPE=SPAN ATTR=TXT:{{названиеГруппы}}
				TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=NAME:button_send
				wait seconds=111`)
			 }
		  }
		  else //закрытый профиль -добавляемСЯ с вероятностью 60/40!;
		  { if(getRandomInt(0,10)<5){iimPlayCode(`TAG POS=1 TYPE=A ATTR=TXT:Дружить
				TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=NAME:button_addFriend`)
			if(getRandomInt(0,10)<5)
				{iimPlayCode(`'мы не родств:\nEVENT TYPE=CLICK SELECTOR="#type_-1" BUTTON=0
			wait seconds=123`)}
			else{iimPlayCode(`'коллеги:\nTAG POS=2 TYPE=INPUT:CHECKBOX FORM=ACTION:* ATTR=NAME:selRelType CONTENT=YES`)}
			iimPlayCode(`TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=NAME:button_save\n wait seconds=60`)}
		  }
		} catch (r) //конструкция TRY{} catch(r) {} -предназначена для отлова ошибок
		{iimDisplay('зашли в тупик - идем дальше;)'); iimPlayCode('wait seconds=2')}
 }	