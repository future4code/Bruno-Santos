import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)

// Aula 52

// Exercício 1

// a) Através do construtor, podemos ter ações que devem ser executadas ao criar uma instância de classe.
// Para chamar, devemos declarar a função constructor().

// b) 

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = "1234";
       this.name = "Bruno";
       this.age = 30;
    }
  }

  // Exercício 2

//   type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }

  class Transaction {
      description: string
      value: number
      date: string

      constructor(trDescription: string, trValue: number, trDate: string) {
        this.description = trDescription
        this.value = trValue
        this.date = trDate
      }
  }

  // Exercício 3

  class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }

