'use strict'

// второе действие даже не выполняется, если первое возвращает
// true
function checkAge( age ) {
    return ( age > 18 ) || confirm( 'Родители разрешили?' );
}

console.log( checkAge( 21 ) );

// Функция возвращает меньшее из чисел
function getMin( a, b ) {
    return ( a > b ) ? b : a;
}
 
// console.log( getMin( 17, 0 ) );

function getMin( a, b ) {

}

// функция возвращает число k в степени n

function getPow( k, n ) {
    return ( n > 0 ) ? k**n : 1;
}


function getK() {
    return prompt('Введите число k');
}

function getN() {
    return prompt('Введите степень n');
}

// let k = getK();

// let n = getN();
// console.log( getPow( k, n ) );

// Callback функции - это функции, вызываемые, при определенных условиях,
// функции обратной связи

// напишем функцию, которая будет задавать пользователю вопрос и
// в зависимости от ответа будет вызываться определенная callback-функция

function getAnswer( Question, yes, no ) {
    ( confirm( Question ) ) ? yes() : no();
}

function yes() {
    alert( 'Правильно');
}

function no() {
    alert( 'Неправильно');
}


getAnswer( 'Вам есть 18 лет', yes, no);

// а можно всё это сделать, используя function expression

// let say = function () { alert( 'hi' ) };

// Покажем область блочную область видимость function declaration

getAnswer( 'Вам есть 18 лет', 
            function () { alert( 'Правильно' ) },
            function () { alert( 'Неправильно' ) } 
);

let age = 18;

let welcomeVar = null;

if( age > 18 ) {
    // добавили
    welcomeVar = welcome;

    function welcome() {
        alert( 'Привет' );
    }
}
else {
    // добавили
    welcomeVar = welcome;

    function welcome() {
        alert( 'Пока' );
    }
}

welcomeVar();

// результат welcome is not defined - это говорит о том, что
// объявленная нами функция welcome, внутри условного оператора,
// не видна снаружи, для того, чтобы это исправить можно
// объявим function expression
// welcome();

// вопросы с собеса

