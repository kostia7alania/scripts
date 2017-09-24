var fast;
var fast2;
var medium;
fast = "wait seconds=2\n SET !TIMEOUT_STEP 1\n SET !TIMEOUT_PAGE 1\n SET !ERRORIGNORE YES\n SET !REPLAYSPEED FAST\n";
fast2 = "wait seconds=4\n SET !TIMEOUT_STEP 5\n SET !TIMEOUT_PAGE 9\n SET !ERRORIGNORE YES\n SET !REPLAYSPEED FAST\n";
medium =  "wait seconds=4\n SET !TIMEOUT_STEP 9\n SET !TIMEOUT_PAGE 15\n SET !ERRORIGNORE YES\n SET !REPLAYSPEED medium\n";


iimSet ("TEL", "89773303695");
iimSet ("login", "kostia7alania789");
iimSet ("loginASK", "kostia7alania789");
iimSet ("MAIL", "kostia7alania789@mail.ru");

var m_vk_login;
m_vk_login = "URL GOTO = http://m.vk.com/login?\n TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:https://login.vk.com/?act=login&_origin=* ATTR=NAME:email CONTENT={{TEL}}\n"
m_vk_login += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:https://login.vk.com/?act=* ATTR=NAME:pass CONTENT=kostia22\n"
m_vk_login += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:https://login.vk.com/?act=* ATTR=*\n"


