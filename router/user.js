const express = require('express')
const router = express.Router()
const user = require('../controller/user')
const multer = require('multer')
const path = require('path')
const md5 = require('md5')


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/orginal'); // asosiy rasmimiznin yuli
    },

    filename: function(req, file, cb) {
        cb(null, `${md5 (Date.now())}${path.extname(file.originalname)}`); // bu yerda file ni nameni md5 bilan shifrofka qilyapmiz

    },
});
const upload = multer({ storage: storage });

router.post('/create',
    /* upload.single('image'), */
    user.createOne)
router.get('/getAll', user.getAll)
router.get('/getStudent', user.filter_student)
router.get('/:id', user.getOne)
router.put('/:id', upload.single('image'), user.update)
router.delete('/:id', user.deleteOne)
router.get('/filter_diler', user.filtre_diler)

router.post('/login', user.login)
router.post('/logout', user.logout)

module.exports = router