function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))}
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа)}  


var папка 			= 	"C:\\GOOGLE\\GOOGLE_RU\\others"
var all_base		= 	папка+"\\all_base.txt";			// база уже обработанных сайтов
var test_base       	= 	папка+"\\test_base.txt";			//КУДА СОХРАНЯЕМ ОТЧЕТ
var result_base       	= 	папка+"\\result_base.txt";			//КУДА СОХРАНЯЕМ не тематич

// var ключи 				=	"C:\\FULL\\RESULTS\\GOOGLE\\ключи\\"+профиль+"-ключи.txt"//  

function getRandomInt(min, max){return Math.round(min - 0.5 + Math.random() * (max - min + 1))}


var тестБаза = читать(test_base).split('\n')

for(i=0;i<тестБаза.length;i++){
	var значениеЯчейки = тестБаза[i].split('	')[4]
	// alert(значениеЯчейки)
	if(читать(all_base).search(значениеЯчейки)>-1){
		
	}else{
		 
		добавитьВКонец(result_base,тестБаза[i])
	}
}