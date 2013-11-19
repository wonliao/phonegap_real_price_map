phonegap_real_price_map
=======================

實作 phonegap 查詢 實價登錄資料及結合google map 顯示

youtube 影片

[![youtube 影片](http://img.youtube.com/vi/JbNVUfGysAA/0.jpg)](http://www.youtube.com/watch?v=JbNVUfGysAA)


前言：因實價登入資料，目前官方不再提供查詢功能，所以這個範本是在自已的網站上建立測試資料，以供 phonegap 模擬查詢。


A、說明

    主要分為三個部分
    1、建立一個資料庫 RealPrice。使用目錄 server/db/RealPrice.sql.gz 來匯入實價登入資料
    2、建立一個網站，預提供 API 供 phonegap 查詢 
    3、phonegap 呼叫網站 API，取得 實價登入 的 JSON 格式資料，顯示於 google map 上
  
B、設定

    1、修改 server/db/config.php，請修改成你的 database 連接資訊
    2、修改 www/index.html 這個檔案，找到 YourGoogleMapKey; 改成你的 google map key
    3、修改 web/index.html 這個檔案，找到 http://localhost:8888; 改成你的IP
    4、修改 web/detial.html 這個檔案，找到 http://localhost:8888; 改成你的IP
  
C、工作原理

    1、首先是先初始化 google map 相關的設定
    2、然後監聽 google map 的 idle，來偵測是否有移動地圖中心點
    3、當地圖中心點移動時，將中心點的經緯度當成參數來呼叫網站API，以取得附近的實價登錄資料
    4、將取得的實價登錄資料用 google marker 顯示在地圖上
    

	 

