//parametros pré definidos em funções. Sempre que algo n é definido na função, sai como undefined
//exemplo:
function arrumar(quarto, sala){
    console.log(data) //data, undefined
}

//para evitarmos isso, é possível fazer:

function pessoa(nome, sobrenome, nomedomeio = " "){

console.log(`${nome}${nomedomeio}${sobrenome}`)
}

function potencia(x = 2, y = x){
   return Math.pow(x,y)
}
console.log(potencia())//4
console.log(potencia(2))//4
console.log(potencia(2,2))//4

//não permitir que o usuário continue se não colocar o parametro
function parametrobrigatorio(parametro){
    throw new Error(`o parametro ${parametro} é obrigatório`)
}
function tela(objeto = parametrobrigatorio('objeto')){
    //corpo do codigo

}

