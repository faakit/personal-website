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
    
    else if (request.method === "GET") {
        const faunaQuery = await fauna.query(
            q.Map(
                q.Paginate(q.Match(q.Index('image'))),
                q.Lambda(x => q.Get(x))
            )
        ) as any;

        const resultJson = faunaQuery.data.map((image) => {
            return image.data;
        })

        return response.status(200).json(resultJson);
    } 
    
    else {
        return response.status(400).json({ error: "invalid method" });
    }
}