


f();

(function() {
  var i = 10;
  document.body.style.background = 'red';
})();

{
  let i = 10;
  document.body.style.background = 'red';
}

// function declaration
function f() {

}

console.log(varDefined);
// будет разбита на объявление и присваивание
// объявление уходит в самый верх функции ("всплывает")
// а присваивание остается тут
var varDefined = 10;


// Error, потому, что нельзя использовать for внутри выражения.
const x = for(;;) {}

// а function, если используется в выражении - интерпретируется, как function expression
const fe = function() {

}

