//функция -просто показывает -скок выполняется прога:
var start = new Date();
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
iimPlayCode(`URL GOTO=2ip.ru`)
//подсчет кол-ва проксей:
 for(g=1;g<1000;g++) {iimSet('g',g); iimPlayCode(`SET !REPLAYSPEED FAST\n CMDLINE !DATASOURCE proxy.txt\n SET !DATASOURCE_LINE {{g}}\n SET !EXTRACT {{!COL1}}`)
	iimDisplay("Считаем кол-во проксей #"+g+timming()); //статус работы;
	if(iimGetLastExtract(1)==null){g--; break;};};

for(i=226;i<g;i++)
{	iimPlayCode(`SET !EXTRACT {{!URLCURRENT}}`) //проверка -- не увела ли нас прокси с етого сайта куда-то;
 	if(iimGetLastExtract(1)!="http://jatomi.ru/journal/golos.php")
	{	iimPlayCode(`URL GOTO=http://jatomi.ru/journal/golos.php
		  SET !REPLAYSPEED MEDIUM
		  EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>FORM>DIV>INPUT" BUTTON=0
		EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>FORM>INPUT" BUTTON=0`);
	}
	else 
	{iimSet('i',i); iimPlayCode(`SET !REPLAYSPEED FAST
		SET !TIMEOUT_PAGE 1
		SET !ERRORIGNORE YES
			CMDLINE !DATASOURCE useragents.txt
			SET !DATASOURCE_LINE {{i}}
			SET !USERAGENT {{!COL1}}
				SET !DATASOURCE proxy.txt
				SET !DATASOURCE_LINE {{i}}
		  PROXY ADDRESS={{!COL1}}
		  CLEAR
		ONDIALOG POS=1 BUTTON=OK CONTENT=
		REFRESH
		REFRESH
		REFRESH
		wait seconds=5`)
	}
	iimDisplay("Прокси №"+i+timming()); //статус работы;
}