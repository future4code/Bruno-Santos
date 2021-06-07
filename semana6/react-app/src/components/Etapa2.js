import React from "react";

export default class Etapa2 extends React.Component {
    render () {
        return (
            <div>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <h3>5. Qual o curso?</h3>
                <input placeholder={""} />
                <h3>6. Qual a unidade de ensino?</h3>
                <input placeholder={""} />
            </div>
        )
    }
}