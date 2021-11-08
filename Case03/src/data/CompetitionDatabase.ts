import { Competition } from "../business/entities/Competition";
import { BaseDatabase } from "./BaseDatabase";

export class CompetitionDatabase extends BaseDatabase {

    async createCompetition(competition: Competition) {

        try {

            await BaseDatabase.connection("OLYMPIC_COMPETITION").insert({
                id: competition.id,
                competition: competition.competition,
                athlete: competition.athlete,
                value: competition.value,
                unity: competition.unity
            })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

}