const person = {
  name: 'Prakash',
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  } 
};

person.greet();
