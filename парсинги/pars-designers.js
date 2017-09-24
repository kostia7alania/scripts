// f=0;
// for(g=0;g<1000;g++)
// {
	// for(i=0;i<40;i++){
		// f++;
		// iimSet('f',f); iimPlayCode(`TAG POS={{f}} TYPE=A ATTR=HREF:/user/* extract=href
									// SAVEAS TYPE=EXTRACT FOLDER=* FILE=pars-design.txt`)
	// }
	// iimPlayCode('TAG POS=1 TYPE=A ATTR=TXT:Показать<SP>еще\n wait seconds=1')
// }

for(i=0;i<10676;i++){
	iimSet('i',i);iimPlayCode(`CMDLINE !DATASOURCE pars-design.txt
 			SET !DATASOURCE_LINE {{i}}
			url goto={{!COL1}}
	SET !TIMEOUT_PAGE 1
	TAG POS=1 TYPE=A ATTR=TXT:Показать<SP>* 
	wait seconds=1
	TAG POS=27 TYPE=LI ATTR=* extract=txt
	SAVEAS TYPE=EXTRACT FOLDER=* FILE=pars-design-emails.txt`)
}