'use strict'
const express = require('express')
const router = express.Router()
const admincontroller = require("../src/controllers/admin-controller")


router.get('/', admincontroller.main)











module.exports = router