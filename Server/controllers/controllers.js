import dotenv from 'dotenv'
dotenv.config()
import jwt from "jsonwebtoken"
import owner from '../models/owner.js'
import bcrypt from "bcrypt"
import employee from '../models/employee.js'
import todo from '../models/todo.js'

export const signup = async (req, res) => {
    const {email , password, username} = req.body
    try{
        const userExist = await owner.findOne({email})
        if(userExist)
        {
            return res.status(404).json({message : "User Already Exist"})
        }
       /*if( password != conformPassword)
        {
                console.log("OKay3")
           return res.status(404).json({message : "Password Didn't Match"})
        }*/
        const securePass = await bcrypt.hash(password , 12) 
        const newUser = new owner({email , password : securePass.toString(), username})
        newUser.save()

        const accessToken = jwt.sign({email, id: newUser._id} , process.env.ACCESS_TOKEN_SECRET)

        res.status(200).json({neWuser: newUser , accessToken : accessToken})
    }catch(error){
        res.status(500).json({message : error.message})
    }
}

export const login = async (req, res) => {
    const {email , password} = req.body
    console.log(email)
    try{
        const userExist = await owner.findOne({email })
        if(!userExist)
        {
            console.log("not")
            return res.status(404).json({message : "User Does't Exist"})
        }
        const checkPass = await bcrypt.compare(password, userExist.password)
        if(!checkPass)
        {
            return res.status(404).json({message : "Ivalid Credentails"})
        }
        const newUser = {email : email , id : userExist._id}
        const accessToken = jwt.sign(newUser , process.env.ACCESS_TOKEN_SECRET)
        res.status(200).json({userIs: userExist , accessToken : accessToken})
    }catch(error){
        res.status(500).json({message : error.message})
    }
}

export const getTodo =  async (req, res) => {
    const ownerId = req.userId
    try
    {
        const data = await todo.find({owner: ownerId})
        res.status(200).send(data)
    }catch(error)
    {
        res.status(404).send(error.emssage)
    }

}

export const createTodo = (req, res) => {
    const ownerId = req.userId
    const {task} = req.body
    try{
        const newTodo = new todo({
            title: task,
            owner: ownerId
        })
        newTodo.save()
        res.status(200).json(newTodo)
    }catch(error){
        res.status(400).send(error.message)
    }
}

export const deleteTodo = async (req,res) => {
    const ownerId = req.userId
    const {id} = req.body
    try{
        await todo.deleteOne({_id: id})
        res.status(200).send("Delete Complete")
    }catch(error)
    {
        res.status(404).send(error.message)
    }
}

export const updateTodo = async (req, res) => {
    const ownerId = req.userId
    const {value, id} = req.body
    try{
        await todo.findOneAndUpdate({_id: id}, {status: value}, {new: true})
        res.status(200).send("Update Complete")
    }catch(error)
    {
        res.status(404).send(error.message)
    }
}