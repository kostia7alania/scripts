start = new Date(); 
// function копиБоди() {var x = window.document.getElementsByTagName("body")[0].textContent; return x;}
function timming() {diff=(new Date()-start)/1000; return ';\nЗатрачено времени: '+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function getRandomInt(min, max){return Math.round(min - 0.5 + Math.random() * (max - min + 1))}


function loadScriptFromURL(url) {
    var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),
        async = false;
    request.open('GET', url, async);
    request.send();
    if (request.status !== 200) {
        var message = 'an error occurred while loading script at url: ' + url + ', status: ' + request.status;
        iimDisplay(message);
        return false;
    }
    eval(request.response);
    return true;
}
	
	loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');		
	$ = window.$,
	JQuery = window.JQuery;
 
								//asd=$("#asd").val()
	// циклов = $("#циклов").val();
	// выборПола = $('input[name="выборПола"]:checked').val()// м.б. "Рандом" или "Выбрать"
    // if(выборПола==null){выборПола="Рандом"}//рандом по-умолч
	// жен = $('input[name="жен"]:checked').val()
	// муж = $('input[name="муж"]:checked').val()

// vozrOt = $('input[name="vozrOt"]:checked').val()// м.б. "Рандом" или "Выбрать"
// vozrDo = $('input[name="vozrDo"]:checked').val()// м.б. "Рандом" или "Выбрать"
   
if(window.location.href.search( /accounts/ )!=-1){
	



	
}
if(window.location.href.search( /groups/ )!=-1){alert('groups')}
if(window.location.href.search( /index/ )!=-1){alert('index')}
if(window.location.href.search( /members/ )!=-1){alert('members')}
if(window.location.href.search( /pars/ )!=-1){

	var группа = $(".group").attr("value");
	 
	var request = $.ajax({url: 'https://api.vk.com/method/groups.getMembers',method: 'POST',data: {"group_id":группа},dataType: "HTML"});
request.done(function(msg) {
var численность=msg.split(':')[2].split(',')[0];
 
$(".uchastniki").html(численность); 
$('.spisok').html("");
for(i=0;i<численность;i+=1000){var request = $.ajax({url: 'https://api.vk.com/method/groups.getMembers',method: 'POST',data: {"group_id":группа,"count":1000,"offset":i},dataType: "HTML"});
	request.done(function(msg){msgAll=msg.split('[')[1].split(']')[0].replace(/,/ig,'\nvk.com/id').replace(/^/ig,'vk.com/id');
			 $('.spisok').append(msgAll+"\n");
		});
	}
});

}
if(window.location.href.search( /statistics/ )!=-1){alert('statistics')}
 

imns.FIO.makeDirectory("c:\\s")

// var request = $.ajax({
// url: 'https://api.vk.com/method/groups.getById',
// method: 'POST',
// data: {group_id:asd},
// dataType: "HTML"
// });
// request.done(function(msg) {alert('+'+msg)}); 
// request.fail(function(jqXHR,textStatus) {alert( " = ОШИБКА: \n " + textStatus)});

// var request = $.ajax({
// url: 'https://api.vk.com/method/groups.getMembers',
// method: 'POST',
// data: {group_id:49592543,sort: 'id_asc', count:2},
// dataType: "HTML"
// });
// request.done(function(msg) {alert('+'+msg)}); 
// request.fail(function(jqXHR,textStatus) {alert( " = ОШИБКА: \n " + textStatus)});