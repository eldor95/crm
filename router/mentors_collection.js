const express = require('express')
const router = express.Router()
const mentors_collection = require('../controller/mentors_collection')


router.post('/create', mentors_collection.createOne)
router.get('/getAll', mentors_collection.getAll)
router.put('/:id', mentors_collection.update)
router.delete('/:id', mentors_collection.deleteOne)

module.exports = router