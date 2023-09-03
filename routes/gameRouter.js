import express from "express";

import gameController from "../controllers/gameController.js";
import { validateGameDELETEData, validateGamePATCHData, validateGamePOSTData } from "../utils/validators.js";
const {addGame, allGames, editGame, deleteGame} = gameController;
const router = express.Router();

router.route("/").get(allGames).post(validateGamePOSTData(),addGame);
router.route("/:game_id").patch(validateGamePATCHData(), editGame).delete(validateGameDELETEData(), deleteGame);

export default router;

