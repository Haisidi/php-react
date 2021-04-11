<?php

    include_once '../db.php';

    $task = $_GET['task'];

    $insertSQL = "INSERT INTO todo_list (title) VALUES ('" . $task ."')";

    // make query and get results
    $results = mysqli_query($connectDB, $insertSQL);


    // check if the the item successfully inserted
    if(!$results) {
        die('Could not insert data' );
    } else {
//         echo json_encode($tasks);
    }