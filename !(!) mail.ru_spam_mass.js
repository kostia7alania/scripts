iim=iimPlayCode;
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл)).split('\n')}
function читать2(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}
function перезаписать(путь,инфа)   {imns.FIO.writeTextFile (imns.FIO.openNode(путь),инфа)}  
function копиБоди() {try{var x = window.document.getElementsByTagName("body")[0].innerHTML;}catch(e){var x='sex'} return x;}
function randGen(min,max) {return Math.floor(Math.random() * (max - min)) + min;}
var start = new Date();
function timming() {diff=(new Date()-start)/1000; return 'Затрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(",	","	")}
function дата2() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString()}
function ждем(s) {iim('wait seconds='+s)}
function profileDir() {a=Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("ProfD", Components.interfaces.nsIFile).path.split('\\'); return a[a.length-1]}
function randTxt(смс) {if(randGen(1,2)==2){var смс = смс.replace(/a/gm,'а')};if(randGen(1,2)==2){var смс = смс.replace(/e/gm,'e')};if(randGen(1,2)==2){var смс = смс.replace(/y/gm,'у')};if(randGen(1,2)==2){var смс = смс.replace(/c/gm,'с')};if(randGen(1,2)==2){var смс = смс.replace(/B/gm,'В')};if(randGen(1,2)==2){var смс = смс.replace(/p/gm,'р')};if(randGen(1,2)==2){var смс = смс.replace(/C/gm,'C')}; return смс}	// = уникализация текста )); =В
function setProxy(ip,port) {var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);prefs.setIntPref("network.proxy.type", 1);prefs.setBoolPref("network.proxy.share_proxy_settings", true);prefs.setCharPref("network.proxy.http", ip);prefs.setIntPref("network.proxy.http_port", port)}
   
// var текст = предложения[randGen(0,предложения.length)];

var профиль = profileDir();

//НАСТРОЙКИ:
var текст_успех		=	"Ваше письмо отправлено"//текст после отпр sms; У мэила:"Ваше письмо отправлено. Перейти во Входящие"
var тестовыйАкк		=	"osetia-alania@mail.ru";
var прокси_логин	= 	"j8oDu3";
var прокси_пароль	=	"x6rax24EJ2";
var ссылки 			= 	"C:\\MACROS\\user-data\\mail.ru\\ссылки.txt";		// 
var аккаунты 		= 	"C:\\MACROS\\user-data\\mail.ru\\аккаунты\\"+профиль+"-аккаунты.txt";		//1.txt,2.txt,3.txt,...
var отчет 			= 	"C:\\MACROS\\user-data\\mail.ru\\отчеты\\"+профиль+"-отчет.txt";			//1.txt,2.txt,3.txt,...
var текущая_строка 	= 	"C:\\MACROS\\user-data\\mail.ru\\отчеты\\"+профиль+"-текущая-строка.txt";	//1.txt,2.txt,3.txt,...
var база			=	"C:\\MACROS\\user-data\\mail.ru\\базы\\"+профиль+"-база.txt"; 				// почты
var прокси			=	"C:\\MACROS\\user-data\\mail.ru\\прокси\\"+профиль+"-прокси.txt"; 			// прокси
var юзерагенты			=	"C:\\MACROS\\user-data\\mail.ru\\юзерагенты.txt"; 						// юзерагент
var темы			=	"C:\\MACROS\\user-data\\mail.ru\\темы\\"+профиль+"-темы.txt" 				// темы
var тексты			=	"C:\\MACROS\\user-data\\mail.ru\\тексты\\"+профиль+"-тексты.txt" 			// тексты
// var счетчик_акков 	=	"C:\\MACROS\\user-data\\mail.ru\\счетчики\\"+профиль+"-счетчик.txt" 		// счетчик_акков
var валид_база 		=	"C:\\MACROS\\user-data\\mail.ru\\валид_база\\"+профиль+"-валид_база.txt"	// валид_база
var инвалид_база 	=	"C:\\MACROS\\user-data\\mail.ru\\инвалид_база\\"+профиль+"-инвалид_база.txt"// инвалид_база
var валид_акки		=	"C:\\MACROS\\user-data\\mail.ru\\валид_акки\\"+профиль+"-валид_акки.txt"	// валид_акки
var инвалид_акки	=	"C:\\MACROS\\user-data\\mail.ru\\инвалид_акки\\"+профиль+"-инвалид_акки.txt"// инвалид_акки
var скриншоты		=	"C:\\MACROS\\user-data\\mail.ru\\отчеты\\скриншоты\\"	// папка скриншотов
 	
