import AppError from "./error.js";
import { pool } from "../database/userDatabase.js";

const isAuthenticated = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) return next(new AppError("Please Login first", 400))
        if (!token.startsWith("Token ")) return next(new AppError("Not a valid token format", 400))
        token = token.split(" ")[1];
        const tokens = (await pool.query(`
	SELECT is_staff, is_admin FROM authtoken_token at
	JOIN "Authentication_useraccount" u ON at.user_id = u.id
	WHERE at.key = $1;
	`, [token])).rows;
        if (tokens.length === 0) return next(new AppError("User Unauthorized", 403));
        const user = tokens[0];
        if (!user.is_staff && !user.is_admin) return next(new AppError("User should be staff or admin", 403));
        next();
    } catch (error) {
        next(error);
    }
}

export default isAuthenticated;