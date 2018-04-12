var _c=Components,XMLHttpRequest=_c.Constructor('@mozilla.org/xmlextras/xmlhttprequest;1');
function получитьHTML (AAA){var a=XMLHttpRequest();return a.open('GET',AAA,!1),a.send(''),a.responseText}
получитьHTML('http://bpages.ru/card/6680203/');
iimPlayCode("URL GOTO=imacros://run/?m=парсинг/JS-посещалка-HTTP_REQUEST.js"); //бесконечный цикл);)