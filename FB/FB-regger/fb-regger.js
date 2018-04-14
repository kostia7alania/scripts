const setInterval = window.setInterval,
      console = window.console,
      encoder = new window.TextEncoder(),
      decoder = new window.TextDecoder();
Components.utils.import("resource://gre/modules/osfile.jsm"); // загрузить модуль ОС


//осуждение => https://vk.com/topic-125614288_35041402 
//проверено на FF45 - на этой сборке :: vk.com/imacros_javascript
//=> функция для снятия прокси:
uP=() => {Components.utils.import("resource://gre/modules/Services.jsm");Services.prefs.setIntPref("network.proxy.type",0)} 
//=> функция для постановки прокси:
P=(ip,port,login,pass)=>{
 	Components.utils.import("resource://gre/modules/Services.jsm");
 	Services.prefs.setIntPref("network.proxy.type",1);
 	Services.prefs.setCharPref("network.proxy.http",ip);
 	Services.prefs.setIntPref("network.proxy.http_port",port);
 	base64_encode=(data)=>{/*инфа про base тут => bit.ly/2rnFVdQ*/
 		var prefs=Components.classes["@mozilla.org/preferences-service;1"] /*vk.com/club34749892 видимо))*/
 		.getService(Components.interfaces.nsIPrefBranch),
 		b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o1,o2,o3,h1,h2,h3,h4,bits,i=0,enc='';
 		do{ o1=data.charCodeAt(i++);
 			o2=data.charCodeAt(i++);
 			o3=data.charCodeAt(i++);
 			bits=o1<<16|o2<<8|o3;
 			h1=bits>>18&0x3f;
 			h2=bits>>12&0x3f;
 			h3=bits>>6&0x3f;
 			h4=bits&0x3f;
 			enc+=b64.charAt(h1)+b64.charAt(h2)+b64.charAt(h3)+b64.charAt(h4);
 		}
 		while(i<data.length);
 		switch(data.length%3){case 1:enc=enc.slice(0,-2)+'==';break;case 2:enc=enc
 			.slice(0,-1)+'=';break
 		}
 			window.console.log("enc>"+enc);
 		prefs.setCharPref("extensions.closeproxyauth.authtoken",enc); // для глючного closeproxyauth
 		prefs.setCharPref("extensions.proxyauth.authtoken"     ,enc); // для нормального proxyauth=>качать тут=> mzl.la/2EXNgmn
 		return
 	}
 	base64_encode(login+':'+pass);
 	//запасной вариант: и если не будет пахать, то вот ето еще точно поможет=>iimPlayCode(`ONLOGIN USER=${login} PASSWORD=${pass}\nURL GOTO=2ip.ru`);
	var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService); 
	var a = pref.getBranch("network.proxy."); 
	a.setCharPref("http",  ip); 
	a.setCharPref("ssl",   ip); 
	a.setCharPref("ftp",   ip); 
	a.setCharPref("socks", ip);
	a.setIntPref( "http_port", port); 
	a.setIntPref(  "ssl_port", port); 
	a.setIntPref(  "ftp_port", port); 
	a.setIntPref("socks_port", port);  
	a.setIntPref("type", 1);
	 //так можно почитать че в настройках сейчас установлено (i.e.about:config):
	var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch); 
	var myPrx = prefs.getCharPref("network.proxy.http"); 
	var myPrt = prefs.getIntPref("network.proxy.http_port");
 }




var datas = {
    papka: "C:/imacros/scripts/FB/FB-regger/",
    useragents: "useragents.txt",
    proxy: "proxy.txt",
    names: "names.txt",
    surnames: "surnames.txt",
    logs: "logs.txt",
    created: "created_accs.txt",
    start_proxy: 0
};
var VueImacros = window.VueImacros = {
        data: datas,
        date() {
            var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")
        },
        timming() {start = typeof start == "undefined" ? new Date() :start; 
            diff=(new Date()-start)/1000; return 'Робот работает: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';
        },
        toDisp(...args) {
            var predefVars = [this.data.proxy,this.data.papka];
            Array.prototype.push.apply(args, predefVars);
            let arr; args.forEach( (e) => arr += e + "\n");
            let out = args.reduce((sum,cur)=>{return cur?sum+'\n'+cur+'':sum},this.date())+"\n"+this.timming();
            typeof iimDisplay == "function" ?iimDisplay(out):window.console.log(out);
        },
        toDispInfinity() {setInterval(()=>{ this.toDisp(); },1000)},
        toLog(...args){
            let out_line = args.reduce((sum,cur)=>{return cur?sum+' '+cur+' ':sum},this.date())+'    '+this.timming();
            let TextToLog = out_line;
            OS.File.writeAtomic(this.data.papka + this.data.logs, encoder.encode(TextToLog));
        },
        readProxy(){return OS.File.read(this.data.papka + this.data.proxy)
            .then( (array) => {
                this.proxies = this.proxies?this.proxies:decoder.decode(array).split("\n");
                this.data.start_proxy++; 
                console.log('Выполнился setNextProxy')
            })
            },
        run() {
            console.log('начало рун');
            let [prox_ip, prox_port, prox_log, prox_pas] = this.proxies[this.data.start_proxy].split(":"); //распаковка;
             uP(); //снять прокси
             P(prox_ip, prox_port, prox_log, prox_pas); //установить прокси;
             iimPlayCode(`url goto=2ip.ru`);
		/*	iim(`ONLOGIN USER={{prox_login}} PASSWORD={{prox_pass}} \n SET !USERAGENT {{useragent}} \n clear 
			set !ReplaySpeed medium \n url goto=mail.ru
			TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:Auth ATTR=NAME:Login CONTENT={{логин}}			 
			TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:Auth ATTR=NAME:Password CONTENT={{пароль}}	 
			TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:Auth ATTR=*`); //клик по войти
			ждем(6)
            var бракованныйАкк = 0;*/
            
                console.log('Выполнился run')
        }
};

//VueImacros.toDispInfinity()
VueImacros.timming();
console.log(window.VueImacros.date())
VueImacros.toLog(1, 2, 3);
VueImacros.toDisp(1, 2, 3)
VueImacros.readProxy().then(()=>{
    console.log(VueImacros.run());
})
 




//var array = encoder.encode(`ттекст1 текст2 text text`); // Преобразование текста в массив
//var promise = OS.File.writeAtomic("proxy.txt", array,{tmpPath: "1.txt.tmp"}); // Пишем массив атомарно в файл file.txt, используя временный;
//var promise = OS.File.read(papka+"useragents.txt"); //Прочитать весь файл как массив 
//promise = promise.then(function onSuccess(array) {return decoder.decode(array)  }); // Преобразовать этот массив в текст
 
/*
const data = [];
OS.File.read(papka+useragents).then(function onSuccess(array) {let arr = decoder.decode(array).split('\n'); data.useragents = arr;});
OS.File.read(papka+proxy).then(function onSuccess(array) {let arr = decoder.decode(array).split('\n'); data.proxy = arr;});

window.setTimeout(()=>{ 
    toDisp(
        "UserAgents: "+data.useragents.length,
        "Proxys: "+data.proxy.length
    );
}, 491)

*/
 

