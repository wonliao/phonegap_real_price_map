<?php
header('Access-Control-Allow-Origin: *');

require_once("db/db.php");

$lat_1 = $_GET['lat_1'];
$lat_2 = $_GET['lat_2'];
$lng_1 = $_GET['lng_1'];
$lng_2 = $_GET['lng_2'];

$max = 20;	// 最多20筆

$pos = array();
$cmd = "
SELECT 
	a.`caseNo` as caseNo,
	a.`lat` as lat,
	a.`lng` as lng,
	b.`single` as single
FROM 
	`CaseObject` as a,
	`FieldObject` as b
WHERE 
a.`caseNo` in ( 
	SELECT 
		`caseNo`
	FROM 
		`CaseObject` 
	WHERE 
		`lat` > '".$lat_1."' AND 
		`lat` < '".$lat_2."' AND 
		`lng` > '".$lng_1."' AND 
		`lng` < '".$lng_2."' 
)
AND a.`caseNo` = b.`caseNo` 
Order By RAND()
LIMIT ".$max."
";

$result = doquery( $cmd );
while( $row = mysql_fetch_array( $result ) ) {

	array_push( $pos, array_combine( array('caseNo', 'lat', 'lng', 'single'), array( $row['caseNo'], $row['lat'], $row['lng'], floor( $row['single']/ 10000 ) ) ) );
}

echo json_encode( $pos );
?>
