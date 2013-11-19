<?php
require_once("db/db.php");

$caseNo = $_GET['caseNo'];

$data = array();

$cmd = "SELECT 
*
FROM 
`FieldObject`
WHERE 
`caseNo` = '".$caseNo."'
LIMIT 1;";

$result = doquery( $cmd );
while( $row = mysql_fetch_array( $result ) ) {

	array_push( $data, array_combine( array('single', 'total', 'area', 'address'), array( $row['single'], $row['total'], $row['area'], $row['address'] ) ) );
}

echo json_encode( $data );
?>
