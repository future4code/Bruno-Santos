import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { CompetitionDTO } from "../business/entities/Competition";


export class CompetitionController {

    async createCompetition(request: Request, response: Response) {

        try {

            const competitionDTO: CompetitionDTO = {
                competition: request.body.competition,
                athlete: request.body.athlete,
                value: request.body.value,
                unity: request.body.unity
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