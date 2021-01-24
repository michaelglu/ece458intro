console.log("Hello World");

//There are 2 ways to define funcitons in JS

//This is the classic/old-school way
function add(a, b) {
  return a + b;
}
//Arrow functions ()=>{} are the hip new way
const multiply = (a, b) => {
  return a * b;
};
/*
There are certain things that are different about them and using them
incorrectly could increase likelihood of bugs, read more here:
https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
*/

//There are 3 types of variable definitions in JS
const strict = add(5, 4); // const is kind of like private final in Java
let local = multiply(5, 4); // let is kind of like private in Java
var loose = strict + local; // var is global and can be changed

console.log("5+4+5*4=" + loose);
