const express = require('express')
const router = express.Router()
const mentors_test = require('../controller/mentors_test')


router.post('/create', mentors_test.createOne)
router.get('/getAll', mentors_test.getAll)
router.put('/update', mentors_test.update)
router.delete('/delete', mentors_test.deleteOne)

module.exports = router