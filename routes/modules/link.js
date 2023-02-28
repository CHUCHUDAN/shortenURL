const express = require('express')
const router = express.Router()

//引入資料Link
const Link = require('../../models/link')

router.get('/:urlLink', (req, res) => {
  const urlname = req.params.urlLink
  Link.find()
    .lean()
    .then(link => {
      const searchResult = link.find(l => l.name === urlname)
      const targetURL = searchResult.originURL
      res.redirect(targetURL)
    })
})


module.exports = router