import express, {Express} from "express"
import cors from "cors"
import { AddressInfo } from "net"

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

type account = {
    name: string,
    CPF: number,
    birthDate: string
}

let users: account[] = []

type bankTransfer = {
    name: string,
    CPF: number,
    RcptName: string,
    RcptCPF: number,
    value: number
}