//new - CRIAR UM NOVO OBJETO
let data = new Date('2020-12-01')
console.log(data.__proto__)


//TypeOf

const person = {
    name: 'thiago',
    age: 25
}

delete person.age

console.log(person)


//Estritamente igual e estritamente diferente

let one = 1
let two = 2

console.log(one === "1")
console.log(one === 1)

console.log(two !== "2")
console.log(two !== 2)


//Operador TErnario

let pao = false
let queijo = true

const niceBreakfast = pao || queijo ? 'Cafe top' : 'cafe ruim'

console.log(niceBreakfast)


//Precedencia de operadores

/*
    ()
    ! ++ --
    * / 
    = - 
    < <= > >=c
    == != === !==
    &&
    ||
    ?:
    = += -= *=
 */