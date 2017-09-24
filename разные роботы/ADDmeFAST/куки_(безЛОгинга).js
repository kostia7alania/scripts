
var loop = 100;

for (i=1; i<=loop; i++) {
iimDisplay("вк_группы, шаг# "+i+"из"+loop);
iimPlay("code:"+fast2+"URL GOTO=http://addmefast.com/free_points/vkontakte_pages\n TAG POS=1 TYPE=DIV ATTR=TXT:Follow\n TAB T=2\n TAG POS=1 TYPE=A ATTR=TXT:Follow\n TAG POS=1 TYPE=BUTTON ATTR=ID:subscribe_button\n TAB T=1\n TAB CLOSEALLOTHERS"); 
iimPlay("code:"+fast2+"URL GOTO=http://addmefast.com/free_points/vkontakte_groups\n TAG POS=1 TYPE=DIV ATTR=TXT:Join\n TAB T=2\n TAG POS=1 TYPE=A ATTR=TXT:Join<SP>community\n TAG POS=1 TYPE=BUTTON ATTR=TXT:Join<SP>community\n TAB T=1\n wait seconds=2\n TAB CLOSEALLOTHERS");
 
iimDisplay("ок_группы, шаг# "+i+"из"+loop);
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/ok_group_join\n TAG POS=1 TYPE=DIV ATTR=TXT:Join\n TAB T=2\n TAG POS=1 TYPE=A ATTR=TXT:Присоединиться\n TAG POS=1 TYPE=A ATTR=TXT:Join\n TAB T=1\n wait seconds=2\n TAB CLOSEALLOTHERS");
iimDisplay("фб, шаг# "+i+"из"+loop);

iimPlay("code:"+fast2+"URL GOTO=http://addmefast.com/free_points/facebook_likes\n TAG POS=2 TYPE=DIV ATTR=CLASS:btn3\n TAB T=2\n TAG POS=1 TYPE=BUTTON ATTR=ID:u_0_1t\n TAB T=1\n wait seconds=2\n  TAB CLOSEALLOTHERS");
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/facebook_share\n TAG POS=1 TYPE=DIV ATTR=TXT:Share\n TAB T=2\n TAG POS=1 TYPE=BUTTON FORM=ID:platformDialogForm ATTR=ID:u_0_d\n TAB T=1");
iimPlay("CODE:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/facebook_subscribes\n TAG POS=1 TYPE=DIV ATTR=TXT:Follow\n TAB T=2\n TAG POS=1 TYPE=A ATTR=ID:u_ps_0_0_3n\n TAB T=1\n wait seconds=2\n TAB CLOSEALLOTHERS");
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/facebook_post_like\n TAG POS=1 TYPE=DIV ATTR=TXT:Like\n TAB T=2\n TAG POS=5 TYPE=A ATTR=TXT:Like\n TAB T=1\n wait seconds=2\n TAB CLOSEALLOTHERS");
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/instagram\n TAG POS=7 TYPE=SPAN ATTR=TXT:\n TAB T=2\n TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow\n TAB T=1\n wait seconds=2\n TAB CLOSEALLOTHERS");
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/instagram_likes\n TAG POS=1 TYPE=DIV ATTR=TXT:Like\n TAB T=2\n TAG POS=1 TYPE=A ATTR=TXT:Like\n TAB T=1\n wait seconds=2\n TAB CLOSEALLOTHERS");
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/twitter\n TAG POS=1 TYPE=DIV ATTR=TXT:Follow\n TAB T=2\n TAG POS=1 TYPE=BUTTON FORM=ID:follow_btn_form ATTR=TXT:Follow\n TAB T=1\n wait seconds=2\n TAB CLOSEALLOTHERS");
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/twitter_retweets\n TAG POS=1 TYPE=DIV ATTR=TXT:Retweet\n TAB T=2\n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:retweet_btn_form ATTR=NAME:commit\n TAB T=1\n wait seconds=2\n TAB CLOSEALLOTHERS");
 
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/twitter_favorites\n TAG POS=1 TYPE=DIV ATTR=TXT:Favorite\n TAB T=2\n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:favorite_btn_form ATTR=NAME:commit\n TAB T=1\n wait seconds=2\n TAB CLOSEALLOTHERS");
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/youtube_likes\n TAG POS=1 TYPE=DIV ATTR=TXT:Like\n TAB T=2\n EVENT TYPE=CLICK SELECTOR=* BUTTON=0\n TAB T=1\n wait seconds=2\n TAB CLOSEALLOTHERS");
iimDisplay("саундклауд, шаг #"+i+"из"+loop);
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/soundcloud_follow\n TAG POS=1 TYPE=DIV ATTR=TXT:Follow\n TAB T=2\n TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow\n wait seconds=7\n TAB T=1\n TAB CLOSEALLOTHERS");
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/soundcloud_likes\n TAG POS=1 TYPE=DIV ATTR=TXT:Like\n TAB T=2\n TAG POS=1 TYPE=BUTTON ATTR=TXT:Like\n TAB T=1\n wait seconds=2\n TAB CLOSEALLOTHERS");
iimDisplay("тсуко, шаг №"+i);
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/tsuco_followers\n TAG POS=1 TYPE=DIV ATTR=TXT:Follow\n TAB T=2\n TAG POS=1 TYPE=A ATTR=TXT:Follow\n TAB T=1\n wait seconds=2\n TAB CLOSEALLOTHERS");
iimDisplay("майспейс, шаг #"+i+"из"+loop);
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/myspace\n TAG POS=1 TYPE=DIV ATTR=TXT:Connect\n TAB T=2\n TAG POS=1 TYPE=I ATTR=CLASS:close_18<SP>close&&TXT:\n TAG POS=4 TYPE=SPAN ATTR=TXT:\n TAB T=1\n wait seconds=2\n  TAB CLOSEALLOTHERS");
iimPlay("code:"+fast2+"wait seconds=3\n URL GOTO=http://addmefast.com/free_points/pinterest\n TAG POS=1 TYPE=DIV ATTR=TXT:Follow\n TAB T=2\n TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow\n TAB T=1\n TAB CLOSEALLOTHERS");
 
 
iimDisplay("пинтерест, шаг #"+i+" из "+loop);
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/pinterest_repin\n TAG POS=1 TYPE=DIV ATTR=TXT:Repin\n TAB T=2\n TAG POS=1 TYPE=BUTTON ATTR=TYPE:button&&CLASS:Button<SP>Module<SP>btn<SP>hasText<SP>isBrioFlat<SP>pinitLocalization<SP>primary<SP>primaryOnHover<SP>repinSmall<SP>repinBtn<SP>rounded\n  TAB T=1\n wait seconds=2\n TAB CLOSEALLOTHERS");
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/pinterest_like\n TAG POS=1 TYPE=DIV ATTR=TXT:Like\n TAB T=2\n TAG POS=1 TYPE=BUTTON ATTR=TXT:Like\n TAB T=1\n wait seconds=3\n TAB CLOSEALLOTHERS");
iimDisplay("пинтерест, шаг #"+i+"из"+loop);
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/soundcloud_follow\n TAG POS=1 TYPE=A ATTR=TXT:Website<SP>Hits\n TAB T=2\n TAB T=1\n wait seconds = 200\n wait seconds=3\n TAB CLOSEALLOTHERS");
iimDisplay("стамблеапон, шаг #"+i+"из"+loop);
iimPlay("code:"+fast2+" URL GOTO=http://addmefast.com/free_points/stumbleupon_followers\n TAG POS=1 TYPE=DIV ATTR=TXT:Follow\n TAB T=2\n TAG POS=1 TYPE=SPAN ATTR=TXT:follow\n wait seconds=3\n TAB T=1\n TAB CLOSEALLOTHERS");

}
 
iimDisplay("вродь все!; все "+i+"-шагов проделаны");