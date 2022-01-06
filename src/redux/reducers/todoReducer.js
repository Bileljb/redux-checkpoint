const initState = {
    todos:
        [{ id: 1, task: 'learn html', done: false },
        { id: 2, task: 'learn css', done: false },
        { id: 3, task: 'learn js', done: false }]
}

function todoReducer(state= initState, action) {
    return state
}
export default todoReducer