var аккаунты 		=	читать(аккаунты); 				// alert(аккаунты)
var текущая_строка 	= 	читать(текущая_строка);			// alert(текущая_строка)
var база 			=	читать(база); 					// alert(база)
var прокс 			=	читать(прокси); 				// alert(прокс)
var юзерагент 		=	читать(юзерагенты); 			// alert(юзерагент)
// var счетчик_акка 	=	читать2(счетчик_акков); 		// alert(юзерагент)
var тексты 			=	читать2(тексты).split('NEXT') 	// разделитель - NEXT;
var ссылки 			= 	читать(ссылки)

var prx=0; //счетчик прокся
var accs=0; //счетчик акков

for(i=0;i<база.length;i++){
	var текст2 = тексты[randGen(0,тексты.length)];
	var текст = текст2.split('==')[0];
	var анкор = текст2.split('==')[1];
	var ссылка = ссылки[randGen(0,ссылки.length)];
	// var ссылка = "<a href='"+ссылка+"'>"+анкор+"</a>";
	var тема = читать(темы)[randGen(0,читать(темы).length)];
	var почта = база[i].slice(0, -1)
	if(i % 100 == 0){		
		var прокси = прокс[i].split(':')[0];	var порт = прокс[i].split(':')[1];	setProxy(прокси,порт);
		var prx = prx+1; if(prx==prx.length){var prx=0;}	//када закончатся прокси,начинаем сначала;
		do{	// var счетчик 	= Number(счетчик_акка[0].split('=')[1])+1 // так через одно место..));
			// var счетчик	=	Number(счетчик_акка[3])+1 //читаем 3-й символ, ибо чего то один символ с ироглифами читается;)
			// перезаписать(счетчик_акков,счетчик) 			
			// var аккаунт = аккаунты[счетчик].split(':')
			var аккаунт = аккаунты[accs].split(':');
			var accs = accs+1; if(accs==accs.length){var accs=0;}	//када закончатся акки,начинаем сначала;
			iimSet('логин',аккаунт[0]);
			iimSet('пароль',аккаунт[1]);
			var useragent = юзерагент[randGen(0,юзерагент.length)];
			iimSet('useragent',useragent);iimSet('прокси_логин',прокси_логин);iimSet('прокси_пароль',прокси_пароль);
			iim(`ONLOGIN USER={{прокси_логин}} PASSWORD={{прокси_пароль}} \n SET !USERAGENT {{useragent}} \n clear 
			set !ReplaySpeed medium \n url goto=mail.ru
			TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:Auth ATTR=NAME:Login CONTENT={{логин}}			 
			TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:Auth ATTR=NAME:Password CONTENT={{пароль}}	 
			TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:Auth ATTR=*`) //клик по войти
			ждем(6)
			var бракованныйАкк = 0;
			if(window.location.href.search('captcha')>1){
				// alert('капча')
				var бракованныйАкк = "капча";
				добавитьВКонец(инвалид_акки,аккаунт.join(':')+"	"+бракованныйАкк+"\n");
				добавитьВКонец(отчет,дата()+"	"+i+"	"+аккаунт.join(':')+"	"+бракованныйАкк+"	"+почта+"	" + timming()+"\n")
				}
			else{
			if(window.location.href.search('fail')>1){
				// alert('другая ошибка')
				var бракованныйАкк = "другая ошибка";
				добавитьВКонец(инвалид_акки,аккаунт.join(':')+"	"+бракованныйАкк+"\n");
				добавитьВКонец(отчет,дата()+"	"+i+"	"+аккаунт.join(':')+"	"+бракованныйАкк+"	"+почта+"	" + timming()+"\n")
				}
				else{
				if(window.location.href.search('passremind')>1){
					// alert('Заподозрили во взломе акка')
					var бракованныйАкк = "Заподозрили во взломе акка";
					добавитьВКонец(инвалид_акки,аккаунт.join(':')+"	"+бракованныйАкк+"\n");
					добавитьВКонец(отчет,дата()+"	"+i+"	"+аккаунт.join(':')+"	"+бракованныйАкк+"	"+почта+"	" + timming()+"\n")
					} 
				}
			}
			
			
		} while((бракованныйАкк!=0))
		добавитьВКонец(валид_акки,аккаунт[0]+"\n") // добавляем в валидные акки;
	}

	if(i % 10 == 0){
		iimSet('тема',тема)
		iimSet('текст',текст)
		iimSet('ссылка',ссылка);
		iimSet('анкор',анкор);
		iimSet('почта',тестовыйАкк);
		iimSet('useragent',useragent);iimSet('прокси_логин',прокси_логин);iimSet('прокси_пароль',прокси_пароль);
		iim(`ONLOGIN USER={{прокси_логин}} PASSWORD={{прокси_пароль}} \n SET !USERAGENT {{useragent}}
		set !ReplaySpeed medium
		url goto = https://e.mail.ru/messages/inbox/
		TAG POS=1 TYPE=SPAN ATTR=TXT:Написать<SP>письмо
		TAG POS=1 TYPE=TEXTAREA ATTR=WRAP:off&&TABINDEX:4&&DATA-ORIGINAL-NAME:To&&CLASS:js-input<SP>compose__labels__input&&AUTOCOMPLETE:off&&TXT: CONTENT={{почта}}
		TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:Subject CONTENT={{тема}}
		FRAME NAME="toolkit-*composeEditor_ifr_name"
		EVENT TYPE=CLICK SELECTOR="#tinymce" BUTTON=0
		EVENT TYPE=KEYPRESS SELECTOR=#tinymce Char="a" MODIFIERS="ctrl" 
		EVENTS TYPE=KEYPRESS SELECTOR="#tinymce" CHARS={{текст}}<br>
		FRAME F=0
		TAG POS=2 TYPE=SPAN ATTR=TXT:Еще
TAG POS=1 TYPE=SPAN ATTR=TXT:Ссылка
TAG POS=1 TYPE=INPUT:TEXT FORM=ID:mce_23 ATTR=NAME:href CONTENT={{ссылка}}
TAG POS=1 TYPE=INPUT:TEXT FORM=ID:mce_23 ATTR=NAME:title CONTENT={{анкор}}
TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:mce_23 ATTR=ID:mce_26
		TAG POS=1 TYPE=SPAN ATTR=CLASS:b-toolbar__btn__text`)
		ждем(1,2); 	
	}
	
	
		iimSet('тема',тема)
		iimSet('текст',текст)
		iimSet('ссылка',ссылка);
		iimSet('анкор',анкор);
		iimSet('почта',почта);
		iimSet('useragent',useragent);
		iimSet('useragent',useragent);iimSet('прокси_логин',прокси_логин);iimSet('прокси_пароль',прокси_пароль);
		iim(`ONLOGIN USER={{прокси_логин}} PASSWORD={{прокси_пароль}} \n SET !USERAGENT {{useragent}}
		set !ReplaySpeed medium
		url goto = https://e.mail.ru/messages/inbox/
		TAG POS=1 TYPE=SPAN ATTR=TXT:Написать<SP>письмо
		TAG POS=1 TYPE=TEXTAREA ATTR=WRAP:off&&TABINDEX:4&&DATA-ORIGINAL-NAME:To&&CLASS:js-input<SP>compose__labels__input&&AUTOCOMPLETE:off&&TXT: CONTENT={{почта}}
		TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:Subject CONTENT={{тема}}
		FRAME NAME="toolkit-*composeEditor_ifr_name"
		EVENT TYPE=CLICK SELECTOR="#tinymce" BUTTON=0
		EVENT TYPE=KEYPRESS SELECTOR=#tinymce Char="a" MODIFIERS="ctrl" 
		EVENTS TYPE=KEYPRESS SELECTOR="#tinymce" CHARS={{текст}}<br>
		FRAME F=0
		TAG POS=2 TYPE=SPAN ATTR=TXT:Еще
TAG POS=1 TYPE=SPAN ATTR=TXT:Ссылка
TAG POS=1 TYPE=INPUT:TEXT FORM=ID:mce_23 ATTR=NAME:href CONTENT={{ссылка}}
TAG POS=1 TYPE=INPUT:TEXT FORM=ID:mce_23 ATTR=NAME:title CONTENT={{анкор}}
TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:mce_23 ATTR=ID:mce_26
		TAG POS=1 TYPE=SPAN ATTR=CLASS:b-toolbar__btn__text`)

		// ждем(1,2);

		if(копиБоди().search('заблокир')>-1){
			добавитьВКонец(инвалид_база,почта+"\n");
			добавитьВКонец(отчет,дата()+"	"+аккаунт[0]+"	"+i+"	ПОЧТА ЗАБЛОЧЕНА=>	"+почта+"	"+timming()+"\n")
			// alert("почта заблоч  ена")
			}
		else{
			if(iim('TAG POS=2 TYPE=DIV ATTR=TXT:Ваше<SP>письмо<SP>отправлено*')>0){
				// alert('+')
				добавитьВКонец(отчет,дата()+"	"+аккаунт[0]+"	"+i+"	УСПЕШНО ОТПРАВЛЕНО	"+почта+"	"+timming()+"\n")
				}else{
				добавитьВКонец(отчет,дата()+"	"+аккаунт[0]+"	"+i+"	ХЗ почему-то не отправлено!	"+почта+"	"+timming()+"\n")
				iimSet('скриншоты',скриншоты); iimSet('name',профиль+"__"+дата2());
				iim('SCREENSHOT TYPE=BROWSER FOLDER={{скриншоты}} FILE={{name}}')
				// alert('-')
			}
			добавитьВКонец(валид_база,аккаунт[0]+"\n")
			// alert("почта НЕзаблочена")
			}
		ждем(randGen(2,6));
		
	}
	 
		
	 