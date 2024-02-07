import connectDB from "@/libs/db"
import Topic from "@/models/Topic"
import {NextResponse} from 'next/server'

export async function PUT(req,{params}){
    const {id} = params
    const {newTitle: title, newDescription: description} = await req.json()

    await connectDB()
    await Topic.findByIdAndUpdate(id,{title, description})
    return NextResponse.json({message: "Topic updated"},{status: 200})
}

export async function GET(){
    const {id} = params
    await connectDB()
    await Topic.findOne({_id:id})
    return NextResponse.json({topic},{status:200})
}