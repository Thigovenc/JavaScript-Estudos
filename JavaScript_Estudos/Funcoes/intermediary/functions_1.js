

//function Anonymous
//function expression


//parametros

const sum = function(number1,number2){
    let total = number1 + number2
    return total
}

sum(5,5)
console.log(sum(5,4))



//function Hoisting

sayMyName()

function sayMyName(){
    console.log('Thiago')
}

sayMyName2()
let sayMyName2 = function(){
    console.log('thiago 2')
}
