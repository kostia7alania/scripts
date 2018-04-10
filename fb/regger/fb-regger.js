var papka = '/Users/kostia7bazrov/Library/Mobile Documents/com~apple~CloudDocs/scripts/scripts/fb/regger/';
var useragents = 'useragents.txt';
var proxy = 'proxy.txt';
var logs = 'logs.txt';

//переЗАПИСЬ:
Components.utils.import("resource://gre/modules/osfile.jsm"); // загрузить модуль ОС

var encoder = new window.TextEncoder(); //Этот encoder мб переЮзан повторно для нескок операций записи
//var array = encoder.encode(`ттекст1 текст2 text text`); // Преобразование текста в массив
//var promise = OS.File.writeAtomic("proxy.txt", array,{tmpPath: "1.txt.tmp"}); // Пишем массив атомарно в файл file.txt, используя временный;
//alert("Перезаписали(сохранили)");

//Чтение файла из файловой системы:
var decoder = new window.TextDecoder(); // Этот декодер может быть повторно использован для нескольких чтений
//var promise = OS.File.read(papka+"useragents.txt"); //Прочитать весь файл как массив 
//promise = promise.then(function onSuccess(array) {return decoder.decode(array)  }); // Преобразовать этот массив в текст
window.console.log(
    '\n \n OS => ', OS,
    '\n \n OS.Path=> ',OS.Path,
    '\n \n OS.Constants.Path=> ',OS.Constants.Path
)
window.console.log(OS.Constants.Path.homeDir)

var start = new Date();
function timming() {diff=(new Date()-start)/1000; return 'Робот работает в этой сессии: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")}


const toDisp = (...args) => {
    let arr; args.forEach( (e) => arr = arr + e + "\n");
    let out = args.reduce((sum,cur)=>{return cur?sum+'\n'+cur+'':sum},дата())+"\n"+timming();           iimDisplay(out);
    let out_line = args.reduce((sum,cur)=>{return cur?sum+' '+cur+' ':sum},дата())+'    '+timming();    window.console.log(out_line);
    let TextToLog = out_line;
    OS.File.writeAtomic(papka+logs, encoder.encode(TextToLog))
}
const data = [];
OS.File.read(papka+useragents).then(function onSuccess(array) {let arr = decoder.decode(array).split('\n'); data.useragents = arr;});
OS.File.read(papka+proxy).then(function onSuccess(array) {let arr = decoder.decode(array).split('\n'); data.proxy = arr;});

window.setTimeout(()=>{ 
    toDisp(
        "UserAgents: "+data.useragents.length,
        "Proxys: "+data.proxy.length
    );
}, 491)
 

