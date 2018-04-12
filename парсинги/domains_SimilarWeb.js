iim=iimPlayCode;
function ждем(s) {iim('wait seconds=' + s)}
function тестНаКаптчу() {if(window.document.querySelector('body').innerHTML.search('recaptcha')>0) {alert("=пройди каптчу!;"); iimPlayCode('wait seconds=25')}}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  
var start = new Date();
function timming() {diff=(new Date()-start)/1000; return 'Затрачено:	'+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")}
function копиБоди() {try{var x = window.document.getElementsByTagName("body")[0].innerHTML;}catch(e){var x='sex'} return x;}
 
//НАСТРОЙКИ:
var simialarweb_url		= "https://www.similarweb.com/website/"		//
 
// var urls		= читать("C:\\FULL\\RESULTS\\\similarweb\\urls.txt").split('\n');		// здесь список сайтов, если хотим читать из блокнота), я буду второй способ юзать;;

var urls = 
`wowbet.top`
.split('\n');

var путьСохр       		= "C:\\FULL\\RESULTS\\\similarweb\\results.txt";	//КУДА СОХРАНЯЕМ ОТЧЕТ

for(q=0;q<urls.length;q++){
	var url = urls[q];
	if (iim('URL GOTO=' + url) > 0) {
		ждем(3);
		var тайтл = window.document.title;
		iim('set !errorignore yes\n SET !TIMEOUT_PAGE 22 \n url goto='+simialarweb_url+url);
		try{var визитов = window.document.querySelectorAll('.engagementInfo-valueNumber')[0].innerText;}catch(e){визитов="хз"}
		try{	if(window.document.querySelectorAll('.engagementInfo-value>.websitePage-relativeChange--up').length>0){
				 var визитов_дельта = " (+"+window.document.querySelectorAll('.engagementInfo-value>.websitePage-relativeChange--up')[0].innerText}
			else{var визитов_дельта = " (-"+window.document.querySelectorAll('.engagementInfo-value>.websitePage-relativeChange--up')[0].innerText+")"}
				 var визитов = визитов+визитов_дельта+")"
		}catch(e){}
		try{var категория = window.document.querySelectorAll('.rankingItem-subTitle')[2].innerText}catch(e){категория="хз"}
		try{var страна1 = window.document.querySelectorAll('.country-name')[0].innerText+" ("+window.document.querySelectorAll('.traffic-share-valueNumber')[0].innerText+")"}catch(e){страна1="хз"}
		try{var страна2 = window.document.querySelectorAll('.country-name')[1].innerText+" ("+window.document.querySelectorAll('.traffic-share-valueNumber')[1].innerText+")"}catch(e){страна2="хз"}
		try{var страна3 = window.document.querySelectorAll('.country-name')[2].innerText+" ("+window.document.querySelectorAll('.traffic-share-valueNumber')[2].innerText+")"}catch(e){страна3="хз"}
		try{var страна4 = window.document.querySelectorAll('.country-name')[3].innerText+" ("+window.document.querySelectorAll('.traffic-share-valueNumber')[3].innerText+")"}catch(e){страна4="хз"}
		try{var страна5 = window.document.querySelectorAll('.country-name')[4].innerText+" ("+window.document.querySelectorAll('.traffic-share-valueNumber')[4].innerText+")"}catch(e){страна5="хз"}
		try{ 
			var отчет = дата()+"	"+url+ "	"+тайтл+"	"+"	";
			var отчет = отчет+timming()+"	"+визитов+"	"+категория+"	"+страна1+"	"+страна2+"	"+страна3+"	"+страна4+"	"+страна5+"	"+"	"+q+"	"
		}catch(e){
			var отчет = дата()+"	" + url + "	ошибка->"+e+"	"+q+"	"+timming();
			iimDisplay(" 255 строка - ErROR = "+e); iim('wait seconds=5')
		}
		
	}
	else{var отчет = дата() + "	"+q+"	" + url+"	не загрузился сайт!	"+timming();}
	var отчет = отчет+"\n"
	добавитьВКонец(путьСохр, отчет);
}