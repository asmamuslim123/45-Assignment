//task # 23 : Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = 'subaru';

//Test 1: Is car == 'subaru'? Prediction: True
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

//Test 2: Is car == 'honda'? Prediction: False
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

// Test 3: Is car != 'toyota'? Prediction: True
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

// Test 4: Is car === 'subaru'? Prediction: True
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test 5: Is car !== 'subaru'? Prediction: False
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

// Test 6: Is car starts with 'sub'? Prediction: True
console.log("Does car start with 'sub'? I predict True.");
console.log(car.startsWith('sub'));

// Test 7: Is car ends with 'ru'? Prediction: True
console.log("Does car end with 'ru'? I predict True.");
console.log(car.endsWith('ru'));

// Test 8: Is car includes 'aru'? Prediction: True
console.log("Does car include 'aru'? I predict True.");
console.log(car.includes('aru'));

// Test 9: Is car includes 'hond'? Prediction: False
console.log("Does car include 'hond'? I predict False.");
console.log(car.includes('hond'));

// Test 10: Is car length greater than 5? Prediction: False
console.log("Is car length greater than 5? I predict False.");
console.log(car.length > 5);
