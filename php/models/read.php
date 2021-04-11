<?php

    include_once '../db.php';


    // fetch (query) the table
    $sql = 'SELECT * FROM todo_list';

    // make query and get results
    $results = mysqli_query($connectDB, $sql);

    // fetch the results as an array (assoc)
    $tasks = mysqli_fetch_all($results, MYSQLI_ASSOC);

    // turn the DATA to JSON Format and return it
    echo json_encode($tasks);