import express, {Express, request} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { CompetitionController } from './controller/CompetitionController';

const app: Express = express();

app.use(express.json());
app.use(cors());

const competitionController = new CompetitionController()

app.post("/competition/create", (req, res) => competitionController.createCompetition(req, res))

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});