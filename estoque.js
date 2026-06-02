let estoqueAtual = 100
let vendasDia = 35
estoqueAtual = estoqueAtual -= vendasDia
estoqueAtual +=10
let produtosPorCaixa = 12
let estoqueExtra = estoqueAtual % produtosPorCaixa
console.log(estoqueAtual)
console.log(estoqueExtra)
