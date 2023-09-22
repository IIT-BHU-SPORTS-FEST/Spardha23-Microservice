import express from "express";
import gameRouter from "./routes/gameRouter.js";
import { errorMiddleware } from "./middlewares/error.js";
import swaggerUi from "swagger-ui-express";
import YAML from 'yamljs';
import cors from 'cors'

const swaggerDocument = YAML.load('./config/gameRoutes.yaml');
export const app = express();
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

//using routes
app.use("/api/v1/games", gameRouter);

//Using middlewares
app.use(errorMiddleware);

