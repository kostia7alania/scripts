function esc() {var prgpath="C:\\esc.exe";  var args = ['-n','6', 'google.com'];  var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile); file.initWithPath(prgpath); var process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);process.init(file); process.run(false, args, args.length);}

function translite(str){
var arr={'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'yo', 'ж':'g', 'з':'z', 'и':'i', 'й':'y', 'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'o', 'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u', 'ф':'f', 'х':'ch', 'ц':'c', 'ч':'ch', 'ш':'sh', 'щ':'shh', 'ъ':'', 'ь':'', 'ы':'y', 'э':'e', 'ю':'yu', 'я':'ya',
'А':'A', 'Б':'B', 'В':'V', 'Г':'G', 'Д':'D', 'Е':'E', 'Ё':'YO', 'Ж':'G', 'З':'Z', 'И':'I', 'Й':'Y', 'К':'K', 'Л':'L', 'М':'M', 'Н':'N', 'О':'O', 'П':'P', 'Р':'R', 'С':'S', 'Т':'T', 'У':'U', 'Ф':'F', 'Х':'CH', 'Ц':'C', 'Ч':'CH', 'Ш':'SH', 'Щ':'SHH', 'Ъ':'', 'Ь':'', 'Ы':'y', 'Ю':'YU', 'Я':'YA', 'Э':'E',
',':'', ' ':'-'};
var replacer=function(a){return arr[a] !== void 0 ? arr[a]: a};
return str.replace(/./g,replacer);
}
 
function перезапись (путь,инфа) { imns.FIO.writeTextFile(imns.FIO.openNode(путь),инфа)}
function loadFile(путь) {return imns.FIO.readTextFile(imns.FIO.openNode(путь))}
 
var запросы_путь = "C:\\lebel_spa.txt" // спаршиваемые ссылки

var _c=Components,XMLHttpRequest=_c.Constructor('@mozilla.org/xmlextras/xmlhttprequest;1');
function парс(BBB){var b=XMLHttpRequest();return b.open('GET',BBB,!1),b.send(''),b.responseText}
function сохранить(AAAAA,BBB){var c=_c.classes['@mozilla.org/file/local;1'].createInstance(_c.interfaces.nsILocalFile);c.initWithPath(AAAAA),_c.utils['import']('resource://gre/modules/NetUtil.jsm'),_c.utils['import']('resource://gre/modules/FileUtils.jsm');var d=FileUtils.openSafeFileOutputStream(c),e=_c.classes['@mozilla.org/intl/scriptableunicodeconverter'].createInstance(_c.interfaces.nsIScriptableUnicodeConverter);e.charset='UTF-8';var f=e.convertToInputStream(BBB);NetUtil.asyncCopy(f,d,function(AAAAA){!_c.isSuccessCode(a)})}
 
var запрос = loadFile(запросы_путь).split('\n')

