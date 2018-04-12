//скрипт ходит по списку УРЛ и делает отчет их посещаемости в results.txt;

iim=iimPlayCode;
function тестНаКаптчу() {if(window.document.querySelector('body').innerHTML.search('recaptcha')>0) {alert("=пройди каптчу!;"); iimPlayCode('wait seconds=25')}}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  
var start = new Date();
function timming() {diff=(new Date()-start)/1000; return 'Затрачено:	'+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")}
function копиБоди() {try{var x = window.document.getElementsByTagName("body")[0].innerHTML;}catch(e){var x='sex'} return x;}
 
var querSelAll = node => window.document.querySelectorAll(node);
var querSel = node => window.document.querySelector(node);
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
var urls				= "C:\\FULL\\RESULTS\\\similarweb\\urls.txt";		// сайты к тесту
var путьСохр    		= "C:\\FULL\\RESULTS\\\similarweb\\results.txt";	//КУДА СОХРАНЯЕМ ОТЧЕТ

var url = читать(urls).split('\n'); 

for(q=0;q<читать(urls).length;q++){ 
	iim('url goto='+simialarweb_url+url[q]);
	try{тестНаКаптчу();}catch(e){window.console.error(e);} 
		 	var subTit = querSelAll(".rankingItem-subTitle");
			var global = subTit[0].innerText;
			var country = subTit[1].innerText;
			var категория = subTit[2].innerText;
			
			var rankItVal = (".rankingItem-value");
			var global_value = rankItVal[0].innerText;
			var country_value = rankItVal[1].innerText;
			var category_value = rankItVal[2].innerText;
	
	 var engNum = querSelAll(".engagementInfo-valueNumber");
	 var визитов = engNum[0].innerText;
	 var engVal = querSelAll(".engagementInfo-value>.websitePage-relativeChange--up");
	 if (engVal.length > 0) {
     var визитов_дельта = " (+" + engVal[0].innerText;
   } else {
     var визитов_дельта = " (-" + engVal[0].innerText + ")";
   }
	var визитов = визитов+визитов_дельта+")";
				
			var срВремяВизита = engNum[1].innerText;
			var стрНаЮзера 	  = engNum[2].innerText;
			var отказы 		  = engNum[3].innerText;
			
			var strana0 = querSelAll(".country-name");
			var страна1 = strana0[0].innerText;
			var страна2 = strana0[1].innerText;
			var страна3 = strana0[2].innerText;
			var страна4 = strana0[3].innerText;
			var страна5 = strana0[4].innerText;

			var strana0_tr = querSelAll(".traffic-share-valueNumber");
			var страна1_траф = strana0_tr[0].innerText;
			var страна2_траф = strana0_tr[1].innerText;
			var страна3_траф = strana0_tr[2].innerText;
			var страна4_траф = strana0_tr[3].innerText;
			var страна5_траф = strana0_tr[4].innerText;
			
			var relChNum = querSelAll(".websitePage-relativeChangeNumber");

			var nachalo = '#geo-countries-accordion>div:nth-child';
			var konec = ">div>span>span.traffic-share-value>.websitePage-relativeChange--up";
	if (querSelAll(nachalo + "(1)" + konec).length > 0) {
      var страна1_траф_percent = ` +${relChNum[0]}`;
    } else {
      var страна1_траф_percent = ` -${relChNum[0]}`;
    }

	if (querSelAll(nachalo + "(2)" + konec).length > 0) {
    var страна2_траф_percent = " +" + relChNum[1];
  } else {
    var страна2_траф_percent = " -" + relChNum[1];
  }

	if (querSelAll(nachalo + "(3)" + konec).length > 0) {
    var страна3_траф_percent = " +" + relChNum[2];
  } else {
    var страна3_траф_percent = " -" + relChNum[2];
  }

	if (querSelAll(nachalo + "(4)" + konec).length > 0) {
    var страна4_траф_percent = " +" + relChNum[3];
  } else {
    var страна4_траф_percent = " -" + relChNum[3];
  }

	if (querSelAll(`${nachalo}(5)${konec}`).length > 0) {
    var страна5_траф_percent = " +" + relChNum[4];
  } else {
    var страна5_траф_percent = " -" + relChNum[4];
  }
			
			var x00 = window.document.querySelectorAll(".highcharts-axis-labels>text >tspan");
			var x1 = x00[0].innerHTML;
			var x2 = x00[1].innerHTML;
			var x3 = x00[2].innerHTML;
			var x4 = x00[3].innerHTML;
			var x5 = x00[4].innerHTML;
			var x6 = x00[5].innerHTML;
 try{
	  var отчет = дата()+"	"+q+"	"+url[q]+"	"+global+"	"+global_value+"	"
	  +country+"	"+country_value+"	"+category+"	"+category_value+"	"
	  +country+"	"+country+"	"+country+"	"+timming()+"\n"; 
	}catch(e){window.console.error('Ошбика при формировании отчета!!', e)}; // "тест", "пройден" 

	добавитьВКонец(путьСохр,отчет)  
	iimDisplay(отчет.replace('	','\n'));   
}