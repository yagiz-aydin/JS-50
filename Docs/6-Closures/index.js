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