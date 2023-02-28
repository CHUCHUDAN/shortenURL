//引入express框架並使用Rounter()函式
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const shorten = require('./modules/shorten')
const link = require('./modules/link')

router.use('/', home)
router.use('/shorten', shorten)
router.use('/link', link)


module.exports = router