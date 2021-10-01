let person = {
    nickname: 'random',
    level: 1
};
console.log(typeof person);
console.log(person);
let person1 = {};
person1.nickname = 'random1';
person1.level = 2;
console.log(person1);

console.log(person.nickname);
console.log(person['nickname']);

//Arrays
const colors = ['Black', 'White', 'Red', 'Yellow'];
console.log(typeof colors);
console.log(colors[1]);//second object
console.log(colors[colors.length - 1]);//last object