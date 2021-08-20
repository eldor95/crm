const express = require('express')
const router = express.Router()
const tuman = require('../controller/tuman')


router.post('/create', tuman.createOne)
router.get('/getAll', tuman.getAll)
router.put('/update', tuman.update)
router.delete('/delete', tuman.deleteOne)

module.exports = router