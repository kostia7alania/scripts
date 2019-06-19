/* *** DATE: 18.06.2019
 *** тщательно перетестить надо
 *** когда откроют регу.
 *** */

// => НАСТРОЙКИ:
// СТРАНИЦА 1:
const zayavitel = 'Индивидуальный предприниматель'
/*Варианты:
Физическое лицо
Индивидуальный предприниматель
*/

// Период проведения ярмарок - автоматически выбирается первый вариант

/* ОКРУГ:*/
const okrug = 'Восточный административный округ'
const okrugSelector = '#step_1>FIELDSET>DIV:nth-of-type(3) LI'
/*-> ВАРИАНТЫ:
Восточный административный округ
Западный административный округ
Зеленоградский административный округ
Новомосковский административный округ
Северный административный округ
Северо-Восточный административный округ
Северо-Западный административный округ
Троицкий административный округ
Центральный административный округ
Юго-Восточный административный округ
Юго-Западный административный округ
Южный административный округ
*

//* Район*/
const rajon = 'Восточное измайлово' //кусочек имени (регулярка распознает из списка подходящий) - например: "бог" - для "район Богородское"
const rajonSelector = '#step_1>FIELDSET>DIV:nth-of-type(3)>DIV:nth-of-type(2) li'

//Ярмарка:
const yarmarka = 'Сиреневый' // например: для "Ярмарка выходного дня Сиреневый бульвар, вл. 60" - пишем "Сиреневый"
const yarmarkaSelector = '#yarmarka_chosen>DIV>UL li'

//Группа товаров
const gruppaTovarov = 'овощи,лягушки,квакушки' //
/* например:
	если надо выбрать:
	- "овощи и фрукты",
	- "кошки и мышки",
	- лягушки да квакушки"
	пишем: "овощи,кошки,квакуш" - БЕЗ ПРОБЕЛОВ(!),
	запятая - служебный символ!
	Пишите точную часть слова, которая 100% будет в строке!
	Лучше НЕДОПИСАТЬ,чем написать с неверным окончанием!
*/
const gruppaTovarovSelector = '#step_1>FIELDSET>DIV:nth-of-type(5) li'

const assort = 'гриб,джем,Сухофрукты в промышленной упаковке'// через запятую ЗНАЧАЩИЕ БУКВЫ в слове  (как в предыдущем)
/*ВАРИАНТЫ для "Группа товаров"="ОВОЩИ И ФРУКТЫ" (на текущий момент - 18.06.2019):
Дополнительный ассортимент *
Бахчевые культуры в период произрастания и массовой реализации
Варенье из плодов и ягод
Грибы
Джемы
Замороженные овощи, фрукты, ягоды
Мед и продукция пчеловодства
Плодоовощные консервы
Плоды семечковых, ореховых культур
Продукция плодоовощная переработанная в промышленной упаковке
Свежая зелень в ассортименте
Свежие овощи в ассортименте
Свежие фрукты в ассортименте
Сезонные фрукты
Сезонные ягоды
Сухофрукты в промышленной упаковке
*/


// СТРАНИЦА 2
//Торговые периоды
const periods = '05.07.2019-07.07.2019,08.2019,9.2019'// как и предыдущие - указываем формулу через запятую;
//пробелы нельзя ставить!
// если хотим все даты, то просто пиши год - 2019
/* => пример (на момент - 18 Jun 2019 7:37 pm):
05.07.2019-07.07.2019	Количество мест: 4; Количество заявок: 21
12.07.2019-14.07.2019 	Количество мест: 4; Количество заявок: 21
19.07.2019-21.07.2019 	Количество мест: 4; Количество заявок: 23
26.07.2019-28.07.2019  	Количество мест: 4; Количество заявок: 22
02.08.2019-04.08.2019  	Количество мест: 4; Количество заявок: 23
09.08.2019-11.08.2019 	Количество мест: 4; Количество заявок: 23
16.08.2019-18.08.2019 	Количество мест: 4; Количество заявок: 22
30.08.2019-01.09.2019 	Количество мест: 4; Количество заявок: 23
06.09.2019-08.09.2019 	Количество мест: 4; Количество заявок: 23
23.08.2019-25.08.2019 	Количество мест: 4; Количество заявок: 22
13.09.2019-15.09.2019 	Количество мест: 4; Количество заявок: 23
20.09.2019-22.09.2019 	Количество мест: 4; Количество заявок: 23
27.09.2019-29.09.2019 	Количество мест: 4; Количество заявок: 23
*/


