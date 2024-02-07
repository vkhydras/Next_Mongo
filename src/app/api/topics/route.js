import connectDB from "@/libs/db"
import Topic from "@/models/Topic"
import { NextResponse } from "next/server"

connectDB();

export async function POST(req){
    const  {title,description} = await req.json()
    
    await Topic.create({title,description})

    return NextResponse.json({message: "Topic Created"},{status: 201})
}

export async function GET(){

    const topics = await Topic.find()
    return NextResponse.json(topics)

}

export async function DELETE(req){
    const id =  req.nextUrl.searchParams.get("id")
    await connectDB()
    await Topic.findById(id)
    return NextResponse.json({message:"Topic deleted "},{status:200})
}