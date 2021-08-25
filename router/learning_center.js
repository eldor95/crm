const express = require('express')
const router = express.Router()
const learning_center = require('../controller/learning_center')


router.post('/create', learning_center.createOne)
router.get('/getAll', learning_center.getAll)
router.get('/:id', learning_center.getOne)
router.put('/:id', learning_center.update)
router.delete('/:id', learning_center.deleteOne)

module.exports = router