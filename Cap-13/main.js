//parametros infinitos com o operador rest
//as vezes queremos uma SQL structured query language
//de consulta simple, sem where..
function	montaQuerySelect() {
    const	tabela	=	arguments[0];
    const	qtdArgs	=	arguments.length;
    let	cols	=	'';
    if(qtdArgs	>	1)	{
        for(let	index	=	1;	index	<	qtdArgs;	index++)	{
            cols	+=	`${arguments[index]},	`;
        }
            cols	=	cols.substring(0,	cols.length	-	2);
    }	else	{
            cols	=	'*';
    }
    return	`SELECT	${cols}	from	${tabela}`;
}

//arguments nos concede o podemos de resgatar parametro da função mesmo que n tenha sido declarado na assinatura
//o operador rest nos permite colocar um numero indefinido de argumentos em uma array 
function somar (...valor){
    return valor.reduce((soma,valor) => {
        return soma + valor
    },0)
}

//codigo fica enxuto 
