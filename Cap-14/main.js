//operador spread
var arg = [1,2,3]
console.log(arg[0], arg[1],agr[2])//saida: 1,2,3

//para eviatr fazer um por um, podemos usar a função apply
//usa 2 parametros, o primeiro é o contexto da execução (this) e o segundo é array que representa os argumentos que serão passados

console.log.apply(console,arg) //saida: 1,2,3

//no ES6 tem o operador spread que n precisamos passar o param 1 e n precisa tbm sazer em qual indice esta nada
// ele usa ... igual o operador rest mas são bem diferentes 
console.log(...arg) //saida: 1,2,3

const	listaVi = ['leite',	'suco',	'sabonete'];
const	listaDa =	['arroz','carne', 'ovos'];
//unir as duas

const listatotal = listaVi.concat(listaDa)
//adicionamos outra lista 

const escritorio = ['papel','borracha','pasta']

//para concatenar de maneira mais fácil:

const listageral = [...listaVi, ...listaDa, ...escritorio] //spread

const carrinho = [
    {nome: 'botas', preço: 'R$200,00'},
    {nome: 'blusa', preço: 'R$70,00'},
    {nome: 'top', preço: 'R$80,00',}
]
const produtoadicionado = [
    {nome: 'bolsa', preço: 'R$500,00'}
]

console.log(...carrinho, produtoadicionado)
const carrinhoAtualizado = [...carrinho, produtoadicionado]

//spread em chamada de funções
var somar = (a,b) => {
    console.log(a+b)
}

const numeros = [1,2]
somar(...numeros)

//exemplo
var palavra = "ecmascript"
function contavogais(palavra){
    let vogais = 0
    const palavraLowerCase = palavra.toLowerCase();
    var letras = [...palavraLowerCase]
    for(let letra of letras){
        if("aeiou".indexOf(letra)!== -1){
            vogais++
        }
    }
    return vogais;
}
console.log(contavogais(palavra))

//usando rest e spread
var palavras = ['poster', 'carro','computador']
function contavogais(...palavras){ //rest para aceitar mais de um parametro
    let vogais = 0
    for (palavra of palavras){
    const palavraLowerCase = palavra.toLowerCase();
    var letras = [...palavraLowerCase]
    for(let letra of letras){
        if("aeiou".indexOf(letra)!== -1){
            vogais++
        }
    }
    return vogais;
}
}

