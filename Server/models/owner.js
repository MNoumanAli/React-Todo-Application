import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email : String,
    password: String,
    username: String
})

const owner = mongoose.model('owner', userSchema)
export default owner