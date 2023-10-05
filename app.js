import express from "express";
import gameRouter from "./routes/gameRouter.js";
import { errorMiddleware } from "./middlewares/error.js";
import swaggerUi from "swagger-ui-express";
import YAML from 'yamljs';


const swaggerDocument = YAML.load('./config/gameRoutes.yaml');
export const app = express();
app.use((req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Token ')) {
        const token = authHeader.split(' ')[1];
        req.token = token;
    }
    next();
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

//using routes
app.use("/api/v1/games", gameRouter);

//Using middlewares
app.use(errorMiddleware);

