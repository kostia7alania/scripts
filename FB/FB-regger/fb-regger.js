VueImacros = {
        papka: '/Users/kostia7bazrov/Library/Mobile Documents/com~apple~CloudDocs/scripts/scripts/fb/regger/',
        useragents: 'useragents.txt',
        proxy: 'proxy.txt',
        logs: 'logs.txt', 
        date() {
            var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")
        },
        timming() {start = typeof start == "undefined" ? new Date() :start; 
            diff=(new Date()-start)/1000; return 'Робот работает: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';
        },
        test(){},
        
};

VueImacros.timming();
console.log(VueImacros.date())

Components.utils.import("resource://gre/modules/osfile.jsm"); // загрузить модуль ОС

var encoder = new window.TextEncoder();
var decoder = new window.TextDecoder(); 
//var array = encoder.encode(`ттекст1 текст2 text text`); // Преобразование текста в массив
//var promise = OS.File.writeAtomic("proxy.txt", array,{tmpPath: "1.txt.tmp"}); // Пишем массив атомарно в файл file.txt, используя временный;
//var promise = OS.File.read(papka+"useragents.txt"); //Прочитать весь файл как массив 
//promise = promise.then(function onSuccess(array) {return decoder.decode(array)  }); // Преобразовать этот массив в текст

const toDisp = (write,...args) => {
    let arr; args.forEach( (e) => arr = arr + e + "\n");
    let out = args.reduce((sum,cur)=>{return cur?sum+'\n'+cur+'':sum},date())+"\n"+timming();           iimDisplay(out);
    let out_line = args.reduce((sum,cur)=>{return cur?sum+' '+cur+' ':sum},date())+'    '+timming();    window.console.log(out_line);
    let TextToLog = out_line;
    (write==1)?OS.File.writeAtomic(papka+logs, encoder.encode(TextToLog)):' '; // записать в блокнот или нет;
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
 

