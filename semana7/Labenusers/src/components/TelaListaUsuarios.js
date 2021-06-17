import React from "react"
import axios from "axios"

export default class TelaListaUsuarios extends React.Component {

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "bruno-molina"
            }
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render () {
        return (
            <div>
                <h2>Lista de Usuários</h2>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
            </div>
        )
    }
}