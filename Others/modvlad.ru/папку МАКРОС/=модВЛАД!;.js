var start = new Date(); 


накручено="=покаХЗ!;"
for(i=12;i<500;i++)
{
iimSet('i',i);
try {

iimPlayCode(`
set !REPLAYSPEED FAST
set !LOOP 2
SET !ERRORIGNORE YES
SET юзерагент EVAL("var randomNumber=Math.floor(Math.random()*(567-1+1)+1); randomNumber;")
					CMDLINE !DATASOURCE useragents.txt
					SET !DATASOURCE_LINE {{юзерагент}}
					SET !USERAGENT {{!COL1}}
CLEAR
CMDLINE !DATASOURCE proxy.txt 
SET !DATASOURCE_LINE {{i}}
PROXY ADDRESS={{!COL1}}
SET !TIMEOUT_PAGE 9
url goto=http://modvlad.ru/baby_vote/lists/comments1/
SET !TIMEOUT_PAGE 21
url goto=http://modvlad.ru/baby_vote/lists/comments1/
wait seconds=2
TAG POS=1 TYPE=INPUT:RADIO FORM=ACTION:/baby_vote/lists/comments1/ ATTR=TYPE:radio&&NAME:v[radio_368_368]&&VALUE:3086
TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/baby_vote/lists/comments1/ ATTR=TYPE:submit&&ID:progol&&VALUE:Проголосовать
`)
внутренности=window.document.getElementsByTagName("body")[0].textContent;
if(внутренности.search( /принят/ )!=-1) {
iimPlayCode(`
set !REPLAYSPEED FAST
CMDLINE !DATASOURCE modVladStat.txt
SET !DATASOURCE_LINE 1
set counter {{!COL1}}
ADD counter 1
SET !EXTRACT {{counter}}
FILEDELETE NAME=C:\\Users\\user\\OneDrive\\imacros\\Datasources\\modVladStat.txt
SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\user\\OneDrive\\imacros\\Datasources FILE=modVladStat.txt
SET !EXTRACT {{counter}}
`)
var накручено=iimGetLastExtract(1)
}
var diff = new Date() - start;
iimDisplay('Накручено голосов: '+накручено+'. Всего проксей использовано уже: '+i+'. Скрипт выполняется уже'+diff\1000+' сек;');
} catch (r) {
}
}
