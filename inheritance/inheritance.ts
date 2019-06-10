class Person {
  name: String;
  constructor(name: String) {
    this.name = name;
  }
  dance(min: Number) {
    console.log(this.name + ' is dancing for ' + min + 'mins');
  }
}

var nemer = new Person('Nemer');

nemer.dance(3);

class AwesomePerson extends Person {
  dance() {
    console.log('So Awesome');
    super.dance(5);
  }
}

var robb = new AwesomePerson('Robb');
robb.dance();
