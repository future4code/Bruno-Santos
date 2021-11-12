import { Competition } from "../business/entities/Competition";
import { BaseDatabase } from "./BaseDatabase";

export class CompetitionDatabase extends BaseDatabase {

    async createCompetition(competition: Competition) {

        try {

            await BaseDatabase.connection("COMPETITION").insert({
                id: competition.id,
                name: competition.name,
                status: competition.status
            })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

}