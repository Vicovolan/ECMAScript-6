//desestrututramentos de objetos e arrays. objetivo é extrair valores armazenados em objetos e arrays
//um cadastro de usuário
const	Usuario	=	{
    nome:	'Vitoria',
    sobrenome:	'Covolan',
    senha:	'mrrobot',
    email:	'vitoriacovolan@yahoo.com',
    profissao:	'Engenheiro	de	Cibersegurança',
    github:	'https://github.com/Vicovolan'
}

//validar o email
const {email} = Usuario //extração
console.log(email) //vitoriacovolan@yahoo.com

//poderia extrair varios tbm
const {senha,nome} = Usuario
console.log(nome) //Vitoria

//nem sempre o nome que sai da variável é bom, por isso, usa label para rotular 
const {nome: apelido} = Usuario //mudei o rotulo de nome para apelido
console.log(nome)//undefined
console.log(apelido) //Vitoria

const suco = {
    sabor: 'manga', 
    quant: '300ml'}

function descrevesuco({sabor,quant}){
    console.log(`esse suco é de ${sabor} e tem ${quant}`)
}
//temos uma api com varios dados a temp, caso queira apenas a temp atual, max e min faz
const {temperatura, maxima,minima} = recuperaDaAPI()
console.log(temperatura)//exemp: 24°C

//desestrututrar array
const cores	= ['azul', 'cinza',	'branco', 'preto'];
const [cor1,,,cor2] = cores//atribui a primeira e a ultima cor para cor1 e cor2

const	contatos	=	[
    {
        nome:	'Alex	Júnior',
        numero:	'1234-5678'
    },
    {
        nome:	'Carolina	Moya',
        numero:	'1234-6789'
    },
    {
        nome:	'Fernando	Jorge',
        numero:	'1234-5567'
    }
];

//quero apenas o numero da carol
function mostrarnum([,{numero}]){
    console.log(numero)
}

mostrarnum(contatos); //só o numero da Carol
