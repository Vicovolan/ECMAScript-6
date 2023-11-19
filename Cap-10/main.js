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
//no ES6 tem ainda + uma maneira, arrow function.
