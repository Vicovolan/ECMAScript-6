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

let listatempo = ['bom dia', 'boa tarde', 'boa noite']

function lista(strings, ...values){
    console.log(strings)
    console.log(values)
}


function defineMensagem(strings, ...values) {
    const hora = values[1];
    if (hora >= 6 && hora <= 12) {
        values[0] = "Bom dia";
    } else if (hora > 12 && hora <= 18) {
        values[0] = "Boa tarde";
    } else {
        values[0] = "Boa noite";
    }
    values[0] = `${values[0]}, são`;
    return `${values[0]}${strings[0]}${hora}${strings[2]}`;
}
const	mensagem3 =	defineMensagem`${""}${horas}	horas`;

console.log(mensagem3);

