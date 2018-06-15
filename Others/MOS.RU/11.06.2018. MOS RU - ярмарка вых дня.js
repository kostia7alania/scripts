iim = s => iimPlayCode ('set !timeout_tag 1\n'+s);
function wait(sec) {iimPlayCode('WAIT SECONDS='+sec)}
function run(prog) {var prgpath=prog; var args = ['-n','6', 'google.com']; var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile); file.initWithPath(prgpath); var process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess); process.init(file); process.run(false, args, args.length)}
function копиБоди() {try{var x = window.document.getElementsByTagName("body")[0].textContent;}catch(e){var x='sex'} return x;}
console = window.console;
cc = Components.classes; ci = Components.interfaces; x = cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
var Path = 'C:\\CapNum\\'
var key = '81315bbf06bbb83a5b164bd1ed7b055d'; //rucapthca api_key -> https://pp.userapi.com/c848616/v848616682/641c/ndDv1Q4NBI4.jpg
googleKey='6LdVYCATAAAAAO2oWqR9gXhgjII3BFkOfGU9zujM';
urlHack='mos.ru/pgu/ru/application/dtiu/030301';

var url1 = "http://rucaptcha.com/in.php?key="+key+"&method=userrecaptcha&googlekey="+googleKey+"&pageurl="+urlHack; 
var url2 = "http://rucaptcha.com/res.php?key="+key+"&action=get&id=";
 
// var idRecap_recogTask = firstStepRecaptcha(url1);  //прежде всего, шлем задачу на распознавание каптчи таджикам; (даже до захода на сам сайт:))

var okrug = 8; // <-- выбирай wифру из списка ниже;
var rajon = 1;
    //список: https://pp.userapi.com/c824700/v824700093/15eeb8/l1UjGy0FHsU.jpg 
    //как пользоваться списком: зеленым веделены округи,а районы - под соотв округами. Берем цифру из соотв полей: например, для ВАО Богородского: var okrug = 2; var rajon = 1;
//списки районов получал так: document.querySelectorAll('.chosen-results')[2].querySelectorAll('.active-result ').forEach((e,i)=>{console.log(i+1+' - '+e.innerHTML)})
var gruppa_tovarov = 2; //цифру см на сркине: https://pp.userapi.com/c845219/v845219661/7ac37/YpRDeEBW9X8.jpg

//доп ассортимент - https://pp.userapi.com/c845219/v845219661/7ac37/YpRDeEBW9X8.jpg
//должен быть в списке нище - каждый на новой строке, точно как указано в скрине, каждый пробел, и запятая должна быть на месте! 
// можно использовать регулярку: т.е. если знаешь,что набранная последовательность символов больше не повторится, то жми * , чтобы дальше не писать строку. 
//например: Продукты из мяса (колбасы вареные,* 
//будет означать:  Продукты из мяса (колбасы вареные, сосиски, сардельки, колбасы полукопченые (включая из мяса птицы),колбасы сырокопченые,копчености,мясные деликатесы)
var dop_assortiment =  
`Свежая зелень в ассортименте
Свежие овощи в ассортименте
Свежие фрукты в ассортименте
Сезонные фрукты
Сезонные ягоды`
.trim();


//<-- -- -- -- -- -- -- -- - шаг 1-- -- -- -- -- -- -- -- --  -- ->

//iim(`url goto=https://www.mos.ru/pgu/ru/application/dtiu/030301/#step_1`)//переход на сайт МОС (можно убрать)

iim(`TAG POS=1 TYPE=DIV ATTR=TXT:Категория<SP>заявителя:*<SP>Физическое<SP>лицо<SP>Индивидуал*
TAG POS=1 TYPE=LABEL FORM=NAME:form ATTR=TXT:Индивидуальный<SP>предприниматель
TAG POS=2 TYPE=INPUT:RADIO FORM=NAME:form ATTR=NAME:field[internal.person_type]`)

