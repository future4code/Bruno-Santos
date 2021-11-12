import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { Competition, CompetitionDTO, ResultsCompetition, UpdateCompetition } from "./entities/Competition";
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
    
    async updateCompetition(updateCompetition: UpdateCompetition) {

        try {
            const updateCompetitionModel: UpdateCompetition = {
                id: updateCompetition.id,
                status: updateCompetition.status
            }
            
            await new CompetitionDatabase().updateCompetition(updateCompetitionModel)
            
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}

//     async getResultsFromCompetition(resultsCompetition: ResultsCompetition) {

//         try {

//             const resultsCompetitionModel: ResultsCompetition = {
//                 competitionId: resultsCompetition.competitionId
//             }

//             const results = await new CompetitionDatabase().getResultsFromCompetition(resultsCompetitionModel)

//         } catch (error: any) {
//             throw new Error(error.message)
//         }

//     }
// 