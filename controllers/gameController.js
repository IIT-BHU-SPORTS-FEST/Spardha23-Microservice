import AppError from "../middlewares/error.js";
import Game from "../models/gameModel.js";
import catchAsync from "../utils/catchAsync.js";
import { validationResult } from 'express-validator';


const addGame = catchAsync(async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) throw new AppError("Invalid Input",400, errors.array());
	const game = await Game.create(req.body);
	res.status(201).json({
		success: true,
		message: "Game added successfully",
		game_id: game._id,
	});
});

const allGames = catchAsync(async (req, res) => {
	const data = await Game.find({});
	res.status(200).json({
		success: true,
		length: data.length,
		data,
	});
});

const editGame = catchAsync(async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) throw new AppError("Invalid Input",400, errors.array());
	const game = await Game.findById(req.params.game_id);
	if (!game) throw new AppError("Game not found", 404);

	for(let field in req.body)
	{
		game[field]=req.body[field];
	}

	let editedGame = await game.save();
	res.status(200).json({
		success: true,
		message: "Game edited successfully",
		editedGame,
	});
});

const deleteGame = catchAsync(async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) throw new AppError("Invalid Input",400, errors.array());
	const deletedGame=await Game.findByIdAndDelete(req.params.game_id);
	if (!deletedGame) throw new AppError("Game not found:No deletion occured", 404);
	res.status(200).json({
		success: true,
		message: "Game deleted successfully",
		deletedGame,
	});
});

export default { addGame, allGames, editGame, deleteGame };
