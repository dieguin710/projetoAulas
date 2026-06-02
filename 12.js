//Crie as variáveis peso (kg) e altura (metros). Calcule o Índice de Massa Corporal (IMC). Se o IMC for menor que 18.5, imprima "Abaixo do peso". Se estiver entre 18.5 e 24.9, "Peso normal". Acima disso, "Acima do peso".

let peso = 35
let altura = 1.40
let imc = peso / (altura**2)
if(imc < 18.5){
    console.log("Abaixo do peso")
} else if(imc >= 18.5 && imc <= 24.9){
    console.log("Peso normal")
} else{
    console.log("Acima do peso")
}

console.log(imc)