// отрабатываем работу с объектами

'use strict'
let usr = {
    banana: 17,
    name: 'John',

    // methods

    getBanana: function () {
        return this.banana;
    }
}

// есть простой способ записи метода

usr = {
    banana: 17,
    name: 'John',

    // methods

    getBanana: function () {
        return this.banana;
    },
    getName() {
        return this.name;
    }
}

console.log(usr.getBanana());
console.log(usr.getName());

// Присваиваем метод из function declaration

usr.addApple = function () {
    this.apple = 16;

    return this.apple;
}

console.log(usr);




// let user = {
//     name: "Джон",
//     hi() { alert(this.name); },
//     bye() { alert("Пока"); }
// };

// user.hi(); // Джон (простой вызов метода работает хорошо)

// теперь давайте попробуем вызывать user.hi или user.bye
// в зависимости от имени пользователя user.name
// (user.name == "Джон" ? user.hi() : user.bye());

console.log(window);

// функция возвращает объект с двумя свойствами
function makeUser() {
    return {
        name: "Джон",
        ref: this
    };
};

// вызываем функцию makeUser и можно подумать, что для ref this станет
// user, но это не так и this, определяется во время вызова функции
// нет оператора . который вернул бы ссылочный тип и хранли бы контекст
let user1 = makeUser();
// обращаемся к  user смотрим свойство ref = undefined, смотрим свойство
// name у объекта undefined, кстати, по JS undefined это объект
console.log(user1.ref.name); // Error: Cannot read property 'name' of undefined

// функция возвращает объект, в котором есть метод, который возвр
// контекст
function makeUser() {
    return {
        name: "Джон",
        ref() {
            return this;
        }
    };
};
// создаём объект
let user = makeUser();
// вызываем метод ref() оператор . возвращает ссылочный тип
// (user, ref, true) -> так, как есть (), то передается вся
// инфа из ссылочного типа, возвращаем контекст и вызываем его
// свойство name
alert(user.ref().name); // Джон

/* Создайте объект calculator (калькулятор) с тремя методами:

    read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
    sum() (суммировать) возвращает сумму сохранённых значений.
    mul() (умножить) перемножает сохранённые значения и возвращает результат.
 */

let calculator = {
    read(firstOperand, secondOperand) {
        this.firstVal = +firstOperand;
        this.secondVal = +secondOperand;
    },
    doSum() {
        return this.firstVal + this.secondVal;
    },
    doMultiply() {
        return this.firstVal * this.secondVal;
    },
}

calculator.read(13, 14);

console.log(calculator.doSum());
console.log(calculator.doMultiply());


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
    }
};

ladder.up().up().up().down().showStep();