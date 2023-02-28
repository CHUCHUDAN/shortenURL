短網址處理網頁
====
使用node.js + express並使用MongoDB作為資料庫的短網址處理網頁

專案畫面
---

-------
Features - 產品功能
-----
1.使用者可以將網址貼進輸入框，網頁會自動產生一個短網址供使用者使用。

2.任何不符合網址格式的輸入都會跳出警示框告知使用者。

3.只要伺服器有在運行的情況下，用戶在瀏覽器使用任何該網頁產生的網址都能夠成功導到使用者輸入的網址。

4.使用者可以點擊Copy按鈕進行複製或是直接點選該連結導入網頁。

Environment SetUp - 環境建置
-----
1. [Node.js](https://nodejs.org/en/)
2. [MongoDB](https://www.mongodb.com/)

Installing - 專案安裝流程
----
1.打開你的 terminal，Clone 此專案至本機電腦

    git clone https://github.com/CHUCHUDAN/restaurant_list_refactor.git
    
2.開啟終端機(Terminal)，進入存放此專案的資料夾

    cd restaurant_list_refactor
    
3.安裝 express 套件

    在 Terminal 輸入 npm i express 指令
    
4.安裝nodemon套件
    
    在 Terminal 輸入 npm install nodemon 指令
    
5.請自行新增.env檔案放置與資料庫MongoDB連線相關資料

    MONGODB_URI= "您的MongoDB連線資訊"
    
6.啟動伺服器
  
    在 Terminal 輸入 npm run dev 指令
    
7.當 terminal 出現以下字樣，表示伺服器啟動成功並與資料庫連線成功

    The web is Listen on http://localhost:3000
    Mongodb connected!
    
8.如需使用種子資料請輸入指令

    在 Terminal 輸入 npm run seed 指令
    
Contributor - 專案開發人員
-----
[Daniel Chu](https://github.com/CHUCHUDAN)
