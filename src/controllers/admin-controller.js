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

 
exports.ingredientes = async (req,res) => {
    let productList = [];

    try {
        const query = new Parse.Query(Parse.Object.extend('Produto'));
        const results = await query.find();
    
       
        for (const object of results) {
          const ds_nome = object.get('ds_nome');
          const ds_marca = object.get('ds_marca');
          const tp_ativo = object.get('tp_ativo');
    
          productList.push({ ds_nome, ds_marca, tp_ativo });
        }
     
      } catch (error) {
        console.error('Error while fetching Produto', error);
        res.status(500).json({ error: 'Failed to fetch products' });
      }
 
 
    res.render('ingredientes/list.ejs', {
            title: 'Dashboard',
            user: req.user,
            banco: productList,
    
        })
    }
    




 