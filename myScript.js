//#region Task-1

// //Write a JavaScript program to check two numbers and return true if one of the number is 100 
// //or if the sum of the two numbers is 100

// //get inputs
// let num1 = prompt('Enter first number: ');
// let num2 = prompt('Enter second number: ');
// //declare
// function checkIfHundred(firstNumber, secondNumber)
// {
//     return firstNumber == 100 || secondNumber == 100 || parseInt(firstNumber) + parseInt(secondNumber) == 100;
// }

// //call & store the result
// const result = checkIfHundred(num1, num2);

// //output
// alert(result);
//#endregion

//#region Task-2

// //Write a JavaScript program to create a new string adding "New!" in front of a given string. 
// //If the given string begins with "New!" already then return the original string.

// //get input
// let inputString = prompt('Input a string: ');

// //declare 
// function startsWithNew(str){
//   return (str.startsWith("New!"))? str : "New!" + str;
// }

// //call & store the result
// const result = startsWithNew(inputString);

// //output
// alert(result);
//#endregion

//#region Task-3

// //Write a JavaScript program to create a new string from a given string taking the last 3 characters 
// //and added at both the front and back. The string length must be 3 or more, if not, the original string is returned.

// //get input
// let inputtedString = prompt('Enter a string: ');

// //declare the function
// function addLastThreeCharactersToBoth(str){
//   return (str.length < 3)? str : str.slice(-3) + str + str.slice(-3);
// }

// //call & store
// const result = addLastThreeCharactersToBoth(inputtedString);

// //output
// alert(result);
//#endregion

//#region Task-4

// //Given two values, write a JavaScript program to find out which one is nearest to 100

// //get input

// let firstValue = prompt('Enter the first value: ');
// let secondValue = prompt('Enter the second value: ');

// //express the function
// const nearestToHundred = (first, second) => {
//   return (Math.abs(100 - second) > Math.abs(100 - first)) ? first : second;
// }

// //call & store
// const result = nearestToHundred(firstValue, secondValue);

// //output result
// alert(result);
//#endregion

//#region Task-5

// //Write a JavaScript program to find the number of even digits in a an array of integers

// //initialize an array
// const integerArray = [1, 4, 7, 9, 11, 14, 16, 20];

// //declare the function

// function countNumberOfEvenDigits(intArray)
// {
//   let numberOfEvenInts = 0;
//   intArray.forEach(element => {
//     numberOfEvenInts += (element % 2 == 0)? 1 : 0;
//   });
//   return numberOfEvenInts;
// }

// //call and store
// const result = countNumberOfEvenDigits(integerArray);

// //output
// alert(result);
//#endregion
