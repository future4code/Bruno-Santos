// EXERCÍCIO 1

// A) O código analisa se a resposta do usuário é divisível por 2. Se for, o usuário passou no teste, se não for, o usuário não passou no teste.

// B) Números pares.

// C) Números impares. 

// EXERCÍCIO 2

// A) O código mostra o preço da fruta sugerida pelo usuário.

// B) "O preço da fruta", maça é R$2,25.

// C) "O preço da fruta, Pêra, é R$5" No caso, ele usa o preço da última condição anterior ao break.

// EXERCÍCIO 3

// A) Está criando uma constante e pedindo ao usuário que digite o primeiro número.

// B) Esse número passou no teste. Se fosse -10 daria um erro pois nao tem uma condição para esta situação.

// C) Sim, haverá um erro no console pois a constante mensagem não foi definida.



// EXERCÍCIO 1
/*
const idadeUsuario = Number(prompt("Qual a sua idade?"))

if(idadeUsuario >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

// EXERCÍCIO 2

const estudo = () => {
    const turnoEstudo = prompt("Qual o turno do dia você estuda? M(Matutino), V(Vespertino) ou N(Noturno)?")
    
    if (turnoEstudo === "M") {
        return "Bom dia!"
    } else if (turnoEstudo === "V") {
        return "Boa tarde!"
    } else if (turnoEstudo === "N") {
        return "Boa noite!"
    }
}    

console.log(estudo())


// EXERCÍCIO 3

const estudo = () => {
    const turnoEstudo = prompt("Qual o turno do dia você estuda? M(Matutino), V(Vespertino) ou N(Noturno)?")
    switch(turnoEstudo) {
        case "M":
            console.log("Bom dia!")
            break
        case "V":
            console.log("Boa tarde!")
            break
        case "N":
            console.log("Boa noite!")
    }
}

estudo()
*/

// EXERCÍCIO 4

const assistirFilme = () => {
    const generoFilme = prompt("Qual o gênero de filme você vai assistir?")
    const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

    if(generoFilme === "fantasia" && precoIngresso <= 15) {
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }
}

assistirFilme()
