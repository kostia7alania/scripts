function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл)).split('\n')}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  

iim=iimPlayCode;
var прокси=читать("C:\\Imacros\\Regmail\\proxy.txt");		// все тхт в utf-8;
var Телефон=читать("C:\\Imacros\\Regmail\\mail.txt");		// все тхт в utf-8;
var Имя = читать("C:\\Imacros\\Regmail\\names.txt");						 
var Имя_пользователя_пароль=читать("C:\\Imacros\\Regmail\\logins.txt");
var юзерагент = "C:\\Imacros\\Regmail\\useragent.txt";
var путь_Сохр = "C:\\Imacros\\Regmail\\finished.txt";	       // должна существовать; формат: login:password;ip:port

for(i=0;i<Телефон.length;i++){
	
	var прокси_ип=прокси[i].split(':')[0];
	var прокси_порт=прокси[i].split(':')[1];
	var тел = Телефон[i];
	var имя = Имя[i];
	var имя_пользователя = Имя_пользователя_пароль[i].split(':')[0];
	var пароль = Имя_пользователя_пароль[i].split(':')[1];
	var useragent = юзерагент[i];
	iimSet('прокси_ип',прокси_ип); 
	iimSet('прокси_порт',прокси_порт);
	iimSet('тел',тел);
	iimSet('имя',имя);
	iimSet('имя_пользователя',имя_пользователя);
	iimSet('пароль',пароль);
	iimSet('useragent',useragent);
	iim(`
	SET !USERAGENT {{useragent}}
	PROXY ADDRESS={{прокси_ип}}:{{прокси_порт}}
	clear 
	url goto=https://www.instagram.com/

	TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=NAME:emailOrPhone CONTENT={{тел}}
	TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=NAME:fullName CONTENT={{имя}}
	TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=NAME:username CONTENT={{имя_пользователя}}
	TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=NAME:password CONTENT={{пароль}}

	EVENT TYPE=CLICK SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV:nth-of-type(2)>INPUT" BUTTON=0
	EVENTS TYPE=KEYPRESS SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV:nth-of-type(2)>INPUT" CHARS={{тел}}
	EVENT TYPE=KEYPRESS SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV:nth-of-type(2)>INPUT" KEY=9
	EVENTS TYPE=KEYPRESS SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV:nth-of-type(3)>INPUT" CHARS={{имя}}
	EVENT TYPE=KEYPRESS SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV:nth-of-type(3)>INPUT" KEY=9
	EVENTS TYPE=KEYPRESS SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV:nth-of-type(4)>INPUT" CHARS={{имя_пользователя}}
	EVENTS TYPE=KEYPRESS SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV:nth-of-type(4)>INPUT" KEYS="[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]"
	EVENTS TYPE=KEYPRESS SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV:nth-of-type(4)>INPUT" KEYS="[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]"
	EVENTS TYPE=KEYPRESS SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV:nth-of-type(4)>INPUT" CHARS={{имя_пользователя}}
	EVENT TYPE=KEYPRESS SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV:nth-of-type(4)>INPUT" KEY=9
	EVENT TYPE=KEYPRESS SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV:nth-of-type(4)>DIV>A" KEY=9
	EVENTS TYPE=KEYPRESS SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV:nth-of-type(5)>INPUT" CHARS={{пароль}}

	TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=NAME:emailOrPhone CONTENT={{тел}}
	TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=NAME:fullName CONTENT={{имя}}
	TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=NAME:username CONTENT={{имя_пользователя}}
	TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=NAME:password CONTENT={{пароль}}


	EVENT TYPE=CLICK SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV:nth-of-type(6)>SPAN>BUTTON" BUTTON=0
	EVENT TYPE=CLICK SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV>INPUT" BUTTON=0
	EVENTS TYPE=KEYPRESS SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV>INPUT" CHARS="3333333"
	
	wait seconds=10
	EVENT TYPE=CLICK SELECTOR="#react-root>SECTION>MAIN>ARTICLE>DIV:nth-of-type(2)>DIV>DIV>FORM>SPAN>BUTTON" BUTTON=0
	
	url goto=https://instagram.com/accounts/logout
	`)
	var результат = String(имя_пользователя+":"+пароль.substring(0, пароль.length - 1)+";"+прокси_ип+":"+прокси_порт);
	добавитьВКонец(путь_Сохр,результат)
}