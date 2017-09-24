start = new Date(); 
function копиБоди() {var x = window.document.getElementsByTagName("body")[0].textContent; return x;}
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}

function getRandomInt(min, max){return Math.floor(Math.random() * (max - min + 1)) + min;}
//скок циклов:
go=100

for(abvgd=1;abvgd<go;abvgd++)
{
	iimDisplay("Входим в ОК!\n Цикл №"+abvgd+"("+go+")"+timming())//вывод инфы в дисплейчиг);
	iimPlayCode('URL GOTO=https://ok.ru/online')
	if(getRandomInt(0,10)<7)
	 {
		 iimDisplay("Рандомайзер выбрал смену параметров!\n Цикл №"+abvgd+"("+go+")"+timming())//вывод инфы в дисплейчиг);
		//выбор параметров и гоКание на 1 онлайновца:
		iimPlayCode(`SET !ERRORIGNORE YES
		EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(6)>DIV:nth-of-type(6)>DIV:nth-of-type(4)>DIV:nth-of-type(2)>DIV:nth-of-type(6)>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>SPAN:nth-of-type(2)" BUTTON=0
		EVENT TYPE=MOUSEDOWN SELECTOR="HTML>BODY>DIV:nth-of-type(6)>DIV:nth-of-type(6)>DIV:nth-of-type(4)>DIV:nth-of-type(2)>DIV:nth-of-type(6)>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV>INPUT:nth-of-type(2)" BUTTON=0
		EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(6)>DIV:nth-of-type(6)>DIV:nth-of-type(4)>DIV:nth-of-type(2)>DIV:nth-of-type(6)>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV>INPUT:nth-of-type(3)" CHARS="раменское" EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(6)>DIV:nth-of-type(6)>DIV:nth-of-type(5)>DIV>TABLE>TBODY>TR:nth-of-type(2)>TD:nth-of-type(2)>DIV>DIV>TABLE>TBODY>TR>TD>DIV>DIV" BUTTON=0
		TAG POS=1 TYPE=SELECT FORM=ACTION:/dk?st.cmd=userFriendLive&st.ageFrom=30&st.female=2&st.ageTo=45&st.male=1&cmd=OnSiteNowUsersRB ATTR=CLASS:isl<SP>isl__res<SP>isl__2num&&ID:field_ageFrom&&NAME:st.ageFrom CONTENT=%20
		TAG POS=1 TYPE=SELECT FORM=ACTION:/dk?st.cmd=userFriendLive&st.ageFrom=30&st.female=2&st.ageTo=45&st.male=1&cmd=OnSiteNowUsersRB ATTR=CLASS:isl<SP>isl__res<SP>isl__2num&&ID:field_ageTo&&NAME:st.ageTo CONTENT=%60
		TAG POS=1 TYPE=IMG ATTR=HEIGHT:128&&WIDTH:128&&ALT:*`)

	try{//трай - чтобы не вылетал при ошибках;
		if(копиБоди().search( /Информация доступна только друзьям/i )==-1)  //акк заблочен;
		  {		
			//логика - лайкать или просто пригласить в группу (вероятность - 50/50):
			if(getRandomInt(0,10)<5)
			  {	 iimDisplay("Рандомайзер выбрал клик по аве и игру с ним в лайки));!\n Цикл №"+abvgd+"("+go+")"+timming())//вывод инфы в дисплейчиг);
				 iimPlayCode(`' = клик по аве:\n EVENT TYPE=CLICK SELECTOR="#viewImageLinkId" BUTTON=0`)
				 for(i=0;i<10;i++) 
					{	var rand=getRandomInt(1,10)
						iimDisplay("ИГРА в лайки)) №"+i+";!\n Цикл №"+abvgd+"("+go+")"+timming())//вывод инфы в дисплейчиг);
					if(rand>7){iimPlayCode(`' = лайк ::::\n EVENT TYPE=CLICK SELECTOR="#hook_Block_PopLayerViewFriendPhotoRating>A:nth-of-type(2)" BUTTON=0`)}
						if(rand<3){iimPlayCode(`' ==следующа фотка-2:\n EVENT TYPE=CLICK SELECTOR="#photo-layer_img_w" BUTTON=0`)}
						if(rand>5){iimPlayCode(`' = следующая фотка ::::\n EVENT TYPE=CLICK SELECTOR="#plsp_next>SPAN" BUTTON=0`)}
					}
			  }
			else
			 {	iimDisplay("Рандомайзер выбрал пригл в группу со стр юзера!\n Цикл №"+abvgd+"("+go+")"+timming())//вывод инфы в дисплейчиг);
				//====пригласить в группу из страницы юзера: 4 и 7 - две продвигаемые группы:
				iimPlayCode(` EVENT TYPE=CLICK SELECTOR="#action_menu_expand_item_a>SPAN>EM" BUTTON=0
				EVENT TYPE=CLICK SELECTOR="#action_menu_sub_action_menu_invite_to_group_a>SPAN" BUTTON=0
				SET !VAR1 EVAL("var s=Math.floor(Math.random()*2+1); if(s==2){'1'} else '2'")
				EVENT TYPE=CLICK SELECTOR="#hook_Loader_InviteUserToGroup2GroupsListLoader>DIV>DIV:nth-of-type({{!VAR1}})>A>DIV>DIV>IMG" BUTTON=0`)
			 }
		  }
		  else {if(getRandomInt(0,10)<5) //закрытый профиль -добавляемСЯ с вероятностью 60/40!;
			     {
					 iimPlayCode('TAG POS=1 TYPE=SPAN ATTR=TXT:Добавить<SP>в<SP>друзья')
				 }
			   }
		}
		catch (r) //конструкция TRY{} catch(r) {} -предназначена для отлова ошибок
		{iimDisplay('зашли в тупик - идем дальше;)'); iimPlayCode('wait seconds=2')}
	 }
	else
	{   iimDisplay("Рандомайзер выбрал пригл в группу со стр ОНЛАЙНов:::::^^:!!ПОКА НЕ РАБОТАЕТ! юзаю как иммитатор тормозов!)\n Цикл №"+abvgd+"("+go+")"+timming())//вывод инфы в дисплейчиг);
		//====пригласить группу со страницы ОНЛАЙНов:::::^^::: 4 и 7 - две продвигаемые группы: !ПОКА НЕ РАБОТАЕТ! юзаю как иммитатор тормозов!)
		iimPlayCode(`SET !ERRORIGNORE YES
		EVENT TYPE=CLICK SELECTOR="#hook_Block_MainContainer>DIV:nth-of-type(5)>TABLE>TBODY>TR>TD>DIV>DIV>DIV>DIV>UL>LI:nth-of-type(4)>A>SPAN" BUTTON=0
		SET !VAR1 EVAL("var s=Math.floor(Math.random()*2+1); if(s==2){'7'} else '4'")
		EVENT TYPE=CLICK SELECTOR="#hook_Loader_InviteUserToGroup2GroupsListLoader>DIV>DIV:nth-of-type({{!VAR1}})>A>DIV>DIV>IMG" BUTTON=0`)
	 }
}
// try{
    // var Cc=Components.classes, Ci=Components.interfaces, args=[''];
    // var proc=Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
    // var file=Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
    // file.initWithPath('C:\\1.mp3');
    // proc.init(file); proc.run(false, args, args.length);
// } catch (r) {iimDisplay('Рега окончена! но файла 1.мп3 в корне C:\ =не нашли;;')}

    // iimPlay("#Current.iim")
    // alert("1="+iimGetLastExtract(1)+"------------2="+iimGetLastExtract(2))
    
    // try{
// iimDisplay('Рега окончена! но файла 1.мп3 в корне C:\ =не нашли;;'+s)
    // } catch (r) {
// iimDisplay('Рега окончена! но sssssssssssss1.мп3 в корне C:\ =не нашли;;'+s)
    // } 