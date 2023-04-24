'use strict'
const express = require('express') 

const router = express.Router()
const admincontroller = require("../src/controllers/admin-controller")
const produtoController = require("../src/controllers/produtoController")

// Rotas principais
router.get('/', admincontroller.main)

// Rotas relacionadas a ingredientes
router.get('/ingredientes', verificarAutenticacao,produtoController.ingredientes)
router.get('/ingredientes-edit', produtoController.ingredientesEdit)
router.get('/ingredientes-create', produtoController.ingredientesEdit)
router.post('/ingrediente-save', produtoController.save)
router.post('/ingredientes-saveAJAX', produtoController.saveAJAX)





function verificarAutenticacao(req, res, next) {
    return next();
    if (req.isAuthenticated()) {
      return next();
    }
  
    res.redirect('/login'); // redireciona o usuário para a página de login
  }


module.exports = router