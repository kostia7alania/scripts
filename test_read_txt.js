//переЗАПИСЬ:
Components.utils.import("resource://gre/modules/osfile.jsm"); // загрузить модуль ОС
var encoder = new window.TextEncoder(); //Этот encoder мб переЮзан повторно для нескок операций записи
var array = encoder.encode(`ттекст1 текст2 text text`); // Преобразование текста в массив
var promise = OS.File.writeAtomic("C:\\FULL\\foo.txt", array,{tmpPath: "1.txt.tmp"}); // Пишем массив атомарно в файл file.txt, используя временный;
alert("Перезаписали(сохранили)");

//Чтение файла из файловой системы:
Components.utils.import("resource://gre/modules/osfile.jsm"); // загрузить модуль ОС
var decoder = new window.TextDecoder(); // Этот декодер может быть повторно использован для нескольких чтений
var promise = OS.File.read("C:\\FULL\\foo.txt"); //Прочитать весь файл как массив 
promise = promise.then(function onSuccess(array) {alert("Прочитали:\n"+decoder.decode(array))}); // Преобразовать этот массив в текст