iimDisplay("Логинимся");
var begin;
begin = "code:"+fast
begin += "tab closeallothers\n URL GOTO=http://addmefast.com/\n";
begin += "tab open\n tab t=2\n URL GOTO=http://vk.com/\n";
begin += "tab open\n tab t=3\n URL GOTO=http://www.ok.ru/\n";
begin += "tab open\n tab t=4\n URL GOTO=https://www.facebook.com/login.php\n";
begin += "tab open\n tab t=5\n URL GOTO=https://twitter.com/login/\n";
begin += "tab open\n tab t=6\n URL GOTO=https://www.instagram.com/\n";
begin += "tab open\n tab t=7\n URL GOTO=https://accounts.google.com/ServiceLogin\n";
begin += "tab open\n tab t=8\n URL GOTO=http://www.tsu.co/#sign_in\n";
begin += "tab open\n tab t=9\n URL GOTO=https://myspace.com/signin\n";
begin += "tab open\n tab t=10\n URL GOTO=http://www.stumbleupon.com/\n";
begin += "tab open\n tab t=11\n URL GOTO=https://soundcloud.com/\n";
begin += "tab open\n tab t=12\n URL GOTO=https://soundcloud.com/chilloutsounds\n";
begin += "tab t=1\n TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=NAME:email CONTENT={{MAIL}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=NAME:password CONTENT=kostia22\n TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=NAME:login_button\n TAG POS=1 TYPE=INPUT:BUTTON FORM=ID:agreementForm ATTR=NAME:agreement_button\n URL GOTO=http://addmefast.com/free_points/myspace\n TAG POS=1 TYPE=INPUT:TEXT FORM=ID:network_acc_form ATTR=ID:a_username CONTENT={{логин}}\n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:network_acc_form ATTR=NAME:save\n";
begin += "tab t=2\n"+m_vk_login + "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:quick_login_form ATTR=ID:quick_email CONTENT={{TEL}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:quick_login_form ATTR=ID:quick_pass CONTENT=kostia22\n TAG POS=1 TYPE=BUTTON ATTR=ID:quick_login_button\n TAG POS=1 TYPE=INPUT:SUBMIT ATTR=*\n";
begin += "tab t=3\n TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:https://www.ok.ru/https ATTR=ID:field_email CONTENT={{TEL}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:https://www.ok.ru/https ATTR=ID:field_password CONTENT=kostia22\n TAG POS=2 TYPE=INPUT:SUBMIT FORM=ACTION:https://www.ok.ru/https ATTR=*\n";
begin += "tab t=4\n TAG POS=1 TYPE=INPUT:TEXT FORM=ID:login_form ATTR=ID:email CONTENT={{MAIL}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:login_form ATTR=ID:pass CONTENT=kostia22\n TAG POS=1 TYPE=BUTTON FORM=ID:login_form ATTR=ID:loginbutton\n URL GOTO=https://www.facebook.com/login.php\n TAG POS=1 TYPE=INPUT:TEXT FORM=ID:login_form ATTR=ID:email CONTENT={{TEL}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:login_form ATTR=ID:pass CONTENT=kostia22\n TAG POS=1 TYPE=BUTTON FORM=ID:login_form ATTR=ID:loginbutton\n";
begin += "tab t=4\n TAG POS=1 TYPE=INPUT:TEXT FORM=ID:login_form ATTR=ID:email CONTENT={{TEL}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:login_form ATTR=ID:pass CONTENT=kostia22\n TAG POS=1 TYPE=BUTTON FORM=ID:login_form ATTR=ID:loginbutton\n URL GOTO=https://www.facebook.com/login.php\n TAG POS=1 TYPE=INPUT:TEXT FORM=ID:login_form ATTR=ID:email CONTENT={{TEL}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:login_form ATTR=ID:pass CONTENT=kostia22\n TAG POS=1 TYPE=BUTTON FORM=ID:login_form ATTR=ID:loginbutton\n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:login_form ATTR=ID:u_0_2\n";
begin += "tab t=5\n TAG POS=2 TYPE=INPUT:TEXT FORM=ACTION:https://twitter.com/sessions ATTR=NAME:session[username_or_email] CONTENT={{mail}}\n TAG POS=2 TYPE=INPUT:PASSWORD FORM=ACTION:https://twitter.com/sessions ATTR=NAME:session[password] CONTENT=kostia22\n TAG POS=1 TYPE=BUTTON FORM=ACTION:https://twitter.com/sessions ATTR=TXT:Log<SP>in\n";
begin += medium+"tab t=6\n TAG POS=1 TYPE=A ATTR=TXT:Log<SP>in<SP>as<SP>{{login}}\n URL GOTO=https://www.instagram.com/\n TAG POS=1 TYPE=A ATTR=TXT:Log<SP>in\n TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=NAME:username CONTENT={{login}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=NAME:password CONTENT=kostia22\n TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Log<SP>in\n";
begin += "tab t=7\n TAG POS=1 TYPE=INPUT:EMAIL FORM=ACTION:https://accounts.google.com/ServiceLoginAuth ATTR=NAME:Email CONTENT={{MAIL}}\n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:https://accounts.google.com/ServiceLoginAuth ATTR=NAME:signIn\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:https://accounts.google.com/ServiceLoginAuth ATTR=NAME:Passwd CONTENT=kostia22\n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:https://accounts.google.com/ServiceLoginAuth ATTR=NAME:signIn\n";
begin += "tab t=8\n TAG POS=1 TYPE=INPUT:TEXT FORM=ID:new_user ATTR=ID:user_login CONTENT={{MAIL}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:new_user ATTR=ID:user_password CONTENT=kostia22\n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:new_user ATTR=ID:sign-in-form-submit\n";
begin += "tab t=9\n TAG POS=1 TYPE=INPUT:TEXT FORM=ID:signInForm ATTR=ID:login.email CONTENT={{MAIL}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:signInForm ATTR=ID:login.password CONTENT=kostia22\n TAG POS=2 TYPE=BUTTON FORM=ID:signInForm ATTR=TXT:Sign<SP>In\n";
begin += "tab t=10\n TAG POS=1 TYPE=DIV ATTR=TXT:Login\n TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:email-username CONTENT={{LOGIN}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:password-login CONTENT=kostia22\n TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Login\n";
begin += "tab t=11\n TAG POS=2 TYPE=BUTTON ATTR=TXT:Sign<SP>in\n TAB T=12\n TAG POS=1 TYPE=A ATTR=TXT:Sign<SP>in<SP>with<SP>Facebook\n TAG POS=1 TYPE=INPUT:TEXT FORM=ID:login_form ATTR=ID:email CONTENT={{TEL}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:login_form ATTR=ID:pass CONTENT=kostia22\n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:login_form ATTR=ID:u_0_2\n TAG POS=1 TYPE=BUTTON FORM=ID:platformDialogForm ATTR=NAME:__CONFIRM__\n TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:accept-form-oauth ATTR=ID:user_terms_of_use CONTENT=YES\n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:accept-form-oauth ATTR=ID:signup_authorize\n ";
begin += "tab t=10\n URL GOTO=http://www.stumbleupon.com/\n";
begin += "tab t=10\n TAG POS=1 TYPE=DIV ATTR=TXT:Login\n TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:email-username CONTENT={{LOGIN}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:password-login CONTENT=kostia22\n TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Login\n";
begin += "tab t=12\n TAG POS=1 TYPE=BUTTON ATTR=TXT:Sign<SP>in\n TAB T=13\n TAG POS=1 TYPE=INPUT:TEXT FORM=ID:oauth2-login-form ATTR=ID:username CONTENT={{MAIL}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:oauth2-login-form ATTR=ID:password CONTENT=kostia22\n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:oauth2-login-form ATTR=ID:authorize\n TAB T=12\n"; 
begin += "TAB T=7\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:gaia_loginform ATTR=ID:Passwd CONTENT=kostia22\n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:gaia_loginform ATTR=ID:next\n"
begin += "tab closeallothers";


