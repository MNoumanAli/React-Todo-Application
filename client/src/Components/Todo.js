import { useState } from "react"


export default function Todo(props)
{
    let [check, changeCheck] = useState({value : props.status , status: props.status? "complete" : "Incomplete"})
    function changeValue(e)
    {
        changeCheck(() => {
            return {value: e.target.checked, status: e.target.checked? "complete" : "Incomplete"}
        })
        props.changeCheckValue(e.target.checked,props.id)
    }
    const style = {
        color : check.value? "grey" : "black",
        textDecoration : check.value? "line-through" : "none"
    }
    return(

        <div className="todo">
            <input type="checkbox" checked= {check.value} onChange= {changeValue}></input>
            <p className="todo-name" style={style}>{props.title}</p>
            <p>{(props.cDate)}</p>
            <p className="todo-status">{check.status}</p>
            <button onClick={() => props.deleteTask(props.id)} className="delete-btn">Delete</button>
        </div>
    )
}