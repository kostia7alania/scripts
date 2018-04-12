//удаление ВСЕЪ объяв;
var start = new Date();
iimDisplay('=запускаем удаление всех объяв на АВИТО;')
iimPlayCode(`
SET !ERRORIGNORE YES
url goto=m.avito.ru/profile/
TAG POS=1 TYPE=DIV ATTR=CLASS:status-header<SP>status-old extract=txt
`)
try{
s=iimGetLastExtract(1); s=s.split('(')[1]; s=s.split(')')[0];
for(i=1;i<s;i++)
{   var diff = (new Date() - start)/1000
    iimDisplay('Удаление всех объяв на АВИТО; #'+i+'('+s+'); Затрачено времени: '+Math.floor(diff/3600)+' : '+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+' : '+diff % 60)
    iimPlayCode(`TAG POS=1 TYPE=A ATTR=HREF:https://m.avito.ru/profile/item/*
    TAG POS=1 TYPE=A ATTR=TXT:Удалить<SP>навсегда
    TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=NAME:yes`)
}
var diff = (new Date() - start)/1000
iimDisplay('Удаление всех объяв на АВИТО; Удалили объяв = '+s+'; Затрачено времени: '+Math.floor(diff/3600)+' : '+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+' : '+diff % 60)
} catch (r) {
var diff = (new Date() - start)/1000
iimDisplay('Удаление всех объяв на АВИТО; =НЕЧЕГО было УДАЛЯТЬ!; Затрачено времени: '+Math.floor(diff/3600)+' : '+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+' : '+diff % 60)
}