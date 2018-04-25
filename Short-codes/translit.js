//2017: Добавил возможность не переводить текст между двумя символами (например []) 

//Пример:

function translit(text, engToRus, replace){
var
rus = "щшчцюяёжъыэабвгдезийклмнопрстуфхь".split(""),
eng = "shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(" ")
for(var x = 0; x < rus.length; x++){
text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());}
if(replace){r = replace.split(",");
try{pr = new RegExp("([^\\"+r[0]+"]+)(?=\\"+r[1]+")","g")
text.match(pr).forEach(function(i){text=text.split(r[0]+i+r[1]).join(translit(i, engToRus ? "" : true))})}catch(e){}} return text;}

//с английского на русский 
alert(translit("text", true))
//тоже самое, но без перевода того, что написано в [ ]
alert(translit("text [text]", true, "[,]"))
//с русского на английский
alert(translit("текст"))
//тоже самое, но без перевода того, что написано в {[} {]}
alert(translit("текст {[}текст{]}", true, "{[},{]}"))