import { AthleteDatabase } from "../data/AthleteDatabase";
import { Athlete, AthleteDTO } from "./entities/Athlete";
import { IdGenerator } from "./services/IdGenerator";

export class AthleteBusiness {
    private idGenerator: IdGenerator

    constructor() {
        this.idGenerator = new IdGenerator()
    }

    async createAthlete(athleteDTO: AthleteDTO) {
        try {

            const id: string = this.idGenerator.generateId()

            const athleteModel: Athlete = {
                id,
                name: athleteDTO.name,
                value: athleteDTO.value,
                unity: athleteDTO.unity,
                competitionId: athleteDTO.competitionId
            }

            await new AthleteDatabase().createAthlete(athleteModel)

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}