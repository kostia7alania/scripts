iim = s => iimPlayCode ('set !timeout_tag 1\n'+s);
function wait(sec) {iimPlayCode('WAIT SECONDS='+sec)}
function run(prog) {var prgpath=prog; var args = ['-n','6', 'google.com']; var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile); file.initWithPath(prgpath); var process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess); process.init(file); process.run(false, args, args.length)}
function копиБоди() {try{var x = window.document.getElementsByTagName("body")[0].textContent;}catch(e){var x='sex'} return x;}

var Path = 'C:\\CapNum\\'
var key='6440c629b2418bf14c6ca56d0e7e21d0';
googleKey='6LdVYCATAAAAAO2oWqR9gXhgjII3BFkOfGU9zujM';
urlHack='mos.ru/pgu/ru/application/dtiu/030301';

var url1 = "http://rucaptcha.com/in.php?key="+key+"&method=userrecaptcha&googlekey="+googleKey+"&pageurl="+urlHack; 
var url2 = "http://rucaptcha.com/res.php?key="+key+"&action=get&id=";
		 

		
	 
  
	

	
iim(`
url goto=https://www.mos.ru/pgu/ru/application/dtiu/030301/#step_1
REFRESH
TAG POS=1 TYPE=DIV ATTR=TXT:Категория<SP>заявителя:*<SP>Физическое<SP>лицо<SP>Индивидуал*
TAG POS=1 TYPE=LABEL FORM=NAME:form ATTR=TXT:Индивидуальный<SP>предприниматель
TAG POS=2 TYPE=INPUT:RADIO FORM=NAME:form ATTR=NAME:field[internal.person_type]`)

//выбираем период
iim(`set !errorignore yes\nEVENT TYPE=CLICK SELECTOR="#period_chosen>A" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#period_chosen>DIV>UL>LI" BUTTON=0`)

// //выбираем округ: 
iim(`EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>A>DIV>B" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV>DIV>DIV>A>DIV>B" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV>DIV>DIV>DIV>UL>LI:nth-of-type(12)" BUTTON=0`)

// run("C:\\enter.exe") // имитация enter
 
// район
iim(`EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>A" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>DIV>UL>LI:nth-of-type(11)" BUTTON=0  `)
  
 //ярмарка (надо допилить);
iim(`set !errorignore yes\nEVENT TYPE=CLICK SELECTOR="#yarmarka_chosen>A" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#yarmarka_chosen>DIV>UL>LI:nth-of-type(1)" BUTTON=0 `)


//группа товаров:
iim(`EVENT TYPE=CLICK SELECTOR="#tovar_group_chosen>A" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#tovar_group_chosen>DIV>UL>LI:nth-of-type(4)" BUTTON=0 `)

//Дополнительный ассортимент *
iim(`EVENT TYPE=CLICK SELECTOR="#dop_ass>DIV:nth-of-type(2)>DIV:nth-of-type(3)>DIV>LABEL" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#dop_ass>DIV:nth-of-type(2)>DIV:nth-of-type(4)>DIV>LABEL" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#dop_ass>DIV:nth-of-type(2)>DIV:nth-of-type(9)>DIV>LABEL" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#dop_ass>DIV:nth-of-type(2)>DIV:nth-of-type(14)>DIV>LABEL" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#dop_ass>DIV:nth-of-type(2)>DIV:nth-of-type(15)>DIV>LABEL" BUTTON=0`)


//Продолжить:
iim(`EVENT TYPE=CLICK SELECTOR="#button_next" BUTTON=0`)

//Торговые периоды:
iim(`EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV>DIV>DIV>A" BUTTON=0
TAG POS=1 TYPE=LABEL FORM=ID:form_element ATTR=TXT:25.08.2017-27.08.2017
TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:form_element ATTR=ID:field[internal.yarmarka.56.period_0] CONTENT=YES`)


 //Продолжить:
iim(`EVENT TYPE=CLICK SELECTOR="#button_next" BUTTON=0`)




//Сведения о ИП:
iim(`set !errorignore yes
EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(2)>DIV:nth-of-type(3)>DIV>INPUT" BUTTON=0
EVENTS TYPE=KEYPRESS SELECTOR="#step_3>FIELDSET:nth-of-type(2)>DIV:nth-of-type(3)>DIV>INPUT" CHARS="304482226400192"
EVENTS TYPE=KEYPRESS SELECTOR="#step_3>FIELDSET:nth-of-type(2)>DIV:nth-of-type(4)>DIV>INPUT" CHARS="482603651706"`)

//согласия на условия
iim(`EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(7)>DIV>DIV>LABEL" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(7)>DIV:nth-of-type(2)>DIV>LABEL" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(7)>DIV:nth-of-type(3)>DIV>LABEL" BUTTON=0`)



//КАПТЧА!!!!!!!!!!!!!
		iimPlayCode('TAB OPEN\nTAB T=2'); 
		iimSet('url1',url1); iimPlayCode('url goto={{url1}}');
		wait(1);
		var ответ = копиБоди().split("|")
		if(ответ[0]=="OK"){
			iimDisplay("получили трек-код для отслежки")
			var трек=ответ[1];
			for(i=0;i<5;i++){//ждем ответного финального хеш-кода; 
				 wait(5); iimSet('url2',url2+трек)
				 iimPlayCode('url goto={{url2}}');
					var ответ2 = копиБоди().split("|");
					if(ответ2[0]=="OK"){ var i=5;//для выхода из цикла;
						iimDisplay("Получили код. С захода №"+i+"\nGO вводить код на страницу!\nВот код сам:"+ответ2[1]) 
						iimPlayCode('TAB CLOSE');
						
						iimSet('бейс',ответ2[1]);
						iimPlayCode('TAG POS=1 TYPE=TEXTAREA FORM=ID:form_element ATTR=ID:g-recaptcha-response CONTENT={{бейс}}')
						// alert('все ок, сматываем удочки;')
					} else{
						wait(5)
						iimDisplay('neOK2. ждем. круг №'+i+'\nПолученный код:'+ответ2)
					}
				 
			}
			// alert('вышли из цикла 2')
		} else{alert('neOK')}
wait(1)
//КАПТЧА!!!!!!!!!!!!!


//далее:
iim('TAG POS=1 TYPE=A ATTR=ID:button_next')