import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../API'

export default function Signup()
{
    const navigate = useNavigate();
    let [data, changeData] = useState({email : "" , password: "", username: ""})
    function changeOccure(e)
    {
        changeData(d => {
            return {
                ...data,
                [e.target.name]: e.target.value
            }
        })
    }
    function signupUser(e)
    {
        e.preventDefault()
        signup(data).then(()=> navigate('/login'))
    }
    return(
        <div className='form'>
            <div className='title'>
                <h2>SignUp</h2>
            </div>
            <form onSubmit={signupUser}>
                <input type="email" placeholder='Email' name='email' onChange={changeOccure}/>
                <input type="password" placeholder= "Password" name='password' onChange={changeOccure}/>
                <input type= "text" placeholder='username' name='username' onChange={changeOccure}/>
                <button type="submit" className='login-btn opt-1'>Login</button>
            </form>
        </div>
    )
}