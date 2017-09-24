iimPlayCode('clear')
try {
var modemKostia = ('SET !REPLAYSPEED medium\n SET !TIMEOUT_STEP 55\nSET !EXTRACT NULL\n ONLOGIN USER=admin PASSWORD=admin\n URL GOTO=192.168.1.1\n URL GOTO=192.168.1.1\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\n URL GOTO=http://192.168.1.1/#broadband.globals\nwait seconds=2\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=NO\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nwait seconds=2\n URL GOTO=http://192.168.1.1/#broadband.globals\n wait seconds=2\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=5\nTAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:editor ATTR=ID:editor_enabled CONTENT=YES\nTAG POS=1 TYPE=BUTTON FORM=ID:editor ATTR=ID:editor_submit\nwait seconds=21\nTAG POS=1 TYPE=TD ATTR=CLASS:td_address EXTRACT=TXT')
function testModem1(ip1){x=ip1.split('.')[0]; y=ip1.split('.')[1]; ip1=x+"."+y; return ip1};
function testModem2(ip2){x=ip2.split('.')[0];y=ip2.split('.')[1]; ip2=x+"."+y; return ip2};
do{ iimPlayCode(modemKostia);ip1=iimGetLastExtract(1);ip2=iimGetLastExtract(2)} while((testModem1(ip1)==testModem2(ip2))||(testModem2(ip2)=="#EANF#"))
iimDisplay("айпи сменили; ип1: "+ip1+"; IP2: "+ip2);	
} catch (r) {
var prgpath="C:\\r.vbs";    // путь до исполняемого файла, не забываем про двойные косые в пути ...
// ... (экранирование обратного слеша "\\" при записи пути до exe-файла в OS Windows)
var args = ['-n','6', 'google.com'];    // аргументы, все разделены пробелом. т.е. строка bla.exe -open "c:\\program files\\ololo\\ololo.txt" ...
// ... будет иметь аргументы var args = ['-open','"c:\\program', 'files\\ololo\\ololo.txt"'];
var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
file.initWithPath(prgpath);
var process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
process.init(file);
process.run(false, args, args.length);
iimPlayCode('wait seconds=60')
}
