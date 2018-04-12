imns.FIO.writeTextFile(imns.FIO.openNode("C:\\1.txt")," .1. все пашет .!. ")
alert( imns.FIO.readTextFile(imns.FIO.openNode("C:\\1.txt")) );

 
  
for(i=0;i<1000;i++){
	iimPlayCode('wait seconds=1')
	try{saveFile("c:\\ipChanging.txt", 35); }catch(e){alert('=Диска С нету?!?;')}
	try{ 	var modemKostia = ('SET !REPLAYSPEED medium\n SET !TIMEOUT_STEP 20\nSET !EXTRACT NULL\n ONLOGIN USER=admin PASSWORD=admin1\n URL GOTO=192.168.1.1\n URL GOTO=192.168.1.1\n TAG POS=1 TYPE=A ATTR=HREF:http://192.168.1.1/#broadband.globals\n URL GOTO=http://192.168.1.1/#broadband.globals\nwait seconds=2\nTAG POS=1 TYPE=TD ATTR=CLASS:td_ip<SP>text EXTRACT=TXT\nTAG POS=1 TYPE=TD ATTR=TXT:Internet\nwait seconds=2\nTAG POS=1 TYPE=BUTTON FORM=NAME:editor ATTR=TXT:Применить\nwait seconds=14\nTAG POS=1 TYPE=TD ATTR=CLASS:td_ip<SP>text EXTRACT=TXT')
			function testModem1(ip1){x=ip1.split('.')[0]; y=ip1.split('.')[1]; ip1=x+"."+y; return ip1};
			function testModem2(ip2){x=ip2.split('.')[0];y=ip2.split('.')[1]; ip2=x+"."+y; return ip2};
			do{ iimPlayCode(modemKostia);ip1=iimGetLastExtract(1);ip2=iimGetLastExtract(2)} while((testModem1(ip1)==testModem2(ip2))||(testModem2(ip2)=="#EANF#"));
			} catch (r) {} 
	try{saveFile("c:\\ipChanging.txt", 3); }catch(e){alert('=Диска С нету?!?;')}
}



							