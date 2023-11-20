// modelando com classes
//JS possui herança por prototipagem
function carro(modelo,	chassi,	qtdPortas) {
    this.modelo	=	modelo;
    this.chassi	=	chassi;
    this.qtdPortas	= qtdPortas;
}
//instanciar um objeto prototipo dele 

const prototipo = new carro ('protótipo', '129938913',2)
console.log(prototipo.modelo) //protótipo
console.log(prototipo.chassi)//129938913
console.log(prototipo.qtdPortas) //2


