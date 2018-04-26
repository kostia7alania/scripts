var robot = {
	whatsToPost: 'texts, images',
	groupLimit: 5,
	path: 'C:\\\\imacros\\scripts\\Odnoklassniki\\poster_ok_groups\\',
	img: 'images',
	random_img(){
		if(this.whatsToPost.search('images')>-1){
			photo = dataFile(`file:///${this.path}${this.img}`);
			photo = photo[randGen(0, photo.length - 1)][3]; //случайная фотка;
			return this.path + this.img + "\\" + photo;
		} else return false;
	},
	txt: 'texts.txt',
	random_txt(){
		if(this.whatsToPost.search('texts')>-1){
			txt = read(`${this.path}${this.txt}`);
			return txt[randGen(0, txt.length - 1)].trim()//.replace(/ /gim,'<SP>'); //случайный текст   	
		} else return false;
	},
 	url_counter: 0,
	accs() {return читать(`${this.path}logins.csv`)},
	get groups(){ a =   read(`${this.path}ok_groups.csv`)[this.url_counter].trim(); this.url_counter++; return a;},
	logs: 'logs.csv',
	set disp(val){ iimDisplay(`${дата()}	${val}	${timing()}`); },
	message:'',
	set mess(val){ this.message = `${дата()}	${val}	${timing()}\n`; добавитьВКонец(this.path+this.logs,this.message); },
  	get mess(){iimDisplay(this.message)}
} 
 
var start=new Date();
var diff=()=>{return (new Date()-start)/1000};
var дата=()=>{var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(",	","	")};
var timing=()=>{return 'Затрачено времени: '+Math.floor(diff()/3600)+'ч:'+(Math.floor(diff()/60)-(Math.floor(diff()/3600)*60))+'м:'+Math.round(diff()%60)+'с';};
var читать=read=файл=>{return imns.FIO.readTextFile(imns.FIO.openNode(файл)).split('\n')}
var добавитьВКонец=(путь,инфа)=>{imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа);iimDisplay(инфа.split('	').join('\n'));  }
var iim = iimPlayCode, setInterval = window.setInterval, console = window.console, document = window.document;
var quersel = s => window.document.querySelectorAll(s);
var wait =  s => `\nWAIT SECONDS=${s}\n`;
var randGen = (min, max) => Math.floor(Math.random() * (max - min)) + min;
 
function getFile(url) { /*функция гет запроса*/  var XMLHttpRequest = Components.Constructor("@mozilla.org/xmlextras/xmlhttprequest;1","nsIXMLHttpRequest"); var req = new XMLHttpRequest();req.open("GET", url, false);req.send(null);return req.responseText;}
function dataFile(url) {/*функция для чтения папок (в данном случае);*/ var arrData = []; var getStart = getFile(url); /*гет запрос локально*/
  var decodeText = decodeURIComponent(getStart); // декодируем в UTF-8 ответ
  var arrText = decodeText.split("\n"); // разделяем строки по переносу
  for (i = 2; i < arrText.length - 1; i++) {/*начинаем с третьей строки(первые 2 - ненужная инфа)*/ var arrFile = [];
    var spGSM = arrText[i].split(" GMT "); //разделяем по GMT
    var spCom = spGSM[0].split(", "); // разделяем по запятой
    var spSpace = spCom[spCom.length - 2].split(" "); // оставшееся разделяем по пробелу
    arrFile.push(spGSM[1].replace(" ", "")); //  добавляем  в массив каталог это или файл
    arrFile.push(new Date(spCom[spCom.length - 1])); //  добавляем  в массив дату последнего изменения
    var sumBit = spSpace[spSpace.length - 2]; // вес файла
    arrFile.push(sumBit); //  добавляем  в массив сколько килобайт весит файл
    arrFile.push(spGSM[0].split(" " + sumBit)[0].substring(5)); //  добавляем  в массив имя файла
    arrData.push(arrFile);}
  return arrData;
} 

