//declaração de variáveis com const e let
//usa const nas variaveis que n esperamos que mude o valor no decorrer do tempo, se tentar mudar, da erro
//é possível adicionar ou remover elemento, é uma referencia constante ex:

const pessoa = {
    nome: 'vi'
}

pessoa.idade = 20 // {"nome:""Joao", "idade:" 20}
 //já o let pode ser usado como verdadeiro substituto do var, ex:

 let valor = 0
 valor = soma(1,2)
 console.log(valor) // 3


 const arrayLet = []
 for (var i = 0; i <= 5; i++){
    arrayLet.push(i)
 }
 console.log(arrayLet)

 const arrayVar = []
 for (var i = 0; i <= 5; i++){
    arrayVar.push(i)
 }
 console.log(arrayVar)

 //comum usar letra maiuscula para variaveis constantes
 //o valor do const é obrigatoriamente passado na sua declaração