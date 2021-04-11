<?php

    include_once '../db.php';

    $id = $_GET['id'];

    // fetch (query) the table
    $sql = "DELETE FROM todo_list WHERE id ='". $id ."'";

    // make query and get results
    $results = mysqli_query($connectDB, $sql);


    // check if the the item successfully deleted
    if(!$results) {
        die('Could not delete data ' );
    } else {
        echo 'task: ' . $id . ' removed.';
    }