import mongoose,{Schema} from 'mongoose'

const topicSchema = new Schema({
    title: String,
    desciption: String
},{timestamps:true})

const Topic = mongoose.model("Topic",topicSchema)

export default Topic