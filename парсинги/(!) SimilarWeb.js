iim=iimPlayCode;
function тестНаКаптчу() {if(window.document.querySelector('body').innerHTML.search('recaptcha')>0) {alert("=пройди каптчу!;"); iimPlayCode('wait seconds=25')}}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  
var start = new Date();
function timming() {diff=(new Date()-start)/1000; return 'Затрачено:	'+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")}
function копиБоди() {try{var x = window.document.getElementsByTagName("body")[0].innerHTML;}catch(e){var x='sex'} return x;}


// var _c=Components,XMLHttpRequest=_c.Constructor('@mozilla.org/xmlextras/xmlhttprequest;1');
// function получитьHTML (AAA){var a=XMLHttpRequest();return a.open('GET',AAA,!1),a.send(''),a.responseText}
// var html = получитьHTML('https://www.similarweb.com/website/stoplose.com')

// if(html.search('distil_r_captcha.html')>0){
// alert('каптча')}
// else{var html = html.split('Sw.preloadedData = ')[1].split('\n')[0].slice(0,-1)
// var json = JSON.parse(html).overview;
 // var месяц1 = json.MonthsLegend[0] //1 месяц
  // alert(месяц1) 
// }

//НАСТРОЙКИ:
var simialarweb_url		= "https://www.similarweb.com/website/"		// здесь все понятно);
var urls		= "C:\\FULL\\RESULTS\\\similarweb\\urls.txt";		// сайты к тесту
var путьСохр       		= "C:\\FULL\\RESULTS\\\similarweb\\results.txt";	//КУДА СОХРАНЯЕМ ОТЧЕТ

var url = читать(urls).split('\n'); 

for(q=0;q<читать(urls).length;q++){
	
	iim('url goto='+simialarweb_url+url[q]);
	try{
		тестНаКаптчу()}catch(e){}
	 
		 
			var global = window.document.querySelectorAll('.rankingItem-subTitle')[0].innerText;
			var country = window.document.querySelectorAll('.rankingItem-subTitle')[1].innerText;
			
			var категория = window.document.querySelectorAll('.rankingItem-subTitle')[2].innerText;
			
			
			var global_value = window.document.querySelectorAll('.rankingItem-value')[0].innerText;
			var country_value = window.document.querySelectorAll('.rankingItem-value')[1].innerText;
			var category_value = window.document.querySelectorAll('.rankingItem-value')[2].innerText;
			
	 var визитов = window.document.querySelectorAll('.engagementInfo-valueNumber')[0].innerText;
	 if(window.document.querySelectorAll('.engagementInfo-value>.websitePage-relativeChange--up').length>0){
	var визитов_дельта = " (+"+window.document.querySelectorAll('.engagementInfo-value>.websitePage-relativeChange--up')[0].innerText}
	else{	
	var визитов_дельта = " (-"+window.document.querySelectorAll('.engagementInfo-value>.websitePage-relativeChange--up')[0].innerText+")"}
	var визитов = визитов+визитов_дельта+")"
 
				
			var срВремяВизита = window.document.querySelectorAll('.engagementInfo-valueNumber')[1].innerText;
			var стрНаЮзера = window.document.querySelectorAll('.engagementInfo-valueNumber')[2].innerText;
			var отказы = window.document.querySelectorAll('.engagementInfo-valueNumber')[3].innerText;
			
			var страна1 = window.document.querySelectorAll('.country-name')[0].innerText;
			var страна2 = window.document.querySelectorAll('.country-name')[1].innerText;
			var страна3 = window.document.querySelectorAll('.country-name')[2].innerText;
			var страна4 = window.document.querySelectorAll('.country-name')[3].innerText;
			var страна5 = window.document.querySelectorAll('.country-name')[4].innerText;
			
			var страна1_траф = window.document.querySelectorAll('.traffic-share-valueNumber')[0].innerText;
			var страна2_траф = window.document.querySelectorAll('.traffic-share-valueNumber')[1].innerText;
			var страна3_траф = window.document.querySelectorAll('.traffic-share-valueNumber')[2].innerText;
			var страна4_траф = window.document.querySelectorAll('.traffic-share-valueNumber')[3].innerText;
			var страна5_траф = window.document.querySelectorAll('.traffic-share-valueNumber')[4].innerText;
			
			if(window.document.querySelectorAll('#geo-countries-accordion>div:nth-child(1)>div>span>span.traffic-share-value>.websitePage-relativeChange--up').length>0){
						var страна1_траф_percent = " +"+window.document.querySelectorAll('.websitePage-relativeChangeNumber')[0]}
				else{	var страна1_траф_percent = " -"+window.document.querySelectorAll('.websitePage-relativeChangeNumber')[0]}

			if(window.document.querySelectorAll('#geo-countries-accordion>div:nth-child(2)>div>span>span.traffic-share-value>.websitePage-relativeChange--up').length>0){
						var страна2_траф_percent = " +"+window.document.querySelectorAll('.websitePage-relativeChangeNumber')[1]}
				else{	var страна2_траф_percent = " -"+window.document.querySelectorAll('.websitePage-relativeChangeNumber')[1]}

			if(window.document.querySelectorAll('#geo-countries-accordion>div:nth-child(3)>div>span>span.traffic-share-value>.websitePage-relativeChange--up').length>0){
						var страна3_траф_percent = " +"+window.document.querySelectorAll('.websitePage-relativeChangeNumber')[2]}
				else{	var страна3_траф_percent = " -"+window.document.querySelectorAll('.websitePage-relativeChangeNumber')[2]}

			if(window.document.querySelectorAll('#geo-countries-accordion>div:nth-child(4)>div>span>span.traffic-share-value>.websitePage-relativeChange--up').length>0){
						var страна4_траф_percent = " +"+window.document.querySelectorAll('.websitePage-relativeChangeNumber')[3]}
				else{	var страна4_траф_percent = " -"+window.document.querySelectorAll('.websitePage-relativeChangeNumber')[3]}

			if(window.document.querySelectorAll('#geo-countries-accordion>div:nth-child(5)>div>span>span.traffic-share-value>.websitePage-relativeChange--up').length>0){
						var страна5_траф_percent = " +"+window.document.querySelectorAll('.websitePage-relativeChangeNumber')[4]}
				else{	var страна5_траф_percent = " -"+window.document.querySelectorAll('.websitePage-relativeChangeNumber')[4]}
			
			var x1 = window.document.querySelectorAll('.highcharts-axis-labels>text >tspan')[0].innerHTML
			var x2 = window.document.querySelectorAll('.highcharts-axis-labels>text >tspan')[1].innerHTML
			var x3 = window.document.querySelectorAll('.highcharts-axis-labels>text >tspan')[2].innerHTML
			var x4 = window.document.querySelectorAll('.highcharts-axis-labels>text >tspan')[3].innerHTML
			var x5 = window.document.querySelectorAll('.highcharts-axis-labels>text >tspan')[4].innerHTML
			var x6 = window.document.querySelectorAll('.highcharts-axis-labels>text >tspan')[5].innerHTML
 try{
	  var отчет = дата()+"	"+q+"	"+url[q]+"	"+global+"	"+global_value+"	"+country+"	"+country_value+"	"+category+"	"+category_value+"	"
	  
	  +country+"	"+country+"	"+country+"	"+timming()+"\n";
	  
		 }catch(e){alert('error!!')}; // "тест", "пройден"
			  
							добавитьВКонец(путьСохр,отчет) 
			 
			  iimDisplay(отчет.replace('	','\n'));

		 
	 
		 
	}
}
