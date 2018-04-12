var kolichestvo = 30;
for (j=1;j<=kolichestvo;j++){
for (i=1;i<=5;i++) {
//генератор случайных логинов из 8 символов
var malenkie = "szxcvbnmasdfdghjklqcdjfpamzxvwuxnsjfnkdjfhdjpolqerwtasdzhzxpdnsdrtyuiop";
var stroka = ""; for (k=1;k<=8;k++){var m = Math.floor(Math.random() * 70); stroka += malenkie.substr(m,1);}

var mailreg;
mailreg = "CODE:SET !ERRORIGNORE YES" + "\n";
mailreg += "SET !TIMEOUT 60" + "\n";
mailreg += "CLEAR" + "\n";
mailreg += "URL GOTO=https://m.mail.ru/cgi-bin/signup" + "\n";
//mailreg += "SET !REPLAYSPEED SLOW" + "\n";
mailreg += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:reg ATTR=TYPE:ID:Username CONTENT=" + stroka + "\n";
//mailreg += "SET !REPLAYSPEED FAST" + "\n";
mailreg += "TAG POS=2 TYPE=INPUT:TEXT FORM=ACTION:reg ATTR=TYPE:ID:id-x_* CONTENT=X" + "\n";
mailreg += "TAG POS=3 TYPE=INPUT:TEXT FORM=ACTION:reg ATTR=TYPE:ID:id-x_* CONTENT=Y" + "\n";
mailreg += "TAG POS=1 TYPE=INPUT:RADIO FORM=ACTION:reg ATTR=TYPE:radio&&VALUE:1" + "\n";
mailreg += "TAG POS=1 TYPE=INPUT:NUMBER FORM=ACTION:reg ATTR=TYPE:number&&PLACEHOLDER:ДД&&SIZE:2&&VALUE:&&NAME:x_*&&CLASS:birthday&&STEP:1&&MAX:31&&MIN:1 CONTENT=5" + "\n";
mailreg += "TAG POS=1 TYPE=SELECT FORM=ACTION:reg ATTR=NAME:BirthMonth CONTENT=%4" + "\n";
mailreg += "TAG POS=1 TYPE=INPUT:NUMBER FORM=ACTION:reg ATTR=TYPE:number&&PLACEHOLDER:ГГГГ&&SIZE:4&&VALUE:&&NAME:x_*&&CLASS:birthyear&&STEP:1&&MAX:2016&&MIN:1910 CONTENT=1996" + "\n";
mailreg += "WAIT SECONDS=2" + "\n";
//шаг второй
mailreg += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:reg ATTR=TYPE:submit&&VALUE:Далее" + "\n";
mailreg += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:reg ATTR=TYPE:text&&VALUE:&&NAME:x_*&&MAXLENGTH:40&&AUTOCOMPLETE:off&&ID:password&&TABINDEX:1 CONTENT=A1234567" + "\n";
mailreg += "TAG POS=1 TYPE=BUTTON FORM=ACTION:reg ATTR=VALUE:2&&NAME:RegStep&&TABINDEX:3&&CLASS:button-next" + "\n";
//шаг третий, распознавание капчи
iimPlay(mailreg);
iimPlay("D:\\Documents\\iMacros\\Macros\\capcha-m-mail.iim",60);

var gotovo;
gotovo = "CODE:";
gotovo += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:reg ATTR=TYPE:submit&&VALUE:Создать<SP>почту" + "\n";
iimPlay(gotovo);

//удаление сообщения из почты
var delmessage;
delmessage = "CODE:";
delmessage += "TAG POS=1 TYPE=SPAN ATTR=CLASS:folder" + "\n";
delmessage += "TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:m_form ATTR=TYPE:checkbox&&CLASS:js-messageline-checkbox&&VALUE:*&&NAME:id&&ID:msg_* CONTENT=YES" + "\n";
delmessage += "TAG POS=1 TYPE=BUTTON FORM=ID:m_form ATTR=TITLE:Удалить&&NAME:remove&&TYPE:submit&&CLASS:button-wrapper" + "\n";
iimPlay(delmessage);

//сохранение емайла в файл maili.txt в папку Datasourse
var datsave;
datsave = "CODE:SET !EXTRACT_TEST_POPUP NO" + "\n";
datsave += "SET !EXTRACT NULL" + "\n";
datsave += "TAG POS=1 TYPE=A ATTR=CLASS:footer__link<SP>footer__link_current&&HREF:/folders/ EXTRACT=TXT" + "\n";
datsave += "SAVEAS TYPE=EXTRACT FOLDER=D:\\Documents\\iMacros\\Datasources FILE=m-maili.txt" + "\n";
datsave += "WAIT SECONDS=5" + "\n";
iimPlay(datsave);
}

var saves;
saves = "CODE:";
saves += "SAVEAS TYPE=TXT FOLDER=C:\\CAPCH FILE=dat.txt" + "\n";
saves += "WAIT SECONDS=40" + "\n";
iimPlay(saves);
}
