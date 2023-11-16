/* iterador */

var gatos = ['niko', 'milo'];

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
    selecionar_cor(cores[Math.floor(Math.random() * cores.length)]);
    prox = iterador.next();
}