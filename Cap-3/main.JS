
/*fazer lista numero de 1 a 9*/
var numeros = []
for(var i = 1;i < 10; i++){
    numeros.push(i);
}
/*Percorrer 1 po 1 usando forEach*/
numeros.forEach(function(numero){

console.log(numero);
})

/*fazer uma nova lista chamada divide2 com os numeros divididos por 2 usando map*/
var divide2 = numeros.map(function(numero){
return numero/2
});

console.log(divide2)
 
/* usando filter para filtrar*/ 
 var pessoas = [
        {nome: 'vi', idade: 20},
        {nome: 'pedro', idade: 19},
        {nome: 'romulo', idade: 22},
        {nome: 'guilherme', idade: 23}
 ]

var membro_mais_velho = pessoas.filter(function(pessoa){

    return pessoa.idade > 22; /*true or false*/ 
})

console.log("Pessoas que tem mais de 22 anos:")
membro_mais_velho.forEach(function(pessoa){

    console.log(pessoa.nome);
})

/*Encontrar uma pessoa dentro da lista usando find */

var romulo = pessoas.find(function(pessoa){

    return pessoa.nome == 'romulo'
});

console.log(romulo);

/*Verificar se todos dentro da lista são/possuem algo usando every */
var pessoas_maiores_20 = pessoas.every(function(pessoa){

    return pessoa.idade > 20; /*booleano*/
})

if (pessoas_maiores_20){
    console.log("Todos são maiores que 20 anos")
}else{
    console.log("Nem todos são maiores que 20 anos")
}

/*Usando some */

var membros =[
    {nome: 'vi', empresa: "DnaCenter" },
    {nome: 'pedro', empresa: "tiktok"},
    {nome: 'romulo', empresa: "nubank"},
    {nome: 'guilherme', empresa: "google"}
]

var membrosDnaCenter  = membros.some(function(membro){

    return membro.empresa == "DnaCenter"

})

if (membrosDnaCenter ){
    console.log("Algum é membro do DNACenter" )
}else{
    console.log("Ninguém é membro do DNACenter")
}

/* melhorar o código de cima usando filter, para colocar quem é membro  e usar forEach pq só com filter n ta imprimindo*/


var membrosDnaCenter = membros.filter(function(membro){

    return membro.empresa == "DnaCenter"

})

if (membrosDnaCenter.length > 0) {
    console.log("Membros do DNACenter:");
    membrosDnaCenter.forEach(function (membro) {
        console.log(membro.nome);
    });
} else {
    console.log("Ninguém é membro do DNACenter");
}

/*Usar reduce para somar todos os numeros da lista*/

var soma = 0;
soma = numeros.reduce(function(soma,numero){
    return soma+numero;
});
console.log(soma);

/*Usar reduce pra somar os nomes */

var soma_nome = pessoas.reduce(function(arraysoma2,pessoa){
     arraysoma2.push(pessoa.nome);
     return soma2
},[]); /*isso no fim é pra passar vazio [] como valor inicial*/
console.log(soma_nome);

