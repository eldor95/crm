const express = require('express')
const router = express.Router()
const mentors_group = require('../controller/mentors_group')


router.post('/create', mentors_group.createOne)
router.get('/getAll', mentors_group.getAll)
router.put('/update', mentors_group.update)
router.delete('/delete', mentors_group.deleteOne)

module.exports = router