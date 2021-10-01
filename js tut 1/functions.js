function sayHiToSomeone(name) {
    //console.log(`Hi ${name}`);
    return `Hi ${name}`;
}

const i = sayHiToSomeone('Grv');
console.log(i);

const sayHiToSomeone2 = function (name) {
    return `Hi ${name}`;
}

const sayHiToGoogle = sayHiToSomeone2('Google');
console.log(sayHiToGoogle);

function howWasYourDay(name, callback) {
    console.log(callback(name) + ', How was your day?');
}

howWasYourDay('Google', sayHiToSomeone2);
howWasYourDay('Youtube', sayHiToSomeone2);

const sayHi = name => console.log('Hi ' + name);
sayHi('grv');

const sayHi2 = (name, age) => {
    console.log('Hi ' + name);
    console.log('I am ' + age + ' y.o.');
}
sayHi2('grv', 27);

const fun = num => num > 0 && num <= 100 ? true : false;
console.log(fun(101));
console.log(fun(17));
console.log(fun(-2020));

const country = {
    name: 'Algeria',
    motherLang: 'Arabic',
    flagColor: ['red', 'green', 'white'],
    continent: 'Africa'
}
for (const key in country) {
    if (key != 'flagColor') {
        console.log(key, ':', country[key]);
    } else {
        let flagColors = 'flag colors: ';
        for (const color of country[key]) {
            flagColors += color + ', ';
        }
        console.log(flagColors);
    }
}

const reverse = (name) => {
    let arr = [];
    for (let i = name.length - 1, j = 0; i >= 0; i--, j++) {
        arr[j] = name[i];
    }
    return arr;
}
console.log(reverse('grv'));