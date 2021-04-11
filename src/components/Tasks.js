import {useState, useEffect} from "react";
import TaskList from "./TaskList";
import NewTask from "./NewTask";
import axios from 'axios';

function Tasks() {
    const [tasks, setTasks] = useState(null);

    // show tasks from api on init
    useEffect (() => {

        fetchTasks();
    },[])


    // fetching the data from the server
    const fetchTasks = () => {
        axios.get('http://localhost/php/models/read.php')
            .then(res => {

                const data = res.data;

                // parsing completed value from string (default 0)
                for(let i=0; i<data.length; i++) {
                    data[i].completed = Number(data[i].completed);
                    // console.log(data[i].completed);
                }

                setTasks(data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    // the function added new task and send it to the server
    const addNewTask = (task) => {
        axios.post(`http://localhost/php/models/insert.php?task=${task}`)
        .then(res => {
            console.log(res);
            fetchTasks();
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    // the function remove new task and send it to the server
    const removeTask = (id) => {
        const removedTask = tasks.filter(task => task.id !== id);
        setTasks(removedTask);

        axios.delete(`http://localhost/php/models/delete.php?id=${id}`)
        .then(res => {
            console.log(res);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    // when the task finished
    const taskCompleted = (id) => {
        let isCompleted = tasks.filter(task => task.id == id);
        console.log(isCompleted.completed);

        axios.put(`http://localhost/php/models/update.php?id=${id}`)
            .then(res => {
                console.log(res);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        setTasks(tasks.map(task =>
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    }


    return (
        <div className='tasks-app'>
            <h1>Task List</h1>
            {tasks && <TaskList tasks={tasks} taskCompleted={taskCompleted} removeTask={removeTask}/>}
            <NewTask addTask={addNewTask} />
        </div>
    );
}

export default Tasks;