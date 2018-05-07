function распознатьКапчу(рукапчаКлюч) {
    iimSet("рукапчаКлюч", рукапчаКлюч);
    iimPlayCode('SET !REPLAYSPEED fast\nSET !ERRORIGNORE YES
    FILTER TYPE=IMAGES STATUS=OFF\n ONDOWNLOAD FOLDER="C:\\" FILE=cap.jpg WAIT=YES
    TAG POS=1 TYPE=IMG ATTR=SRC:https://www.avito.ru/captcha?* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT\n 
    TAB OPEN\nTAB T=2\n 
    URL GOTO=http://imacros2.rucaptcha.com/new/\n 
    TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:key CONTENT={{рукапчаКлюч}}\n
    TAG POS=1 TYPE=INPUT:FILE ATTR=NAME:file CONTENT="C:\\cap.jpg"\n 
    ONDIALOG POS=1 BUTTON=OK CONTENT=\n TAG POS=1 TYPE=INPUT:SUBMIT ATTR=*\n
    SET !EXTRACT NULL\n WAIT SECONDS=3\n TAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT\n
    TAB T=1\n 
    TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=NAME:captcha CONTENT={{!EXTRACT}}');
};


распознатьКапчу("6440c629b2418bf14c6ca56d0e7e21d0")
