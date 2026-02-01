import mongoose from "mongoose"
// Create Schema
const usersSchema = mongoose.Schema({
    name: String,
    age: Number,
    gender: String
})

//create Modal
export const User = mongoose.model("User", usersSchema)