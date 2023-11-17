//usar indexof para verificar se já existe o numero na lista 

function Set(){
    var	array =	[];
    this.add = function(valor) {
     if(array.indexOf(valor) === -1)	{
         array.push(valor); //adicionar o valor na array caso o retorno do idexof for -1, pois quer dizer q ainda n tem ele na lista
             }
    }


this.Mostrar = function(){

    console.log(array)
}



this.deletar = function(valor) {
    var index = array.indexOf(valor);
    if (index !== -1) {
        array.splice(index, 1); //remove o valor encontrado na array
    }
    console.log(array);
}

}
//teste
var set = new Set()

set.add(3)
set.add(2)
set.add(3)


set.Mostrar()
set.deletar(2)