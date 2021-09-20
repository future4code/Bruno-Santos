import { Post, toPostModel } from "../model/Post";
import { User } from "../model/User";
import { connection } from "./connection";

interface PostDBModel {
  id: string;
  email: string;
  name: string;
  password_hash: string;
}

export class PostDatabase {
  async createPost(post: Post) {

  try {

    await connection("labook_posts").insert({
      id: post.id,
      photo: post.photo,
      description: post.description,
      type: post.type,
      author_id: post.authorId,
      created_at: post.createdAt.toISOString().substring(0, 10)
  })
    
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message)
    
  }
    
  }

  async getPostById(id: string): Promise<Post> {
    try {

      const result: any = await connection("labook_posts").select("*").where({id})

      return toPostModel(result[0])
      
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}