const express = require('express')
const router = express.Router()
const admin = require('../../controller/admin/admin')


router.get('/dashboard', admin.dashboard)

module.exports = router