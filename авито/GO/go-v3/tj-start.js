var start = new Date(); var diff = new Date() - start; iimPlayCode("TAB CLOSEALLOTHERS\n tab open\ntab open")
var имяПроекта="tj"
//запись в промежуточные файлы:
iimSet('имяПроекта',имяПроекта);
iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !EXTRACT {{имяПроекта}}\nFILEDELETE NAME=C:\\авито-переменные\\имяПроекта.txt\nSAVEAS TYPE=EXTRACT FOLDER=C:\\авито-переменные FILE=имяПроекта.txt')

iimDisplay("УСЕ!gooooooo=Код выполняется уже: " + diff/1000+" секунд; передаем управление реге!;") 
iimPlayCode("URL GOTO=imacros://run/?m=go-v3\\engine.js")

//на всякий случай:
//var пароль = "kostia22"
//var smsRegApiKey = "tzvlyyu22ooy8osnlbxbta97gx2g87lt"
//iimSet('пароль',пароль);
//iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !EXTRACT {{пароль}}\nFILEDELETE NAME=C:\\авито-переменные\\пароль.txt\nSAVEAS TYPE=EXTRACT FOLDER=C:\\авито-переменные FILE=пароль.txt')
//iimSet('smsRegApiKey',smsRegApiKey);
//iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES\nSET !EXTRACT {{smsRegApiKey}}\nFILEDELETE NAME=C:\\авито-переменные\\smsRegApiKey.txt\nSAVEAS TYPE=EXTRACT FOLDER=C:\\авито-переменные FILE=smsRegApiKey.txt')