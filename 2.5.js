// Типы данных
function testTypes(){
    const MYAGE = 19;
    
    let testString = 'I am a string';

    let testChar = 'S';

    let testObj = {};

    let testArrObj = [{}, {}, {}];

    let testArray = [];

    let testUndefined = undefined;

    let testBool = true;

    let testNull = null;

    let testFunc = function(value){
        return value;
    }

    // используя тильду/обратные кавычки можно вставлять в код значение переменных
    console.log(`Хэй, ${testString}`);
    // 
    console.log('тип: ' + typeof(testString));

    console.log('тип: ' + typeof(testChar));

    console.log('тип: ' + typeof(testObj));

    console.log('тип: ' + typeof(testArrObj));

    console.log('тип: ' + typeof(testArray));

    console.log('тип: ' + typeof(testUndefined));

    console.log('тип: ' + typeof(testBool));

    console.log('тип: ' + typeof(testNull));

    console.log('тип: ' + typeof(testFunc));



}

testTypes();

