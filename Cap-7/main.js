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

// usar o set e elimina umas linhas de código(esse set.add ta la em cima a function)

var set = new Set()
set.add(2)
set.add(1)
set.add(2)

for(const valor of set){

    console.log(valor)
}
//add musicas

var musicas = new Set()
musicas.add("just like u")

for(const musica of musicas){
    console.log(musica)
}

musicas.delete("just like u")

for(const musica of musicas){
    console.log(musica)
}

var musicas = new Set(['me','myself','I'])
musicas.clear( )

for(const musica of musicas){
    console.log(musica)
}


if(musicas.has('myself')){
    console.log("já esta na lista")
}

var qnt = musicas.size
console.log("Na playlista há " + qnt + " músicas")

//weakset
// só é possível add elementos, n é possivel usar o clear e n é iterável

var musica1 = {
    autor: 'JeM',
    musica: "amor de conto"
}

var musicas = new WeakSet([musica1]);
console.log(musicas)

musica1 = null //weakset n retorna musica sem referencia