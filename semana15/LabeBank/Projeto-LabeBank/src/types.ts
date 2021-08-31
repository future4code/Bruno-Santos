export type bankTransfer = {
    value: number,
    date: Date,
    description: string
}

export type account = {
    name: string,
    CPF: string,
    birthDate: Date,
    balance: number,
    statement: Array<bankTransfer>
}
