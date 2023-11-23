let numeros = [1,2,3,4,5]
const dois = numeros.forEach((numero, index) => {
   //console.log(index)
})



//map e filter retorna array. 

let desenvolvedorDNA = [
    {nome: 'romulo', idade: 23},
    {nome: 'vitoria', idade:20}
]

//desenvolvedorDNA.forEach(pessoa =>
   // console.log(pessoa.nome)
 //   )

/*const {nome, idade} =  desenvolvedorDNA[0] //desetruturar objeto

console.log(nome) //romulo


desenvolvedorDNA.push({nome: 'Pedro', idade: 19}) 

console.log(desenvolvedorDNA)

let novoArray = [...desenvolvedorDNA, {nome:'Erick', idade: 28}] //outro metodo pra add elementos usando spread
console.log(novoArray)

const soma = (numero1,numero2) =>  numero1+numero2

const soma2 = true*/

//promises

let promise2 = new Promise((resolve,reject) => {
    let resultado = true

    let tempo = 2000
    setTimeout(() =>{
     if(resultado){
        resolve("deu certo")
         }else{
        reject("deu errado")
            }
    },tempo) //demora 2000 milisegundo (2 segundos) para sair a resposta
})

promise2.then((data) => {
    console.log(`resultado positivo: ${data}`)

})//resolvido
promise2.catch((data) => {
    console.log(`resultado negativo: ${data}`)

})

const verificarPromise = async()=>{ //defini a função como assincrona, p/ usar o await

    try {
        const resultado = await promise2;
        console.log(resultado)
    } catch (error) {
        console.log(error)

    }
}

verificarPromise(); 
    
console.log(promise2) //só isso, não executa a promise, por isso ou usa o then/catch ou async await pra executar a promise


    

