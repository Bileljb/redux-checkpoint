import React from 'react'
import {useSelector} from "react-redux"
import Task from './components/task'

function TaskList() {
    const todos = useSelector(state => state.todoReducer.todos)
    return (
        <div>
            {todos.map((el)=> (<Task/>))}
        </div>
    )
}

export default TaskList
