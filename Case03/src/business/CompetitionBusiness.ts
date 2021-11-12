import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { Competition, CompetitionDTO } from "./entities/Competition";
import { IdGenerator } from "./services/IdGenerator";

export class CompetitionBusiness {
    private idGenerator: IdGenerator

    constructor() {
        this.idGenerator = new IdGenerator()
    }

    async createCompetition(competitionDTO: CompetitionDTO) {

        try {

            const id: string = this.idGenerator.generateId()

            const competitionModel: Competition = {
                id,
                name: competitionDTO.name,
                status: competitionDTO.status
            }

            await new CompetitionDatabase().createCompetition(competitionModel)

        } catch (error: any) {
            throw new Error(error.message)
        }

    } 
}