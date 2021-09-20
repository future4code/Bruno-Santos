import { UserDatabase } from "../data/UserDatabase"
import { User } from "../model/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export interface SignupDTO {
  name: string
  email: string
  password: string
}

export class UserBusiness {
  private userDatabase: UserDatabase
  private hashManager: HashManager
  private authenticator: Authenticator

  constructor() {
    this.userDatabase = new UserDatabase()
    this.hashManager = new HashManager()
    this.authenticator = new Authenticator()
  }

  async signup(signupDTO: SignupDTO) {
    // Gerar um id aleatório pro usuário
    const idGenerator = new IdGenerator()
    const randomId = idGenerator.generateId()

    // Encripta a senha
   
    const passwordHash = await this.hashManager.hash(signupDTO.password)

    // Não pode repetir o email
    const userWithEmail = await this.userDatabase.findUserByEmail(signupDTO.email)

    if(userWithEmail) {
      throw new Error('Usuário com esse email já existe!!!')
    }

    // Criar modelo do usuário
    const userModel: User = {
      id: randomId,
      email: signupDTO.email,
      name: signupDTO.name,
      passwordHash: passwordHash
    }

    // Salvar o usuário no banco
    const savedUser = await this.userDatabase.save(userModel)

    // Gerar o token de autenticação
    const token = this.authenticator.generateToken({id: savedUser.id})

    // Retornar o token de autenticação
    return {
      user: savedUser,
      token: token
    }
  }

  async login(email: string, password: string) {
    const user = await this.userDatabase.findUserByEmail(email)

    if(!user) {
      throw new Error('Usuário não existe')
    }

    const isPasswordCorrect = await this.hashManager.compare(password, user.passwordHash)

    if(!isPasswordCorrect) {
      throw new Error('Senha incorreta!')
    }

    const token = this.authenticator.generateToken({id: user.id})

    return {
      token: token,
      user: user
    }
  }
}