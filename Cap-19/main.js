//operações assíncronas com promises

import { rejects } from "assert";
import { resolve } from "path";

// uma promise na sua essência possui 3 estados: não resolvido, resolvido e rejeitado
let promise = new Promise((resolve,reject) => {
   let resultado = true //deu true ent vai entrar como positivo, se alterar pra false, muda
   if(resultado){
    resolve("deu certo")
   }else{
    reject("deu errado")
   }
})
promise.then((data) => {
    console.log(`resultado positivo: ${data}`)

})//resolvido
promise.catch((data) => {
    console.log(`resultado negativo: ${data}`)

}) //rejeitado

//simular uma função assíncrona dentro de promise, usando ajax e setTimeout
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

promise.then((data) => {
    console.log(`resultado positivo: ${data}`)

})//resolvido
promise.catch((data) => {
    console.log(`resultado negativo: ${data}`)

})

//se quiser aninhar outros logs por exemplos: é necessário colcoar um return dentro pq ele n armazena o valor data
promise.then((data) => {
    console.log(`resultado positivo: ${data}`)
    return data
})
promise.then((data) => {
    console.log(`resultado positivo2: ${data}`)
})
promise.catch((data) => {
    console.log(`resultado negativo: ${data}`)

})