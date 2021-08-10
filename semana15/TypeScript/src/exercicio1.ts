// A) Gera um erro dizendo que um número não pode ser atribuido `a um tipo String.

const minhaString: string = "Dois"

// B) 

const meuNumero: number | string = 2

// C) 

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1: pessoa = {
    nome: "Bruno",
    idade: 29,
    corFavorita: "azul" 
}

const pessoa2: pessoa = {
    nome: "Joseph",
    idade: 30,
    corFavorita: "verde"
}

// D)

enum CORES_DO_ARCO_IRIS {
    VIOLETA = "VIOLETA",
    ANIL = "ANIL",
    AZUL = "AZUL",
    VERDE = "VERDE",
    AMARELO = "AMARELO",
    LARANJA = "LARANJA",
    VERMELHO = "VERMELHO"
}

type pessoaArcoIris = {
    nome: string,
    idade: number,
    corFavorita: CORES_DO_ARCO_IRIS
}

const pessoa1ArcoIris: pessoaArcoIris = {
    nome: "Bruno",
    idade: 29,
    corFavorita: CORES_DO_ARCO_IRIS.AZUL
}

const pessoa2ArcoIris: pessoaArcoIris = {
    nome: "Joseph",
    idade: 30,
    corFavorita: CORES_DO_ARCO_IRIS.VERDE
}







