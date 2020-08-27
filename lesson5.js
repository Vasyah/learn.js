'use strict';

// Задача. Выведите столбец чисел от 1 до 50.
function writeStringOnDOM( stringNumber ) {
    while( stringNumber ) {
        document.write(stringNumber + '<br>');
        stringNumber--;
    }
}

writeStringOnDOM(50);

// Задача. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
function printArrElements( arr ) {
    arr.forEach((element) => {
        console.log(element);
    });
}

printArrElements( [ 1, 'asd', -37474, '112asdas', '1' ] );

// Задача №3
// Задача. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.

function multiplyArrElements( arr ) {
    return arr.reduce( (prevVal, currVal) => prevVal * currVal, 1);
}

console.log( multiplyArrElements( [ 1, 2, 3, 7, 2, -1, -2, -2, -3 ] ) );

// Задача №4 циклы for-in
// Задача. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. 
// С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.

function printObj( obj ){
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log( key + ' -  это ' + obj[key] );
            
        }
    }
}

printObj( { 'Москва': 'Россия', 'Минск': 'Беларусь', 'Киев': 'Украина' } );