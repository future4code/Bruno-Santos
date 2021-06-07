import React from "react";

export default class Etapa1 extends React.Component {
    render () {
        return (
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <h3>1. Qual o seu nome?</h3>
                <input placeholder={""} />
                <h3>2. Qual a sua idade?</h3>
                <input placeholder={""} />
                <h3>3. Qual o seu email?</h3>
                <input placeholder={""} />
                <h3>4. Qual a sua escolaridade?</h3>
            </div>
        )
    }
}