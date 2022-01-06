import React from 'react'
import { Form, Button } from 'react-bootstrap'

function AddTask() {
    return (
        <Form>
            <Form.Control type='text' placeholder='Enter your task'/>
            <Button  variant="info">Add Task!</Button> {' '}
        </Form>
    )
}

export default AddTask
