import { NextApiRequest, NextApiResponse } from "next"

import { fauna } from "../../services/fauna";
import { query as q } from 'faunadb';

export default async function handle(request: NextApiRequest, response: NextApiResponse) {
    if (request.method === "POST") {
        const { image } = request.body;
        const imgId = new Date().toISOString();


        const faunaQuery = await fauna.query(
            q.Create(
                q.Collection('images'),
                { data: { imgId, image } }
            )
        );

        return response.status(200).json(faunaQuery);
    } 
    
    else {
        return response.status(400).json({ error: "invalid method" });
    }
}