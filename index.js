const Parse = require('parse/node')
const express = require('express')
const path = require('path')
const admin = require("./routes/admin")
const APP_ID = "qQzTG8wfd04DU4g2rbhMsTwzLWDlvdiuJiUF4Acp" 
const JAVASCRIPT_ID = "qvvVvsGsrEknpWUvtt4N8DOJSw8kbKgpOYN2uMiD" 
Parse.initialize(APP_ID,JAVASCRIPT_ID)
Parse.serverURL ="https://parseapi.back4app.com/" 

const Produto = Parse.Object.extend("Produto")
const produto = new Produto()
const appartmentQuery = new Parse.Query(produto)


const Preco = Parse.Object.extend("Preco")
 
const precos = new Parse.Query(new Preco())

const app = express();

// rotas 

app.use('/' ,admin)



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

 getAllUsersWithHobbies()
   function getAllUsersWithHobbies() {
    const users = new Parse.Query(produto).find()
    
    console.log(users)

   // const usersIds = _.map(users, (el) => el.id);  
//const Hobbies = await database('user_hobbies').select().whereIn('user_id', usersIds) 
  //  const groupedHobbies = _.groupBy(Hobbies, 'user_id');

    
}



app.set('views', path.join(__dirname, 'src/views'))


app.use('/assets',express.static(__dirname + '/assets'))
 
app.set('view engine', 'ejs') 
 


 app.get("/teste", async (req, res) => {
 
});

const port = process.env.PORT || 8080

app.listen(port,() => {
console.log('app run')

})


 
app.get("/teste" , (req,res) => {
    res.statusCode = 200;classcl
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  
} )