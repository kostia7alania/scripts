var итерация =0
var start = new Date(); 
var diff = new Date() - start;

for(var строка=666;строка!=710;строка++) {
var diff = new Date() - start;
итерация++;
iimDisplay("строка №"+строка+"!=Код выполняется уже: " + diff/60000+" минут; Запостили №"+итерация)
iimSet('путьКПриветствиюОписания','kv-начало-описания.txt'); 
iimSet('путьКОписанию','kv-описание.txt');
iimSet("строка",строка);
iimSet("путьКМетро",'C:\\avito.ru\\kv\\ресурсы\\объекты.txt');
iimSet('папкаСФоткамиДляПодачи1','C:\\vk-kv'); 
		iimPlayCode(`
	add строка -300
		SET !REPLAYSPEED fast
		SET !TIMEOUT_PAGE 10
		SET !DATASOURCE vk_groups.txt
		SET !DATASOURCE_LINE {{строка}}
		URL GOTO={{!COL1}}		
			SET !TIMEOUT_PAGE 5
				SET !DATASOURCE {{путьКПриветствиюОписания}}
				SET !DATASOURCE_LINE {{строка}}
				set началоОписалова {{!COL1}}
			'Генерируем АДРЕС и связанный с ним ид_МЕТРО:
				CMDLINE !DATASOURCE {{путьКМетро}}
				SET !DATASOURCE_LINE {{строка}}
				set словамиМетро {{!COL5}}

				SET !DATASOURCE_DELIMITER ;
				CMDLINE !DATASOURCE {{путьКОписанию}}
				SET !DATASOURCE_LINE {{строка}}
				set конецОписалова {{!COL1}}

				set описалово {{началоОписалова}}
				add описалово <sp>#{{словамиМетро}}
				add описалово {{конецОписалова}}<br>Звоните<sp>или<sp>пишите<sp>в<sp>вастапп,если<sp>надо<sp>скинуть<sp>фото<sp>и<sp>адрес<sp>(или<sp>еще<sp>ккакую<sp>помощь<sp>или<sp>услугу<sp>оказать))::<br>8-916-656-55-81
				
				
 SET !VAR1 EVAL("var randomNumber=Math.floor(Math.random()*276 + 1); randomNumber;")
set !errorignore no
SET !REPLAYSPEED SLOW
EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>A>H4" BUTTON=0
TAG POS=1 TYPE=A ATTR=TXT:Add<SP>new<SP>photos
set !errorignore yes
TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:* ATTR=NAME:file1 CONTENT={{папкаСФоткамиДляПодачи1}}\\{{!VAR1}}.jpg
EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV:nth-of-type(4)>INPUT" BUTTON=0
wait seconds=2
EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>DIV>FORM>DIV:nth-of-type(4)>INPUT" BUTTON=0
TAG POS=1 TYPE=DIV ATTR=CLASS:photos_page<SP>thumbs_list&&TXT: 
EVENT TYPE=CLICK SELECTOR="#mcont>DIV>DIV:nth-of-type(2)>DIV>A" BUTTON=0
TAG POS=1 TYPE=I ATTR=CLASS:i_icon<SP>i_replies&&TXT:
TAG POS=1 TYPE=A ATTR=CLASS:mva_item&&HREF:*
TAG POS=1 TYPE=TEXTAREA FORM=ACTION:* ATTR=ROWS:4&&CLASS:textfield&&NAME:text CONTENT={{описалово}}
WAIT SECONDS=1
TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=TYPE:submit&&VALUE:Save&&CLASS:button
WAIT SECONDS=1
		`)
	var diff = new Date() - start;
	iimDisplay("строка №"+строка+"!=Код выполняется уже: " + diff/1000+" секунд; ДЛя етой группы-усе с обсуждениями!;!;")
}
	//alert("вышли = "+result+"итераций сделано = "+i)

//на стенку:
// TAG POS=1 TYPE=TEXTAREA ATTR=ONFOCUS:Wall.showEditPost()&&ONKEYDOWN:onCtrlEnter(event,<SP>Wall.sendPost)&&ONKEYUP:Wall.postChanged()&&CLASS:fl_l&&ID:post_field CONTENT={{!COL1}}
// TAG POS=1 TYPE=BUTTON ATTR=ONCLICK:wall.sendPost()&&ID:send_post&&CLASS:flat_button<SP>fl_l 
// SET !VAR1 EVAL("var randomNumber=Math.floor(Math.random()*15 + 5); randomNumber;") 
// WAIT SECONDS={{!VAR1}} 