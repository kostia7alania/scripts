iim=iimPlayCode;

 			
	
//НАСТРОЙКИ: 
var апиКлюч = "6440c629b2418bf14c6ca56d0e7e21d0" //rucaptcha
var путь_отчета = "C:\\FULL\\RESULTS\\vk\\отчет_vk.txt"
var путьКаптчи = 'C:\\full\\cap.jpg'
var акки = "C:\\FULL\\RESULTS\\vk\\accounts.txt"
var текст = "C:\\FULL\\RESULTS\\vk\\text.txt"
var lock_forever = "C:\\FULL\\RESULTS\\vk\\lock_forever.txt"
var Temporary_block = "C:\\FULL\\RESULTS\\vk\\Temporary_block.txt"
var текстВечногоБана = "Аккаунт заблокирован навсегда!"
var текстВременногоБана = "Аккаунт заблокирован временно!"
var фото = `C:\\FULL\\RESULTS\\vk\\фото\\фото1.jpg
C:\\FULL\\RESULTS\\vk\\фото\\фото2.jpg
C:\\FULL\\RESULTS\\vk\\фото\\фото3.jpg`//сколько фоток задашь - стока и запостит; обратный слэш именно ставить на той же строке(!);
var поститьНаСтену7 = 1; // 1-да,0-нет;
var прикреплятьФотоКПосту7 = 1; // 1-да,0-нет;
var номерФотоИзАльбома = 1; // порядковый номер с конца или начала))
var avtootvet_text = "C:\\FULL\\RESULTS\\vk\\avtootvet_text.txt"
var сменаПрокси = "C:\\FULL\\RESULTS\\vk\\ctrl+shit+L.exe"



var spd = "\n SET !ReplaySpeed medium \n"	//скорость ;

function фото_аплоад(){iim(spd+'TAG POS=1 TYPE=A ATTR=HREF:*?act=add&&CLASS:new_item_link\nwait seconds=3'); var фотки = фото.split('\n'); колфото=фотки.length; for(kol=0;kol<колфото;kol++){iimSet('kol',kol+1); iimSet('фото',фотки[kol]); iim(spd+'TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:https://* ATTR=TYPE:file&&NAME:file{{kol}}&&CLASS:upload_input CONTENT={{фото}}'); }; iim(spd+'TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:https://* ATTR=TYPE:submit&&VALUE:Загрузить<SP>фотографии&&CLASS:button \n wait seconds=5 \n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:https://* ATTR=TYPE:submit&&VALUE:Загрузить<SP>фотографии&&CLASS:button \n wait seconds=5')}
// text="sex" 			//test
function imgs_links_parse() {var фотки = фото.split('\n'); колфото=фотки.length; var a =""; for(img=0;img<колфото;img++){iimSet('img',img+1);iim(spd+'TAG POS={{img}} TYPE=a ATTR=CLASS:thumb_item* extract=href'); var a = a + iimGetLastExtract(1).replace("?rev=1","")+"?act=edit&rev=1" + "	"}; for(img=0;img<колфото;img++){iimSet('text',text);iimSet('url',a.split('	')[img]); iim(spd+'url goto={{url}}\n wait seconds=2 \n TAG POS=1 TYPE=TEXTAREA FORM=ACTION:/photo-* ATTR=ROWS:4&&CLASS:textfield&&NAME:text CONTENT={{text}} \n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/photo-* ATTR=TYPE:submit&&VALUE:Сохранить&&CLASS:button \n wait seconds=2')}; return a} //сразу после заливки фото, собираем ссылки на редактирование изобр (моб)
 // imgs_links_parse() 	//test

