//for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

const object = {
    a: 'X',
    b: 'Y',
    c: 'Z'
}

for (const property in object) {
    console.log(property + ' - ' + object[property]);
}

const string = 'Gaurav';
for (const char of string) {
    console.log(char);
}

//while loop
let counter = 0;
while (counter < 5) {
    console.log('Before: ', counter);
    counter++;
    console.log('After: ', counter);
}

//do while
let counter1 = 0;
do {
    if (counter1 != 0) {
        console.log('Counter: ', counter1);
    }
    counter1++;
} while (counter1 < 5);