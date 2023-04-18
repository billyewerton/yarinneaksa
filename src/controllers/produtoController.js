

'use strict'
const ProdutoService = require('../services/produtoService'); 
 
 
 
const produtoServices = () => new ProdutoService();


// lista de ingredientes 
exports.ingredientes = async (req,res) => { 
 let banco = await produtoServices().lerProdutosEAdicionarPreco(req,res)    
    res.render('ingredientes/list.ejs', {
            title: 'Dashboard',
            user: req.user,
            banco: banco,
            produtoSave  : null
        })
    }

    exports.ingredientesEdit  = async (req,res) => {  
         
        let banco = []
 
        
if(req.query.id) { 
      banco = await produtoServices().lerProdutosEAdicionarPreco(req,res)   
        banco = banco[0] 
}
       
    
        res.render('ingredientes/edit.ejs', {
            title: 'Dashboard',          
            banco: banco,
    
        })
    
    }
    
    exports.save  = async (req,res) => {  

     const produto=  await produtoServices().save(req,res)   

   
    
        res.render('ingredientes/list.ejs', {
            title: 'Dashboard',          
            banco:  await produtoServices().lerProdutosEAdicionarPreco(req,res)  ,
            produtoSave : produto.id
        })
    
    }
    
    




 