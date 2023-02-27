class Person {
constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
sayName () {
    console.log (`my name is ${this.firstName} ${this.lastName}`);
    }
}
 const john = new Person ("John", "Dou");
 const anna = new Person ("Anna", "Dou");
 console.log(anna);
