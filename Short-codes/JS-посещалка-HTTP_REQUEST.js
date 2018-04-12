var _c=Components,XMLHttpRequest=_c.Constructor('@mozilla.org/xmlextras/xmlhttprequest;1');

function получитьHTML (AAA){var a=XMLHttpRequest();return a.open('GET',AAA,!1),a.send(''),a.responseText}

var a="Москва", b="Раменское"
alert(получитьHTML('http://calc-api.ru/app:geo-api/null?a='+encodeURIComponent(a)+'&b='+encodeURIComponent(b)));