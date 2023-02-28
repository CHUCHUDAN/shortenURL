const express = require('express')
const router = express.Router()

//引入資料Link
const Link = require('../../models/link')

//隨機亂碼資料
const randomCodeArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


//隨機產生函式(5個亂數包含英文字母、數字)
function generateRandomCode() {
  function generateCode(dataArray) {
    const random = Math.floor(Math.random() * dataArray.length)
    return dataArray[random]
  }
  let code = ''
  for (let i = 0; i < 5; i++) {
    code = code + generateCode(randomCodeArray)
  }
  return code
}



router.post('/', (req, res) => {
  const linkKeyword = req.body.link
  if (!linkKeyword) return //若使用者沒有輸入內容，就按下了送出鈕，需要防止表單送出並提示使用者
  Link.find()
    .lean()
    .then(links => {
      const searchResult = links.find(link => link.originURL === linkKeyword)
      if (searchResult) {     // 輸入相同網址時，產生一樣的縮址
        const result = searchResult.fixedURL
        return res.render('result', { result })
      }
      const name = generateRandomCode()
      const originURL = linkKeyword
      const fixedURL = `http://localhost:3000/link/${name}`
      Link.create({ name, originURL, fixedURL })
        .then(() => res.render('result', { result: fixedURL }))
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

module.exports = router