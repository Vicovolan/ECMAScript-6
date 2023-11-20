//Js é uma linguagem orientada a objeto 
// é possível criar um novo objeto por meio de funções construtotras ou obj literais
//diferença é que obj literais são estáticos e unicos. Mesmo que esteja em varias variáveis, todas apontarão para a mesma referência
var	nome	=	'Eliete';
var	sobrenome	=	'Stoffel';

var pessoa = { //objeto
    nome: nome,
    sobrenome: sobrenome
}
//ou
const pessoa = {nome,sobrenome}

// para função é possível :
var pessoa={nome,
sobrenome,
seApresentar(){console.log(`Olá!	Sou	a	${this.nome}	${this.sobrenome}`)
}
}

//indices de propriedades computadas
const metodoA = 'Vi'
const metodo5 = {
    [metodoA](){
        console.log("Oi")
    }
}
console.log(metodo5[metodoA]) //executa metodo

//podemos fazer qualquer tipo de concatenação entre strings
const metodo = `Vi`
const sobrenome = `Stoffel`
const metodo1 = {
    [`${metodo}${sobrenome}`](){
        console.log(this[metodo])
    }
}

objeto.ViStoffel();

//no json temos algums limitações: todas as chaves precisam estar entre aspas, strings precisam estar entre aspas duplas
//os valores possuem limitações
//obtendo dados de uma rede de hospital

function obterdados(){

    const nome = document.getElementById('nome').value
    const sexo = document.getElementById('sexo').value
    const idade = document.getElementById('idade').value
    return{nome, sexo, idade}
}
//tem alguns requisitos para esse tipo de documentação, usaremos ajax 
const	url	=	'https://sistemasaude.com.br/api/cadastros/paciente';
const	dados	=	obterDadosDaTela();

const dadosJson = JSON.stringify(obterdados)

$.ajax({
    url: url,
    dataType : 'json',
    contentType: 'application/json;	charset=UTF-8',
    data: dadosJson,
    type: 'POST',
    complete: callback

})
