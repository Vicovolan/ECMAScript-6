
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