//Сведения о физическом лице (индивидуальном предпринимателе):
const ogrn = '304482226400192'
const inn = '482603651706'

//Адрес электронной почты:
const email = 'osetia-alania@mail.ru' //если вдруг почта не указана была в профиле, скрипт может ввести

const apiKeyRecaptcha = "cf2fc1467ef8d1539e573d61e4cc5595"
var mos = `https://www.mos.ru/pgu/ru/application/dtiu/030301/#step_1`;



/* КОНЕЦ НАСТРОЕК */


// var rucaptchaURL = "http://rucaptcha.com/in.php";
const start = new Date(); //для таймера ()

var cc = Components.classes,ci = Components.interfaces;var x = cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
//var base64 = document.querySelector(".captcha_img").src //.replace("data:image/png;base64,", "");
//var data = "method=base64" + "&key=" + apiKeyRecaptcha + "&body=" + encodeURIComponent(base64);


const getting = `${faster()}\nTAG POS=1 TYPE=img ATTR=CLASS:captcha_img EXTRACT=HTM`;
if (location.href == mos) // => не перекинуло-ли на другую страницу? ....
	iim(`TAB OPEN \n TAB T=2 \n URL GOTO=${mos}	 ${getting}`)
else iim(`URL GOTO=${mos}	${getting}`)
const extr = iimGetLastExtract(1) == '#EANF#'?'':iimGetLastExtract(1)
if(extr) {
	const base64 =  extr&&extr.split('src="')[1].split('"')[0].trim(); //var base64 = document.querySelector(".captcha_img").src;
	const captchaId1 = postCap(apiKeyRecaptcha, base64);
	wait(0);
	const captchaId2 = postCap(apiKeyRecaptcha, base64);
	wait(0);
	const captchaId3 = postCap(apiKeyRecaptcha, base64);

	iimD(`Каптчи отправлены на распознвание:
		captchaId1: ${captchaId1},
		captchaId2: ${captchaId2},
		captchaId3: ${captchaId3}
	`)
} else { //ну,нисмагла я разгадать твои каптчи,!,


}


/// ВЫПОЛНЕНИЕ СКРИПТа

/* ***
 * СТРАНИЦА 1
 *** */

//+++ Категория заявителя
iim(`TAG POS=1 TYPE=LABEL FORM=ID:form_element ATTR=TXT:${zayavitel.replace(/ /gim,'<SP>')}`)


//+++ Период проведения ярмарок: выбираем первый из списка
iim(`set !errorignore yes
EVENT TYPE=CLICK SELECTOR="#period_chosen>A" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#period_chosen>DIV>UL>LI" BUTTON=0`)

//+++ выбираем округ:
iim(`EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV>DIV>DIV>A>DIV>B" BUTTON=0`)
wait(0)
iim(`EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV>DIV>DIV>DIV>UL>LI[data-option-array-index='${getIndex(okrug,okrugSelector)}']" BUTTON=0`)

//+++ Район
iim(`TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>A" BUTTON=0`)
wait(0)
iim(`EVENT TYPE=CLICK SELECTOR="#step_1>FIELDSET>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV>DIV>UL>LI:[data-option-array-index='${getIndex(rajon,rajonSelector)}']" BUTTON=0`)

