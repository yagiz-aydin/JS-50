function x(){
    console.log("first");
    function y(){
        console.log("second");
        function z(){
            console.log("third");
        }
        return z;
    }
    return y;
}

x()

/*  OUTPUT

    first
    ƒ y(){
        console.log("second");
        function z(){
            console.log("third");
        }
        return z;
    }
*/

x()()

/*  OUTPUT  

    first
    second
    ƒ z(){
        console.log("third");
    }
*/

x()()()

/*  OUTPUT  

    first
    second
    third
*/

// Bonus What is the output of this code

function x(){
    for(var i = 1; i<=5; i++){
        setTimeout(function(){
            console.log(i)
        },i * 1000)
    }
}

x()
//https://www.jsv9000.app/?code=ZnVuY3Rpb24geCgpewogICAgZm9yKHZhciBpID0gMTsgaTw9NTsgaSsrKXsKICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7CiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpCiAgICAgICAgfSxpICogMTAwMCkKICAgIH0KfQoKeCgpCgpmdW5jdGlvbiB5KCl7CiAgICBmb3IobGV0IGkgPSAxOyBpPD01OyBpKyspewogICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsKICAgICAgICAgICAgY29uc29sZS5sb2coaSkKICAgICAgICB9LGkgKiAxMDAwKQogICAgfQp9Cgp5KCkK