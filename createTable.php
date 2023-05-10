<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Database</title>
</head>
<body>
<?php
$host = "localhost";
$user = "root";
$password = "rro0t1:";
    
$connection = new mysqli( $host, $user, $password,"prog2") or die( 'Could not connect to the database server' . mysqli_connect_error() );

$table_name = "skriv_namnet_här"; // Välj ett namn på din tabell!

$sql = "CREATE TABLE $table_name ( 
        ID int,
        LastName varchar(255), 
        FirstName varchar(255);"; // Byt ut mot de kolonner du vill ha i tabellen (ID är bra att ha med)!

if ( $connection->query( $sql ) === true ) // Här skapas tanellen!
  echo "New DB created successfully!<br><br>";
else
  echo "Error: " . $sql . "<br>" . $connection->error;

// Nedan visas ett exempel på hur man använder tabellen!
$sql = "INSERT INTO $table_name( LastName, FirstName, Address, City ) VALUES( 'Test', 'Test', 'Testvägen 1', 'Gothenburg' );";

if ( $connection->query( $sql ) === true )
  echo "New record created successfully!<br><br>";
else
  echo "Error: " . $sql . "<br>" . $connectionn->error;

$connection->close();
?>
</body>
</html>