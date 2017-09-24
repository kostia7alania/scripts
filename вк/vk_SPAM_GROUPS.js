var start = new Date(); 
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}

for(var строка=158;строка!=710;строка++) { 
	iimDisplay("пошла строка №"+строка+timming());	iimSet("строка",строка);
	iimPlayCode(`SET !ERRORIGNORE YES\n SET !DATASOURCE vk_groups.txt\nSET !DATASOURCE_LINE {{строка}}\nURL GOTO={{!COL1}}\nwait seconds=1\nSET !TIMEOUT_STEP 1\nTAG POS=1 TYPE=A ATTR=TXT:Show*\nSET !TIMEOUT_STEP 2\nTAG POS=1 TYPE=A ATTR=TXT:Discussions*\nwait seconds=1\n TAG POS=1 TYPE=H4 ATTR=CLASS:sub_header extract=txt`)
//ищем-что есть открытого--куда поспамить можно былоб:
try{s=iimGetLastExtract(1); s=s.split(' ')[0]; s++;} //извлечеение кол-ва дискусий;
catch (r){s=0}
if(s>20){s=20} //на% не идем на вторую страницу дискуссий;

	for(i=1;i<s;i++){
	iimSet('i',i);
	iimPlayCode(`SET !TIMEOUT_STEP 1\nTAG POS={{i}} TYPE=A ATTR=CLASS:ti_title&&HREF:* extract=txt`); 
	var result=iimGetLastExtract(1)
	//'TAG POS={{i}} TYPE=SPAN ATTR=CLASS:topic_title extract=txt
		// //дискуссии на 2 страницу(1 стр =20 тем):
		// if(result=="#EANF#")
			// {iimSet('i',i);iimPlayCode(`add i -20\n TAG POS=1 TYPE=A ATTR=TXT:2\n TAG POS={{i}} TYPE=A ATTR=CLASS:ti_title&&HREF:* extract=txt`)
			// var result=iimGetLastExtract(1)}
		// if(result=="#EANF#")
			// {iimSet('i',i);iimPlayCode(`add i -40\n TAG POS=1 TYPE=A ATTR=TXT:2\n TAG POS={{i}} TYPE=A ATTR=CLASS:ti_title&&HREF:* extract=txt`)
			// var result=iimGetLastExtract(1)}
		if(((result.search(/аренд/i)!=-1)||(result.search(/сда/i)!=-1)||(result.search(/сут/i)!=-1)||(result.search(/рекла/i)!=-1)||(result.search(/с д а/i)!=-1))&&(result.search(/питер/i)==-1)&&(result.search(/петер/i)==-1)) 
		{//клик по  топику:
			iimSet('i',i); 
			iimPlayCode(`EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>DIV:nth-of-type({{i}})>A" BUTTON=0
		'EVENT TYPE=CLICK SELECTOR="#mcont>DIV>DIV:nth-of-type({{i}})>A" BUTTON=0`);
			
			iimDisplay("строка №"+строка+"!=Нашли совпадение!; Затрачено времени: "+timming())
			iimSet("строка",строка);			
				iimPlayCode(`	SET !REPLAYSPEED FAST
				SET !TIMEOUT_STEP 2
					SET !DATASOURCE kv-начало-описания.txt
					SET !DATASOURCE_LINE {{строка}}
					set началоОписалова {{!COL1}}
				CMDLINE !DATASOURCE kv-объекты.txt
				SET !DATASOURCE_LINE {{строка}}
				SET словамиМетро {{!COL5}}
						SET !DATASOURCE_DELIMITER ;
						CMDLINE !DATASOURCE kv-описание.txt
						SET !DATASOURCE_LINE {{строка}}
						set конецОписалова {{!COL1}}
					SET !VAR1 EVAL("var s=Math.floor(Math.random()*2+1); if(s==2){'<BR>'} else '<SP>'")
					SET !VAR2 EVAL("var s=Math.floor(Math.random()*2+1); if(s==2){'<BR>'} else '<SP>'")
					SET !VAR3 EVAL("var s=Math.floor(Math.random()*2+1); if(s==2){'<BR>'} else '<SP>'")
						SET описалово Звоните<sp>или<sp>пишите<sp>в<sp>WhatsAPP:<sp>8-916-656-55-81{{!VAR1}}-вышлю{{!VAR2}}фотки{{!VAR1}}по{{!VAR3}}запросу{{!VAR2}}{{началоОписалова}}
					SET !VAR1 EVAL("var s=Math.floor(Math.random()*2+1); if(s==2){'#'} else ' '")
					ADD описалово {{!VAR1}}{{словамиМетро}}.<br>
					ADD описалово ===<br>{{конецОписалова}}
					SET !VAR1 EVAL("var s=Math.floor(Math.random()*277+1); s;")
				SET !ERRORIGNORE YES
				SET !REPLAYSPEED medium
				TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:* ATTR=* CONTENT=C:\\vk-kv\\{{!VAR1}}.jpg
				EVENT TYPE=CLICK SELECTOR="#nc_message" BUTTON=0
				EVENTS TYPE=KEYPRESS SELECTOR="#nc_message" CHARS="{{описалово}}"
				wait seconds=1
				EVENT TYPE=CLICK SELECTOR="#nc_submit" BUTTON=0
				TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=*
				'BACK
				TAG POS=1 TYPE=H1 ATTR=TXT:Discussions
					WAIT SECONDS=1`)
 			
		}

	//'не работет чет в моб версии: TAG POS={{i}} TYPE=SPAN ATTR=CLASS:topic_title
	//'		TAG POS=1 TYPE=DIV ATTR=ID:ba_text
	//'		EVENTS TYPE=KEYPRESS SELECTOR="#ba_text" CHARS="{{описалово}}"
	//'		TAG POS=1 TYPE=BUTTON ATTR=TXT:* 
	}
		//alert("exit---i="+i+"; s="+s+"\n i<s = "+(i<s))
 
	iimDisplay("строка №"+строка+"!=ДЛя етой группы-усе с обсуждениями!;!"+timming())

} 
	alert("вышли = "+result+"итераций сделано = "+i+timming())

