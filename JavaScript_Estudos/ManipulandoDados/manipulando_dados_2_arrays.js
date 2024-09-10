let animais = ['cachorro','gato','tartaruga']


//adicionando no fim 
animais.push("macaco")
//adicionando no inicio
animais.unshift("Baleia")
//remover no fim
animais.pop()
//remover no inicio
animais.shift()
//pegar alguns elementos no array
console.log(animais.slice(1,3))
//remover 1 ou mais itens em qualquer posicao
console.log(animais.splice(1,2))
//encontrar a posicao de um elemento no array
let index = animais.indexOf('gato')
tech.splice(index,1)

console.log(animais)

