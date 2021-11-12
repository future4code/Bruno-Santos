import { Request, response, Response } from "express";
import { AthleteBusiness } from "../business/AthleteBusiness";
import { AthleteDTO } from "../business/entities/Athlete";

export class AthleteController {
    
    async createAthlete(request: Request, response: Response) {
        try {
            const athleteDTO: AthleteDTO = {
                name: request.body.name,
                value: request.body.value,
                unity: request.body.unity,
                competitionId: request.body.competitionId
            }
            
            if (!athleteDTO.name || !athleteDTO.value || !athleteDTO.unity || !athleteDTO.competitionId) {
                throw new Error("Algum parâmetro faltando!")
            }
            
            await new AthleteBusiness().createAthlete(athleteDTO)
            
            response.status(201).send("Atleta cadastrado com sucesso!")
            
        } catch (error: any) {
            let message = error.sqlMessage || error.message
            response.statusCode = 400

            response.send({message})
        }
    }
}