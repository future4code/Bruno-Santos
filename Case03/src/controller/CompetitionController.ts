import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { CompetitionDTO } from "../business/entities/Competition";


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

}