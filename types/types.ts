// var n: Number = 1;
// var s: String = 'Nemer';
// var a: any = 'any string  or number';
// var b: Boolean = false;
// var namesArr: String[] = ['Nemer', 'Jan', 'Joao'];
// var numbersArr: Number[] = [3, 4, 6, 9];

// enum Starks {
//   Jon,
//   Bran,
//   Edward,
//   Cathlin
// }
// var cat: Starks = Starks.Cathlin;

// n = 123;
// s = 'Sahli';
// a = 345;
// b = true;

// function getName() : void {
//   console.log('Nemer Sahli');
// }
interface Stark {
  name: String;
  label?: String;
  age?: Number;
}

function printName(stark: Stark) {
  console.log('Name: ' + stark.name + ' -Age: ' + stark.age);
}
var person: Stark = { name: 'Nemer', age: 36 };

printName(person);
printName({ name: 'Joao', age: 37 });
