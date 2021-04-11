<?php

    include_once '../db.php';

    // getting the id of the task
    $id = $_GET['id'];
    // getting the status of the task
    $taskStatusSQL = "SELECT completed FROM todo_list WHERE id ='". $id ."'";

    $results = mysqli_query($connectDB, $taskStatusSQL);

    $result = mysqli_fetch_array($results);
    // 'completed' is the value of the task - o for Unfinished task and 1 for finished task
    $completed = $result['completed'];
//     echo 'b '.$completed;
    // if the task isn't completed - the completed value is '0'
    if(!$completed)
    {
        //echo $completed;
        $sql = "UPDATE todo_list SET completed=1 WHERE id ='". $id ."'";
    }
    // if the task completed - the completed value is '1'
    else
    {
       // echo $completed;
        $sql = "UPDATE todo_list SET completed=0 WHERE id ='". $id ."'";

    }

    // make query and set new value and store it as new results
    $newResults = mysqli_query($connectDB, $sql);

    $results2 = mysqli_query($connectDB, $taskStatusSQL);
    $result2 = mysqli_fetch_array($results2);

    $completed2 = $result2['completed'];

    echo $completed2;