// Problem 1
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable)
}
console.log(first_variable);

// rearranged code with predictions
var first_variable; // var first_variable declaration floats to the top
function firstFunc() {
  var first_variable;
  first_variable = "Yipee I'm first!!!";
  console.log(first_variable);
}
firstFunc() // runs the function

first_variable = "Not anymore!!!" // first_variable is assigned something new
console.log(first_variable); // prints new assignment

// Problem 2
var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // NOTE: I'M TRYING TO TRICK YOU HERE!!!!
}
eat();
console.log(food);

//rearranged code with predictions
var food = "Chicken";
function eat() {
  var food; //var food floats to the top and is undefined
  food = "half-chicken";
  console.log(food);
  food = "gone"; // food is set to "gone"
}
eat();
console.log(food); // food is still Chicken from global variable

// Problem 3
var new_word = "NEW!";

function lastFunc() {
  new_word = "old";
}

console.log(new_word); // "NEW!" is printed out because this line is associated with the global var new_word. function lastFunc is not ran at all
