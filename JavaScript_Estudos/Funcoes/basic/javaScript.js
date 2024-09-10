//Objeto


const person = {
    name: 'thiago',
    age: 25,
    isAdmin: true,

}

console.log(`O ${person.name} possui ${person.age} de idade.`)


//Array


const animals = [
    'macaco',
    'cachorro',
    'gato',
    'papagaio'
]
//Nao se limita a so um tipo, pode colocar string, number, array, objeto, boolean

for (const animal in animals) {
    console.log(animals[animal])
}