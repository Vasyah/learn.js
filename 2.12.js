'use strict'

//  http://old.code.mu/tasks/javascript/base/rabota-s-konstrukciyami-if-else-switch-case-v-javascript.html

// урок №4

// Задача №1
// var num = 10;
// if (num == 10) {
// 	alert('Верно');
// } else {
// 	alert('Неверно');
// }

// Задача №2
// Задача. В переменной min лежит число от 0 до 59. Определите в какую 
// четверть часа попадает это число (в первую, вторую, третью или четвертую).

function defineHourQuarter( minVal) {
    if(minVal < 60)
    {
        if( minVal >= 0 && minVal <= 15 ) {
            console.log( 'Число в первой четверти' );
        }

        if( minVal > 15 && minVal <= 30 ) {
            console.log( 'Число во второй четверти' );
        }
        
        if( minVal > 30 && minVal <= 45 ) {
            console.log( 'Число в третьей четверти' );
        }

        if( minVal > 45 && minVal <= 59 ) {
            console.log( 'Число в четвёртой четверти' );
        }
    }
    else{
        console.log( 'В часе 60 минут, ваще-т' );
    }
}

defineHourQuarter( 44 );
defineHourQuarter( 16 );

// Задача №3

// Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru',
// то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en'
// – то на английском. Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch.

function weekWithIf( lang ) {
    let week = null;
    if( lang === 'ru'){
        week = [ 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    }
    else if( lang === 'en'){
        week = [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    }
    else{
        week = 'Программа поддерживает русский и английский';
    }
    return week;
}

console.log( weekWithIf( 'fr' ) );

function weekWithSwitch( lang ) {
    let week = null;

    switch( lang ) {
        case 'ru':
            week = [ 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
            break;
        case 'en':
            week = [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
            break;
        default:
            week = 'Программа поддерживает только русский и английский';
            break;
    }   
    return week;

}

console.log( weekWithSwitch( 'en' ) );

function weekWithMuiltiArr( lang ) {
    let week = {
        'ru' : [ 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
        'en' : [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    }
    return week[lang];
}

console.log( weekWithSwitch( 'en') );

// Работа с логическими переменными

// 15
// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', 
// если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

function identifyWeatherSeason( seasonNum ) {
    let season = null;
    switch( seasonNum ) {
        case 1: 
            season = 'Зима';
            break;
        case 2:
            season = 'Весна';
            break;
        case 3:
            season = 'Лето';
            break;
        case 4:
            season = 'Осень'
            break;
        default:
            season = 'Всего 4-ре сезона';
            break;
    } 
    return season;
}

console.log( identifyWeatherSeason( 5 ) );

