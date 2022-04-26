function add(a){
    return function (b){
        if (b) return add(a+b);
        return a;
    }
}

console.log(add(5)(2)())


// Bonus Question 
// Implement this code in bellow

const result = calc.add(10).multiply(5).substract(30).add(10);

console.log(result)
// ((10 * 5) - 30) + 10 = 30