function goMobile() {iim(spd+'url goto='+window.location.href.replace(/https:\/\/vk.com/,'https:\/\/m.vk.com'))}
function goPc() {iim(spd+'url goto='+window.location.href.replace(/https:\/\/m.vk.com/,'https:\/\/vk.com'))}
function тестНаКаптчуPC() {if(window.document.querySelectorAll(".box_title").length>0){return 1}}
function тестНаКаптчуMob() {if(window.document.querySelectorAll(".captcha_img").length>0){return 1}}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  
var start = new Date();
function timming() {diff=(new Date()-start)/1000; return 'Затрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")}
	function randGen(min,max) {return Math.floor(Math.random() * (max - min)) + min;}
	
function run(prog) {var prgpath=prog; var args = ['-n','6', 'google.com']; var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile); file.initWithPath(prgpath); var process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess); process.init(file); process.run(false, args, args.length)}

function postingVkWallPC(text) {window.document.getElementById('post_field').focus = function(){window.document.querySelector("#post_field").style.backgroundColor='red'; window.document.getElementById('post_field').click(); iim(spd+'EVENT TYPE=KEYPRESS SELECTOR=#post_field Char="a" MODIFIERS="ctrl"\n  EVENT TYPE=KEYPRESS SELECTOR=#post_field KEY=13'); window.document.getElementById('post_field').click(); iimSet('text',text); iim(spd+'EVENTS TYPE=KEYPRESS SELECTOR=#post_field CHARS={{text}}'); iim(spd+'EVENT TYPE=CLICK SELECTOR="#send_post" BUTTON=0 \n wait seconds=3')}()}

function postingPhotoVkWallPC(text) {window.document.getElementById('post_field').focus = function(){window.document.querySelector("#post_field").style.backgroundColor='red'; window.document.getElementById('post_field').click(); iimSet('text',text); iim(spd+'EVENT TYPE=KEYPRESS SELECTOR=#post_field Char="a" MODIFIERS="ctrl"\n  EVENTS TYPE=KEYPRESS SELECTOR=#post_field CHARS={{text}} \n EVENT TYPE=KEYPRESS SELECTOR=#post_field KEY=13 \n EVENT TYPE=KEYPRESS SELECTOR=#post_field KEY=13 \n EVENT TYPE=KEYPRESS SELECTOR=#post_field KEY=13 \n EVENT TYPE=KEYPRESS SELECTOR=#post_field KEY=13 \n EVENT TYPE=KEYPRESS SELECTOR=#post_field KEY=13'); window.document.getElementById('post_field').click(); iimSet('text',text); iim(spd+'EVENTS TYPE=KEYPRESS SELECTOR=#post_field CHARS=<sp>{{text}}'); iim(spd+'wait seconds=3')}()}

// iim(spd+'EVENT TYPE=CLICK SELECTOR="#official" BUTTON=0 \n EVENT TYPE=CLICK SELECTOR="#official" BUTTON=0'); 

function postingVkWallMob(text) {iimDisplay('Капчта! Пытаемся с моб версии..'); window.document.querySelector('TEXTAREA.textfield').focus = function(){window.document.querySelector("TEXTAREA.textfield").style.backgroundColor='red'; window.document.querySelector('TEXTAREA.textfield').click(); iimSet('text',text); iim(`SET !REPLAYSPEED medium \n EVENT TYPE=KEYPRESS SELECTOR="TEXTAREA.textfield" Char="a" MODIFIERS="ctrl" \n EVENTS TYPE=KEYPRESS SELECTOR="TEXTAREA.textfield" CHARS={{text}}\nEVENT TYPE=CLICK SELECTOR=".cp_buttons_block>INPUT" BUTTON=0 \n wait seconds=3`);}()}

function вход(логин, пароль) {iimSet('login',логин);iimSet('pas',пароль);iim(spd+'clear \n URL GOTO=https://m.vk.com/ \n TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:https://login.vk.com/?act=login&_origin=https://m.vk.com&ip* ATTR=NAME:email CONTENT={{login}} \n TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:https://login.vk.com/?act=login&_origin=https://m.vk.com&ip* ATTR=NAME:pass CONTENT={{pas}} \n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:https://login.vk.com/?act=login&_origin=https://m.vk.com&ip* ATTR=*')}

