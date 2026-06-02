let assinaturaAtiva = false
let primeiraCompra = true
let contaSuspensa = false

let elegivel = (assinaturaAtiva ||(primeiraCompra && !contaSuspensa))
console.log(elegivel)

