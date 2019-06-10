// var n: Number = 1;
// var s: String = 'Nemer';
// var a: any = 'any string  or number';
// var b: Boolean = false;
// var namesArr: String[] = ['Nemer', 'Jan', 'Joao'];
// var numbersArr: Number[] = [3, 4, 6, 9];
function printName(stark) {
    console.log('Name: ' + stark.name + ' -Age: ' + stark.age);
}
var person = { name: 'Nemer', age: 36 };
printName(person);
printName({ name: 'Joao', age: 37 });
