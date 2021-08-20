const express = require('express')
const router = express.Router()
const viloyat = require('../controller/viloyat')


router.post('/create', viloyat.createOne)
router.get('/getAll', viloyat.getAll)
router.put('/update', viloyat.updateOne)
router.delete('/delete', viloyat.deleteOne)

module.exports = router