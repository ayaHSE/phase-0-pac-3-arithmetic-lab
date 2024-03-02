// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
  }
  
  // Function to subtract two numbers
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  // Function to multiply two numbers
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // Function to divide two numbers
  function divide(num1, num2) {
    return num1 / num2;
  }
  
  // Function to increment a number by 1
  function increment(num) {
    return ++num;
  }
  
  // Function to decrement a number by 1
  function decrement(num) {
    return --num;
  }
  
  // Function to parse a string into an integer
  function makeInt(string) {
    return parseInt(string, 10);
  }
  
  // Function to parse a string into a float
  function preserveDecimal(string) {
    return parseFloat(string);
  }
  

  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal
  };
  