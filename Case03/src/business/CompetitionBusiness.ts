import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { Competition, CompetitionDTO } from "./entities/Competition";
import { Authenticator } from "./services/Authenticator";
import { IdGenerator } from "./services/IdGenerator";

export class CompetitionBusiness {
    private authenticator: Authenticator
    private idGenerator: IdGenerator

    constructor() {
        this.authenticator = new Authenticator()
        this.idGenerator = new IdGenerator()
    }

    async createCompetition(competitionDTO: CompetitionDTO) {

        try {

            const id: string = this.idGenerator.generateId()

            const competitionModel: Competition = {
                id,
                competition: competitionDTO.competition,
                athlete: competitionDTO.athlete,
                value: competitionDTO.value,
                unity: competitionDTO.unity
            }

            await new CompetitionDatabase().createCompetition(competitionModel)

        } catch (error: any) {
            throw new Error(error.message)
        }

    } 
}