//Módulos
//modularixar um código é separar ele em modulos para melhorar entendimento e organização
//commonJS e AMD bibliotecas externas usadas para modular
//no commonJS: para Node.js usamos require
//biblioteca express.js para subir um servidor
var express = require('express')
var app = express()
app.listen(8080,function(){
    console.log("Oi")
})

//AMD: usa mt RequireJS
//é preciso definir as configurações do arquivo
requirejs.config({
    "baseUrl":	"js/modulos", //jquery baixada da URL
    "paths":	{
        "app":	"../app", //e disponibilizada no app
         "jquery":	"//code.jquery.com/jquery-3.1.1.min.js",
    }
});

//para usa-la usamos define para definir os modulos e uma função callback para falar como sera usada
define(["jquery"], function($){

$(function(){
    $('body')
    });

});
//exportar e importar 

const PI = 3.14

function area(raio){
    return PI*raio*raio
}

function peri(raio){
    return 2*PI*raio
}
//definimos um modulo, agr precisamos exporta-lo
//export default peri //padrão, só sairia o peri(2)
export{area, PI} //nomeado, aqui sai area(2) e o PI, ai faço console.log(PI) pra descobrir o valor
// pra chamar
import peri from './circunferencia'
//ou
import {peri, PI} from './circunferencia'

//importar classes

class Controles{
    //corpo
}

export {Controles};
import Controles from './Controles'

//podemos mudar o nome na importação usando as
class Perfil{
    //corpo
}
export	default	Perfil;

//import Perfil as jogador from './profile'//ta dando erro n sei pq
import {perfil as jogador }from './profile' //se fosse nomeado






