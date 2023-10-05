import { app } from "./app.js";
import { connectDB } from "./database/database.js";
import { config } from "dotenv";
import { logDiscord } from "./utils/logDiscord.js";
import { connectPgDB } from "./database/userDatabase.js";
config();

const server=app.listen(process.env.PORT, () => {
	connectDB();
	connectPgDB();
	console.log("listening on port " + process.env.PORT);
});

server.on("error",logDiscord)


process.on("uncaughtException", logDiscord);

process.on("unhandledRejection", logDiscord);
