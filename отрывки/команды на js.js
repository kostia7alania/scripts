var pause = iimPlayCode('wait seconds=1')
window.document.getElementsByClassName("nowrap al fs-12")[0].style.background = "red";

window.document.getElementsByClassName("nowrap al fs-12")[0].focus();
window.document.getElementsByClassName("nowrap al fs-12")[0].click();
pause;
window.document.getElementsByClassName("gwt-SuggestBox it")[0].focus();
window.document.getElementsByClassName("gwt-SuggestBox it")[0].val("sex");
//onSiteNowCityLink


// function loadScriptFromURL(url) {
    // var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),
        // async = false;
    // request.open('GET', url, async);
    // request.send();
    // if (request.status !== 200) {
        // var message = 'an error occurred while loading script at url: ' + url + ', status: ' + request.status;
        // iimDisplay(message);
        // return false;
    // }
    // eval(request.response);
    // return true;
// }
	// loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');		
	// $ = window.$,
	// JQuery = window.JQuery;

 // function classWork(класс,ид,цвет) {}
// classWork("cardsList_li show-on-hover",0,"red")
// //classWork("tico_img ic ic_group",0,"green")

// $('.photoWrapper').mouseenter();
// li.cardsList_li:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)

		// iimPlayCode(`SET !ERRORIGNORE YES
		// EVENT TYPE=CLICK SELECTOR="#hook_Block_MainContainer>DIV:nth-of-type(5)>TABLE>TBODY>TR>TD>DIV>DIV>DIV>DIV>UL>LI:nth-of-type(4)>A>SPAN" BUTTON=0
		// SET !VAR1 EVAL("var s=Math.floor(Math.random()*2+1); if(s==2){'7'} else '4'")
		// EVENT TYPE=CLICK SELECTOR="#hook_Loader_InviteUserToGroup2GroupsListLoader>DIV>DIV:nth-of-type({{!VAR1}})>A>DIV>DIV>IMG" BUTTON=0`)
	 
	 
	 
	 // var xhr = new XMLHttpRequest();
// xhr.open('GET', '1.txt', false);
// xhr.send();
// if (xhr.status != 200) {alert( xhr.status + ': ' + xhr.statusText );} else {alert( xhr.responseText );}	




// njuskalo=new XMLHttpRequest();
// njuskalo.onreadystatechange = function() {if (njuskalo.readyState == 4) {console.log(njuskalo.responseText);}}
// njuskalo.open("GET","http://www.njuskalo.hr/usb-memorija/mem-ufd-8gb-jf300-ts-oglas-15090605");
// njuskalo.send();
 $('control-self control-self-submit button button-solid button-blue button-large').click();
 window.document.getElementsByClassName("control-self control-self-password ").val='sex'
 
 
$( ".control-self control-self-submit button button-solid button-blue button-large" ).submit();


//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////


    var area = document.getElementsByClassName('cke_dialog_ui_input_textarea');// получаем элемент с id input
    area.value = "data"; // заносим текст в элемент
	alert()

//читать весь блокнот:
// var ex=imns.FIO.readTextFile(imns.FIO.openNode("C:\\1.txt"))
// var arr = ex.split('\n');
// alert("длина дам аррА" +arr.length+" + сам ар:\n"+arr+"+-=========================--ex:"+ex)

