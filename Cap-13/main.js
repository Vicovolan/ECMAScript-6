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

//arguments nos concede o podemos de resgatar parametro da função 

