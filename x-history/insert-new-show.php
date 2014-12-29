<?php
    $db = mysql_connect("feedmemusic.db.6445611.hostedresource.com","feedmemusic","Krulikpr1!");
	
	
	// Check connection
    if (!$db) {
        die('Could not connect to db: ' . mysql_error());
    }
	
    //Select the Database
    // databasename, connection
    mysql_select_db("feedmemusic",$db);
	
	
	// escape variables for security
	// form name, connection
	$bandName = mysql_real_escape_string($_POST['bandName'], $db);
	$venue = mysql_real_escape_string($_POST['venue'], $db);
	$date = mysql_real_escape_string($_POST['date'], $db);
	$time = mysql_real_escape_string($_POST['time'], $db);
	$price = mysql_real_escape_string($_POST['price'], $db);
	$youtubeUrl = mysql_real_escape_string($_POST['youtubeUrl'], $db);
	$bandWebsite = mysql_real_escape_string($_POST['bandWebsite'], $db);
	$ticketUrl = mysql_real_escape_string($_POST['ticketUrl'], $db);
	
	
	
	
	// sql statement
	// INSERT INTO tableName (rowname, rowname, rowname)
	// VALUES ('variable1', 'variable2', 'variable3')
	$sql="INSERT INTO shows (bandName, venue, date, time, price, youtubeUrl, bandWebsite, ticketUrl)
	VALUES ('$bandName', '$venue', '$date', '$time', '$price', '$youtubeUrl', '$bandWebsite', '$ticketUrl')";
	
	
	
	
	
	
	if (!mysql_query($sql, $db)) {
	  die('Error yo: ' . mysql_error() );
	}
	
	echo "1 record added";
	
	mysql_close($db);
?>