function мотатьВверх() {window.focus = function(){ window.scrollTo(0,0); }()}  
  
var iim = iimPlayCode, cc=Components.classes, ci=Components.interfaces, captcha = (апиКлюч,путь) =>{
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
		iim(spd+'WAIT SECONDS=10');
		x.open('GET', 'http://rucaptcha.com/res.php?key='+апиКлюч+'&action=get&id='+captchaId, false);
		x.send();
		var resp = x.responseText;
		iimDisplay(resp);
		if (resp.indexOf('ERROR')!=-1) {return "ERROR"}
		if (resp.indexOf('OK')!=-1) {var cap = resp.split('|')[1]; return cap}
	}
}
var распознатьКапчту = () =>{window.document.querySelector(".leftMenu__header").style.display="none"; window.document.querySelector(".layout__header").style.display="none"; мотатьВверх(); iim(`ONDOWNLOAD FOLDER=C:\\full\\ FILE=cap.jpg WAIT=YES \n TAG POS=1 TYPE=IMG ATTR=SRC:*captcha* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT \n wait seconds=1`); window.document.querySelector(".captcha_img").style.border='11px double red'; return captcha(апиКлюч,путьКаптчи)} 
 
function ввестиРаспознаннуюКаптчу(text) {window.document.querySelector("input[name='captcha_key']").focus = function(){window.document.querySelector("input[name='captcha_key']").style.backgroundColor='red'; window.document.querySelector("input[name='captcha_key']").click(); iimSet('text',text); iim(`EVENTS TYPE=KEYPRESS SELECTOR="input[name='captcha_key']" CHARS={{text}}`);}(); iim(spd+'EVENT TYPE=CLICK SELECTOR=".fi_row>INPUT" BUTTON=0');}
 

var акки = читать(акки).split('\n');
var text = читать(текст)
var фотки = фото.split('\n')
var автоответ = читать(avtootvet_text)

