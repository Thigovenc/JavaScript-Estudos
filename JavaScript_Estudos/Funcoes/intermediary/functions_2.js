//Arrow Function

const sayMyName = (name) => {
    console.log(name)
}


sayMyName("thiago")
sayMyName()


//CallBack Function

function perguntaFeliz(frase){

    console.log("Antes do CallBack")

    frase()

    console.log("Depois do CallBack")
}

perguntaFeliz(
    () => {
        console.log("CallBack sendo executado.")
    }
)