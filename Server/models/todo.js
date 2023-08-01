
import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title: String,
    status: {
        type: Boolean,
        default: false
    },
    createdDate: {
        type: Date,
        default: new Date()
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "owner"
    }
})

const todo = mongoose.model("todo" , todoSchema, 'todo')
export default todo