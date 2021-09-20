import { Request, Response } from "express";
import { SignupDTO, UserBusiness } from "../business/UserBusiness";

export class UserController {
  private userBusiness: UserBusiness;

  constructor() {
    // Instanciando o business
    this.userBusiness = new UserBusiness();
  }

  async signup(request: Request, response: Response) {
    try {
      // Monta o DTO
      const signupDTO: SignupDTO = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
      };

      // Valida o DTO
      if (!signupDTO.email || !signupDTO.name || !signupDTO.password) {
        throw new Error("Algum parâmetro faltando");
      }

      // Invoca o caso de uso
      const output = await this.userBusiness.signup(signupDTO);

      response.send({ token: output.token });
    } catch (error: any) {
      response.status(500).send(error.message);
    }
  }

  async login(request: Request, response: Response) {
    try {
      const email = request.body.email;
      const password = request.body.password;

      // Valida as entradas
      if (!email || !password) {
        throw new Error("Algum parâmetro faltando");
      }

      // Invoca o caso de uso
      const output = await this.userBusiness.login(email, password);

      response.send({ token: output.token });
    } catch (error: any) {
      response.status(500).send(error.message);
    }
  }
}
