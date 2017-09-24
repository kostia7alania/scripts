//инста -комменты: 
for(i=1;i<100;i++){
iimPlayCode(`'URL GOTO=http://bosslike.ru/tasks/instagram/comment
wait seconds=1
TAG POS=1 TYPE=BUTTON ATTR=TXT:*баллов
wait seconds=1`)

iimPlayCode('set !TIMEOUT_STEP 1\n TAG POS=1 TYPE=INPUT ATTR=NAME:taskComment* extract=txt')
var ком = iimGetLastExtract(1)
alert(ком)
if(ком=="#EANF#"){var ком = "=приконА))++;"}

iimSet('ком',ком)
iimPlayCode(`wait seconds=1
TAG POS=1 TYPE=BUTTON ATTR=TXT:Оставить<SP>комментарий
wait seconds=2
TAB T=2
wait seconds=1
TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=* CONTENT={{ком}}
EVENT TYPE=KEYPRESS SELECTOR="HTML>BODY>SPAN>SECTION>MAIN>DIV>DIV>ARTICLE>DIV:nth-of-type(2)>SECTION:nth-of-type(2)>FORM>INPUT" KEY=13
wait seconds=1
wait seconds=1
TAB T=1
tab closeallothers`)}