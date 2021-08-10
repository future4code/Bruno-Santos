type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// A) Instalado globalmente tsc ./nome-do-arquivo.ts

// B) Seria ./src/exercicio4

// C) Sim, usando o comando tsc

// D) O outDir, rootDir e es6. Existem diversas configs comentadas, cada uma com uma funcionalidade.