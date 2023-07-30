import jwt  from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

const authorization = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        if(token)
        {
            const verifiedData = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET) 
            req.userId = verifiedData.id
        }
        next()
    }catch(error)
    {
        res.send(error)
    }
}

export default authorization