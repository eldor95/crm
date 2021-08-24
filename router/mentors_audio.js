const express = require('express')
const router = express.Router()
const mentors_audio = require('../controller/mentors_audio')


router.post('/create', mentors_audio.createOne)
router.get('/getAll', mentors_audio.getAll)
router.put('/:id', mentors_audio.update)
router.delete('/delete', mentors_audio.deleteOne)

module.exports = router