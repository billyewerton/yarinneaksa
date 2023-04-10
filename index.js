const Parse = require('parse/node')
const express = require('express')

const APP_ID = "qQzTG8wfd04DU4g2rbhMsTwzLWDlvdiuJiUF4Acp" 
const JAVASCRIPT_ID = "qvvVvsGsrEknpWUvtt4N8DOJSw8kbKgpOYN2uMiD" 
Parse.initialize(APP_ID,JAVASCRIPT_ID)
Parse.serverURL ="https://parseapi.back4app.com/" 

const Produto = Parse.Object.extend("Produto")
const produto = new Produto()
const appartmentQuery = new Parse.Query(produto)


async function createProduto() {
    let Produto2 = Parse.Object.extend("Produto")
    let produto2 = new Produto2()
    produto2.set('ds_nome' ,'OVO DE PASCOA')

    let Preco = Parse.Object.extend("Preco")
    let preco = new Preco()
    preco.set('ds_preco' , 205)
    preco.set("id_produto" ,produto2)


    let preco2 = new Preco()
    preco2.set('ds_preco' , 205)
    preco2.set("id_produto" ,produto2)

    preco.save()
    preco2.save()


}

//createProduto()


const app = express();

app.get("/" , (req,res) => {
    appartmentQuery.find() 
    .then((obj) => res.json(obj))
    .catch((err) => res.json(err))

} )

const port = process.env.PORT || 9001

app.listen(port,() => {
console.log('app run')

})



app.get("/teste" , (req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  
} )