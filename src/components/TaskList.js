const TaskList = ({tasks, taskCompleted, removeTask}) => {
    return (
        <ol className="tasks-list">
            {tasks.map((task) => (
                <li key={task.id} className={`${task.completed ? 'completed' : ''}`}>
                    <input type="checkbox" checked={task.completed}
                           onChange={() => taskCompleted(task.id)}/>
                    <h3>{task.title}</h3>
                    <button onClick={() => removeTask(task.id)}>X</button>
                </li>
            ))}
        </ol>
    );
}

export default TaskList;