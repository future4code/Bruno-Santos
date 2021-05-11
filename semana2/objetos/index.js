

// EXERCÍCIO 1

// A) Será impresso no console Matheus Nachtergaele, Virginia Cavendish e canal Globo e horário 14h. É o primeiro e o último ator do elenco e a terceira propriedade do objeto.

// EXERCÍCIO 2

// A) Será impresso primeiro o nome Juca, idade 3 e raça SRD. Em segundo será impresso o nome Juba, idade 3 e raça SRD e em terceiro será impresso o nome Jubo, idade 3 e raça SRD.

// B) A sintaxe dos três pontos copia todo o objeto escolhido para dentro do novo objeto.

// EXERCÍCIO 3

// A) false e undefined.

// B) O "backender"retornou o valor false e a altura, como é um objeto, deu o valor de undefined e não de inexistente. 



// EXERCÍCIO 1

// A)
/*
const pessoa = {
    nome: "Bruno",
    apelidos: ["A", "B", "C"]
}

function nomeApelidos(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ${objeto.apelidos[2]}`)
}
nomeApelidos(pessoa)

// B)

const novaPessoa = {
    ...pessoa,
    apelidos: ["D", "E", "F"] 
}
nomeApelidos(novaPessoa)
*/
// EXERCÍCIO 2

const objeto1 = {
    nome: "Bruno",
    idade: 29,
    profissao: "estudante"
}

const objeto2 = {
    nome: "Lucas",
    idade: 23,
    profissao: "dev"
}

function minhaFuncao (pessoa) {
    return [
        pessoa.nome,
        pessoa.nome.length,
        pessoa.idade,
        pessoa.profissao,
        pessoa.profissao.length
    ]
}

console.log(minhaFuncao(objeto1))
console.log(minhaFuncao(objeto2))


// EXERCÍCIO 3

const carrinho = []

const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "Goiaba",
    disponibilidade: true
}

const fruta3 = {
    nome: "Uva",
    disponibilidade: true
}

function recebeCarrinho (fruta) {
    carrinho.push(fruta)
}

recebeCarrinho(fruta1)
recebeCarrinho(fruta2)
recebeCarrinho(fruta3)

console.log(carrinho)

/*
*/
