//manipulação de textos com templates de string
// string simples

const	nome	=	'Julio';
console.log(`Boa tarde,	${nome}`) //usando crase e n aspas simples

//também é possível inserir expressão 
const n1 = 2
const n2 = 3
console.log(`${n1}+${n2}`) // 2+3

const	div	=
`<div>
	<p><b>Nome:</b>	${nome}</p>
	<p><b>Idade:</b>	${idade}</p>

</div>`

//string marcada
const horas = new Date().getHours()
const mensagem = `Bom dia, são ${horas} horas`

console.log(mensagem) //ainda é simples

const	mensagem2	=	defineMensagem`Bom	dia, são ${horas} horas`; //marca a mensagem com a tag defineMensagem sem crase

