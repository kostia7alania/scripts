var erorignor;
var erorignor = "code: SET !ERRORIGNORE YES\n SET !ERRORCONTINUE YES\n SET !EXTRACT_TEST_POPUP NO\n TAB CLOSEALLOTHERS\n "

var start;
start = "CODE: SET !REPLAYSPEED FAST\n SET !LOOP 1\n CMDLINE !DATASOURCE logINS.txt\n SET !DATASOURCE_COLUMNS 1\n SET !DATASOURCE_LINE {{!LOOP}}\n SET почта {{!COL1}}\n ";
start+="CMDLINE !DATASOURCE names4reg.txt\n SET !DATASOURCE_COLUMNS 1\n SET !VAR1 EVAL('var s=Math.floor(Math.random()*100 + 1); s;')\n SET !VAR2 EVAL('var s=Math.floor(Math.random()*100 + 1); s;')\n "
start+="SET !DATASOURCE_LINE {{!VAR1}}\n SET имя1 {{!COL1}}\n SET !DATASOURCE_LINE {{!VAR2}}\n SET имя2 {{!COL1}}\n "

var useragent;
useragent = "CODE: CMDLINE !DATASOURCE useragents.txt\n SET !DATASOURCE_COLUMNS 1\n SET bw_id EVAL('var s=Math.floor(Math.random()*147 + 1); s;')\n SET !DATASOURCE_LINE {{bw_id}}\n SET !USERAGENT {{!COL1}}\n ";


var ips;
ips = "CODE:";
ips+="SET !WAITPAGECOMPLETE YES\n SET !TIMEOUT_STEP 6\n SET !TIMEOUT_PAGE 6\n SET !EXTRACT NULL\n clear\n ";
ips+="ONLOGIN USER=admin PASSWORD=admin\n URL GOTO=192.168.1.1\n SET !REPLAYSPEED medium\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\n ";
ips+="wait seconds=5\n TAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT\n ";

iimPlay(ips);
var ip1;
ip1 = iimGetLastExtract(1);

var ips2;
ips2 = "CODE:";
ips2+="TAG POS=1 TYPE=TD ATTR=TXT:Internet\n wait seconds=2\n TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=NO\n ";
ips2+="TAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\n wait seconds=7\n TAG POS=1 TYPE=TD ATTR=TXT:Internet\n wait seconds=2\n TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=YES\n TAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\n ";
ips2="wait seconds=5\n SET !EXTRACT NULL\n TAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT\n ";

iimPlay(ips2);
var ip2;
ip2 = iimGetLastExtract(1);

if (ip1==ip2)
{

var совпадает;
совпадает = "CODE:";
совпадает += "PROMPT мы_в-цикле_СОВПАДАЕТ!!="+iimGetLastExtract(1);

iimPlay(совпадает);
}

else if(ip1!=ip2)
{
var несовпадает;
несовпадает = "CODE:";
несовпадает += "PROMPT не<sp>совпадает!!\n";
iimPlay(несовпадает);
} 
alert('конец');

var reIP;
reIP = "CODE: TAB CLOSEALLOTHERS\n TAB OPEN\n TAB T=2\n TAB CLOSEALLOTHERS\n URL GOTO=192.168.1.1\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\n ";
reIP+="TAG POS=1 TYPE=TD ATTR=TXT:Internet\n TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=YES\n TAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\n wait seconds =7\n ";
 
 
 /*
<!--TAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT
SET new_ip {{!EXTRACT}}
'======срау жжеж обнуляем !экстракт:
SET !EXTRACT NULL

'11111111111111111111111111111111111111111111 = START РЕГИСТРИРУЕМ М.АВИТО:
URL GOTO=https://m.avito.ru/profile/registration?next=%2Fprofile
TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:name CONTENT={{имя1}}
TAG POS=1 TYPE=INPUT:TEL FORM=NAME:NoFormName ATTR=ID:phone CONTENT={{телефон}}
TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=ID:email CONTENT={{почта}}
TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:password CONTENT=kostia22
TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:confirm CONTENT=kostia22

prompt ВВОДИ_КАПЧУ-и-ЖМИ-КОНТИНУЕ_!!


'переходим к КАПЧЕ
FILTER TYPE=IMAGES STATUS=OFF
ONDOWNLOAD FOLDER=C:\ FILE=cap.jpg WAIT=YES
TAG POS=1 TYPE=IMG ATTR=SRC:https://www.avito.ru/captcha?* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT
TAB OPEN
TAB T=2
URL GOTO=http://imacros2.rucaptcha.com/new/
TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:key CONTENT=6440c629b2418bf14c6ca56d0e7e21d0
TAG POS=1 TYPE=INPUT:FILE ATTR=NAME:file CONTENT=C:\cap.jpg
ONDIALOG POS=1 BUTTON=OK CONTENT=
TAG POS=1 TYPE=INPUT:SUBMIT ATTR=*
WAIT SECONDS=35
TAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT
prompt {{!EXTRACT}}
TAB T=1
TAB CLOSEALLOTHERS  
EVENTS TYPE=KEYPRESS SELECTOR="#captcha" CHARS={{!EXTRACT}}
'или так: (если не вставляется)
TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/registration ATTR=ID:captcha CONTENT={{!EXTRACT}}
WAIT SECONDS=20


TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Зарегистрироваться





TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Зарегистрироваться
'РЕГИСТРАЦИЯ. СТРАНИЦА 2:
TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Получить<SP>код
pause
TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Подтвердить

''''    ====    отчет:     ====
'имя1
'имя2
'телефон
'почта
'old_ip
'new_ip
'browser_id
set отчет "#{{!LOOP}}, {{телефон}}, {{почта}}, дата: {{!NOW:ДАТА=dd.mm.yyyy-hh:nn}}, Браузер: {{browser_id}}, старый: {{old_ip}}, новый: {{new_ip}}"
set !EXTRACT {{отчет}}
SAVEAS TYPE=EXTRACT FOLDER=C:\ FILE=otchetREG.txt

-->
 */