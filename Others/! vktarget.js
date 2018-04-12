var stroka = "";
var vklike;
vklike = "SET !ERRORIGNORE YES \n TAG POS=1 TYPE=A ATTR=HREF:http://*vk.com/* \n";
vklike += "TAG POS=1 TYPE=A ATTR=HREF:http://*facebook.com/* \n";
vklike += "TAB T=2 \n";
vklike += "TAG POS=1 TYPE=SPAN ATTR=ID:*like_link* \n";
vklike += "TAG POS=1 TYPE=BUTTON ATTR=ONCLICK:videoview.like(this) \n";
vklike += "TAG POS=1 TYPE=BUTTON ATTR=CLASS:*<SP>PageLikeButton<SP>* \n";
vklike += "TAG POS=1 TYPE=A ATTR=CLASS:UFILikeLink<SP* \n"; //фблайк на старнице
vklike += "WAIT SECONDS=1 \n";
vklike += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
vklike += "TAG POS=1 TYPE=DIV ATTR=DATA-TASK_URL:vk.com/* \n";
vklike += "TAG POS=1 TYPE=DIV ATTR=DATA-TASK_URL:facebook.com/* \n";
vklike += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
vklike += "WAIT SECONDS=10 \n";
//----------------------------------------------------------------------------------------
var vksoobschestvo;
vksoobschestvo = "SET !ERRORIGNORE YES \n TAG POS=1 TYPE=A ATTR=TARGET:_blank&&DATA-BIND:url&&HREF:http://vk.com/* \n";
vksoobschestvo += "TAB T=2 \n";
vksoobschestvo += "TAG POS=1 TYPE=BUTTON ATTR=ID:subscribe_button \n";// для Подписки на новости
vksoobschestvo += "TAG POS=1 TYPE=BUTTON ATTR=ONCLICK:Groups.enter(*)&&CLASS:flat_button<SP>button_big<SP>button_wide \n"; // для вступления в группу
vksoobschestvo += "WAIT SECONDS=5 \n";
vksoobschestvo += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
vksoobschestvo += "TAG POS=1 TYPE=DIV ATTR=DATA-BIND:check&&CLASS:vkt-content__list-item-check<SP>right \n";
vksoobschestvo += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
vksoobschestvo += "WAIT SECONDS=10 \n";
//---------------------------------------------------------------------------------------
var vkraskazogruppe;
vkraskazogruppe = "SET !ERRORIGNORE YES \n TAG POS=1 TYPE=A ATTR=HREF:http://*vk.com/* \n";
vkraskazogruppe += "TAB T=2 \n";
vkraskazogruppe += "TAG POS=1 TYPE=BUTTON ATTR=ID:subscribe_button \n";// для Подписки на новости
vkraskazogruppe += "TAG POS=1 TYPE=BUTTON ATTR=ONCLICK:Groups.enter(*)&&CLASS:flat_button<SP>button_big<SP>button_wide \n"; // для вступления в группу
vkraskazogruppe += "TAG POS=1 TYPE=A ATTR=CLASS:*_share_link \n";
vkraskazogruppe += "TAG POS=1 TYPE=BUTTON ATTR=ONCLICK:cur.sbSend()&&ID:like_share_send&&CLASS:flat_button<SP>dark_box_btn<SP>fl_l \n";
vkraskazogruppe += "WAIT SECONDS=5 \n";
vkraskazogruppe += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
vkraskazogruppe += "TAG POS=1 TYPE=DIV ATTR=DATA-BIND:check&&CLASS:vkt-content__list-item-check<SP>right \n";
vkraskazogruppe += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
vkraskazogruppe += "WAIT SECONDS=10 \n";
//---------------------------------------------------------------------------------------
var vkraskazdruzyam;
vkraskazdruzyam = "SET !ERRORIGNORE YES \n TAG POS=1 TYPE=A ATTR=TARGET:_blank&&DATA-BIND:url&&HREF:http://vk.com/wall* \n";
vkraskazdruzyam += "TAB T=2 \n";
vkraskazdruzyam += "TAG POS=1 TYPE=A ATTR=ONCLICK:Wall.likeShareCustom('*')&&CLASS:reply_link \n";
vkraskazdruzyam += "WAIT SECONDS=1 \n";
vkraskazdruzyam += "TAG POS=1 TYPE=BUTTON ATTR=ONCLICK:cur.sbSend()&&ID:like_share_send&&CLASS:flat_button<SP>dark_box_btn<SP>fl_l \n";
vkraskazdruzyam += "WAIT SECONDS=2 \n";
vkraskazdruzyam += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
vkraskazdruzyam += "TAG POS=1 TYPE=DIV ATTR=DATA-TASK_URL:vk.com/* \n";
vkraskazdruzyam += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
vkraskazdruzyam += "WAIT SECONDS=10 \n";
//----------------------------------------------------------------------------------------
var retwitt;
retwitt = "SET !ERRORIGNORE YES \n TAG POS=1 TYPE=A ATTR=TARGET:_blank&&DATA-BIND:url&&HREF:http://twitter.com/* \n";
retwitt += "TAB T=2 \n";
retwitt += "TAG POS=1 TYPE=BUTTON ATTR=TYPE:button&&DATA-MODAL:ProfileTweet-retweet&&CLASS:ProfileTweet-actionButton<SP><SP>js-actionButton<SP>js-actionRetweet \n";
retwitt += "WAIT SECONDS=2 \n";
retwitt += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TYPE:button&&CLASS:btn<SP>primary-btn<SP>retweet-action \n";
retwitt += "WAIT SECONDS=2 \n";
retwitt += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
retwitt += "TAG POS=1 TYPE=DIV ATTR=DATA-TASK_URL:twitter.com/* \n";
retwitt += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
retwitt += "WAIT SECONDS=10 \n";
//----------------------------------------------------------------------------------------
var yotubkanal;
yotubkanal = "SET !ERRORIGNORE YES \n TAG POS=1 TYPE=A ATTR=HREF:http://youtube.com/channel/* \n";
yotubkanal += "TAB T=2 \n";
yotubkanal += "TAG POS=1 TYPE=BUTTON ATTR=TYPE:button&&CLASS:yt-uix-button<SP>yt-uix-button-size-default<SP>yt-uix-button-subscribe-branded<SP>yt-uix-button-has-icon<SP>no-icon-markup<SP>yt-uix-subscription-button<SP>yt-can-buffer \n";
yotubkanal += "WAIT SECONDS=1 \n";
yotubkanal += "TAB T=1 \n TAB CLOSEALLOTHERS \n WAIT SECONDS=15 \n";
yotubkanal += "TAG POS=1 TYPE=DIV ATTR=DATA-TASK_TYPE:23&&DATA-TASK_URL:youtube.com/channel/* \n";
yotubkanal += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
yotubkanal += "WAIT SECONDS=10 \n";
//----------------------------------------------------------------------------------------
var prosmotrvideo;
prosmotrvideo = "SET !ERRORIGNORE YES \n TAG POS=1 TYPE=A ATTR=TARGET:_blank&&DATA-BIND:url&&HREF:http://youtube.com/* \n";
prosmotrvideo += "TAB T=2 \n";
prosmotrvideo += "WAIT SECONDS=70 \n";
prosmotrvideo += "TAB T=1 \n WAIT SECONDS=1 \n";
prosmotrvideo += "TAG POS=1 TYPE=DIV ATTR=DATA-BIND:check&&CLASS:vkt-content__list-item-check<SP>right \n";
prosmotrvideo += "TAB T=1 \n WAIT SECONDS=10 \n TAG POS=1 TYPE=DIV ATTR=DATA-BIND:check&&CLASS:vkt-content__list-item-check<SP>right \n";
prosmotrvideo += "TAB T=1 \n WAIT SECONDS=10 \n TAG POS=1 TYPE=DIV ATTR=DATA-BIND:check&&CLASS:vkt-content__list-item-check<SP>right \n";
prosmotrvideo += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
prosmotrvideo += "WAIT SECONDS=10 \n";
//----------------------------------------------------------------------------------------
var nravitsapodvideo;
nravitsapodvideo = "SET !ERRORIGNORE YES \n TAG POS=1 TYPE=A ATTR=TARGET:_blank&&DATA-BIND:url&&HREF:http://youtube.com/* \n";
nravitsapodvideo += "WAIT SECONDS=1 \n";
nravitsapodvideo += "TAB T=2 \n";
nravitsapodvideo += "TAG POS=1 TYPE=BUTTON ATTR=ARIA-LABEL:Видео<SP>понравилось<SP>вам<SP>и<SP>ещё<SP>* \n";
nravitsapodvideo += "WAIT SECONDS=2 \n";
nravitsapodvideo += "TAB T=1 \n TAB CLOSEALLOTHERS \n WAIT SECONDS=15 \n";
nravitsapodvideo += "TAG POS=1 TYPE=DIV ATTR=DATA-BIND:check&&CLASS:vkt-content__list-item-check<SP>right \n";
nravitsapodvideo += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
nravitsapodvideo += "WAIT SECONDS=10 \n";
//----------------------------------------------------------------------------------------
var nenravitsapodvideo;
nenravitsapodvideo = "SET !ERRORIGNORE YES \n TAG POS=1 TYPE=A ATTR=TARGET:_blank&&DATA-BIND:url&&HREF:http://youtube.com/* \n";
nenravitsapodvideo += "WAIT SECONDS=1 \n";
nenravitsapodvideo += "TAB T=2 \n";
nenravitsapodvideo += "TAG POS=1 TYPE=BUTTON ATTR=ARIA-LABEL:Видео<SP>не<SP>понравилось<SP>вам<SP>и<SP>ещё<SP>* \n";
nenravitsapodvideo += "WAIT SECONDS=2 \n";
nenravitsapodvideo += "TAB T=1 \n TAB CLOSEALLOTHERS \n WAIT SECONDS=15 \n";
nenravitsapodvideo += "TAG POS=1 TYPE=DIV ATTR=DATA-BIND:check&&CLASS:vkt-content__list-item-check<SP>right \n";
nenravitsapodvideo += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
nenravitsapodvideo += "WAIT SECONDS=10 \n";
//----------------------------------------------------------------------------------------
var podpisnatwit;
podpisnatwit = "SET !ERRORIGNORE YES \n TAG POS=1 TYPE=A ATTR=TARGET:_blank&&DATA-BIND:url&&HREF:http://twitter.com/* \n";
podpisnatwit += "TAB T=2 \n";
podpisnatwit += "TAG POS=1 TYPE=BUTTON ATTR=TYPE:button&&CLASS:user-actions-follow-button<SP>js-follow-btn<SP>follow-button<SP>btn \n";
podpisnatwit += "WAIT SECONDS=1 \n";
podpisnatwit += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
podpisnatwit += "TAG POS=1 TYPE=DIV ATTR=DATA-BIND:check&&CLASS:vkt-content__list-item-check<SP>right \n";
podpisnatwit += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
podpisnatwit += "WAIT SECONDS=10 \n";
//----------------------------------------------------------------------------------------
var raskazgplus;
raskazgplus = "SET !ERRORIGNORE YES \n TAG POS=1 TYPE=A ATTR=TARGET:_blank&&DATA-BIND:url&&HREF:http* \n";
raskazgplus += "TAB T=2 \n";
raskazgplus += "FRAME NAME='I*_*' \n";
raskazgplus += "TAG POS=1 TYPE=DIV ATTR=ID:button \n";
raskazgplus += "WAIT SECONDS=1 \n";
raskazgplus += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
raskazgplus += "TAG POS=1 TYPE=DIV ATTR=DATA-BIND:check&&CLASS:vkt-content__list-item-check<SP>right \n";
raskazgplus += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
raskazgplus += "WAIT SECONDS=10 \n";
//----------------------------------------------------------------------------------------
var gplus1;
gplus1 = "SET !ERRORIGNORE YES \n TAG POS=1 TYPE=A ATTR=TARGET:_blank&&DATA-BIND:url&&HREF:http* \n";
gplus1 += "TAB T=2 \n";
gplus1 += "WAIT SECONDS=1 \n";
gplus1 += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>C-WIZ>DIV:nth-of-type(5)>DIV>C-WIZ>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>DIV>DIV" BUTTON=0 \n';
gplus1 += "WAIT SECONDS=15 \n";
gplus1 += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
gplus1 += "TAG POS=1 TYPE=DIV ATTR=DATA-BIND:check&&CLASS:vkt-content__list-item-check<SP>right \n";
gplus1 += "TAB T=1 \n TAB CLOSEALLOTHERS \n";
gplus1 += "WAIT SECONDS=10 \n";
//-----------------------------------------------------------------------------------------
var k=0; //количество итераций, после которого произойдет переход на страницу с заданиями
iimPlayCode("URL GOTO=https://vktarget.ru/list/");
while (true) {
iimPlayCode("TAG POS=1 TYPE=DIV ATTR=DATA-RELOAD:list* \n WAIT SECONDS=10");
iimPlayCode("SET !EXTRACT NULL \n TAG POS=1 TYPE=P ATTR=DATA-BIND:type_name EXTRACT=TXT"); stroka = iimGetLastExtract();
if (stroka == "Поставьте лайк настранице"){iimPlayCode(vklike);}
if (stroka == "Нажмитерассказать друзьям"){iimPlayCode(vkraskazdruzyam);}
if (stroka == "Подпишитесь наканал"){iimPlayCode(yotubkanal);}
if (stroka == "Посмотритевидео"){iimPlayCode(prosmotrvideo);}
if (stroka == "Поставьте 'Нравится'под видео"){iimPlayCode(nravitsapodvideo);}
if (stroka == "Поставьте 'Не нравится'под видео"){iimPlayCode(nenravitsapodvideo);}
if (stroka == "Подпишитесь нааккаунт"){iimPlayCode(podpisnatwit);}
//if (stroka == "Рассказать осайте"){iimPlayCode(raskazgplus);}
if (stroka == "Нажать кнопку '+1'под записью"){iimPlayCode(gplus1);}
if (stroka == "Ретвитнитезапись"){iimPlayCode(retwitt);}
if (stroka == "Вступите всообщество"){iimPlayCode(vksoobschestvo);}
if (stroka == "Расскажите огруппе"){iimPlayCode(vkraskazogruppe);}
iimPlayCode("WAIT SECONDS=15");
k++; if (k>100) {iimPlayCode("URL GOTO=https://vktarget.ru/list/"); k=0;}
}