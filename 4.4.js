// отрабатываем работу с объектами

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
