// EXERCÍCIO 1
// A) 10 e 50 -> Vai ser impresso no console o resultado da multiplicação entre os valores da variavel e o 5.
// B) Não mostraria nada.

// EXERCÍCIO 2
// A) Essa função diz se a palavra inserida pelo usuário é true ou false.
// B) i. true ii. true iii. true

// EXERCÍCIO 1
// A) 
/*
const nome = "Bruno"
const idade = 29
const cidade = "Pouso Alegre"
const estudante = "sou estudante"

function imprimeMensagem() {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}`)
}

imprimeMensagem()
*/
// B)
/*
function formaFrase(nome, idade, cidade, profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}`
}

const frase = formaFrase("Bruno", 29, "Valinhos", "sou estudante")

console.log(frase)
*/
// EXERCÍCIO 2
// A)
/*
function somaDoisNumeros(numero1, numero2) {
    return numero1 + numero2
}

const resultado = somaDoisNumeros(10, 30)
console.log("A)", resultado)

// B)
function verificaMaiorNumero(numero1, numero2) {
    return numero1 >= numero2
}

const primeiroNumeroMaior = verificaMaiorNumero(10, 20)
console.log("B)", primeiroNumeroMaior)

// C)
function verificaParidade(numero) {
    return numero % 2 === 0
}

const par = verificaParidade(4)
console.log("C)", par)

// D)
function retornaTamanho(texto) {
    return `${texto.length}, ${texto.toUpperCase()}`
}

console.log("D)", retornaTamanho("Olá pessoal"))
*/
// EXERCÍCIO 3

function soma(numero1, numero2) {
    return numero1 + numero2
}

function subtrai(numero1, numero2) {
    return numero1 - numero2    
}

function multiplica(numero1, numero2) {
    return numero1 * numero2
}

function divide(numero1, numero2) {
    return numero1 / numero2
}

const primeiroNumero = Number(prompt("Insira o primeiro número"))
const segundoNumero = Number(prompt("Insira o segundo número"))

console.log("Soma: ", soma(primeiroNumero, segundoNumero))
console.log("Diferença: ", subtrai(primeiroNumero, segundoNumero))
console.log("Multiplicação: ", multiplica(primeiroNumero, segundoNumero))
console.log("Divisão: ", divide(primeiroNumero, segundoNumero))



