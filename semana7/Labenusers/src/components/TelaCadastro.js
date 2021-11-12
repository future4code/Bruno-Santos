import React from "react"
import axios from "axios"

export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "bruno-molina"
            }
        })
        .then((res) => {
            alert("Usuário(a) cadastrado(a) com sucesso!")
            this.setState({nome: "", email: ""})
        })
        .catch((err) => {
            alert("Usuário(a) já cadastrado(a)!!")
        })
    }
    
    render () {
        return (
            <div>
                <button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>
                <h2>Cadastro de Usuários</h2>
                <input 
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <input 
                    placeholder={"E-mail"}
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}