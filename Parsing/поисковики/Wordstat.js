// БЕЗ АНТИКАПТЧИ

function getRandomInt(min, max){return Math.round(min - 0.5 + Math.random() * (max - min + 1))}
function wait(min,max){iimSet('rand',getRandomInt(min,max));iimPlayCode('wait seconds={{rand}}')}
function копиБоди() {var x = window.document.getElementsByTagName("body")[0].textContent; return x;}
function сохранить (путь,новое) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),новое)}
function перезапись (путь,инфа) { imns.FIO.writeTextFile(imns.FIO.openNode(путь),инфа)}
function loadFile(путь) {return imns.FIO.readTextFile(imns.FIO.openNode(путь))}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}
var iim = iimPlayCode;
function сохранить (путь,новое) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),новое)}

var запросы_путь = "C:\\насобирал_ключи.txt"//сами запросы

var путьСохр = запросы_путь.split('.txt')[0]+'_с частотностями.txt'
перезапись(путьСохр,'ключи	в""	в "" и !')
var запрос = loadFile(запросы_путь).split('\n')
  
	for(i=0;i<запрос.length;i++){
			var строка = запрос[i].replace(/\n/,"!") 
			do {var строка = строка.replace('  ',' ')} while(строка.search('  ')!=-1)
			iimSet('url',строка);
			iim('URL GOTO=https://wordstat.yandex.ru/#!/?words="{{url}}"')
			wait(5,11);
			iim('TAG POS=5 TYPE=DIV ATTR=TXT:*месяц* extract=txt')
			var просмотры1 = iimGetLastExtract(1).replace(/^.*—.(\d{1,15}).*/igm,"$1")
			var строка2 = строка.split(' ')
			var воскл =" "; //очистка!! 
				 
			for(g=0;g<строка2.length;g++){var воскл = воскл+" !"+строка2[g]};
			iimSet('url',воскл)
			iim('URL GOTO=https://wordstat.yandex.ru/#!/?words="{{url}}"')
			wait(5,11);
			iim('TAG POS=5 TYPE=DIV ATTR=TXT:*месяц* extract=txt')
			var просмотры2 = iimGetLastExtract(1).replace(/^.*—.(\d{1,15}).*/igm,"$1")
			var сохр = "\n"+строка.replace(/\r|\n/g, '')+"	"+parseInt(просмотры1)+"	"+parseInt(просмотры2) 
			
			добавитьВКонец(путьСохр,сохр) 
	}
 
 


