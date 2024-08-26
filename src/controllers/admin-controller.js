

'use strict'
const Parse = require('parse/node') 
const APP_ID = "qQzTG8wfd04DU4g2rbhMsTwzLWDlvdiuJiUF4Acp" 
const JAVASCRIPT_ID = "qvvVvsGsrEknpWUvtt4N8DOJSw8kbKgpOYN2uMiD" 
Parse.initialize(APP_ID,JAVASCRIPT_ID)
Parse.serverURL ="https://parseapi.back4app.com/" 
 
const ProdutoController = require('../services/produtoService');
const PrecoController = require('../controllers/precoController');
const Produto = require('../domains/produto'); 
const Preco = require('../domains/produto-preco'); 


exports.main = async (req,res) => {

    /*const ProdutoControllers = new ProdutoController(); 
    const precoController = new PrecoController();

    const novoProduto = new Produto('billy', 'gilman', true);
      const produto =  await  ProdutoControllers.adicionarProduto(novoProduto) 
     const preco1 = await new Preco(new Date(), 10.99, produto);
    const preco2 =  await new Preco(new Date(), 15.99, produto);
 
    await precoController.create(preco1)
    await precoController.create(preco2)  
    */




 
 
       
 

res.render('layouts/index.ejs', {
        title: 'Dashboard',
        user: req.user,
        banco: []

    })
}










exports.ingredienteSave  = async (req,res) => { 
 
 

    let banco = await ingredientesList(req,res) 

    if(banco) {
        banco = banco[0]
    }

    res.render('ingredientes/edit.ejs', {
        title: 'Dashboard',
        user: req.user,
        banco: banco,

    })

}





var ingredientesList = async (req,res) => { 
 console.log(req.query.objectId) 

const produtoController = new ProdutoController()

return await produtoController.lerProdutosEAdicionarPreco()  
  
 

}
 
exports.ingredientes = async (req,res) => {

 let banco = await ingredientesList(req,res) 
 
   
    res.render('ingredientes/list.ejs', {
            title: 'Dashboard',
            user: req.user,
            banco: banco,
    
        })
    }
    




 