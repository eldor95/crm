const express = require('express')
const router = express.Router()
const chat_question = require('../../controller/chat/chat_question')


router.post('/create', chat_question.create)
router.get('/getAll', chat_question.getAll)
router.put('/update', chat_question.update)
router.delete('/delete', chat_question.deleteOne)

module.exports = router