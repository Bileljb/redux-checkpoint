import {React, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { addTask } from '../redux/actions/todoactions'
import { useDispatch } from 'react-redux'
function AddTask() {
    const [text, setText]= useState('')
     const dispatch = useDispatch()
     const hundleSubmit = ()=> {
         dispatch(addTask(text))
         setText('');
     }
    return (
        <Form>
            <Form.Control type='text' placeholder='Enter your task' onChange={(e)=>setText (e.target.value)} value={text}/>
            <Button  variant="info" onClick={hundleSubmit}>Add Task!</Button> {' '}
        </Form>
    )
}

export default AddTask
