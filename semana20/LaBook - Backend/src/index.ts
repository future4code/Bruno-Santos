import app from "./app";
import { PostController } from "./controllers/PostController";
import { UserController } from './controllers/UserController';

const userController = new UserController()
const postController = new PostController()

app.post('/users/signup', (request, response) => userController.signup(request, response))
app.post('/users/login', (request, response) => userController.login(request, response))

app.post("/posts/create", (request, response) => postController.createPost(request, response))
app.get("/posts/:id", (request, response) => postController.getPostById(request, response))


// A rota chama o Controller. O Controller recebe a request, chama o Businnes e envia a resposta de volta. 


// DTO => Nome do Objeto com os parâmetros(endpoint) que passamos do Controller para o Business.