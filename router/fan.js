const express = require('express')
const router = express.Router()
const fan = require('../controller/fan')


router.post('/create', fan.createOne)
router.get('/getAll', fan.getAll)
router.get('/:id', fan.getOne)
router.put('/:id', fan.update)
router.delete('/:id', fan.deleteOne)

module.exports = router