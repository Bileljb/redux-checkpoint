import React from 'react'
import { useSelector } from "react-redux"
import Task from './task'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
function TaskList() {
    const [filter, setFilter] = useState(false)
    const [done, setDone] = useState(true)
    const todos = useSelector((state) => state.todoReducer.todos)
    return (
        <div>
            <Button variant="outline-info" onClick={()=> setFilter(false)}>Show all</Button>{' '}
            <Button variant="outline-light" onClick={()=>{setFilter(true); setDone(true)}}>Show Done</Button>{' '}
            <Button variant="outline-dark" onClick={()=> {setFilter(true); setDone(false)}}>Show not Done</Button>
            <br />
            <br />
            {!filter ? todos.map((el) => (
                <Task key={el.id} el={el} />
            )) : done ? todos.filter(el => el.done).map((el) => (
                <Task key={el.id} el={el} />
            )) : todos.filter(el=> el.done).map((el) => (
                <Task key={el.id} el={el} />
            )) 
            }
        </div>
    );
}

export default TaskList
