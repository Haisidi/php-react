const NewTask = ({addTask}) => {

    // on form submit, take the input value and send it to the server
    const submitNewTask = (e) => {
        e.preventDefault();

        const newTaskInput = document.getElementById("newTaskInput");

        // if the user didnt enter value
        if (newTaskInput.value === '') {
            alert('New Task field cannot be empty');
            return;
        }

        // send to function prop that will send it to server
        addTask(newTaskInput.value);

        // clear the input text after submitting
        document.querySelector('form').reset();
    }

    return (
        <form onSubmit={submitNewTask}>
            <input
                id="newTaskInput"
                type="text"
                placeholder="Write a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default NewTask;