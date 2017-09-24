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

	
	loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');	$ = window.$,	JQuery = window.JQuery; // инициализация JQ
 
 
 
//=пример использования JQ:

$('.switcher-closed').click();
var s = $("input:eq(1)").val();
alert('s==='+s)
var checkName = $(".control-self").val();
alert(checkName)
$(".control-self").val('kostia7alania@mail.ru');
$("input:eq(0)").css("color", "orange");
$("input:eq(1)").val("kostia22");
