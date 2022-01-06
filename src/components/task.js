import React from 'react'
import{Button} from 'react-bootstrap'
function Task() {
    return (
        <div style={{display: 'flex'}}>
            <p>Task</p>
              <Button variant="success">Done</Button>{' '}
              <Button variant="warning">Delete</Button>{' '}
              <Button variant="secondary">Edit</Button>{' '}
        </div>
    )
}

export default Task
