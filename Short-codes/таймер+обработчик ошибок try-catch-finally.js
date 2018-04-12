var start = new Date();
var diff = new Date() - start;
iimDisplay("Код выполняется уже: " + diff );


function sum(n) {
  return n ? (n + sum(n - 1)) : 0;
}

var n = +prompt('Введите n', 100);
try {
  var result = sum(n);
} catch (e) {
  result = 0;
} finally {
  
}

alert( result ? result : 'была ошибка' );