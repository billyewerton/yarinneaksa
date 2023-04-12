'use strict'
const Parse = require('parse/node') 
const APP_ID = "qQzTG8wfd04DU4g2rbhMsTwzLWDlvdiuJiUF4Acp" 
const JAVASCRIPT_ID = "qvvVvsGsrEknpWUvtt4N8DOJSw8kbKgpOYN2uMiD" 
Parse.initialize(APP_ID,JAVASCRIPT_ID)
Parse.serverURL ="https://parseapi.back4app.com/" 


exports.main = (req,res) => {

res.render('layouts/index.ejs', {
        title: 'Dashboard',
        user: req.user,
        banco: []

    })
}







exports.ingredientesEdit  = async (req,res) => { 
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

// query: { objectId: 'xOgMweDbMs' },
let productList = [], precoList = [];

try {
     const queryProduto = new Parse.Query(Parse.Object.extend('Produto')).select('objectId', 'ds_nome', 'ds_marca', 'tp_ativo') 

     if(req.query.objectId) {
        queryProduto.equalTo('objectId', req.query.objectId)
    }   
    

     const queryPrreco = new Parse.Query(Parse.Object.extend('Preco')).select('createdAt', 'ds_preco', 'id_produto', 'ds_quantidade','ds_unidade') 

     for (const object of (await queryPrreco.find())) { 
        const objectId = object.get('objectId');
        const id_produto = object.get('id_produto');
        const createdAt = object.get('createdAt');
        const ds_preco = object.get('ds_preco'); 
        const ds_quantidade = object.get('ds_quantidade');
        const ds_unidade = object.get('ds_unidade');

       
      
        precoList.push({ objectId, id_produto  ,createdAt,ds_preco, ds_quantidade, ds_unidade });

         
      }


   
    
    for (const object of (await queryProduto.find())) { 

      const objectId = object.id;
      const ds_nome = object.get('ds_nome');
      const ds_marca = object.get('ds_marca');
      const tp_ativo = object.get('tp_ativo');
// Verifica se o id_produto é igual ao objectId do produto correspondente em productList

precoList.sort((a, b) => {
const dateA = new Date(a.createdAt);
const dateB = new Date(b.createdAt);

return dateA - dateB || (dateA.getHours() * 3600 + dateA.getMinutes() * 60 + dateA.getSeconds()) - (dateB.getHours() * 3600 + dateB.getMinutes() * 60 + dateB.getSeconds());
});


let precoFind  ;
for (let i = 0; i < precoList.length; i++) {
if (precoList[i].id_produto.id == objectId) {
     
    precoFind = precoList[i] 
  break;
}
}


let preco = '' , data = '' , unidade = '', quantidade = ''  



if(precoFind) {
preco = precoFind.ds_preco  ? precoFind.ds_preco : '' 
  data= `${precoFind.createdAt.getDate().toString().padStart(2, '0')}/${(precoFind.createdAt.getMonth() + 1).toString().padStart(2, '0')}/${precoFind.createdAt.getFullYear()}`;  
  unidade =precoFind.ds_unidade
  quantidade =precoFind.ds_quantidade 
   
}        



      productList.push({ objectId,ds_nome, ds_marca, tp_ativo,preco,data,unidade, quantidade  });
    }
 
  } catch (error) {
    console.error('Error while fetching Produto', error);
    res.status(500).json({ error: 'Erro' });
  }

  return productList

}
 
exports.ingredientes = async (req,res) => {

 let banco = await ingredientesList(req,res) 
 
   
    res.render('ingredientes/list.ejs', {
            title: 'Dashboard',
            user: req.user,
            banco: banco,
    
        })
    }
    




 