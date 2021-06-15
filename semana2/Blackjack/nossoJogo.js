/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const novoJogo = () => {
   if(confirm("Quer iniciar uma nova rodada?") === true) {
   console.log("Bem vindo ao jogo de Blackjack!")
   
   } else {
   console.log("O jogo acabou!")
   }
}
novoJogo()

const rodada = () => {
   const jogadorCarta1 = comprarCarta()
   const jogadorCarta2 = comprarCarta()

   const computadorCarta1 = comprarCarta()
   const computadorCarta2 = comprarCarta()

   const somaJogador = jogadorCarta1.valor + jogadorCarta2.valor
   const somaComputador = computadorCarta1.valor + computadorCarta2.valor

   console.log(`Usuário - carta ${jogadorCarta1.texto}, ${jogadorCarta2.texto}, Pontuação - ${somaJogador}`)
   console.log(`Computador - carta ${computadorCarta1.texto}, ${computadorCarta2.texto}, Pontuação - ${somaComputador}`)

   if(somaJogador > somaComputador) {
      console.log("O usuário ganhou!")
   } if(somaComputador > somaJogador) {
      console.log("O computador ganhou!")
   } else {
      console.log("Deu empate!")
   }
}
rodada()






