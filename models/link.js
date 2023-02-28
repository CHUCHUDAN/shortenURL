const mongoose = require('mongoose')
const Schema = mongoose.Schema
const linkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  originURL: {
    type: String,
    match: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/i // 正則表達式，驗證是否為有效的URL格式
  },
  fixedURL: {
    type: String,
    match: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/i // 正則表達式，驗證是否為有效的URL格式
  }
})

module.exports = mongoose.model('Link', linkSchema)