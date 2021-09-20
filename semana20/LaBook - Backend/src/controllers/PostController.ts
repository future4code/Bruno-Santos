import { request, Request, response, Response } from "express";
import { PostDTO, PostBusiness, GetPostByIdDTO } from "../business/PostBusiness";
import { connection } from "../data/connection";
import { getPostByIdOutputDTO, Post } from "../model/Post";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PostController {
  private postBusiness: PostBusiness;
  private authenticator: Authenticator
  private idGenerator: IdGenerator;

  constructor() {
    // Instanciando o business
    this.postBusiness = new PostBusiness();
    this.authenticator = new Authenticator();
    this.idGenerator = new IdGenerator();
  }

  async createPost(request: Request, response: Response) {
    try {

      const token: string = request.headers.authorization as string

      // Monta o DTO
      const postDTO: PostDTO = {
        photo: request.body.photo,
        description: request.body.description,
        type: request.body.type,
        token
      };

      await new PostBusiness().createPost(postDTO)

      response.status(201).send("Success!");
    } catch (error: any) {
      let message = error.sqlMessage || error.message
      response.statusCode = 400

      response.send({ message })
    }
  }

    async getPostById(request: Request, response: Response) {
    try {

      let message = "Sucess!"

      const {id} = request.params

      const getPostByIdDTO: GetPostByIdDTO = {
        id: request.params.id
      }

      const post: Post = await new PostBusiness().getPostById(getPostByIdDTO)

      const output: getPostByIdOutputDTO = {
        photo: post.photo,
        type: post.type,
        description: post.description,
        createdAt: post.createdAt
      }

      response.status(200).send({message, output})

    } catch (error: any) {
      let message = error.sqlMessage || error.message
      response.statusCode = 400

      response.send({message})
    }
  }

}