//читать опред строку из блокнота:
var menu=imns.FIO.readTextFile(imns.FIO.openNode("C:\\vkusno-pirogi\\menu.txt"))
var menu = menu.split('\n');
for(i=1;i<32;i++)	{
	var ex=imns.FIO.readTextFile(imns.FIO.openNode("C:\\vkusno-pirogi\\0000"+i+".txt"))
	var html = ex.split('\n');
	iimSet('html',html);
	iimSet('i',i);iimSet('СТРОКА',menu[i-1]);
iimPlayCode(`
set !replayspeed fast
set !errorignore yes
url goto=http://vkusno-pirogi.ru/admin/index.php?route=module/journal2&token=4vZSs5PiOyC3aIoCYOJrlmTq6TC5zDYR#/module/product_tabs/form
TAG POS=1 TYPE=INPUT:TEXT ATTR=* CONTENT={{СТРОКА}}
TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT="<span class='glyphicon glyphicon-road'></span>  &nbsp Доставка и оплата"
set !replayspeed medium
EVENT TYPE=CLICK SELECTOR="#journal-body>DIV:nth-of-type(2)>ACCORDION>DIV>DIV>DIV:nth-of-type(2)>DIV>UL>LI:nth-of-type(5)>SPAN:nth-of-type(2)>SPAN>LABEL:nth-of-type(2)" BUTTON=0
EVENT TYPE=CLICK SELECTOR="#journal-body>DIV:nth-of-type(2)>ACCORDION>DIV>DIV>DIV:nth-of-type(2)>DIV>UL>LI:nth-of-type(6)>SPAN:nth-of-type(2)>A" BUTTON=0
'TAG POS=1 TYPE=A ATTR=TXT:Add
URL GOTO=javascript:window.scrollTo(0,0)
EVENT TYPE=MOUSEDOWN SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(5)>DIV:nth-of-type(2)>ACCORDION>DIV>DIV>DIV:nth-of-type(2)>DIV>UL>LI:nth-of-type(6)>SPAN:nth-of-type(2)>UL>LI>DIV>A>SPAN" BUTTON=0
EVENTS TYPE=KEYPRESS SELECTOR="#select2-drop>DIV>INPUT" CHARS=с
EVENT TYPE=KEYPRESS SELECTOR="#select2-drop>DIV>INPUT" KEY=8
EVENTS TYPE=KEYPRESS SELECTOR="#select2-drop>DIV>INPUT" CHARS={{СТРОКА}}
wait seconds=1
EVENT TYPE=CLICK SELECTOR="#journal-body>DIV:nth-of-type(2)>ACCORDION>DIV>DIV>DIV:nth-of-type(2)>DIV>UL>LI:nth-of-type(19)>SPAN:nth-of-type(2)>DIV>ACCORDION>DIV>DIV>DIV>A>DIV" BUTTON=0
EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(5)>DIV:nth-of-type(2)>ACCORDION>DIV>DIV>DIV:nth-of-type(2)>DIV>UL>LI:nth-of-type(19)>SPAN:nth-of-type(2)>DIV>ACCORDION>DIV>DIV>DIV>A>DIV" BUTTON=0
EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(5)>DIV:nth-of-type(2)>ACCORDION>DIV>DIV>DIV:nth-of-type(2)>DIV>UL>LI:nth-of-type(19)>SPAN:nth-of-type(2)>DIV>ACCORDION>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>SPAN>SPAN:nth-of-type(2)>SPAN>SPAN:nth-of-type(3)>A>SPAN:nth-of-type(2)" BUTTON=0
`)


iimPlayMacro(`EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(32)>TABLE>TBODY>TR>TD>DIV>TABLE>TBODY>TR:nth-of-type(2)>TD>TABLE>TBODY>TR>TD>A>SPAN" BUTTON=0
EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>A:nth-of-type(2)" BUTTON=0
wait seconds=3

`)
}


// function loadJQ() { // Load Jquery
   // function loadScriptFromURL(url) {
      // var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),
      // async = false;
      // request.open('GET', url, async);
      // request.send();
      // if (request.status !== 200) {
         // var message = 'An error occurred while loading script at url: ' + url + ', status: ' + request.status;
         // iimDisplay(message);
         // return false;
      // }
      // eval(request.response);
      // return true;
   // }
// loadScriptFromURL('https://raw.githubusercontent.com/stevenschobert/instafeed.js/master/instafeed.min.js');		
// loadScriptFromURL('https://www.dropbox.com/s/47cj0fqxnsijm2n/jquery-2.2.2.min.js?raw=1');
   // //loadScriptFromURL('http://vk.com/js/api/xd_connection.js?2');
   // $ = window.$,
   // JQuery = window.JQuery;
// }

// function iWait(waitTime) {iimPlayCode('WAIT SECONDS =' + waitTime)}
// //iWait(1)
// loadJQ()/////////////////////////////////////Jquery

