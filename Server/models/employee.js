import mongoose from "mongoose";
import owner from "./owner.js";

const schema = mongoose.Schema({
    email : String,
    name : String,
    owner : [{ type: mongoose.Schema.Types.ObjectId, ref: 'owner' }]
})

const employee = mongoose.model( 'employee' , schema, 'employee')
export default employee