//iim('FRAME F=12 \n EVENT TYPE=CLICK SELECTOR="#recaptcha-anchor>DIV:nth-of-type(5)" BUTTON=0') // нажатие на галку рекаптчи (долго грузится, убрал)

_=quesel('.btn-close-pop');_?_.click():''; //закрываем уведомление о том,что ярмарка закрыта(если вдруг всплыла)

//выбираем период
iim(`set !errorignore yes\nEVENT TYPE=CLICK SELECTOR="#period_chosen>A" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#period_chosen>DIV>UL>LI" BUTTON=0`)                 // вроде бы первый из доступных периодов  будет выбирать;

// //выбираем округ: 
iim(`EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>A>DIV>B" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV>DIV>DIV>A>DIV>B" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV>DIV>DIV>DIV>UL>LI:nth-of-type(${okrug})" BUTTON=0`)

// run("C:\\enter.exe") // имитация enter
 
// район
iim(`EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>A" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>DIV>UL>LI:nth-of-type(${rajon})" BUTTON=0  `)
  
 //ярмарка (надо допилить);
iim(`set !errorignore yes\nEVENT TYPE=CLICK SELECTOR="#yarmarka_chosen>A" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#yarmarka_chosen>DIV>UL>LI:nth-of-type(1)" BUTTON=0 `) //вроде бы должно первую выбрать из списка



//группа товаров:
iim(`EVENT TYPE=CLICK SELECTOR="#tovar_group_chosen>A" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#tovar_group_chosen>DIV>UL>LI:nth-of-type(${gruppa_tovarov})" BUTTON=0 `)

//Дополнительный ассортимент * 
dop_assortiment.split('\n').forEach( 
        e => iim(`TAG POS=1 TYPE=LABEL FORM=ID:form_element ATTR=TXT:"${e.trim().split('  ').join(' ')}"`) //<-"защита от дурака"  (чистим от лишних пробелов);
    ); 
 



//Продолжить:
iim(`EVENT TYPE=CLICK SELECTOR="#button_next" BUTTON=0`)

//<-- -- -- -- -- -- -- -- - шаг 2-- -- -- -- -- -- -- -- --  -- ->

show_all_objects(); //отобр все шаги;


//Торговые периоды:
iim(`EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV>DIV>DIV>A" BUTTON=0
TAG POS=1 TYPE=LABEL FORM=ID:form_element ATTR=TXT:25.08.2017-27.08.2017
TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:form_element ATTR=ID:field[internal.yarmarka.56.period_0] CONTENT=YES`)


 //Продолжить:
iim(`EVENT TYPE=CLICK SELECTOR="#button_next" BUTTON=0`)
 
//<-- -- -- -- -- -- -- -- - шаг 3-- -- -- -- -- -- -- -- --  -- ->

show_all_objects(); //отобр все шаги;

//Сведения о ИП:
iim(`set !errorignore yes
EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(2)>DIV:nth-of-type(3)>DIV>INPUT" BUTTON=0
EVENTS TYPE=KEYPRESS SELECTOR="#step_3>FIELDSET:nth-of-type(2)>DIV:nth-of-type(3)>DIV>INPUT" CHARS="304482226400192"
EVENTS TYPE=KEYPRESS SELECTOR="#step_3>FIELDSET:nth-of-type(2)>DIV:nth-of-type(4)>DIV>INPUT" CHARS="482603651706"`)

//согласия на условия
iim(`EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(7)>DIV>DIV>LABEL" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(7)>DIV:nth-of-type(2)>DIV>LABEL" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(7)>DIV:nth-of-type(3)>DIV>LABEL" BUTTON=0`)
//альтернативный метод ставить птички: 
try{quesel('#new_check_1').checked = true;quesel('#new_check_2').checked = true; quesel("#new_check_3").checked = true;}catch(e){window.console.log('Ошибка на птичках:',e)}

// secondStepRecaptcha(idRecap_recogTask); //смотрим -че распознали нам ребята;

