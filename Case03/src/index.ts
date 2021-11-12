import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { CompetitionController } from './controller/CompetitionController';
import { AthleteController } from './controller/AthleteController';

const app: Express = express();

app.use(express.json());
app.use(cors());

const competitionController = new CompetitionController()
const athleteController = new AthleteController()

app.post("/competition/create", (req, res) => competitionController.createCompetition(req, res))
app.post("/athlete/create", (req, res) => athleteController.createAthlete(req, res))
console.log("ATLETA - INDEX")

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});