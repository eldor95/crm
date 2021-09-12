const express = require('express')
const router = express.Router()
const mentors_audio = require('../controller/mentors_audio')


const multer = require('multer');
const md5 = require('md5');
const path = require('path');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/audio')
    },
    filename: function(req, file, cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    }
})
const upload = multer({ storage: storage })




router.post('/create', upload.single("audio_file"), mentors_audio.createOne)
router.get('/getAll', mentors_audio.getAll)
router.put('/:id', upload.single("audio_file"), mentors_audio.update)
router.delete('/:id', mentors_audio.deleteOne)

module.exports = router