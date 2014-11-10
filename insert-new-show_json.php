

<?php

	
    //Create Database connection
    // host, UN, PW
    $db = mysql_connect("feedmemusic.db.6445611.hostedresource.com","feedmemusic","Krulikpr1!");
    if (!$db) {
        die('Could not connect to db: ' . mysql_error());
    }
 
    //Select the Database
    mysql_select_db("feedmemusic",$db);
    
    //Replace * in the query with the column names.
    $result = mysql_query("select * from shows", $db);  
    
    //Create an array
    $json_response = array();
    
    while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
        $row_array['bandName'] = $row['bandName'];
        $row_array['venue'] = $row['venue'];
        $row_array['date'] = $row['date'];
        $row_array['time'] = $row['time'];
        $row_array['price'] = $row['price'];
        $row_array['youtubeUrl'] = $row['youtubeUrl'];
        $row_array['bandWebsite'] = $row['bandWebsite'];
        $row_array['ticketUrl'] = $row['ticketUrl'];
        
        //push the values in the array
        array_push($json_response,$row_array);
    }
    echo json_encode($json_response);
    
    //Close the database connection
/*     fclose($db); */
 
?>