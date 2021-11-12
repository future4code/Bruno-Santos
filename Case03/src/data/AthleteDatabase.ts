import { Athlete } from "../business/entities/Athlete";
import { BaseDatabase } from "./BaseDatabase";

export class AthleteDatabase extends BaseDatabase {

    async createAthlete(athlete: Athlete) {

        try {

            await BaseDatabase.connection("ATHLETE").insert({
                id: athlete.id,
                name: athlete.name,
                value: athlete.value,
                unity: athlete.unity,
                competitionId: athlete.competitionId
            })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}