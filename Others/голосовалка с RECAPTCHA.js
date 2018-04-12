function wait(sec) {iimPlayCode('WAIT SECONDS='+sec)}
  		step0='SET !TIMEOUT_STEP 0\n';
		time30='SET !TIMEOUT 30\n';
		time80='SET !TIMEOUT 80\n'; 
 var modemKostia = ('SET !USERAGENT CHROME \n SET !REPLAYSPEED medium\n SET !TIMEOUT_STEP 20\nSET !EXTRACT NULL\n ONLOGIN USER=admin PASSWORD=admin1\n URL GOTO=192.168.1.1\n URL GOTO=192.168.1.1\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\n URL GOTO=http://192.168.1.1/#broadband.globals\nwait seconds=2\nTAG POS=1 TYPE=TD ATTR=CLASS:td_ip<SP>text EXTRACT=TXT\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=BUTTON FORM=NAME:editor ATTR=TXT:Apply\nwait seconds=21\nTAG POS=1 TYPE=TD ATTR=CLASS:td_ip<SP>text EXTRACT=TXT')
 function testModem1(ip1){try{x=ip1.split('.')[0]; y=ip1.split('.')[1]; ip1=x+"."+y; return ip1}catch(r){}}
 function testModem2(ip2){try{x=ip2.split('.')[0];y=ip2.split('.')[1]; ip2=x+"."+y; return ip2}catch(r){}} 
 
function resize(){
 var Cc=Components.classes, Ci=Components.interfaces, c, Path='C:\\CapNum\\';
 var proc=Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
 var file=Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile); 
 var args=['convert', 'C:\\CapNum\\cap.jpg', '-resize', '200x300', '-crop', '194x253+4+4', 'C:\\CapNum\\cap2.jpg'];               
     file.initWithPath(Path+"convert.exe");
     proc.init(file); proc.run(false, args, args.length);}
     
var Path = 'C:\\CapNum\\'
var key='6440c629b2418bf14c6ca56d0e7e21d0';

