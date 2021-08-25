import {Request, Response} from "express"
import moment from "moment"
import insertTask from "../data/insertTask"
import selectTaskById from "../data/selectTaskById"

export default async function getTaskById(
    req: Request, res: Response
){
    try {

        // validar entradas da requisição

        const result = await selectTaskById(req.params.id)

        // consultar o banco de dados

        // validar saídas do banco

        if(!result){
            res.status(404).send({message: "Tarefa não encontrada"
            })

            return
        }

        // responder a requisição

            res.status(200).send({
                id: result.id,
                title: result.title,
                description: result.description,
                deadline: moment(result.deadline, 'YY-MM-DD').format('DD/MM/YYYY'),
                status: result.status,
                authorID: result.author_id,
                authorNickname: result.nickname
            })

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage
        })
    }
}