//на стенку:
// TAG POS=1 TYPE=TEXTAREA ATTR=ONFOCUS:Wall.showEditPost()&&ONKEYDOWN:onCtrlEnter(event,<SP>Wall.sendPost)&&ONKEYUP:Wall.postChanged()&&CLASS:fl_l&&ID:post_field CONTENT={{!COL1}}
// TAG POS=1 TYPE=BUTTON ATTR=ONCLICK:wall.sendPost()&&ID:send_post&&CLASS:flat_button<SP>fl_l 
// SET !VAR1 EVAL("var randomNumber=Math.floor(Math.random()*15 + 5); randomNumber;") 
// WAIT SECONDS={{!VAR1}}

// iimDisplay(имяПроекта+": Го добавлять объяву ужеж! Строка №: "+строка);

// var папкаСФоткамиДляПодачи1="C:\\фотки-kv\\гостинная"
// var папкаСФоткамиДляПодачи2="C:\фотки-kv\\ванна"
// var папкаСФоткамиДляПодачи3="C:\\avito.ru\\kv\\ресурсы\\фото-для-подачи\\кухня"
// iimSet('папкаСФоткамиДляПодачи1',папкаСФоткамиДляПодачи1);
// iimSet('папкаСФоткамиДляПодачи2',папкаСФоткамиДляПодачи2);
// iimSet('папкаСФоткамиДляПодачи3',папкаСФоткамиДляПодачи3); 
				// '-----------------------==КАРТИНКИ:==----------------
	// '=== фото1:
	// TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=ID:image_upload CONTENT={{папкаСФоткамиДляПодачи1}}\\{{строка}}.jpg
	// wait seconds=2
	// '=== фото2:
	// TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=ID:image_upload CONTENT={{папкаСФоткамиДляПодачи2}}\\{{строка}}.jpg
	// wait seconds=2
	// '=== фото3:		
	// TAG POS=1 TYPE=INPUT:FILE FORM=NAME:NoFormName ATTR=ID:image_upload CONTENT={{папкаСФоткамиДляПодачи3}}\\{{строка}}.jpg


