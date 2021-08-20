const express = require('express')
const router = express.Router()
const chat = require('../../controller/chat/chat')


router.post('/create', chat.create)
router.get('/getAll', chat.getAll)
router.put('/update', chat.update)
router.delete('/delete', chat.delete)

module.exports = router