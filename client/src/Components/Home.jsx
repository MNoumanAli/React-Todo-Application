import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getTodos, deleteTodo, createTodo, updateTodo} from "../API"
import Todo from "./Todo"

export default function Home()
{
    const navigate = useNavigate()

    let [todos, assignTodo] = useState([])
    let [todo , inputTask] = useState("")

    useEffect( () =>{
        getAllTodos()
    }, [])


    function deleteTask(id)
    {
        deleteTodo({id: id})
        const temp = todos.filter(i => { return i._id !== id})
        assignTodo(temp)
    }

    function changeInput(e)
    {
        console.log(e.target)
        inputTask(e.target.value)
    }
    function addTodo()
    {
        createTodo({task:todo})
        .then(res => {
            assignTodo(d => {
                return [...d, res.data]
            })
        })
    }

    function getAllTodos()
    {
        getTodos()
        .then(res => {
            console.log(res.data)
            assignTodo(res.data)
        })
    }

    function changeCheckValue(value, id)
    {
        console.log(value)
        updateTodo({value, id})
        .then(res => {
            const updatedTodo = todos.map(td => {
                if(td.id === id)
                {
                    return {...td, status: value}
                }
                return td
            })
            assignTodo(updatedTodo)
        })
    }

    function logout()
    {
        localStorage.clear()
        navigate("/")
    }

    const allTodos = todos.map(data => {
        return <Todo key = {data._id} title = {data.title} status = {data.status} id = {data._id} cDate = {data.createdDate} deleteTask ={deleteTask} changeCheckValue = {changeCheckValue}/>
    })

    const userName = JSON.parse(localStorage.getItem("user")).userIs.username

    return(
        <div className="welcome">
            <div className="welcome-bar">
                <p className="username">{userName}</p>
                <p onClick={logout} className="logout-btn">Logout</p>
            </div>
            <div className="add-todo">
                <input type="text" placeholder="TODO" name="task" onChange = {changeInput} className= "task"/>
                <button onClick = {addTodo} className="add-btn">ADD</button>
            </div>
            <div className="all-todo">
                {allTodos}
            </div>
        </div>
    )
}