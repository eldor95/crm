const express = require('express')
const router = express.Router()
const viloyat = require('../controller/viloyat')


router.post('/create', viloyat.createOne)
router.get('/getAll', viloyat.getAll)
router.put('/:id', viloyat.updateOne)
router.get('/:id', viloyat.getOne)
router.delete('/:id', viloyat.deleteOne)

module.exports = router