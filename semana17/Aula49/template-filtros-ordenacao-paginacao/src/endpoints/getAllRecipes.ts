import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const title = req.query.title || "%"
      const sort = req.query.sort || "created_at"
      const order = req.query.order || "ASC"
      const page = Number(req.query.page) || 1

      if (sort !== "created_at" && sort !== "title") {
         res.statusCode = 422
         throw new Error("'sort', must be either 'created_at' or 'title'")
      }

      if (order !== "asc" && order !== "desk") {
         res.statusCode = 422
         throw new Error("'order', must be either 'ask' or 'desk'")
      }

      const offset = 10 * (page - 1)

      const result = await connection("aula49_recipes")
         .where("title", "LIKE", `%${title}%`)
         .orderBy(sort, order)
         .limit(10)
         .offset(offset)

      const recipes = result.map(toRecipe)

      res.status(200).send(recipes)

   } catch (error) {
      if (res.statusCode === 200) {
         res.status(500).send("Internal server error")
      } else {
         res.send(error.message)
      }

   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}