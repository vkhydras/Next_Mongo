import monggose from 'mongoose'

const connectDB = async () => {
    try {
       await monggose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB