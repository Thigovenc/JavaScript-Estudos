for (i=0 ; i>5 ;i++){
    if(i === 3){
        continue;
    }

    console.log(i)
}

//While
let a = 0;
while(a<10){
    console.log(a)
    i++;
}

//for...of

let name = 'thiago'
let names= ['thiago','paulo','pedro']

for (let name of names){
    console.log(name)
}

//for...in

let person= {
    name: 'thiago',
    age: 30,
    weight:88.6,
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}
