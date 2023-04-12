'use strict'
const express = require('express')
const router = express.Router()
const admincontroller = require("../src/controllers/admin-controller")


router.get('/', admincontroller.main)


router.get('/ingredientes', admincontroller.ingredientes)
router.get('/ingredientes-edit', admincontroller.ingredientesEdit)








module.exports = router