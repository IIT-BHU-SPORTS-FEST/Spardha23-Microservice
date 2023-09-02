import axios from "axios";
import { config } from "dotenv";
config();

const URL = process.env.DISCORD_WEBHOOK_URL;
export async function logDiscord(err) {
	try{
        const timestamp = Date.now();
        const date = new Date(timestamp);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        await axios.post(URL, {
            content: `Error in Microservices to update Fixtures\nError on ${formattedDate}\nError Message: ${
                err.message
            }\nError stack:\n ${err.stack}`,
        });

    }
    catch(e){
        console.log("Error while logging to discord",e);
    }
}
