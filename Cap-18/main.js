//funções geradoras, podemos interromper e retornar sua execução varias vezes
//pernsando no percurso de onibus
function* PercorrerLinha(){ //o asterisco é para rotular a função como geradora
    console.log("estou na parada 1")
    yield 'Fim da linha'; //interrompe a função
}//só assim, n sairia o esperado pois tem um iteravel next 

const linha = PercorrerLinha()
linha.next() //"estou na parada 1"
const parada = linha.next()

console.log(parada) ;//	{	value:	'Fim	da	linha',	done:	false	}
//value é o que foi definido no yield e done é se tudo ja foi iterado


function* PercorrerLinha(){ 
    console.log("estou na parada 1")
    yield 'Parada 1'; 
    console.log("estou na parada 2")
    yield 'Parada 2'; 
    console.log("estou na parada 3")
    yield 'Parada 3';
    console.log("estou na paradav4")
    yield ' Fim da linha'; 
}

//const linha = PercorrerLinha()
let	next = linha.next(); console.log(next);
next = linha.next(); console.log(next);
next = linha.next(); console.log(next);
next = linha.next(); console.log(next);
next = linha.next(); console.log(next);//{	value:	undefined,	done:	true	}

//e quando parar?
for(let parada of linha){
    console.log(parada)
}


