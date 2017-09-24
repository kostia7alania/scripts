//var age = prompt('Надпись в алерте;', " УДАЛЯЕМОЕ СЛОВО 1 1 2 3 4 5 6");
//age=age.replace(/\УДАЛЯЕМОЕ СЛОВО 1/g, "")  
//alert(age)
//age=age.replace(/\s+/g, "") //удалит все пробелы из нашей строки
//alert(age)
//age = parseInt(age)
//alert(age)

var change_ip;
change_ip = (`
'=========== МЕНЯЕМ ИП = GO в роутер:
SET !ERRORIGNORE YES
URL GOTO=192.168.1.1/#broadband.globals
wait seconds=1
TAG POS=1 TYPE=TD ATTR=TXT:Internet
wait seconds=1
TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=NO
TAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit
wait seconds=1
TAG POS=1 TYPE=TD ATTR=TXT:Internet
wait seconds=1
TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled 
TAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit
'айпи успешно сменен, идем дальше:
'логирование айпи: 
wait seconds=1
TAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT
`);

var change_browser_id = (`
SET !REPLAYSPEED FAST 
'=========== смена юзерагента:
CMDLINE !DATASOURCE useragents.txt
'количество колонок в этом файле:
SET !DATASOURCE_COLUMNS 1 
SET s EVAL("var s=Math.floor(Math.random()*999 + 1); s;")
SET !DATASOURCE_LINE {{s}}
SET !USERAGENT {{!COL1}}
SET !EXTRACT {{!COL1}}
`);

//передача  переменной в  iim:
//iimSet("a",a);
iimPlayCode(change_browser_id);
var browser_id = iimGetLastExtract(1);
iimDisplay("Наш браузерИД = "+browser_id);

iimPlay(`CODE:
ONLOGIN USER=admin PASSWORD=admin 
URL GOTO=192.168.1.1
URL GOTO=192.168.1.1/#broadband.globals
TAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT
`);
var ip1 = ip2 = iimGetLastExtract(1);
while ((ip1 == ip2))
{
alert("Вот такая фигня в начале цикла:"+(ip1 == ip2));
alert("ДО ПОПЫТКИ СМЕНИТЬ АЙПИ2: ip1 = "+ip1+"; ip2 = "+ip2+"; Gетлэст экстракт: "+iimGetLastExtract(1));
iimPlayCode(change_ip);
var ip2 = iimGetLastExtract(1);
alert("ПОСЛЕ ПОПЫТКИ СМЕНИТЬ АЙПИ2: ip1 = "+ip1+"; ip2 = "+ip2);
iimDisplay("попытались поменять айпи. Старый айпи:"+ip1+"; Новый: "+ip2);
}



alert("после цикла ip1 = "+ip1);
alert("после цикла ip2 = "+ip2);
alert("после цикла:\n ip1 = "+ip1+"\n ip2 = "+ip2+"\nвсе вместе = "+iimGetLastExtract(0));
