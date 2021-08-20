const express = require('express')
const router = express.Router()
const mentor = require('../controller/mentor')


router.post('/create', mentor.createOne)
router.get('/getAll', mentor.getAll)
router.put('/update', mentor.update)
router.delete('/delete', mentor.deleteOne)

module.exports = router