// Call a function second time is not the same time as amounted before
// As a result when function triggers it takes some time to handle every time when call it
// But with memoize much faster also It depends on If function handles a lot of proccess!

const square = (num1, num2) => {
    for(let i = 1; i<= 10000000; i++){}
    return num1 * num2;
}

console.time("First Function")
console.log(square(9367,8200))
console.timeEnd("First Function")
//First Function: 13.906982421875 ms

console.time("Second Function")
console.log(square(9367,8200))
console.timeEnd("Second Function")
//Second Function: 10.5048828125 ms

// The memoize function
function memoize(fn, context){
    const res = {}
    return function(...args){
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args)
        }
        return res[argsCache] 
    }
}

const memoizedSquare = memoize(square);

console.time("First Function")
console.log(memoizedSquare(9367,8200))
console.timeEnd("First Function")
//First Function: 10.93505859375 ms

console.time("Second Memoize Function")
console.log(memoizedSquare(9367,8200))
console.timeEnd("Second Memoize Function")
//Second Memoize Function: 0.037841796875 ms

// How to memoize a bigger function
// https://www.jsv9000.app/?code=ZnVuY3Rpb24geCgpewogICAgZm9yKHZhciBpID0gMTsgaTw9NTsgaSsrKXsKICAgICAgZnVuY3Rpb24gY2xvc2UoYSl7CiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpewogICAgICAgICAgICBjb25zb2xlLmxvZyhhKQogICAgICAgIH0sYSAqIDEwMDApCiAgICAgIH0KICAgICAgY2xvc2UoaSk7CiAgICB9Cn0KCngoKQo%3D