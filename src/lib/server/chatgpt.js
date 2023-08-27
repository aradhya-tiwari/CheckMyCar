import { ChatGPT_API_KEY } from "$env/static/private";
import fetch from "node-fetch";
const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ChatGPT_API_KEY}`,
};
const API_URL = 'https://api.openai.com/v1/chat/completions'


// variable to account no. of request made to chatbot
let resps = 0;
// function to check if whether reate limit is exceeded or not 
function canI() {
    if (resps > 5) {
        return false
    }
    return true
}
setInterval(() => { resps = 0 }, 60000)


export default async function ask(rawPrompt) {

    try {
        if (canI()) {
            // Increment rate limit variable 
            resps++
            let prompt = ` only answer questions related to cars otherwise give response =
                    "Sorry I am not capable of undestanding anything other than Car query 🥲" the question is:${rawPrompt}`;

            let rawResp = await fetch(API_URL, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    // prompt,
                    max_tokens: 50,
                    temperature: 1,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0,
                    messages: [{ "role": "user", "content": prompt }],
                })
            })
            let respond = await rawResp.json()
            console.log(respond)
            return respond.choices[0].message.content || "noting"
        }
        else {
            return "Our Chatbot is cooling RN 🙇"
        }
    } catch (e) {
        return "error"
    }
}
