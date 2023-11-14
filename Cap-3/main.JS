
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

var maisvelho = pessoas.filter(function(pessoa){

    return pessoa.idade > 22; /*true or false*/ 
})

console.log(maisvelho);

/*Encontrar uma pessoa dentro da lista usando find */

var romulo = pessoas.find(function(pessoa){

    return pessoa.nome == 'romulo'
});

console.log(romulo);
