const express = require('express')
const router = express.Router()
const fan = require('../controller/fan')


router.post('/create', fan.createOne)
router.get('/getAll', fan.getAll)
router.put('/update', fan.update)
router.delete('/delete', fan.deleteOne)

module.exports = router