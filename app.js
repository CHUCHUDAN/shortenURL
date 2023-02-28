//引入express框架
const express = require('express')
const app = express()

//引入handlebars
const exphbs = require('express-handlebars')


//引入routes
const routes = require('./routes')

//引入mongoose模組
require('./config/mongoose')

//引入body-parser
const bodyParser = require('body-parser')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//middleware
//將public資料夾設定成靜態檔案資料夾
app.use(express.static('public'))

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

//每筆request都會先經過routes處理
app.use(routes)


app.listen(3000, () => {
  console.log('app is runing on http://localhost:3000')
})