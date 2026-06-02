let filmes = ["Coraline", "Batman", "Scarface"]
console.log(filmes[0])

let numeros = [3, 6, 2, 1, 8]
//Desafio: Imprima os números da lista usando um laço de repetição

//for(let index = 0; index < numeros.length; index ++){
 //   console.log(numeros[index])
//}

// Desafio: Imprima os numeros aumentando em 5
for(let index = 0; index < numeros.length; index ++){
    numeros[index] += 5
    console.log(numeros[index])
}

//numeros.length indica a quantidade de elementos do array
//numeros.push() serve pra adicionar ao final
//numeros.pop() serve para remover o ultimo elemento
//numeros.unshift() serve para adicionar no inicio
//numeros.shift() serve para remover o primeiro elemento
//numeros.splice() serve para remover ou adicionar elementos em qualquer posição do array