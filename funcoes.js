// Declaracao da funcao
// Como se vc criasse a funcao
function apresentar(nome){
    console.log("Ola, meu nome e:", nome)
}
//Execucao da funcao
// Onde voce de fato faz a funcao funcionar, definindo seus valores
apresentar("Diego")

function converterTemperatura(celsius){
    let fahrenheit = (celsius * 9 / 5) + 32
    let kelvin = celsius + 273.15
    console.log("A temperatura " + celsius + "°C é igual a " + fahrenheit + "°F e " + kelvin + "K.")
    return [fahrenheit, kelvin]
}
let temp = converterTemperatura(25)
console.log(temp)

//Escreva uma função que receba dois números como parâmetros e retorne a soma deles.
function Somar(a, b){
    return a + b
}
let resultado = Somar(5, 10)
console.log(resultado)

//Crie uma função que receba um nome como parâmetro e retorne uma saudação personalizada.
function saudacoes(nome){
    return "Ola, seja bem-vindo, " + nome
}
let mensagem = saudacoes("Danilo")
console.log(mensagem)

// Escreva uma funcao que veja se um numero e primo ou nao, e retorne a resposta
function calcularPrimo(numero){
    for(let i = 2; i < numero; i++)
        if(numero % i === 0){
            return false
        }
    return true
}
let primo = 21
if(calcularPrimo(primo)){
    console.log(primo + " e um numero primo.")
}
else {
    console.log(primo + " nao e um numero primo.")
}



//Escreva uma funcao que faca a equacao de bhaskara
function Bhaskara(a, b, c){
    let delta = b*b -4 * a * c
    if(delta > 0){
        let x1 = -b + Math.sqrt(delta) / (2 * a)
        let x2 = -b - Math.sqrt(delta) / (2 * a)
        return [x1, x2]
    }
    else if(delta == 0){
        let x = -b / (2 * a)
        return x
    }
    else{
        return "Nao tem raizes reais"
    }
}
let resultadoBhaskara = Bhaskara(1, 5, -6)
console.log(resultadoBhaskara)


//Escreva um programa que gere um número aleatório entre 1 e 10 e peça para o usuário adivinhar. Informe se ele acertou ou não.
