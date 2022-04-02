var number = 1; // allocates memory for a number
var some = 'Some'; // allocates memory for a string

var obj = {
  a: 1,
  b: null
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and
// contained values
var a = [1, null, 'abra'];

function x(a) {
  return a + 2;
} // allocates a function (which is a callable object as x())

var name = 'JS-50';
var nameSubStr = s.substr(0, 3); // nameSubStr is a new string

// Since strings are immutable values,
// JavaScript may decide to not allocate memory,
// but just store the [0, 3] range.

var stringArray1 = ['JS', '50'];
var stringArray2 = ['is', 'cool'];
var stringConcatArray = stringArray1.concat(stringArray2);
console.log(stringConcatArray)
// new array with 4 elements being
// the concatenation of stringArray1 and stringArray2 elements.

// ! MOSTLY of automatically finding whether some memory "is not needed anymore" is undecidable.