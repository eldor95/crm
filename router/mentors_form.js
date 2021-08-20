const express = require('express')
const router = express.Router()
const mentors_form = require('../controller/mentors_form')


router.post('/create', mentors_form.createOne)
router.get('/getAll', mentors_form.getAll)
router.put('/update', mentors_form.update)
router.delete('/delete', mentors_form.deleteOne)

module.exports = router