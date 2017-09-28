var апиКлюч = "6440c629b2418bf14c6ca56d0e7e21d0"

//переЗАПИСЬ:
var saveTextPromise = (сохр_текст,путь) => {
	Components.utils.import("resource://gre/modules/osfile.jsm"); // загрузить модуль ОС
	var encoder = new window.TextEncoder(); //Этот encoder мб переЮзан повторно для нескок операций записи
	var array = encoder.encode(сохр_текст); // Преобразование текста в массив
	var promise = OS.File.writeAtomic(путь, array,{tmpPath: "1.txt.tmp"}); // Пишем массив атомарно в файл file.txt, используя временный;
}

var iim = iimPlayCode, cc=Components.classes, ci=Components.interfaces,
	captcha = (апиКлюч,путь) =>{
	var file = cc["@mozilla.org/file/local;1"].createInstance(ci.nsILocalFile); file.initWithPath(путь);
	var contentType = cc["@mozilla.org/mime;1"].getService(ci.nsIMIMEService).getTypeFromFile(file);
	var inputStream = cc["@mozilla.org/network/file-input-stream;1"].createInstance(ci.nsIFileInputStream); 
	inputStream.init(file, 0x01, 0600, 0);
	var stream = cc["@mozilla.org/binaryinputstream;1"].createInstance(ci.nsIBinaryInputStream);
	stream.setInputStream(inputStream);
	var encoded = window.btoa(stream.readBytes(stream.available()));
	var base64 = "data:" + contentType + ";base64," + encoded;
	var data = 'method=base64' + '&key='+апиКлюч + '&body=' + encodeURIComponent(base64);
	var x = cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
	x.open('POST', 'http://rucaptcha.com/in.php' , false); 
	x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	x.send(data);
	var captchaId = x.responseText.split('|')[1];
	for (var i=1; i<=10; i++) {
		iim('WAIT SECONDS=10');
		x.open('GET', 'http://rucaptcha.com/res.php?key='+апиКлюч+'&action=get&id='+captchaId, false);
		x.send();
		var resp = x.responseText;
		iimDisplay(resp);
		if (resp.indexOf('ERROR')!=-1) {return "ERROR"}
		if (resp.indexOf('OK')!=-1) {var cap = resp.split('|')[1]; return cap}
	}
}

iim('URL GOTO=https://71.мвд.рф/captcha')

try{
	for(i=1500;i<1800;i++){
		iim(`FILTER TYPE=IMAGES STATUS=OFF
		ONDOWNLOAD FOLDER=C:\\full\\RESULTS\\caps\\recog FILE=cap`+i+`.jpg WAIT=YES
		TAG POS=1 TYPE=IMG ATTR=SRC:https://71.мвд.рф/captcha* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT
		refresh`)
		var путьКаптчи = "C:\\full\\RESULTS\\caps\\recog\\cap"+i;
		var каптча = captcha(апиКлюч,путьКаптчи+".jpg");
		saveTextPromise(каптча,путьКаптчи+".txt")
		iim('wait seconds=2')
	}
}catch(e){alert('вышли с ошибкой')}