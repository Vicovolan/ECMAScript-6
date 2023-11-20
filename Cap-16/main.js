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

function carro(modelo){
    this.modelo = modelo
}

carro.prototype.andar = function(){
    console.log("vrummm")
}
prototipo.andar()

const volks = new	carro('Gol',	'9120219',	4);
console.log(volks.modelo);	//	Gol
volks.andar();	//	vrum	vrum

class carro {
    constructor (modelo,chassi,qtdportas){
        this.modelo = modelo
        this.chassi = chassi
        this.qtdportas = qtdportas
    }
    andar(){
        console.log("vrumm")
    }
}
const	basico	=	new	carro('Básico',	'123123',	2);
console.log(basico.modelo)//Básico

class Sonix extends carro{
    abrirTeto(){
        console.log("abrindo teto solar")
    }
}
const sonata = new Sonix;
sonata.andar()
//apenas com isso, ele nao recebe o modelo,chassi e qtdportas da classe pai. 
class Sonix extends carro{
    constructor(modelo,chassi,qtdportas){
        super(modelo,chassi,qtdportas)
    }

    abrirTeto(){
        console.log("abrindo teto solar")
    }

}
//agr sim
console.log(sonata.modelo) //Sonix
