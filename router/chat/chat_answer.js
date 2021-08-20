const express = require('express')
const router = express.Router()
const chat_answer = require('../../controller/chat/chat_answer')


router.post('/create', chat_answer.create)
router.get('/getAll', chat_answer.getAll)
router.put('/update', chat_answer.update)
router.delete('/delete', chat_answer.deleteOne)

module.exports = router