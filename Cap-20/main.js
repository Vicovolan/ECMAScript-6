//metaprogramação com proxies
//nos permite acessar, setar, enumerar, deletar e verificar uma propriedade
//proxy é um obj que representa outro obj
//o que é metaprogramação? um programa que altera/gera outro programa
//o programa esta dando problema e n sabemos o pq, usamos proxy pra melhorar o debug

class Usuário {
    constructor(login,senha){
        this.login = login
        this.senha = senha
    }
}

//p/ validar criamos um usuário e vemos se esta funcionando
const usuario = new Usuario('JS', '234')
console.log(usuario.login)
console.log(usuario.senha)

//parece funcionar bem mas pra saber msm, usamos proxy
const proxy = new Proxy(usuario, {
    get(alvo,propriedade){
        console.log(`${propriedade} foi solicitada`)
        return alvo[propriedade]
    }
})
//o construtor do proxy aceita dois argumentos, o primeiro é o alvo (o obj que vamos interceptar as chamadas), o segundo é um handler
console.log(proxy.senha)//saida: senha foi solicitada 
//234
//o proxy interceptou a execução da senha e imprimiu o que definimos nele ai dps voltou pra senha
//fazer um codigo para garantir que no campo idade o usuário vai colocar um número
validador = {
    set(alvo,propriedade,valor){
        if(propriedade === 'idade'){
            if(!Number.isInteger(valor)){
                throw new TypeErrorError ('A idade precisa ser um número')
            }
        }
        alvo[propriedade] = valor //atualiza o valor 
    }
}

const usuario2 = new Proxy({}, validador)
usuario2.idade = 20
console.log(usuario2.idadade) //20
usuario2.idade = 'dez' //TypeError: A idade precisa ser um número

//desativando um proxy
const{Proxy,revoke} = Proxy.revocable({},{})
Proxy.teste = 'teste'

console.log(Proxy.teste) //teste
revoke()
console.log(Proxy.teste) //TypeError: Cannot perform 'get' on a	proxy that has been	revoked
//obs:proxies desativados não podem mais ser ativados

