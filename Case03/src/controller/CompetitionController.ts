import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { CompetitionDTO, ResultsCompetition, UpdateCompetition } from "../business/entities/Competition";


export class CompetitionController {

    async createCompetition(request: Request, response: Response) {

        try {

            const competitionDTO: CompetitionDTO = {
                name: request.body.name,
                status: request.body.status
            }

            if(!competitionDTO.name || !competitionDTO.status) {
                throw new Error("Algum parâmetro está faltando!")
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
        
            await new CompetitionBusiness().updateCompetition(updateCompetition)
            
            res.status(200).send("Status da competição atualizado com sucesso!!")

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({message})
        }
    }
}

//     async getResultsFromCompetition(req: Request, res: Response) {

//         try {

//             const resultsCompetition: ResultsCompetition = {
//                 competitionId: req.body.competitionId
//             }

//             await new CompetitionBusiness().getResultsFromCompetition(resultsCompetition)

//             res.status(200).send("Ta foda!")

//         } catch (error: any) {
//             let message = error.sqlMessage || error.message
//             res.statusCode = 400

//             res.send({message})
//         }
//     }

// }

// function results(results: any, any: any) {
//     throw new Error("Function not implemented.");
// 
