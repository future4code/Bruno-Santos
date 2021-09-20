import { connection } from "../data/connection"
import { PostDatabase } from "../data/PostDatabase"
import { Post, POST_TYPES } from "../model/Post"
import { User } from "../model/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export interface PostDTO {
  photo: string
  description: string
  type: POST_TYPES,
  token: string
}

export interface GetPostByIdDTO {
  id: string
}

export class PostBusiness {
  private postDatabase: PostDatabase
  private hashManager: HashManager
  private authenticator: Authenticator
  private idGenerator: IdGenerator

  constructor() {
    this.postDatabase = new PostDatabase()
    this.hashManager = new HashManager()
    this.authenticator = new Authenticator()
    this.idGenerator = new IdGenerator()
  }

  async createPost(postDTO: PostDTO) {

    try{

    if(!postDTO.token) {
      throw new Error("A jwt must be provided")
    }

    const tokenData = this.authenticator.getTokenData(postDTO.token)

    const id: string = this.idGenerator.generateId()

    // Criar modelo do post
    const postModel: Post = {
      id,
      authorId: tokenData.id,
      createdAt: new Date(),
      description: postDTO.description,
      photo: postDTO.photo,
      type: postDTO.type
    }

    await new PostDatabase().createPost(postModel)

  } catch(error: any) {
    throw new Error(error.message)

  }  

}

  async getPostById(getUserByIdDTO: GetPostByIdDTO) {
    try {

      const post: Post = await new PostDatabase().getPostById(getUserByIdDTO.id)
    
      if (!post) {
        throw new Error("Post not found")
      }

      return post;
      
    } catch (error: any) {
        throw new Error(error.message)
    }
  }

}


