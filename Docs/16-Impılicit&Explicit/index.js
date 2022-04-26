
const obj = {
    name: "JS-50 COOL !"
}

const func = {
    name: "JS-50",
    display: function(){
        console.log(this.name)
    }
}

const arrow = {
    name: "JS-50",
    display: () => {
        console.log(this.name)
    }
}

// Implicit Function
func.display(obj)
// JS-50

arrow.display(obj)
// 

// Explicit Function
func.display.call(obj)
// JS-50 COOL !

arrow.display.call(obj)
//



