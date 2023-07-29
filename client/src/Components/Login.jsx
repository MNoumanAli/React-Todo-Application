import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../API'

export default function Login()
{
    let [data, changeData] = useState({email : "" , password: ""})
   
    function changeOccure(e)
    {
        changeData(d => {
            return {
                ...data,
                [e.target.name]: e.target.value
            }
        })
    }
    function loginUser(e)
    {
        e.preventDefault()
        try{
            login(data)
            .then(res => {
                localStorage.setItem("user" , JSON.stringify(res.data))
                navigate("/home")
            })
        }catch(err)
        {
            console.log(err)
        }
    }
    return(
        <div className='form'>
            <div className='title'>
                <h2>Login </h2>
            </div>
            <form onSubmit={loginUser}>
                <input type="email" placeholder='Email' name='email' onChange={changeOccure} className="input"/>
                <input type="password" placeholder= "Password" name='password' onChange={changeOccure} className="input"/>
                <button type="submit" className='opt-1 login-btn'>Login</button>
            </form>
        </div>
    )
}