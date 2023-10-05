import express from "express";
import isAuthenticated from "../middlewares/auth.js";
import gameController from "../controllers/gameController.js";
import { validateGameDELETEData, validateGamePATCHData, validateGamePOSTData } from "../utils/validators.js";
const {addGame, allGames, editGame, deleteGame} = gameController;
const router = express.Router();

router.route("/").get(allGames).post(isAuthenticated,validateGamePOSTData(), addGame);
router.route("/:game_id").patch(isAuthenticated, validateGamePATCHData(), editGame).delete(isAuthenticated,validateGameDELETEData(), deleteGame);

export default router;

