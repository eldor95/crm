const express = require('express')
const router = express.Router()
const mentors_test = require('../controller/mentors_test')


router.post('/create', mentors_test.createOne)
router.get('/getAll', mentors_test.getAll)
router.put('/:id', mentors_test.update)
router.delete('/:id', mentors_test.deleteOne)

module.exports = router