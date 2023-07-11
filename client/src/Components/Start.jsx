import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/startPage.css'

export default function Start()
{
    return(
        <div className='start-page'>
            <div className="title">
                <h1>My Todo</h1>
            </div>
            <div className='options'>
                <Link to = "/login" className='opt opt-1'>Login</Link><br/>
                <Link to = "/signup" className='opt opt-2'>SignUp</Link>
            </div>
        </div>
    )
}