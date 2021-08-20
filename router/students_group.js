const express = require('express')
const router = express.Router()
const students_group = require('../controller/students_group')


router.post('/createOne', students_group.createOne)
router.get('/getAll', students_group.getAll)
router.put('/update', students_group.update)
router.delete('/deleteOne', students_group.deleteOne)

module.exports = router