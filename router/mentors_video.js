const express = require('express')
const router = express.Router()
const mentors_video = require('../controller/mentors_video')


router.post('/create', mentors_video.createOne)
router.get('/getAll', mentors_video.getAll)
router.put('/update', mentors_video.update)
router.delete('/delete', mentors_video.deleteOne)

module.exports = router