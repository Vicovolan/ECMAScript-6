/*ex 1*/
var numeros = [0,1,2,3,4,5];
console.log("Saída:")
numeros.forEach(function(numero){
    
if(numero%2 ==0){
    console.log(numero, "é par")
}else{
    console.log(numero, "é impar")
}
})

/*ex 5 */

var numeros = [1,2,3,3,4,5,6]
function removeDuplicatas(numeros) {
  return numeros.reduce(function(anterior, valor) {
     var achouDuplicata = anterior.find(function(valor2){
         return valor === valor2;
     });

     if(!achouDuplicata){ /* se for falso, ou seja, n achar a duplicata */
        anterior.push(valor);
     }

     return anterior;
  }, []);
}
console.log(removeDuplicatas(numeros))

/*ex 6*/
var alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
  ];

function AlunosAprovados(alunos,media){
     var aprovado = alunos.filter(function(aluno){
        return aluno.media >= media;
  })
return aprovado
}
console.log(AlunosAprovados(alunos,5))