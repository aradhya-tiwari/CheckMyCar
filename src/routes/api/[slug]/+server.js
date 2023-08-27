import ask from '../../../lib/server/chatgpt.js'
import { json } from '@sveltejs/kit'
export async function GET({ url }) {
    let query = url.searchParams.get('query')
    console.log(query)
    return json({ response: await ask(query) })
}

