for(i=0;i<100;i++)
{	if(window.document.getElementsByTagName("body")[0].textContent.search( /Московская область/ )==-1) 
	{
		iimPlayCode(`TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ACTION:* ATTR=* CONTENT=YES
		ONDIALOG POS=1 BUTTON=OK CONTENT=
		EVENT TYPE=CLICK SELECTOR="#content>DIV>DIV>DIV>BUTTON" BUTTON=0`)
	}
	else{
		alert('finish!'); break;
		}
}