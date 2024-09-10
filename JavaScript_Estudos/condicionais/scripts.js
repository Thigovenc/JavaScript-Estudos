let temperature = 40.5;

if (temperature >= 37.5){
    console.log("febre alta");
    console.log();
}else if(temperature < 37.5 && temperature >= 37){
    console.log('febre moderada')
}else{
    console.log('saudavel')}



//Switch

switch (expression){
    case 'a':
        //codigo
        break;
    case 'b':
        //codigo
        break
    default:
        //codigo
        break
    
}


//throw
//Para a aplicacao sem o try - catch
function sayMyName(name = ''){
    if(name === ''){
        throw 'Nome e obrigatorio'
    }

    console.log(name)
}

//try ... catch

try{
    sayMyName()
}catch(e){
    console.log(e)
}

console.log('Apos a funcao de erro')