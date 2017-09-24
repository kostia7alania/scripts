for(i=1;i<=3;i++){
iimSet('sex',i)
iimPlay("GO//go-all-pc.iim")
}
alert("вышли")

iimPlayCode('prompt 1ok')
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
 


$('.mi_text:eq(0)').click()
//iimPlay("CODE:URL GOTO=http://fmacros.ru/launcher.html?m=1.js")

//$('input>#editor_enabled').click();
//ip=$(".td_address:eq(0)").text();
//ip1=ip.split('.')[0]; 
//ip2=ip.split('.')[1]; 

//alert(ip1+"."+ip2)  
