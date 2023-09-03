import axios from "axios";
import { config } from "dotenv";
config();

const URL = process.env.DISCORD_WEBHOOK_URL;
const DISCORD_MESSAGE_LENGTH_LIMIT=1024;
export async function logDiscord(err) {
	try{
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        //* To fit the error stack in the field array. One field can only fit value upto 1mb (1024 characters)
        const fieldArray = [];
        let MaxNoOfMessages = 4;
        let i=0;
        for(i=0; i<=Math.min(MaxNoOfMessages*DISCORD_MESSAGE_LENGTH_LIMIT,err.stack.length); i+=DISCORD_MESSAGE_LENGTH_LIMIT) {
            fieldArray.push(
                {
                    "name": "",
                    "value": err.stack.substring(i,Math.min(i+1024,err.stack.length))
                }
            )
        }
        fieldArray[0].name=err.message;
        const embeds = [
            {
                "fields": fieldArray
            }
        ]

        const msg = JSON.stringify({embeds});
        await axios.post(URL, msg, config);
    }
    catch(e){
        console.log("Error while logging to discord", e.message);
    }
}
