import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
	game_name: {
		type: String,
		required: true,
	},
	game_start: {
		type: Date,
		required: true,
	},
	game_venue: {
		type: String,
		required: true,
	},
	team1: {
		type: String,
		required: true,
	},
	team2: {
		type: String,
		required: true,
	},
	is_completed: {
		type: Boolean,
		default: false,
	}
});

const Game = mongoose.model("Game", gameSchema);
export default Game;
