Components.utils.import("resource://gre/modules/osfile.jsm"); // загрузить модуль ОС

window.console.log(
  "\n \n OS => ",
  OS,
  "\n \n OS.Path=> ",
  OS.Path,
  "\n \n OS.Constants.Path=> ",
  OS.Constants.Path
);
window.console.log(OS.Constants.Path.homeDir);




var encoder = new window.TextEncoder(); //Этот encoder мб переЮзан повторно для нескок операций записи
//var array = encoder.encode(`ттекст1 текст2 text text`); // Преобразование текста в массив
//var promise = OS.File.writeAtomic("proxy.txt", array,{tmpPath: "1.txt.tmp"}); // Пишем массив атомарно в файл file.txt, используя временный;
//alert("Перезаписали(сохранили)");

//Чтение файла из файловой системы:
var decoder = new window.TextDecoder(); // Этот декодер может быть повторно использован для нескольких чтений
//var promise = OS.File.read(papka+"useragents.txt"); //Прочитать весь файл как массив 
//promise = promise.then(function onSuccess(array) {return decoder.decode(array)  }); // Преобразовать этот массив в текст
 