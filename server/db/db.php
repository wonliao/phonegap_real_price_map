<?php
//defined("INSIDE");
	function doquery($query, $fetch = false)
	{
		//echo $query.'<br />';
		
		//一、連結資料庫
		global $link;
		if(!$link)
		{
			require_once('config.php');
			
			//建立連線：
			$link = mysql_connect($dbsettings["server"], $dbsettings["user"], $dbsettings["pass"]) or $debug->error(mysql_error()."<br />$sql","SQL Error");
			
			//選擇資料庫：
			mysql_select_db($dbsettings["name"]) or die("無法選擇資料庫");
		}

		// UTF-8
		mysql_query("SET NAMES 'utf8'");
		
		//二、執行SQL語法
		//送出SQL語法到資料庫系統
		$sqlquery = mysql_query($query) or die("無法送出" . mysql_error( ));
		unset($dbsettings);
		//四、釋放與Mysql的連線
		//mysql_free_sqlquery($sqlquery);
		
		if($fetch)
		{
			$sqlrow = mysql_fetch_array($sqlquery);
			return $sqlrow;
		}

		return $sqlquery;
	}

?>
