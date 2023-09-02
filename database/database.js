import mongoose from "mongoose";
import { logDiscord } from "../utils/logDiscord.js";

export const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: process.env.DB_NAME,
		});
		console.log(`Database connected with host: ${connection.connection.host}`);
	} catch (error) {
		console.error("Error connecting to the database:", error.message);
		logDiscord(error);
	}
};
