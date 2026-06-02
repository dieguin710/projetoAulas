let frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"]
for(let index = 0; index < frutas.length; index ++){
    //console.log(frutas[index])

}

let numeros = [1, 2, 3, 4, 5]
let soma = 0
for(let somante = 0; somante < numeros.length; somante ++){
    soma += numeros[somante]
}
//console.log(soma)
// Desafio: Imprima somente o maior numero do array1 
numeros = [1000, 22, 334, 45, 5, 6, 71]
let maior = 0

for(let contador = 0; contador < numeros.length; contador++){
    if(numeros[contador] > maior){
        maior = numeros[contador]
    }
}
console.log(maior)


