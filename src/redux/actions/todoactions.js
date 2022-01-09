import { ADDTASK, DELETETASK, EDITTASK, TOGGLEDONE } from "../typs"

export const addTask = (task) => {
    return {
        type: ADDTASK,
        payload: task
    }
};

export const deleteTask = (id) =>{
    return{
        type: DELETETASK,
        payload: id
    }
}
export const toggleDone = (id) =>{
    return{
        type: TOGGLEDONE,
        payload: id
    }
}

export const EditTask = (id, newtask) => {
    return {
        type: EDITTASK,
        payload: {id, newtask}
    }
}