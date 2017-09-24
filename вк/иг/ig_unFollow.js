var сохрИли="C:\\или.txt";//КУДА СОХРАНЯЕМ
var сохрИ="C:\\и.txt";//КУДА СОХРАНЯЕМ
var сохртокаВ1="C:\\токаВ1.txt";//КУДА СОХРАНЯЕМ
var сохртокаВ2="C:\\токаВ2.txt";//КУДА СОХРАНЯЕМ
				//есть в 1 и/или во 2ом массиве;
				var или = "union";
				//есть одновременно и в 1 и во 2-ом массиве;
				var и = "isect";
				//есть только в 1 массиве;
				var токаВ1 = "aOnly"; 
				//есть только в 2 массиве;
				var токаВ2 = "bOnly"; 
				
var разделитель = "%0D%0A";
var метод = "POST"//у get-ограничение 8050 символов всех ваших логинов (с разделителями) ((;
var список1 = imns.FIO.readTextFile(imns.FIO.openNode("C:\\dodo_15.12.16.txt")).split('\n').join(разделитель)
var список2 = imns.FIO.readTextFile(imns.FIO.openNode("C:\\dodo_8.1.17.txt")).split('\n').join(разделитель)

function нарезалка(ответ,поле){return ответ.split(new RegExp(поле,"igm"))[1].split('>')[1].split('<')[0].replace(/(^($\n)|\n^($))/gim,'')};

//подключение JQ:
	function loadJQ() {function loadScriptFromURL(url) {var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),async = false;request.open('GET', url, async);request.send();if (request.status !== 200) {var message = 'An error occurred while loading script at url: ' + url + ', status: ' + request.status;iimDisplay(message);return false;}eval(request.response);return true;}; loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');$ = window.$,JQuery = window.JQuery;}; loadJQ();

// передаваемые параметры:
	// var postData = "name1=1^&name2=2^&list1=11111111^%^0D^%^0A22222222^&list2=3333333333^%^0D^%^0A444444444";
	// name1=1^&name2=2^&list1=лист1&list2=лист2
					
 var postData = 'name1=1^&name2=2^&list1='+список1+'^&list2='+список2;	
 var url="http://jura.wi.mit.edu/cgi-bin/bioc/tools/compare.cgi"
 
 	request = $.ajax({url: url, method: метод,data: postData,dataType: "html"});
	request.done(function(ответ, статус) {
				imns.FIO.writeTextFile(imns.FIO.openNode(сохрИли),нарезалка(ответ,или))
				imns.FIO.writeTextFile(imns.FIO.openNode(сохрИ),нарезалка(ответ,и))
				imns.FIO.writeTextFile(imns.FIO.openNode(сохртокаВ1),нарезалка(ответ,токаВ1))
				imns.FIO.writeTextFile(imns.FIO.openNode(сохртокаВ2),нарезалка(ответ,токаВ2))
	});
	request.fail(function(ответ, статус) {alert("Статус1: "+статус+"\nОтвет: \n"+ответ)});
 

  