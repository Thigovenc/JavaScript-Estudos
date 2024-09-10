//casting
console.log('9' + 5) //95
console.log(Number('9')+ 5) //14


//contando caracters

let variavel = "texto"

console.log(variavel.length)

let numeroGrande= 5423240;
console.log(String(numeroGrande).length)


//Limitando casas decimais e trocando ponto por virgula

let numeroGrandeComPonto = 5678.23456

console.log(numeroGrandeComPonto.toFixed(2).replace('.',','))


//Transformar letras maiusculas em menusculas ou o contrario.

let word = "Fulano e muito legal"

console.log(word.toUpperCase())
console.log(word.toLowerCase())


//Separando strings 

let phrase = "O JS e meio esquisito"
let myArray = phrase.split(" ")
console.log(myArray)

let myArrayPhraseWithUnderScore = myArray.join("_")
console.log(myArrayPhraseWithUnderScore)


//Verificar se o texto tem algo em especifico

console.log(" A frase tem a palavra amor ? " , phrase.includes("amor"))


//criando Array com construtor

let myArray2 = new Array('a','b','c')
console.log(myArray2)

//Contar elementos de um array 

console.log(
    [
        'a',
        {type:"array"},
        function(){return "dentro da funcao"}
    ][2]
)


console.log(
    [
        'a',
        {type:"array"},
        function(){return "dentro da funcao"}
    ][1].type
)


//De um conjunto de caracters para elementos de um Array

let word2 = "manipulacao"
console.log(Array.from(word2))