// var e = $.Event("keydown", { keyCode: 9 });
// $("input").trigger(e);

// $(".select2-result-label").trigger("click");
// $(".select2-results-dept-0 select2-result select2-result-selectable select2-highlighted").trigger("click");

// for(i=0;i<10;i++)
// {
	// window.document.getElementsByClassName("select2-result-label")[i].click();
// }
 


// ///////////////////////////post1//////////////////////
   // function post1(path, params, method) {
    // // Reference: http://stackoverflow.com/a/133997/1640892
    // method = method || "post";
    // var form = document.createElement("form");
    // form.setAttribute("method", method);
    // form.setAttribute("action", path);
    // for (var key in params) {
      // if (params.hasOwnProperty(key)) {
        // var hiddenField = document.createElement("input");
        // hiddenField.setAttribute("type", "hidden");
        // hiddenField.setAttribute("name", key);
        // hiddenField.setAttribute("value", params[key]);
        // form.appendChild(hiddenField);
      // }
    // }
    // document.body.appendChild(form);
    // form.submit();
  // }

// ///////////////////////////post2//////////////////////
  // function post2(path, params, method) {
    // method = method || "post"; // Set method to post by default if not specified.

    // // The rest of this code assumes you are not using a library.
    // // It can be made less wordy if you use one.
    // var form = document.createElement("form");
    // form.setAttribute("method", method);
    // form.setAttribute("action", path);

    // for(var key in params) {
        // if(params.hasOwnProperty(key)) {
            // var hiddenField = document.createElement("input");
            // hiddenField.setAttribute("type", "hidden");
            // hiddenField.setAttribute("name", key);
            // hiddenField.setAttribute("value", params[key]);

            // form.appendChild(hiddenField);
         // }
    // }

    // document.body.appendChild(form);
    // form.submit();
// }
// //post1('https://api.vk.com/method/','users.get', {uids: '1'});

// // document.body.innerHTML += '<form id="dynForm" action="http://api.vk.com/method/groups.getById?group_id=117452530&fields=members_count" method="post"><input type="hidden" name="q" value="a"></form>';
// // document.getElementById("dynForm").submit();

// // $(function() { alert('se')
	// // alert($.post('https://api.vk.com/method/users.get', {"user_ids": '210700286', "fields": 'bdate'}, "json"))
// // });

// // $.ajax({
    // // url: 'https://api.vk.com/method/users.get?user_ids=1&fields=photo_100&lang=ru',
    // // type: 'GET',
    // // dataType: 'jsonp',
    // // crossDomain: true,
    // // success: function(data){
        // // console.log(data.response);
		// // // alert(data+"\n"+response);

    // // }    
// // })

// // function posl(data){alert(data)}

// //$.ajax({url:"https://api.vk.com/method/users.search",type:"get",dataType:"json",success: posl});

// // var request = $.ajax({
  // // url: 'https://api.vk.com/method/users.get',
  // // method: 'POST',
  // // data: {user_ids:210700286,fields: 'city,domain'},
  // // dataType: "HTML"
// // });

// // request.done(function(msg) {alert('+'+msg)}); 
// // request.fail(function(jqXHR,textStatus) {alert( " =  ОШИБКА: \n " + textStatus)});



// // function(msg){
    // // console.log(msg.response[0]);
    // // }

// // $.getScript('http://vk.com/js/api/openapi.js', function() {

// // // Initialize VK OPEN API
// // VK.init({apiId: 'qLQmI9YbnWRVGCDi5zvF'});

// // // Post node to vk wall
// // VK.Api.call(
// // 'users.get',
// // {
// // user_ids: '1', // '-9089845' минус оставляем для группы'
// // fields: 'photo_100',
// // },
// // // function(response) {
// // // // If captcha needed.
// // // alert(response);
// // // }
// // });
// // );


     // var feed = new Instafeed({
        // get: 'links',
        // tagName: 'russia',
        // clientId: 'c9192f7d91dc49d2a25148ebfa88ae09'
    // }); 

	// feed.run();
// window.console.log(feed);
 // // feed.fail(function(jqXHR,textStatus) {alert( " =  ОШИБКА: \n " + textStatus)});