iimPlay(begin);
var loop;
loop = 100;

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

iimSet ("MAIL", "kostia7alania789@mail.ru");
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/login/incorrect\n TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=NAME:email CONTENT={{MAIL}}\n TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=NAME:password CONTENT=kostia22\n TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=NAME:login_button");

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
iimDisplay("проверка логинга, шаг №"+i);
 
iimDisplay("пинтерест, шаг #"+i+" из "+loop);
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/pinterest_repin\n TAG POS=1 TYPE=DIV ATTR=TXT:Repin\n TAB T=2\n TAG POS=1 TYPE=BUTTON ATTR=TYPE:button&&CLASS:Button<SP>Module<SP>btn<SP>hasText<SP>isBrioFlat<SP>pinitLocalization<SP>primary<SP>primaryOnHover<SP>repinSmall<SP>repinBtn<SP>rounded\n  TAB T=1\n wait seconds=2\n TAB CLOSEALLOTHERS");
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/pinterest_like\n TAG POS=1 TYPE=DIV ATTR=TXT:Like\n TAB T=2\n TAG POS=1 TYPE=BUTTON ATTR=TXT:Like\n TAB T=1\n wait seconds=3\n TAB CLOSEALLOTHERS");
iimDisplay("пинтерест, шаг #"+i+"из"+loop);
iimPlay("code:"+fast2+"wait seconds=2\n URL GOTO=http://addmefast.com/free_points/soundcloud_follow\n TAG POS=1 TYPE=A ATTR=TXT:Website<SP>Hits\n TAB T=2\n TAB T=1\n wait seconds = 200\n wait seconds=3\n TAB CLOSEALLOTHERS");
iimDisplay("стамблеапон, шаг #"+i+"из"+loop);
iimPlay("code:"+fast2+" URL GOTO=http://addmefast.com/free_points/stumbleupon_followers\n TAG POS=1 TYPE=DIV ATTR=TXT:Follow\n TAB T=2\n TAG POS=1 TYPE=SPAN ATTR=TXT:follow\n wait seconds=3\n TAB T=1\n TAB CLOSEALLOTHERS");

}
 
iimDisplay("вродь все!; все "+i+"-шагов проделаны");