var NewIP=()=>{var Cc=Components.classes, Ci=Components.interfaces;
	var proc=Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
	var file=Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);  
		file.initWithPath('D:\\Dom\\YandexDisk\\macros\\newip.lnk'); 
		iim(wait(20));
		proc.init(file); proc.run(false, '',0);
};

login_OK=(log,pass)=>{
	iim(`CLEAR ${wait(2)} ONDIALOG POS=1 BUTTON=OK CONTENT=\n tab open\n tab t=2\n tab closeallothers \n URL GOTO=https://ok.ru`);
	quersel('#field_email')[0].value=log;
	quersel('#field_password')[0].type="text"
	quersel('#field_password')[0].value = pass;
	iim(`TAG POS=2 TYPE=INPUT:SUBMIT FORM=ACTION:https://www.ok.ru/https ATTR=*`)
}


PostToGroup = (url, post, img) => {
	var err = {	
		mes:'',	
		set add(val){this.mes+=val; iimDisplay(this.mes);}
	};
	
	iim(`URL GOTO=${url}`);
	if(iim(`TAG POS=1 TYPE=A ATTR=TXT:Присоединиться`)==1){
		err.add='Присоединился к группе; '; 
		iim(wait(10));
	}else{err.add=iim('TAG POS=1 TYPE=SPAN ATTR=TXT:В<SP>группе')==1?'Уже присоединен к группе; ':'Не получилось Присоединиться; '}
	try {// try share post
		var d = quersel(".input_placeholder");
		d.length>0?d[0].click():err.add='Не нашли input_placeholder; ';
		iim(wait(8));
		var dd = quersel(".posting_itx");
		var s = dd.length>0? dd[0]:quersel("#posting_form_text_field")[0];//какой-то из них бывает=)
		if(s){
			s.focus();
			s.click();
			s.textContent = post?post:''; //постим текста если включено в настройках!
			img?iimPlayCode(`TAG POS=3 TYPE=DIV ATTR=TXT:Добавить<SP>фото \n TAG POS=1 TYPE=INPUT:FILE ATTR=NAME:photo CONTENT=${img}`):"";

		} else {err.add='Не нашли #posting_form_text_field и .posting_itx; '}
		iim(wait(7));
		b = quersel(".posting_submit");
		if(b.length>0) b[0].click();
		else {
			test=0;
			quersel(".button-pro").forEach( val => {val.value=="Поделиться"?val.click():"";test++} );
			test==0?err.add='Никак нету кнопки Поделиться; ':'';
		};
		iim(wait(8));
	} catch(e) {err.add='Не получилось запостить! Причина=>'+e;}
	return err.mes;
}
 
	robot.accs().forEach((acc,index)=>{ 
		if((acc==undefined)||(acc.length<5)){} //типа break;
	    else{
			line = acc.split('	');
			log  = line[0];
			pass = line[1];
			iimDisplay(`login: ${log} / Pass: ${pass}`);
			login_OK(log,pass);
			//iim(wait(15));
			for(w=0;w<robot.groupLimit;w++){
				iimDisplay(`login: ${log} / Pass: ${pass}\n № акка: ${index+1} (${robot.accs().length}) № группы: ${robot.url_counter}	Для текущего это: ${w+1}(${robot.groupLimit})`);
				url = robot.groups;  //запустится гетер и вернет следующий урл группы;
				//console.log(url);
				robot.disp = url; //запустится сетер и отобразит инфу на дислпейчике;
				robot.mess = `${PostToGroup(url, robot.random_txt(), robot.random_img())}	${url}	акк: ${log}	№ акка: ${index + 1} (${robot.accs().length}) № группы: ${robot.url_counter}	Для текущего это: ${w + 1}(${robot.groupLimit})`;//сработает сеттер и добавит даты;
			};
			iim(`CLEAR${wait(20)}`);
			//alert(' change IP'); 
		//	NewIP() // change IP
			iim(wait(23)); 
		};		
	});
alert('End of Work !');
