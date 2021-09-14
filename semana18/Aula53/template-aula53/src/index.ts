import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"
import { CustomError } from "./errors/CustomError"

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)

// export class CustomError extends Error {
//     statusCode: number

//     constructor(statusCode: number, message: string) {
//         super(message)
//         this.statusCode = statusCode
//     }

// try {
//     throw new CustomError(404, "Recurso não encontrado")
// } catch (error) {
//     console.log(error)
// }



// HERANÇA

// 1)

// A)

export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
  }

  
