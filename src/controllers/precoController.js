const produto = require('../domains/produto'); // Substitua pelo caminho correto do arquivo da classe Produto
const preco = require('../domains/preco'); // Substitua pelo caminho correto do arquivo da classe Produto
const MongoDBConnection = require('../services/mongoDBConnection');

class PrecoController {
   
    async create(preco) {
     
        const mongoDBConnection = new MongoDBConnection()
        const db = await mongoDBConnection.connect();
 
      await db.collection('tb_preco').insertOne(preco)

   
 
.then(result => {
    
    console.log('preco inserido com sucesso:', result.insertedId);
  
})
.catch(err => {
    console.error('Erro ao inserir o documento:', err);
});

        console.log('PReco adicionado com sucesso:', produto);
        
    }

     
}

 
module.exports = PrecoController;