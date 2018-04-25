var apikey = `vdo8kwwniz5j96pf2wqa1gvo2tz9uxg6`;
var smsReg = 'http://api.sms-reg.com/';
var service = "facebook"; // 'avito'
loadScriptFromURL = (url) => {
    var request = Components.classes["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance(Components.interfaces.nsIXMLHttpRequest), async = false;
    request.open("GET", url, async); request.send();
    if (request.status !== 200) {var message ="Ошибка при запросе к урл: " + url +", status: " +request.status; iimDisplay(message); return false;};return request.response;
}
getBalance  = apikey => {var a = loadScriptFromURL(smsReg + `getBalance.php?apikey=${apikey}`); b = a.search(`"response":"1"`) > 0 ? JSON.parse(a).balance : "Balance не получен!=>"; return b;}
getCodeOperation  = (apikey, service) => {var a = loadScriptFromURL(smsReg+`getNum.php?country=ru&service=${service}&apikey=${apikey}`); b = a.search(`"response":"1"`) > 0 ? JSON.parse(a).tzid:false; return b;}
 
getState = (apikey, codeOperation, stage) => {var stt, otv;
    for(stt=0;stt<30;stt++){
        var state = loadScriptFromURL(smsReg + `getState.php?tzid=${codeOperation}&apikey=${apikey}`);
            if( (state.search('TZ_INPOOL')   > 0)
             || (state.search('TZ_NUM_WAIT') > 0) ){iimPlayCode('wait seconds=5')}
            else if (state.search('TZ_NUM_PREPARE') && (stage==0)) {otv = JSON.parse(state).number; break;}
            else if (state.search('TZ_NUM_ANSWER')  && (stage==1)) {otv = JSON.parse(state).msg;    break;} 
            else if (state.search('WARNING_NO_NUMS')) { otv = false; break;} 
            else if(1) { alert("ОШибка при codeOperation => " + state);}
    }
    alert("state===+>> " + state);
    return (stt < 29)?otv:false;
}
 
setReady = (apikey, codeOperation) => {var a = loadScriptFromURL(smsReg + `setReady.php?tzid=${codeOperation}&apikey=${apikey}`); return a.search(`"response":"1"`) > -1 ? true:false}

setOperationRevise = (apikey,codeOperation) => smsReg+`setOperationRevise.php?tzid=${codeOperation}&apikey=${apikey}`;
setOperationOk = (apikey,codeOperation) => smsReg+`setOperationOk.php?tzid=${codeOperation}&apikey=${apikey}`
setOperationUsed = (apikey,codeOperation) =>   smsReg+`setOperationUsed.php?tzid=${codeOperation}&apikey=${apikey}`
setOperationOver = (apikey, codeOperation) =>    smsReg+`setOperationOver.php?tzid=${codeOperation}&apikey=${apikey}`;

var balance = getBalance(apikey); balance<2?alert('бабки на смс-реге закончились!!'); //alert(balance);       //1
var codeOperation = getCodeOperation(apikey, service); //alert(codeOperation);        //2
var number = getState(apikey, codeOperation, 0); !number?alert("Недождались number!"):'';// alert("number => "+number); //3
var ready = setReady (apikey, codeOperation); !ready ? alert("Ошибка переключения в режим 'Готов принять смс'!") : ""; //4
var cod = getState(apikey, codeOperation, 1);  
!cod?alert("Недождались кода!") : ""; alert("код => " + cod); //3

 
// sms-reg.com/docs/APImethods.html?setOperationRevise (если поступил ошибочный код)
alert( loadScriptFromURL( setOperationRevise(apikey, codeOperation) ) )
alert(loadScriptFromURL(setOperationOk(apikey, codeOperation)))
alert(loadScriptFromURL(setOperationUsed(apikey, codeOperation)))
alert(loadScriptFromURL(setOperationOver(apikey, codeOperation)))