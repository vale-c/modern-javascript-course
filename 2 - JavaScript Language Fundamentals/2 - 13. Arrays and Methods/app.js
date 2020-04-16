const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,24,56,77,60);
const fruit = ['Orange', 'Apple', 'Pear', 'Banana'];
const mixed = [22,'Hello', true, undefined, null, {a:1,b:1}, new Date()];
// console.log(mixed);

let val;
// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// // MUTATING ARRAYS
// // add on to end
// numbers.push(250);
// //add on to front
// numbers.unshift(120);
// //take off from end
// numbers.pop()
// // Take off from front
// numbers.shift();
// //Splice values
// numbers.splice(0,1);
// // Reverse  the Array
// numbers.reverse();

//Concatenate array
val = numbers.concat(numbers2);

// Sorting an array
val = fruit.sort();
//val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort((x,y) =>{
//   return x-y;
// })
// // Reverse sort
// val = numbers.sort((x,y) => {
//   return y-x;
// })

// Find
function underFifty(num) {
  return num < 50;
}

function overFifty(num) {
  return num > 50;
}

val = numbers.find(underFifty);
val = numbers.find(overFifty);

// Logging values
console.log(numbers);
console.log(val);

