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

//weakmap
//WeakMap é	uma	coleção	de	pares de	chave/valor	na	qual as	 chaves	 só	 podem ser objetos.
//weakmap para armazenar dois elementos de uma pag HTML

var	weakMap	=	new	WeakMap();
var	elemento1	=	window;
var	elemento2	=	document.querySelector('body'); //fazer exercicios
weakMap.set(elemento1,	'sou	o	elemento1');
weakMap.set(elemento2, 'sou o elemento 2');

console.log(weakMap.get(elemento1));

weakMap.delete(elemento2)
console.log(weakMap.has('sou o elemento2'))

elemento2.parentNode.removeChild(elemento2); //remove todas as referencias do elemento2, ou seja, o nó pai dele n doc
elemento2 = null //remove referencia local

//após isso, ao chamar com get o eelemento 2, a saida é undefined

console.log(weakMap.get(elemento2));
//com weakmap não é possível passar uma funcao, precisa ser um objeto
// só é possível usar get,has,set e delete com weakmap, não é possível impar tudo usando clear ou usar entries
//weakMap é pouco usado no dia a dia, na maior parte, usa o map
//vantagem: podemos armazenar dados em um objeto e quando ele é excluido, o dado tbm é, liberando espaço e n havera memory leak
var Pessoa = function(){
	var dadosPrivados = new WeakMap()
	function Pessoa(nome){
		dadosPrivados.set(this,{nome:nome})  // Configura o dado privado para a instância atual
	}
	Pessoa.prototype.getNome = function(){
		return dadosPrivados.get(this).nome //acessa a instancia atual
    
	}
	return Pessoa
}();

var vitoria = new Pessoa('vitoria')
console.log(vitoria.getNome())// Imprime o nome da instância 'vitoria' usando o método getNome()

console.log(vitoria.nome) //undefined pq tenta acessar diretamente a propriedade "Nome" mas não permite



