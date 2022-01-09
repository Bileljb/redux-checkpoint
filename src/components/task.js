import React from 'react'
import { Button } from 'react-bootstrap'
import { deleteTask } from '../redux/actions/todoactions'
import { toggleDone } from '../redux/actions/todoactions'
import { useDispatch } from 'react-redux'
import EditTask from './edittask'
function Task({ el }) {
    const dispatch = useDispatch()

    return (
        <div style={{ display: 'flex' }}>
            <p style={{ textDecoration: el.done ? "line-through" : null }}>{el.task}</p>
            <Button variant="success" onClick={() => dispatch(toggleDone(el.id))}>Done</Button>{' '}
            <Button variant="warning" onClick={() => dispatch(deleteTask(el.id))}>Delete</Button>{' '}
            <EditTask el={el}/>
      </div>
    )
}

export default Task
