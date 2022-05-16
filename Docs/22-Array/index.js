/* Creating an empty array */

const array1 = new Array();
const array2 = []
const array3 = Array.from("")
const array4 = Array.of()

// [] 

/* Static Methods */

// Returns the number of elements in that array.
array1.length
// 0

// Returns Boolean, passed value is an Array or not.
Array.isArray(array1)
// true

/* Instance Methods */

//concat______________________________________________________________________________________
// ** Returns a new array that is the calling array joined with other array(s) and/or value(s).
const concatArray = ['a', 'b', 'c', 'd', 'e'].concat("f")
// ['a', 'b', 'c', 'd', 'e', 'f'];

//copyWithin___________________________________________________________________________________________________________________
// ** Returns shallow copies part of an array to another location in the same array and returns it without modifying its length.
const copyWithin1 = ['a', 'b', 'c', 'd', 'e'].copyWithin(0, 3, 4)
// Copy to index 0 the element at index 3
const copyWithin2 = ['a', 'b', 'c', 'd', 'e'].copyWithin(0, 3, 4)
// expected output: Array ["d", "b", "c", "d", "e"]
// Copy to index 1 all elements from index 3 to the end
const copyWithin3 = ['a', 'b', 'c', 'd', 'e'].copyWithin(1, 3)
// expected output: Array ["d", "d", "e", "d", "e"]

//entries______________________________________________________________________________________________
// ** Returns a new array iterator object that contains the key/value pairs for each index in an array.
const iterator1 = ['a', 'b', 'c', 'd', 'e'].entries()
iterator1.next().value
// expected output: Array [0, "a"]
iterator1.next().value
// expected output: Array [1, "b"]

//every_________________________________________________________________________________________________
// ** Method tests whether all elements in the array pass the test implemented by the provided function.
const everyArray = ['a', 'b', 'c', 'd', 'e']
const isBellow10 = (currentValue) => currentValue < 10;
everyArray.every(isBellow10)
// true

//fill________________________________________________________________________________________________________________________________________________________________
// ** Method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
const fillArray = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
fillArray.fill(0, 2, 4)
// [1, 2, 0, 0]

//filter___________________________________________________________________________________________________
// ** Method creates a new array with all elements that pass the test implemented by the provided function.
[1,2,3,4,5].filter(number => number > 1);
// [2, 3, 4, 5]

//find____________________________________________________________________________________________________
// ** Method returns the first element in the provided array that satisfies the provided testing function. 
[1,2,3,4,5].find(number => number  === 1);
// [1]
// *! Otherwise, If no values satisfy the testing function, undefined is returned.

//findIndex____________________________________________________________________________________________________
// ** Method returns the index of the first element in the array that satisfies the provided testing function.
const isLargeNumber = (element) => element > 1;
[1,2,3,4,5].findIndex(isLargeNumber)
// [1] 
// *! Otherwise, it returns -1, indicating that no element passed the test.

//flatArray____________________________________________________________________________________________________________
// ** Method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const flatArray = [1, 2, [ 3, 4, [ 5, 6 ] ] ]
flatArray.flat(1)
// [1, 2, 3, 4, [5, 6]]
flatArray.flat(2)
// [1, 2, 3, 4, 5, 6]

//flatMapArray__________________________________________________________________________________________________________________________________________
// ** Method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
//  It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.
var flatMapArray= [1, 2, 3, 4];
flatMapArray.flatMap(x => [x, x * 2]);
// is equivalent to
var n = arr.length;
var acc = new Array(n * 2);
for (let i = 0; i < n; i++){
  var x = arr[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}
// [1, 2, 2, 4, 3, 6, 4, 8]

//forEach_____________________________________________________________
// ** Method executes a provided function once for each array element.
["a","b","c","d","e"].forEach(element => console.log(element))
// a
// b
// c
// d
// e

//groupBy___________________________________________________________________________________________________________________
//** Method groups the elements of the calling array according to the string values returned by a provided testing function.
const inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
    { name: 'bananas',  type: 'fruit', quantity: 0 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 5 },
    { name: 'fish', type: 'meat', quantity: 22 }
];
inventory.groupBy( ({ type }) => type );
/*
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/

//includes________________________________________________________________________________________________________________
//** Method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
arraySample.includes("a")
// true
arraySample.includes("x")
// false

//indexOf_______________________________________________________________________________
// ** Method returns the first index at which a given element can be found in the array.
arraySample.indexOf("a")
// 0 
arraySample.indexOf("b")
// 1
// *! if it is not present returns -1 

//join_________________________________________________________________________________________
// **  method creates and returns a new string by concatenating all of the elements in an array 
// (or an array-like object), separated by commas or a specified separator string.
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"

//lastIndexOf__________________________________________________________________________
// ** Method returns the last index at which a given element can be found in the array, 
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));
// !* or -1 if it is not present. The array is searched backwards, starting at fromIndex.

//map___________________________________________________________________________________________________________________________
// ** Method creates a NEW ARRAY populated with the results of calling a provided function on every element in the calling array.
const arr = [1, 4, 9, 16];
const map1 = arr.map(x => x * 2);
// [2, 8, 18, 32]
// !* Important forEach returns undefined, map1 is an array.

//pop_____________________________________________________________________________________________________________________
// ** Method removes the last element from an array and returns that element. This method changes the length of the array.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
plants.pop()
// "tomato"

//push________________________________________________________________________________________________
// ** Method adds one or more elements to the end of an array and returns the new length of the array.
const numberZZ = [1, 2, 3, 4, 5];
numberZZ.push(6)
// [ 1, 2, 3, 4, 5, 6]

// reduce_______________________________________________________________________________________
// ** Method executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.
const arrayZ = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
// sumWithInitial: 10

// reduceRight_________________________________________________________________________________________
// ** Method applies a function against an accumulator and each value of the array (from right-to-left) 
const reduceRightArray = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
);
// [4, 5, 2, 3, 0, 1]
// *! To reduce it to a single value.
  
// reverse_____________________________________________________________________________________________________________________
// ** Method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
const reverseArray = [1, 2, 3].reverse()
// reverseArray: [3, 2, 1]


// slice__________________________________________________________________________________________________________________________
// ** Method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
const sliceArray = ['ant', 'bison', 'camel', 'duck', 'elephant']
sliceArray.slice(1, 5)
// sliceArray ["bison", "camel", "duck", "elephant"]
sliceArray.slice(2, -1)
// sliceArray ["camel", "duck"]
sliceArray.slice()
// sliceArray ["ant", "bison", "camel", "duck", "elephant"]
// where start and end represent the index of items in that array. The original array will not be modified.
  
// some__________________________________________________________________________________________________________
// ** Method tests whether at least one element in the array passes the test implemented by the provided function
function isBiggerThan10(element, index, array) {
    return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  
// 
// *! Returns true if, in the array, it finds an element for which the provided function returns true; 
// *! Otherwise it returns false. It doesn't modify the array.

// sort__________________________________________________________________________________________________________
// ** Method sorts the elements of an array in place and returns the sorted array. 
const sortArray1 = ['March', 'Jan', 'Feb', 'Dec'].sort();
// sortArray1: ["Dec", "Feb", "Jan", "March"]
const sortArray2 = [1, 30, 4, 21, 100000];
// sortArray2: [1, 100000, 21, 30, 4]
// *! The default sort order is ascending, built upon converting the elements into strings,
// *! Then comparing their sequences of !! UTF-16 code units values.


// Learn more, go to mdn documents for 