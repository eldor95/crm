const express = require('express')
const router = express.Router()
const user = require('../controller/user')


router.post('/create', user.createOne)
router.get('/getAll', user.getAll)
router.get('/getStudent', user.filter_student)
router.get('/:id', user.getOne)
router.put('/:id', user.update)
router.delete('/:id', user.deleteOne)

router.get('/filter_diler', user.filtre_diler)

module.exports = router