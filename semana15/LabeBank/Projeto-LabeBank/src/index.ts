import express, {Express, Request, Response} from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { accounts } from "./accounts"

const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error("Failure upon stating server.")
    }
})

// Criar conta

app.post("/users/create", (req: Request, res: Response) => {
    try {

        const {name, CPF, birthDateString} = req.body 

        const [day, month, year] = birthDateString.split("/")
        
        const birthDate: Date = new Date(`${year}-${month}-${day}`)

        // validar as entradas da requisição

        const ageInMilisseconds: number = Date.now() - birthDate.getTime()

        const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

        if (ageInYears < 18) {
            res.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos")
        }

        if (typeof name !== "string") {
            throw new Error("Nome invalido")
        }

        if (typeof CPF !== "string") {
            throw new Error("CPF invalido")
        }

        if (typeof birthDateString !== "string") {
            throw new Error("Data de nascimento invalida")
        }

        // consultar ou alterar a base de dados  

        accounts.push({
            name,
            CPF,
            birthDate,
            balance: 0,
            statement: []
        })

        // validar os resultados da consulta

        accounts.forEach(account => {
            if (account.CPF === CPF) {
                throw new Error("CPF já existe")
                }
            })

        // enviar a resposta

        res.status(201).send("Conta criada com sucesso!")

    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
})

app.get("/users/all" , (req: Request, res: Response) => {
    try {
        if (!accounts.length) {
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }

        res.status(200).send(accounts)
    } catch (error) {
        res.send(error.message)
    }
})
