
 //настройки оптимизации фф:  
 //imacros-js:showsteps no
var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
//iimPlayCode(t0+'URL GOTO=about:config');
prefs.setIntPref("browser.sessionhistory.max_total_viewer",0);
prefs.setBoolPref("config.trim_on_minimize", true);
prefs.setIntPref("browser.sessionstore.interval",20000);
prefs.setIntPref("browser.sessionhistory.max_entries",10);
prefs.setBoolPref("network.http.pipelining", true);
prefs.setIntPref("network.http.pipelining.maxrequests", 5);
prefs.setBoolPref("network.http.proxy.pipelining", true);
prefs.setBoolPref("network.prefetch-next", false);

function iim(code) {  
    var Cc = Components.classes,
        Ci = Components.interfaces,
        wm = Cc["@mozilla.org/appshell/window-mediator;1"]
                .getService(Ci.nsIWindowMediator)
                .getMostRecentWindow("navigator:browser");
    iimPlay('CODE:' + code);
    if (iimGetLastError() == 'Macro stopped manually') {
            window.setTimeout(function() {
                wm.iMacros.panel.sidebar.document.getElementById('message-box-button-close').click()
            } , 4);
            throw 'Скрипт остановлен кнопкой стоп!';
    }
};
alert('aa')
