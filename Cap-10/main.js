//arrow function
// em declaração de função é necessário dar um nome e atribuir variavel
//já me expressão de função, é possível fazer função anonima
//declaração
function liga(){
    //expressão
    var desligar = function(){
        console.log(2)
    }
}
//tbm existe construtor de função 
var	desligar	=	new Function(arg1,arg2,'//	corpo	da	função')
var parametro1, param2, param3
//no ES6 tem ainda + uma maneira, arrow function.
(parametro1,param2,param3) => { 
    //corpo da função
}
//essa notação é menos verbosa e o contexto de execução é diferente
var bemvindo = function(){

}

var bemvindo = ()=>{ //menos verbosa
}
//com só um parametro, é possível eliminar os parenteses, exemplo:

var bemvindo = nome => {
    console.log(`entre ${nome}`)
}
bemvindo("Vitoria")
//arrow function tbm elimina o problema com o this, dele n achar a referencia
//metodo bind, tbm usado para resolver o problema do this mas a arrow function faz c que n precisemos usar


