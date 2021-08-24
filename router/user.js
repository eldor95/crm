const express = require('express')
const router = express.Router()
const user = require('../controller/user')


router.post('/create', user.createOne)
router.get('/getAll', user.getAll)
router.put('/:id', user.update)
router.delete('/delete', user.deleteOne)

module.exports = router