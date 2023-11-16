/* iterador */

var gatos = ['niko', 'milo' ];

var iteradorgatos = gatos[Symbol.iterator]();

iteradorgatos.next();

iteradorgatos.next();

iteradorgatos.next();

//Iterar cores, cada gato recebe uma cor aleatória


function selecionar_cor(cor) {
    console.log(cor);
}

var cores = ['amarelo', 'frajola', 'preto', 'branco', 'cinza', 'tricolor'];

var iterador = gatos[Symbol.iterator]();
var prox = iterador.next();

while (!prox.done) {
    var gato = prox.value;
    selecionar_cor(cores[Math.floor(Math.random() * cores.length)]); //math.floor garante que  o n é arredondado p baixo
    prox = iterador.next();
}


//for in, for of
var	linkedin	=	{
    nome:	'Vitoria',
    idade : 20
}

for(var perfil in linkedin){

    var info = linkedin[perfil]
    console.log(info)
}

var dados = [3,4,5,9,10,11,24]

for(numeros of dados){
    console.log(numeros)
}