
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

console.log(membro_mais_velho);

/*Encontrar uma pessoa dentro da lista usando find */

var romulo = pessoas.find(function(pessoa){

    return pessoa.nome == 'romulo'
});

console.log(romulo);

var pessoas_maiores_20 = pessoas.every(function(pessoa){

    return pessoa.idade > 20; /*booleano*/
})

if (pessoas_maiores_20){
    console.log("Todos são maiores que 20 anos")
}else{
    console.log("Nem todos são maiores que 20 anos")

}