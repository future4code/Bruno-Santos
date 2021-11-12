import { Request, Response } from "express";
import { Competition, UpdateCompetition } from "../business/entities/Competition";
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

    async updateCompetition(updateCompetitionModel: UpdateCompetition) {

        try {
            await BaseDatabase.connection.raw(`
            UPDATE COMPETITION
            SET status = ${updateCompetitionModel.status}
            WHERE id = "${updateCompetitionModel.id}"
        `)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}