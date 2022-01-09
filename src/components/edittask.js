import { useState } from "react";
import {Button, Form, Modal} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { EditTask } from "../redux/actions/todoactions";
function EDitTask({el}) {
    const [show, setShow] = useState(false);
     
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [text, setText] = useState(el.task)
    const dispatch = useDispatch()
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control type='text' onChange={(e)=>setText(e.target.value)} value={text}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=> {dispatch(EditTask(el.id, text));
            handleClose()
            }}>Confirm</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default EDitTask