for(qqq=0;qqq<111;qqq++){
 
 
	iimPlayCode(`clear 
	url goto=http://couture.estel.pro/sal6285 
	wait seconds=2 
	set !ERRORIGNORE YES 
	FRAME NAME="undefined"
	TAG POS=1 TYPE=DIV ATTR=ROLE:presentation&&CLASS:recaptcha-checkbox-checkmark&&TXT: 
	`)

 
        f1='FRAME NAME="undefined"\n';
    if(iimPlayCode(step0+f1+'TAG POS=2 TYPE=DIV ATTR=TXT:reCAPTCHA')>0) {
			iimDisplay('Подцепились к рекапче');
        iimPlayCode(step0+f1+'TAG POS=1 TYPE=DIV ATTR=ROLE:presentation'); 
        wait(3)
        iimPlayCode(step0+f1+'TAG POS=1 TYPE=DIV ATTR=CLASS:*rc-anchor-checkbox-holder EXTRACT=HTM');
     if(iimGetExtract().indexOf('checked="true')<0){   
        iimPlayCode(step0+'TAG POS=1 TYPE=iframe ATTR=src:*recaptcha/api2/frame?c=* extract=htm');
        f2='FRAME '+iimGetExtract().match(/name=".*?"/)+'\n';

								 
  
        if(iimPlayCode(step0+f2+'TAG POS=1 TYPE=DIV ATTR=CLASS:rc-imageselect-desc-wrapper')>0){
			for(a=1; a<9; a++){
				if(iimPlayCode(step0+f2+'TAG POS=1 TYPE=DIV ATTR=CLASS:rc-image-tile-33')>0) break; else
				  iimPlayCode(time30+f2+'EVENT TYPE=CLICK SELECTOR="#recaptcha-reload-button" BUTTON=0');
			} 
			iimPlayCode('ONDOWNLOAD FOLDER='+Path+' FILE=cap.jpg WAIT=YES\n'+f2+'TAG POS=1 TYPE=DIV ATTR=class:rc-imageselect-payload CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT');
			wait(2);resize();wait(2); // <--- Уменьшаем картинку
			
			
										iimPlayCode(step0+f2+`
												TAG POS=1 TYPE=BUTTON ATTR=TXT:ПОДТВЕРДИТЬ extract=htm
												TAG POS=1 TYPE=BUTTON ATTR=TXT:*Пропу* extract=htm
												TAG POS=1 TYPE=BUTTON ATTR=TXT:*Далее* extract=htm
												TAG POS=1 TYPE=BUTTON ATTR=TXT:* extract=htm
												TAG POS=1 TYPE=DIV ATTR=TXT:*Повторите* extract=htm
												TAG POS=1 TYPE=DIV ATTR=TXT:* extract=htm`)
 							var Подтвердить = iimGetExtract(0);
							var Пропустить = iimGetExtract(1);
							var Далее = iimGetExtract(2);
							var звездочкаБаттона = iimGetExtract(3);
							var Повторите = iimGetExtract(4);
							var звездочкаТхт = iimGetExtract(5);
						var вНачале = iimGetExtract().search(/rc-imageselect-error-dynamic-more" style="display:none"/igm)
						alert(вНачале) 
							
							
							
			iimPlayCode('TAB OPEN\nTAB T=2');

		  /*** -= Отправляем на распознавание =- ***/

			for(sk=0; sk<=9; sk++){ 
				iimPlayCode(time30+'URL GOTO=imacros2.rucaptcha.com/new/');
				iimPlayCode(step0+'TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:key CONTENT='+key);
				iimPlayCode(step0+'TAG POS=1 TYPE=INPUT:FILE ATTR=TYPE:file CONTENT='+Path+'cap2.jpg');
				iimPlayCode(time80+'TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=*');
				iimPlayCode(step0+'TAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT');  
				   
							iimDisplay("экстракт: "+iimGetExtract()+'\n Результат сеарча цифр: '+iimGetExtract().search(/\d/))
				
				if(iimGetExtract().search(/\d/)!=-1){     
					c=iimGetExtract().match(/\d+/g).join('');            
						iimDisplay("с = "+c);  iimDisplay("с = "+c+'\n'+Number(c)+typeof(c))
					if(iimGetExtract().indexOf("ERROR")<0) break
				}
			}
		} 
							 iimDisplay('ща закроется = '+iimGetExtract()+'\nLOG: '+iimGetExtract().indexOf("ERROR")+'\n'+(iimGetExtract().indexOf("ERROR")<0))
						wait(2); iimPlayCode('TAB CLOSE');  	
			  
            if(Number(c)>0){
				
                for(k=0; k<c.length; k++){
                    iimPlayCode(step0+f2+'TAG POS='+c[k]+' TYPE=DIV ATTR=CLASS:rc-imageselect-checkbox');}
					iimDisplay("c[k] = "+c[k])
                    iimPlayCode(time30+f2+'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV" BUTTON=0'); //<--- Код нажатия кнопки Продолжить, на некоторых сайтах может отличаться
					iimDisplay('ща нажмется верифи баттон)')
                    iimPlayCode(time30+f2+'EVENT TYPE=CLICK SELECTOR="#recaptcha-verify-button" BUTTON=0');
					iimDisplay("нажали верифи дам")
					//открылась 2 потом картинок
							iimPlayCode(step0+f2+`
												TAG POS=1 TYPE=BUTTON ATTR=TXT:ПОДТВЕРДИТЬ extract=htm
												TAG POS=1 TYPE=BUTTON ATTR=TXT:*Пропу* extract=htm
												TAG POS=1 TYPE=BUTTON ATTR=TXT:*Далее* extract=htm
												TAG POS=1 TYPE=BUTTON ATTR=TXT:* extract=htm
												TAG POS=1 TYPE=DIV ATTR=TXT:*Повторите* extract=htm
												TAG POS=1 TYPE=DIV ATTR=TXT:* extract=htm`)
												 
							var Подтвердить2 = iimGetExtract(0);
							var Пропустить2 = iimGetExtract(1);
							var Далее2 = iimGetExtract(2);
							var звездочкаБаттона2 = iimGetExtract(3);
							var Повторите2 = iimGetExtract(4);
							var звездочкаТхт2 = iimGetExtract(5);
					 var вНачале = iimGetExtract().search(/rc-imageselect-error-dynamic-more" style="display:none"/igm)
				alert(вНачале)
						var вКонце = iimGetExtract()+"\nЛОГ результат поиска:\n"+iimGetExtract().search(/новые/igm)
alert(вНачале+"\n\n============\n\n"+вКонце)
				var _ = " \nNEW:\n"			
iimDisplay("=*Подтв*:"+Подтвердить+_+Подтвердить2+"\n\n=Пропустить:"+Пропустить+_+Пропустить2+"\n\n=Далее:"+Далее+_+Далее2+"\n\n=ЗвездочкиБаттона:"+звездочкаБаттона+_+звездочкаБаттона2+"\n\n=Повторите:(задание рекапчи):"+Повторите+_+Повторите2+"\n\n=звездыТхт: "+звездочкаТхт+_+звездочкаТхт2)

iimDisplay((Подтвердить==Подтвердить2)+_+(Пропустить==Пропустить2)+_+(Далее==Далее2)+_+(звездочкаБаттона==звездочкаБаттона2)+_+(Повторите==Повторите2)+_+(звездочкаТхт==звездочкаТхт2))

                    wait(2);}}
			/////////////
       /////////////
/////////////
	  /////////////////////////////// ////////////////идем к 2 картинке: 
		 /////////////
            iimPlayCode('ONDOWNLOAD FOLDER='+Path+' FILE=cap.jpg WAIT=YES\n'+f2+'TAG POS=1 TYPE=DIV ATTR=class:rc-imageselect-payload CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT');

            
            wait(2);resize();wait(2);  // <--- Уменьшаем картинку
            
            iimPlayCode('TAB OPEN\nTAB T=2');

      /*** -= Отправляем на распознавание =- ***/

				for(sk=0; sk<=9; sk++){ 
					 iimPlayCode(time30+'URL GOTO=imacros2.rucaptcha.com/new/');
					 iimPlayCode(step0+'TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:key CONTENT='+key);
					 iimPlayCode(step0+'TAG POS=1 TYPE=INPUT:FILE ATTR=TYPE:file CONTENT='+Path+'cap2.jpg');
					 iimPlayCode(time80+'TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=*');
					 iimPlayCode(step0+'TAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT');  
					if(iimGetExtract().search(/\d/)!=-1){     
					 c=iimGetExtract().match(/\d+/g).join(''); 
					 iimDisplay(c);
					 if(iimGetExtract().indexOf("ERROR")<0)  break;
					}
				}
				
				wait(2); iimDisplay('окно закрываетса!!!'); iimPlayCode('TAB CLOSE');
	 }                                                  
                     
            if(Number(c)>0){
                for(k=0; k<c.length; k++){
                    iimPlayCode(step0+f2+'TAG POS='+c[k]+' TYPE=DIV ATTR=CLASS:rc-imageselect-checkbox');}
                    iimPlayCode(time30+f2+'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(3)>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV" BUTTON=0'); //<--- Код нажатия кнопки Продолжить, на некоторых сайтах может отличаться
                    iimPlayCode(time30+f2+'EVENT TYPE=CLICK SELECTOR="#recaptcha-verify-button" BUTTON=0');
                    wait(2);}
                    /////////////
       ///////////// 	/////////////усе со 2 картинкой.
				  /////////////
			iimPlayCode(step0+f1+'TAG POS=1 TYPE=DIV ATTR=CLASS:*rc-anchor-checkbox-holder EXTRACT=HTM');
			if(iimGetExtract().indexOf('checked="true')>0){  
				iimPlayCode('TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:form-rate ATTR=*')
				wait(1)
			}
			
				
				iimPlayCode('TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:form-rate ATTR=*')
				wait(1)
		
		try{do{ iimPlayCode(modemKostia);ip1=iimGetLastExtract(1);ip2=iimGetLastExtract(2)} 
		while((testModem1(ip1)==testModem2(ip2))||(testModem2(ip2)=="#EANF#"))
			}catch(r){}
}			
  
	