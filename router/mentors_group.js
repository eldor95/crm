const express = require('express')
const router = express.Router()
const mentors_group = require('../controller/mentors_group')


router.post('/create', mentors_group.createOne)
router.get('/getAll', mentors_group.getAll)
router.put('/:id', mentors_group.update)
router.delete('/:id', mentors_group.deleteOne)

module.exports = router