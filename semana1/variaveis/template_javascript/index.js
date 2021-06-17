
function minhaFuncao(array) {
    const novoArray = array.map((numero, index, array) => {
        return numero * index
    })
    return novoArray
}

console.log(minhaFuncao([124, 780, 20]))

/* 
const nome = "Bruno" 
const sobrenome = "Moreira Santos"
const idade = "29"
const estudante = false

// console.log("Meu nome é", nome, sobrenome, ", tenho", idade, "anos, e sou", estudante, "!!")

console.log(estudante)



1 - 

Primeiro console.log = 10
Segundo console.log = 10, 5

2 - 

Ocorrerá erro pois c não está definida.
Caso a variável c tivesse sido declarada, o console.log seria 10 10 10

3 - 

O código calcula quanto o usuário recebe por hora. 

let horasDeTrabalho
let salarioPorDia

*/

/* 

// 1 -

let nome 
let idade

console.log(typeof nome)  
console.log(typeof idade)

// Como não atribuimos nenhum valor a variavel, o codigo nao sabe qual tipo ela tem e portanto considera como undefined.

nome = prompt("Qual é o seu nome")
idade = prompt("Qual é a sua idade?")

console.log(nome, idade)
console.log(typeof nome)  
console.log(typeof idade)

// Tudo que vem do prompt é uma string

console.log("Olá", nome, "você tem", idade, "anos")
 

// 2 -


const pergunta1 = "você tomou água?"
const pergunta2 = "você come carne?"
const pergunta3 = "você caminha?"

const resposta1 = prompt(pergunta1)
const resposta2 = prompt(pergunta2)
const resposta3 = prompt(pergunta3)

console.log(pergunta1, "-", resposta1)
console.log(pergunta2, "-", resposta2)
console.log(pergunta3, "-", resposta3)



// 3 -

let a = 10
let b = 25
let c

c = a // c = 10
a = b // a = 25
b = c // b = 10

console.log("a", a)
console.log("b", b)

*/

