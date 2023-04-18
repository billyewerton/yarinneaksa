'use strict'
const express = require('express') 

const router = express.Router()
const admincontroller = require("../src/controllers/admin-controller")
const produtoController = require("../src/controllers/produtoController")


router.get('/', admincontroller.main)


router.get('/ingredientes', produtoController.ingredientes)
router.get('/ingredientes-edit', produtoController.ingredientesEdit)
router.get('/ingredientes-create', produtoController.ingredientesEdit)
router.post('/ingrediente-save', produtoController.save)








module.exports = router