/*

1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) = 

RESPOSTA = FALSE

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

RESPOSTA = FALSE

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

RESPOSTA = FALSE

console.log("d. ", typeof resultado)

RESPOSTA = FALSE

2
RESPOSTA = VAI APARECER POR EXTENDO UM NÚMERO AO LADO DO OUTRO

3
RESPOSTA = COLOCAR O TIPO NUMBER ANTES DAS VARIÁVEIS

*/

/*

//1

const idadeDoUsuario = prompt("Qual a sua idade?")
const idadeDoAmigo = prompt("Qual é a idade do seu amigo?")
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeDoUsuario > idadeDoAmigo)
console.log(idadeDoUsuario - idadeDoAmigo)


//2

// let par = prompt("Digite um número par")

// console.log(par % 2)

// C) TODOS OS RESULTADOS SERÃO 0

// D) TODOS OS RESULTADOS SERÃO 1

//3
//const idade = prompt("Qual a sua idade?")

//A) 
//console.log("meses", idade * 12)

//B)
//console.log("dias", idade * 12 * 30)

//C
//console.log("horas", idade * 12 * 30 * 24)



//4
*/

let primeiroNumero = prompt("Escreva um número")
let segundoNumero = prompt("Escreva outro número")

console.log("O primeiro numero é maior que o segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero === 0)
console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0)



