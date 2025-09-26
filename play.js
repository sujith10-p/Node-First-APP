const person = {
  name: 'Prakash',
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  } 
};

const hobbies = ['Sports', 'Cooking', 'Reading' , 'Coding'];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }   
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);