// финальное "далее":
iim('TAG POS=1 TYPE=A ATTR=ID:button_next'); 








 function firstStepRecaptcha(url1) {
    var maxTryes=5;
    for(i=0;i<maxTryes;i++){
        x.open('GET', url1, false);
        x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        console.log(x)
        x.send();
        var rs = x.responseText;
        
        rs == "ERROR_KEY_DOES_NOT_EXIST" ? alert('API ключ не рабочий!;)') : "";
        rs == `ERROR_NO_SLOT_AVAILABLE` ? alert('Все работники антикаптчи заняты! Мб поможет повышение цен;)') : "";
        if (rs.split('|')[0] == "OK") return rs.split('|')[1]; //еси все ок,то выдвигаемся из функции с captchaID
        window.console.log(maxTryes)
        i==(maxTryes-1)?alert('не смогли сделать даже первый шаг рекапчи!'):'';
    } 
} 
 
function secondStepRecaptcha(capId) { 
    for (var i=0; i<=60; i++) { 
		x.open("GET", url2+capId, false);
		x.send();
		var resp = x.response;  
		iimDisplay(`Цикл: ${i}\nОтвет: ${resp}`);
		if (resp.indexOf('ERROR')!=-1) alert('возникла ОШИБКА! Дальше -вручную!!! \n'+resp);
        if (resp.indexOf('OK') != -1)  {
         quesel('#g-recaptcha-response').style.display = 'block'; //отображаем поле для хеша разгаданной каптчи
         quesel('#g-recaptcha-response').value = resp.split('|')[1]; //записываем код разгадки каптчи в скрытое поле рекаптчи;
         quesel('#g-recaptcha-response').style.border = '5px red dashed' //выделяем это поле ->типа успешно распознано:)
        }
		else iim('WAIT SECONDS=1')
    }
}
//USAGE:
// var idRecap_recogTask = firstStepRecaptcha();
// secondStepRecaptcha(idRecap_recogTask);
//КАПТЧА!!!!!!!!!!!!!




function quesel(e){return window.document.querySelector(e)}
function queselAll(e){return window.document.querySelectorAll(e)}



function show_all_objects(){
    _=quesel('#step_2');            _?show_obj(_):''; //если ярмарка еще закрыта или по ходу дела возникли ошибки, то эта штука отобразит след шаги :)
    _=quesel('#step_3');            _?show_obj(_):''; //и сразу 3й шаг отобразим=)
    
    //queselAll('#step_3 .form-block')[0].classList.remove('hidden') // отобразим внаглую поле Данные юридического лица
    _=queselAll('#step_3 .form-block')[1];   _?show_obj(_):'';// отобразим внаглую поле "Данные индивидуального предпринимателя"
    //queselAll('#step_3 .form-block')[2].classList.remove('hidden') // отобразим внаглую поле "Юридический адрес"
    //queselAll('#step_3 .form-block')[3].classList.remove('hidden') // отобразим внаглую поле "Сведения о физическом лице (индивидуальном предпринимателе)"
    //queselAll('#step_3 .form-block')[4].classList.remove('hidden') // отобразим внаглую поле "Документ, удостоверяющий личность заявителя"
    //queselAll('#step_3 .form-block')[5].classList.remove('hidden') // отобразим внаглую поле "Сведения о продавцах" (это, кажется и так отображается -бесполезно)
    _=queselAll('#step_3 .form-block')[6];   _?show_obj(_):'';  // отобразим внаглую поле птички "Согласие на условия предоставления услуги" <== !ОБЪЯЗАТЕЛЬНОЕ ПОЛЕ!
    _=quesel('.captcha');                    _?show_obj(_):''; //отобразим реКаптчу внаглую;
 }
function show_obj (obj) {
    try {obj?obj.classList.remove('hidden'):'';         } catch(e) { window.console.log('ошибка в шоу_объект1=>',e); }
    try {obj?obj.style.display="block":'';    } catch(e) { window.console.log('ошибка в шоу_объект2=>',e); }
}