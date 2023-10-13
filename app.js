import express from "express";
import gameRouter from "./routes/gameRouter.js";
import { errorMiddleware } from "./middlewares/error.js";
import swaggerUi from "swagger-ui-express";
import cors from 'cors';
import YAML from 'yamljs';

const swaggerDocument = YAML.load('./config/gameRoutes.yaml');
export const app = express();
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

//using routes
app.use("/api/v1/games", gameRouter);
app.get("/",(req,res)=>{
    res.status(200).send("microservice is running");
})
//Using middlewares
app.use(errorMiddleware);

