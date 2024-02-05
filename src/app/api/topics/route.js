import connectDB from "@/libs/db"
import Topic from "@/models/Topic"

export async function POST(req){
    const  {title,description} = await req.json()
    await connectDB()
    await Topic.create({title,description})
}