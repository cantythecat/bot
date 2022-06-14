import mongoose from "mongoose"
import config from "../config.json";

export const connectDatabase = async () => {
    await mongoose.connect(config.database.mongoURI)
    console.log('The bot has connected to the database.')
}
