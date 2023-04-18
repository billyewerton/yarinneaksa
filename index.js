const Parse = require('parse/node')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const admin = require("./routes/admin.js")
const APP_ID = "qQzTG8wfd04DU4g2rbhMsTwzLWDlvdiuJiUF4Acp" 
const JAVASCRIPT_ID = "qvvVvsGsrEknpWUvtt4N8DOJSw8kbKgpOYN2uMiD" 
Parse.initialize(APP_ID,JAVASCRIPT_ID)
Parse.serverURL ="https://parseapi.back4app.com/" 

 
 
 

const app = express();

// rotas 


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware para processar os dados do POST em formato JSON
app.use(express.json()); 
app.set('views', path.join(__dirname, 'src/views')) 
app.use('/assets',express.static(__dirname + '/assets')) 
app.set('view engine', 'ejs')  
 
const port = process.env.PORT || 8080

app.listen(port,() => {
console.log('app run')

})


app.use('/' ,admin)

 