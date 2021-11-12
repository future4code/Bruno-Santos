import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { CompetitionDTO, UpdateCompetition } from "../business/entities/Competition";


export class CompetitionController {

    async createCompetition(request: Request, response: Response) {

        try {

            const competitionDTO: CompetitionDTO = {
                name: request.body.name,
                status: request.body.status
            }

            await new CompetitionBusiness().createCompetition(competitionDTO)

            response.status(201).send("Competição cadastrada com sucesso!!")

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            response.statusCode = 400

            response.send({message})
        }
    }

    async updateCompetition(req: Request, res: Response) {

        try {

            const updateCompetition: UpdateCompetition = {
                id: req.body.id,
                status: req.body.status
            }
            console.log("CONTROLLER 1 - UPDATE")
            await new CompetitionBusiness().updateCompetition(updateCompetition)
            console.log("CONTROLLER 2- UPDATE")
            
            res.status(200).send("Status da competição atualizado com sucesso!!")

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({message})
        }

    }

}