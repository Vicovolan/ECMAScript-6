//for in, for of
var	linkedin	=	{
    nome:	'Vitoria',
    idade : 20
}

for(var perfil in linkedin){

    var info = linkedin[perfil]
    console.log(info)
}//for in percorre o nome dos atributos de um objeto, portanto pode ser usado para uma lista de dados

var dados = [3,4,5,9,10,11,24]

for(numeros of dados){
    console.log(numeros)
} //for of percorre apenas os objetos, não pode ser usado para dados por exemplo
//pode usar break e continue dentro do lado for in/of junto com um if por exemplo

//cor dos gatos usando for of
var gatos = ['niko', 'milo' ];

function selecionar_cor(gato) {
    var cores = ['amarelo', 'frajola', 'preto', 'branco', 'cinza', 'tricolor'];
    console.log(gato, cores[Math.floor(Math.random() * cores.length)]);
}



for(var gato of gatos ){

    selecionar_cor(gato)
}

// map 

var map = new Map()
var objeto = {}
function funcao(){}

map.set("palavras", "sou uma string")
map.set(funcao, "sou uma função")
map.set(objeto, "sou um obj")

console.log(map.get(funcao)+": ")
console.log( map.size)
console.log(map.has("abc")) //verificar se tem abc dentro do map

console.log(map.has("palavras")) //true
map.delete("palavras")
console.log(map.has("palavras")) //false

var	map	=	new	Map();
map.set('um',	1);
map.set('dois',	2);
map.set('três',	3);
for(var	chave	of	map.keys()){
		console.log(chave);	//	um	dois	três
}
console.log( map.has("três"))
console.log( map.has("quatro"))

for (var value of map.values()){
   
  console.log(value)
}

for(var entrada of map.entries()){
    console.log(entrada)
}
