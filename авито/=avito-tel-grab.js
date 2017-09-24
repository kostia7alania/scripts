for(g=0;g<500;g++){

	for(i=1;i<23;i++){
		iimSet('i',i);
		iimPlayCode(`
	set !replayspeed fast
	SET !EXTRACT_TEST_POPUP NO
	SET !ERRORIGNORE YES
	TAB T=1
	WAIT SECONDS=1
	TAG POS={{i}}  TYPE=A ATTR=CLASS:item-link EXTRACT=HREF
	SET !VAR2 {{!EXTRACT}}
	SET !EXTRACT NULL
	TAB OPEN
	TAB T=2
	URL GOTO={{!VAR2}} 
	TAG POS=1 TYPE=A ATTR=TXT:Показать<SP>номер
	TAG POS=1 TYPE=A ATTR=TXT:8* EXTRACT=HREF 
	set отчет {{!Extract}}
	set !extract null
	TAG POS=1 TYPE=DIV ATTR=CLASS:person-name<SP>js-person-name EXTRACT=txt
	add отчет {{!Extract}}
	set !extract null
	TAG POS=1 TYPE=DIV ATTR=CLASS:item-id EXTRACT=txt
	add отчет {{!Extract}}
	set !extract null
	TAG POS=1 TYPE=SPAN ATTR=CLASS:avito-address-text EXTRACT=txt
	add отчет {{!Extract}}
	set !extract {{отчет}}
	WAIT SECONDS=3
	SAVEAS TYPE=EXTRACT FOLDER=* FILE=12345.txt
	SET !EXTRACT NULL
	TAB CLOSE
	TAB T=1
	`)
	}
	iimPlayCode('TAG POS=1 TYPE=A ATTR=TXT:Следующие')
}