for(i=0;i<запрос.length;i++){ 
	var url = запрос[i];
	var html = парс(url)
	var title=html.split('<title>')[1].split('</title>')[0]
	var desc =  html.split('name="description" content="')[1].split('" />')[0]
	var keys=html.split('name="keywords" content="')[1].split('" />')[0]
	var imageUrl="http://hairpersona.ru/images/product_images/popup_images"+html.split('popup_images')[1].split('"')[0]
	var imageTitle=html.split('popup_images')[1].split('title="')[1].split('"')[0]
	var text=html.split('<li id="description">')[1].split('</li>')[0] 
	var cost = html.split('schema.org/Offer">')[1].split('руб.')[0] 
	var tags0 = html.split('Тэги:')[1].split('">')[1].split('</p>')[0] 
	var tags = tags0.split('</a>')[0] 
	try{var tags = tags+","+tags0.split('">')[2].split('</a>')[0] }catch(e){}

	var инфа = "<Title>\n"+title+"\n<Description>\n"+desc+"\n<Keywords>\n"+keys+"\n<imageUrl>\n"+imageUrl+"\n<ImageTitle>\n"+imageTitle+"\n<Теги>\n"+tags+"\n<Цена>\n"+cost+"\n<Text>\n"+text
	var путьСохр = "C:\\"+url.split('.html')[0].split('.ru/')[1]+".txt" 
	сохранить(путьСохр,инфа)
		var imageName =imageTitle.replace(/ /ig,'-').replace(/,/ig,'-').replace(/\s/ig,''); var imageName = translite(imageName)
		iimSet('title',title);iimSet('text',text);iimSet('desc',desc);iimSet('keys',keys);iimSet('tags',tags);
		iimSet('i',i); iimSet('cost',cost);iimSet('imageUrl',imageUrl);
		iimPlayCode(`set !replaySpeed medium
		URL GOTO=http://lebel-for.me/admin/index.php?route=catalog/product/add&token=UH5cRxoFt26EXhOokzehPs9zM9DWxKql
		TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:http://lebel-for.me/admin/index.php?route=catalog/product/add* ATTR=NAME:product_description[1][name] CONTENT={{title}}
		TAG POS=1 TYPE=BUTTON FORM=ACTION:http://lebel-for.me/admin/index.php?route=catalog/product/add* ATTR=DATA-ORIGINAL-TITLE:Исходный<SP>код&&ARIA-DESCRIBEDBY:*&&TXT:
		TAG POS=1 TYPE=TEXTAREA FORM=ACTION:http://lebel-for.me/admin/index.php?route=catalog/product/add* ATTR=CLASS:note-codable&&TXT: CONTENT={{text}}
		TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:http://lebel-for.me/admin/index.php?route=catalog/product/add* ATTR=NAME:product_description[1][meta_title] CONTENT={{title}}
		TAG POS=1 TYPE=TEXTAREA FORM=ACTION:http://lebel-for.me/admin/index.php?route=catalog/product/add* ATTR=NAME:product_description[1][meta_description] CONTENT={{desc}}
		TAG POS=1 TYPE=TEXTAREA FORM=ACTION:http://lebel-for.me/admin/index.php?route=catalog/product/add* ATTR=NAME:product_description[1][meta_keyword] CONTENT={{keys}}
		TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:http://lebel-for.me/admin/index.php?route=catalog/product/add* ATTR=NAME:product_description[1][tag] CONTENT={{tags}}
		TAG POS=1 TYPE=A ATTR=TXT:Данные
		TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:http://lebel-for.me/admin/index.php?route=catalog/product/add* ATTR=NAME:model CONTENT={{i}}
		TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:http://lebel-for.me/admin/index.php?route=catalog/product/add* ATTR=NAME:price CONTENT={{cost}}
		TAG POS=1 TYPE=A ATTR=TXT:Связи
		EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>FORM>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>INPUT" BUTTON=0
		EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>FORM>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>INPUT" CHARS="spa"
		EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>FORM>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>UL>LI>A" BUTTON=0
		TAG POS=1 TYPE=A ATTR=TXT:Изображения  
		TAB OPEN
		TAB T=2 
		url goto={{imageUrl}}
		ONDOWNLOAD FOLDER=C:\\ FILE={{imageName}}.jpg WAIT=YES
		TAG POS=1 TYPE=IMG ATTR=SRC:*popup_images* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT
		TAB T=1
		TAB T=2
		TAB CLOSE
		TAG POS=1 TYPE=IMG ATTR=SRC:http://lebel-for.me/image/cache/no_image-100x100.png
		TAG POS=1 TYPE=BUTTON FORM=ID:form-product ATTR=ID:button-image`)
		esc() // =закрыть неугодное окошко;
		iimSet('imageName',imageName);
		iimPlayCode(`
		TAG POS=1 TYPE=BUTTON ATTR=ID:button-upload
		ONDIALOG POS=1 BUTTON=Открыть CONTENT=c:\\{{imageName}}.jpg
		TAG POS=1 TYPE=INPUT:FILE FORM=ID:form-upload ATTR=NAME:file[] CONTENT=C:\\{{imageName}}.jpg
		EVENT TYPE=KEYPRESS SELECTOR="#filemanager>DIV>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>INPUT" CHAR={{imageName}}
		TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:search CONTENT={{imageName}}
		EVENT TYPE=CLICK SELECTOR="#button-search" BUTTON=0
		TAG POS=1 TYPE=IMG ATTR=SRC:*{{imageName}}*
		 
		TAG POS=1 TYPE=BUTTON FORM=ACTION:http://lebel-for.me/admin/index.php?route=catalog/product/add&* ATTR=DATA-ORIGINAL-TITLE:Сохранить*`)
		 
}
