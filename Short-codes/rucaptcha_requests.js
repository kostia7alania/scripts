

var apiKeyRecaptcha = "cf2fc1467ef8d1539e573d61e4cc5595sex";
var rucaptchaURL = "http://rucaptcha.com/in.php";


var cc = Components.classes, ci = Components.interfaces;
var x = cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
 
 var capUrl = 'https://rucaptcha.com/in.php';
 var base64 = document.querySelector(".captcha_img").src //.replace("data:image/png;base64,", "");
 var data = "method=base64" + "&key=" + apiKeyRecaptcha + "&body=" + encodeURIComponent(base64);

 var postCap = (apiKeyRecaptcha, base64) => {
	cc=Components.classes, ci=Components.interfaces;
	var data = "method=base64" + "&key=" + apiKeyRecaptcha + "&body=" + encodeURIComponent(base64);
	var x = cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
	x.open('POST', 'http://rucaptcha.com/in.php', false);
	x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	x.send(data); 
	var captchaId = x.response.split('|')[1];
	console.log(captchaId);
	iimDisplay(captchaId);
	return captchaId
}
 

 getCapOtv = (acaptchaId) => { 
	 	for (var i=1; i<=60; i++) {
		console.log('captchaId=' + captchaId)
		x.open("GET", "http://rucaptcha.com/res.php?key=" + apiKeyRecaptcha + "&action=get&id=" + captchaId, false);
		x.send();
		var resp = x.response; 
		iimDisplay(i+": "+resp);
		if (resp.indexOf('ERROR')!=-1) {return "ERROR"}
		if (resp.indexOf('OK')!=-1) {var cap = resp.split('|')[1]; return cap}
		else{iim('WAIT SECONDS=1');}
	}
}

var base64 = document.querySelector(".captcha_img").src //.replace("data:image/png;base64,", "");
var captchaId = postCap(apiKeyRecaptcha, base64);
iim('wait seconds=1');
var otvet = getCapOtv(captchaId);
alert('otv=>' + otvet);