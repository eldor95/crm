const express = require('express')
const router = express.Router()
const mentors_theme = require('../controller/mentors_theme')


router.post('/create', mentors_theme.createOne)
router.get('/getAll', mentors_theme.getAll)
router.put('/:id', mentors_theme.update)
router.delete('/delete', mentors_theme.deleteOne)

module.exports = router