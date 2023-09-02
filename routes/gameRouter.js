import express from "express";

import gameController from "../controllers/gameController.js";
import { validateGameDELETEData, validateGamePATCHData, validateGamePOSTData } from "../utils/validators.js";
const {addGame, allGames, editGame, deleteGame} = gameController;
const router = express.Router();

router.post("/addGame", validateGamePOSTData() , addGame);
router.get("/allGames", allGames);
router.patch("/editGame/:game_id", validateGamePATCHData(), editGame);
router.delete("/deleteGame/:game_id", validateGameDELETEData(), deleteGame);

export default router;

