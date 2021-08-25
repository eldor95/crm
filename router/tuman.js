const express = require('express')
const router = express.Router()
const tuman = require('../controller/tuman')


router.post('/create', tuman.createOne)
router.get('/getAll', tuman.getAll)
router.put('/:id', tuman.update)
router.delete('/:id', tuman.deleteOne)
router.get('/filter_viloyat/:id', tuman.get_Tuman_By_Id_Viloyat)

module.exports = router