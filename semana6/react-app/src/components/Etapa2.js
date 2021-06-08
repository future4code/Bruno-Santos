import React from "react";
import PerguntaAberta from "./PerguntaAberta";

export default class Etapa2 extends React.Component {
    render () {
        return (
            <div>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <PerguntaAberta pergunta={"5. Qual o curso?"} />
                <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
            </div>
        )
    }
}