for(q=0;q<акки.length;q++){ //цикл повторяться будет стока,скок аккаунтов!
	var логин = акки[q].split(',')[0].replace(/\"/gim,'').replace(/\'/gim,'')
	var пароль = акки[q].split(',')[1].replace(/\"/gim,'').replace(/\'/gim,'')
	var путь_к_группам = акки[q].split(',')[2].split(/\"/gim)[1]
	
	вход(логин, пароль); //входим в аккаунт!
  
 	for(qq=0;qq<10;qq++){if(тестНаКаптчуMob()>0){var каптча = распознатьКапчту();if(каптча=="ERROR"){iim(spd+'refresh')}else{ввестиРаспознаннуюКаптчу(каптча);if(тестНаКаптчуMob()>0){iimDisplay('Опять капчта вылазит. ПОшли еще раз распознавать!')}else{qq=111}}}} //КАПТЧА.ТЕСТ; 
	
	var группы = читать(путь_к_группам).split('\n') 
	
	for(group_count=0;group_count<группы.length;group_count++){ 
		группа = группы[group_count].split(',')[0].replace(/"/gim,'').replace(/'/gim,''); 
		var imgs_links="-"//обнуляем предыд сост);
		var ссылкаНаПост="-"
		iim(spd+'url goto='+группа)

		goPc();  		iim(spd+'wait seconds=2');
		
		if(window.document.querySelectorAll('.closed_page').length==0){ // проверка на ЗАБАНЕННОСТЬ В ЭТОЙ ГРУППЕ!
			
			iim(`url goto=https://vk.com/albums-`+window.document.querySelector('.module_header').href.split('=')[2]);	//узнаем ИД сообщества;
			iim(spd+'TAG POS=3 TYPE=DIV ATTR=TXT:Ошибка<SP>доступа extract=txt') 					// узнаем - включены ли альбомы
		 
			if(iimGetLastExtract(1)=="#EANF#"){ 					//альбомы есть
				iim(spd+'set !errorignore yes \n TAG POS=2 TYPE=DIV ATTR=TXT:Показать<SP>все* \n TAG POS=1 TYPE=DIV ATTR=TITLE:*альбом&&CLASS:photos_album_title* ');		//открываем ОСНОВНОЙ альбом;
				 
				iim(spd+'TAG POS=1 TYPE=BUTTON ATTR=ID:photos_upload_area extract=txt')				//узнаем есть ли кнопка ДОБАВИТЬ ФОТО
				if(iimGetLastExtract(1)!="#EANF#"){ 				//можно добавлять фотки
					goMobile();
					фото_аплоад(); //отгрузили фотки;
					var imgs_links = imgs_links_parse().replace(/\?act=edit&rev=1/gim,'').replace(/m.vk/gim,'vk'); //получили список ссылок на запоСщенные картинки;;
					// alert(imgs_links)
				}else{	var imgs_links ="-"		}					// альбомы включены, но незя добавлять!)		

			} else{var imgs_links ="-"		}											// альбомы отключены
			
			
			/////////////////////// ПОСТИНГ  НА СТЕНУ!!!!!!!!!!!
		 
			if(поститьНаСтену7==1){
				
				iim(spd+'url goto='+группа);
			 
				iim(spd+'EVENT TYPE=CLICK SELECTOR="#send_post" BUTTON=0 \n set !extract 1');
				
				if(iimGetLastExtract(1)!=null){	//стена открыта;
				   
					if(imgs_links!="-"){		//постим фотки
						if(прикреплятьФотоКПосту7==1){
							try{var пост_фото = imgs_links.split('	')[номерФотоИзАльбома-1]
								postingPhotoVkWallPC(пост_фото); 
							}catch(e){alert("проверь номер фотки")}
						}
					}
					
				
				
				
				for(Q=0;Q<3;Q++){// # попыток запостить на стенку 	(кол-во распознаваний каптчи);
				goPc();			
				postingVkWallPC(text) 
					try{
						if(тестНаКаптчуPC()>0){
							goMobile();
							
							postingVkWallMob(text); 
							
							if(тестНаКаптчуMob()>0){
								iimDisplay('С моб тож капчта вылазит. ПОшли распознавать!'); 
								var каптча = распознатьКапчту();
								if(каптча=="ERROR"){iim(spd+'refresh')}
								else {
									// alert('вводим каптчу')
									ввестиРаспознаннуюКаптчу(каптча); 
									// alert('вышли из РАСП ')
									if(тестНаКаптчуMob()>0){iimDisplay('Опять капчта вылазит. ПОшли еще раз распознавать!')}
									else{Q=99} //выходим. капчи нет!
									}
							}
						}
						else{
							iim(spd)//чуть пауза
							if(window.document.querySelectorAll('.suggest>div>div>div>div>a.post_link').length>0){		//предложеные посты ищем;				
								var ссылкаНаПост = "предложенные: "+window.document.querySelectorAll('.suggest>div>div>div>div>a.post_link')[0].href
							} else {
								try{var ссылкаНаПост = document.querySelectorAll('#page_wall_posts>div>div>div>div>div>a.post_link')[0].href //ссылка на посл пост;
								}catch(e){var ссылкаНаПост = '='};
							}
							var Q=99;	//выходим. капчи нет!
						}
					}
					catch(e){iimDisplay('какая-то ошибка')}
		}
		
		
				
				
			}
			
			
			
						
		}else{ 
		
		var ссылкаНаПост = "-"
		
		
		}
		
		}
		else{
			var ссылкаНаПост = "ЗАБАНЕН в этой группе!!"			
		} 
		добавитьВКонец(путь_отчета,дата()+"	"+логин+"	"+пароль+"	"+путь_к_группам+"	"+группа+"	"+timming()+"	"+ссылкаНаПост+"	"+imgs_links+"\n")	
	}
	

	  
	
	
	
	run(сменаПрокси)// ctrl+shit+L.exe - смена прокси
}