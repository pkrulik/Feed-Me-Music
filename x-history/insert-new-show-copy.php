<?php
	$db = mysql_connect("localhost","root","root");
	
	
	// Check connection
    if (!$db) {
        die('Could not connect to db: ' . mysql_error());
    }
	
    //Select the Database
    // databasename, connection
    mysql_select_db("learningAboutDatabases",$db);
	
	
	// escape variables for security
	// form name, connection
	$emp_name = mysql_real_escape_string($_POST['firstname'], $db);
	$designation = mysql_real_escape_string($_POST['lastname'], $db);
	
	// sql statement
	// INSERT INTO tableName (rowname, rowname, rowname)
	// VALUES ('variable1', 'variable2', 'variable3')
	$sql="INSERT INTO employee (emp_name, designation)
	VALUES ('$emp_name', '$designation')";
	
	if (!mysql_query($sql, $db)) {
	  die('Error yo: ' . mysql_error() );
	}
	
	echo "1 record added";
	
	mysql_close($db);
?>