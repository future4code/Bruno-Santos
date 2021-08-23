import { Request, Response } from "express"
import selectUsersByParams from "../queries/selectUsersByParams"

export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.params.type

        if (typeof type !== "string") {
            res.statusCode = 404
            throw new Error("Expected string")
        }

        const users = await selectUsersByParams(type)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}