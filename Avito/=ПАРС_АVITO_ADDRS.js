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
 

alert($(".metro-info__wrap").eq(2).data-spacer-distance())
for (i=1;i<50;i++)
{
	var метро=window.content.document.getElementsByClassName('metro-name')[i].textContent

if(i%2==0)
  {	
        var улица = $(".fader").eq(i).html();
	var площадь=window.content.document.getElementsByClassName('param area')[i].textContent
	var этаж=window.content.document.getElementsByClassName('param floor')[i].textContent
	var расстояние=$(".metro-distance").eq(i).html();
	
	var объект=(метро+","+улица+","+площадь+","+этаж+","+расстояние)
	if(расстояние.search( /км/ )==-1) 
	{
	iimSet('объект',объект);  
	iimPlayCode(`set !EXTRACT {{объект}}\n
	SAVEAS TYPE=EXTRACT FOLDER=C:\\ FILE=OTCHET_avito_kv_pars_addresa.txt`);
	}
    }
}
	
	
	