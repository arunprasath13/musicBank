import mongoose from "mongoose"

export const connectDb = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to MongoDB🔥")
    }
    catch(error){
        console.log("Failed to connect to mongodb👎🏻",error)
        process.exit();
    }
}