//+++ Ярмарка
iim(`
	EVENT TYPE=CLICK SELECTOR="#yarmarka_chosen>A" BUTTON=0
	EVENT TYPE=CLICK SELECTOR="#yarmarka_chosen>DIV>UL>LI:[data-option-array-index='${getIndex(yarmarka,yarmarkaSelector)}']" BUTTON=0
`)


// +++ Группа товаров:*
gruppaTovarov.split(',').forEach(e=>{
	iim(`${faster()} EVENT TYPE=CLICK SELECTOR="#tovar_group_chosen>A" BUTTON=0`)
	iim(`${faster()} EVENT TYPE=CLICK SELECTOR="${gruppaTovarovSelector}[data-option-array-index='${getIndex(gruppaTovarov,gruppaTovarovSelector)}']" BUTTON=0`)
})

//Дополнительный ассортимент *
assort.split(',').forEach(name=>[...document.querySelectorAll('#dop_ass label')].forEach(e=>e.innerText.match(new RegExp(name, 'gim'))?e.click():'') )


nextPage() // кнопка Продолжить

/*СТРАНИЦА 2*/

//ТОРГОВЫЕ ПЕРИОДЫ
periods.split(',').forEach(name=>[...document.querySelectorAll('#step_2 label')].forEach(e=>e.innerText.match(new RegExp(name, 'gim') ) ? e.click() : '' ) )

const otvet = getCapOtv(captchaId1, captchaId2, captchaId2); //3 потока =)
alert('КАПТЧА РАСПОЗНАНА:\n' + otvet);

// run("C:\\enter.exe") // имитация enter

nextPage() // <-- кнопка Продолжить

//Сведения о физическом лице (индивидуальном предпринимателе):
iim(`
	${ faster() }
	EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(2)>DIV:nth-of-type(3)>DIV>INPUT" BUTTON=0
	EVENTS TYPE=KEYPRESS SELECTOR="#step_3>FIELDSET:nth-of-type(2)>DIV:nth-of-type(3)>DIV>INPUT" CHARS="${ogrn}"
	EVENTS TYPE=KEYPRESS SELECTOR="#step_3>FIELDSET:nth-of-type(2)>DIV:nth-of-type(4)>DIV>INPUT" CHARS="${inn}"
`)

//Адрес электронной почты:
iim(` ${ faster() } TAG POS=1 TYPE=INPUT:TEXT FORM=ID:form_element ATTR=ID:declarant-emailaddress CONTENT=${email}`)

//согласия на условия
iim(`
	EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(7)>DIV>DIV>LABEL" BUTTON=0
	EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(7)>DIV:nth-of-type(2)>DIV>LABEL" BUTTON=0
	EVENT TYPE=CLICK SELECTOR="#step_3>FIELDSET:nth-of-type(7)>DIV:nth-of-type(3)>DIV>LABEL" BUTTON=0
`)

//тут КАПТЧА!!!!!!!!!!!!!
wait(10);
//КАПТЧА!!!!!!!!!!!!!

//далее:
iim('TAG POS=1 TYPE=A ATTR=ID:button_next')



/* *** ***
 *** 	FUNCTIONs declaration
 *** *** */

function postCap(apiKeyRecaptcha, base64) {
	cc = Components.classes, ci = Components.interfaces;
	var data = "method=base64" + "&key=" + apiKeyRecaptcha + "&body=" + encodeURIComponent(base64);
	var x = cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
	x.open('POST', 'http://rucaptcha.com/in.php', false);
	x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	x.send(data);
	x.responseText == `ERROR_NO_SLOT_AVAILABLE` ? alert('Все работники антикаптчи заняты! Мб поможет повышение цен;)') : "";
	var captchaId = x.response.split('|')[1];
	console.log(captchaId);
	iimD(captchaId);
	console.log(x)
	return captchaId;
}

function getCapOtv(...capId) {
	for (var i = 0; i <= 60; i++) {
		for (capNum = 0; capNum < capId.length; capNum++) {
			x.open("GET", "http://rucaptcha.com/res.php?key=" + apiKeyRecaptcha + "&action=get&id=" + capId[capNum], false);
			x.send();
			var resp = x.response;
			cc = capId.map((x, ii) => {
				if (capNum == ii) {
					return `\n[capId${ii}] ${x} -> ${resp} (цикл: ${i})`;
				} else {
					return `\ncapIdn${ii}: ${x}  (цикл: ${i})`;
				}
			})
			iimD(cc);
			if (resp.indexOf('ERROR') != -1) {
				return "ERROR"
			}
			if (resp.indexOf('OK') != -1) {
				var cap = resp.split('|')[1];
				return cap
			} else {
				wait(1);
			}
		}
	}
}



function wait(s){iim('WAIT SECONDS=' + s)}

function run(prog) {
	var prgpath = prog;
	var args = ['-n', '6', 'google.com'];
	var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	file.initWithPath(prgpath);
	var process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
	process.init(file);
	process.run(false, args, args.length)
}

function iimD(...txt) {iimDisplay(`${дата()}:\n${txt.reduce((sum, cur) => { return sum + '\n' + cur })}\n${timing()}`);}
function iim(e) {return iimPlayCode(e)}
function location() { return window.location }
function setInterval() { return window.setInterval }
function setTimeout() { return window.setTimeout }
function document() { return window.document }
function console(e) {return window.console(e)}
/*для таймера*/
function diff() {return (new Date() - start) / 1000};
function дата() {const d = new Date(), day=d.getDate(),month = d.getMonth() + 1,year = d.getFullYear();return d.toLocaleString().replace(",	", "	")};
function timing() {return 'Затрачено времени: ' + Math.floor(diff() / 3600) + 'ч:' + (Math.floor(diff() / 60) - (Math.floor(diff() / 3600) * 60)) + 'м:' + Math.round(diff() % 60) + 'с';};
function faster() {/*игнор ошибок + шаг меж командами - 0 сек*/return '\n SET !ERRORIGNORE YES \n SET !TIMEOUT_STEP 0 \n '}

/* функция для определния индекса округа*/
function getIndex(name, selector) {

	let index;
	[...window.document.querySelectorAll(selector)].forEach(e => {
		if (e.innerText.match(new RegExp(name, 'gim'))) {
			index = e.getAttribute('data-option-array-index')
		}
		if(index) return index
 	})
	return index
	/*
	=либо - вот индексы, можно руками подставить! (!) список появляется после клика по этому полю(!)
	<ul class="chosen-results" style="overflow: hidden;" tabindex="5000"><li class="active-result" data-option-array-index="0">Выберите округ</li><li class="active-result" data-option-array-index="1">Восточный административный округ</li><li class="active-result" data-option-array-index="2">Западный административный округ</li><li class="active-result" data-option-array-index="3">Зеленоградский административный округ</li><li class="active-result" data-option-array-index="4">Новомосковский административный округ</li><li class="active-result" data-option-array-index="5">Северный административный округ</li><li class="active-result" data-option-array-index="6">Северо-Восточный административный округ</li><li class="active-result" data-option-array-index="7">Северо-Западный административный округ</li><li class="active-result" data-option-array-index="8">Троицкий административный округ</li><li class="active-result" data-option-array-index="9">Центральный административный округ</li><li class="active-result result-selected" data-option-array-index="10">Юго-Восточный административный округ</li><li class="active-result" data-option-array-index="11">Юго-Западный административный округ</li><li class="active-result" data-option-array-index="12">Южный административный округ</li></ul>
	*/
	///хотя - нет ! фиговая идея с руками, районы - н-мерные;
}

function nextPage() {iim(`EVENT TYPE=CLICK SELECTOR="#button_next" BUTTON=0`)}