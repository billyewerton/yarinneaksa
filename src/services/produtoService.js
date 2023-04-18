const Produto = require('../domains/produto'); // Substitua pelo caminho correto do arquivo da classe Produto
const Preco = require('../domains/preco'); // Substitua pelo caminho correto do arquivo da classe Produto
const MongoDBConnection = require('./mongoDBConnection');
const ObjectId = require('mongodb').ObjectId;

class ProdutoService {

  async adicionarProduto(produto) {
    //  produto.validar();

    const mongoDBConnection = new MongoDBConnection()
    const db = await mongoDBConnection.connect();

    const result = await db.collection('tb_produto').insertOne(produto);
    const id = result.insertedId;

    return id;



  }



  async save(req, res) {



    try {
      const mongoDBConnection = new MongoDBConnection()
      const db = await mongoDBConnection.connect();
      const { id, ds_nome, ds_marca ,ds_ativo, ref ,ds_unidade ,ds_quantidade,ds_preco } = req.body;

 

      let produto  = null
      
      if(id) {
        produto = await db.collection('tb_produto').findOne({ _id: new ObjectId(id) });
      }
      

    

      if (!produto) { 
        produto = new Produto(ds_nome,ds_marca,true) 
        await db.collection('tb_produto').insertOne(produto);
        
      } else {
        produto.ds_nome = ds_nome;
        produto.ds_marca = ds_marca;
        produto.tp_ativo = ds_ativo == 'true'  ;
        await db.collection('tb_produto').updateOne({ _id: new ObjectId(id) }, { $set: produto });
      }


      if(ref != (   `${ds_unidade}-${ds_quantidade}-${ds_preco}`  )) {
        const preco =  await new Preco(new Date(), ds_preco, produto._id,ds_quantidade,ds_unidade); 
        
       const precoSave =  await db.collection('tb_preco').insertOne(preco)
       

      }  
       
        console.log('Produto atualizado com sucesso');
        // Retorne a mensagem de sucesso e o status de operação bem-sucedida
        return { mensagem: 'Produto atualizado com sucesso', sucesso: true , id:produto._id };
     

    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro  ' });
    } finally {

    }
  }



  async lerProdutosEAdicionarPreco(req, res) {

    const mongoDBConnection = new MongoDBConnection()
    const db = await mongoDBConnection.connect();


    const produtos = req.query.id ? await db.collection('tb_produto').find({ _id: new ObjectId(req.query.id) }).toArray() : await db.collection('tb_produto').find().toArray();
    const precoList = await db.collection('tb_preco').find().sort({ date: -1 }).toArray();



    const produtosList = []; // Lista de produtos  
    try {
      for (const produto of produtos) {
        // Para cada produto, cria uma instância da classe Produto
        const novoProduto = new Produto(produto.ds_nome, produto.ds_marca, produto.tp_ativo);
        novoProduto.id = produto._id
        let precoFind;
        for (let i = 0; i < precoList.length; i++) {


          if (precoList[i].produto.toString() === produto._id.toString()) {
            precoFind = precoList[i]

            break;
          }
        }

        if (precoFind) {

          novoProduto.date = precoFind.date ? formatarDataParaString(precoFind.date) : ''

          novoProduto.unidade = precoFind.ds_unidade
          novoProduto.quantidade = precoFind.ds_quantidade
          novoProduto.preco = precoFind.nu_preco

          novoProduto.ref = precoFind.ds_unidade + '-' + precoFind.ds_quantidade + '-' + precoFind.nu_preco

        }

        // Adiciona o produto à lista de produtos 
        produtosList.push(novoProduto); // Adiciona o produto à lista de produtos 
      }


      return produtosList; // Retorna a lista de produtos com os preços associados
    } catch (error) {
      console.error('ERRRO:', error);
    }
  }




  async atualizarProduto(produto) {
    try {
      // Validar o objeto de produto
      produto.validar();
      // Verificar unicidade da combinação de ds_nome e ds_marca
      Produto.verificarUnicidade({ ds_nome: produto.ds_nome, ds_marca: produto.ds_marca });
      // Lógica para atualizar o produto no banco de dados
      console.log('Produto atualizado com sucesso:', produto);
    } catch (error) {
      console.error('Falha ao atualizar o produto:', error);
      throw error;
    }
  }

  async deletarProduto(produto) {
    try {
      // Lógica para deletar o produto do banco de dados
      console.log('Produto deletado com sucesso:', produto);
    } catch (error) {
      console.error('Falha ao deletar o produto:', error);
      throw error;
    }
  }
}

/*
// Exemplo de uso do CRUD
const produtoController = new ProdutoController();

// Criar a tabela de produtos
await produtoController.criarTabela();

// Adicionar um novo produto
const novoProduto = new Produto('billy', 'gilman', true);
await produtoController.adicionarProduto(novoProduto);

// Listar os produtos
await produtoController.listarProdutos();

// Atualizar um produto existente
const produtoExistente = new Produto('billy', 'gilman', true);
produtoExistente.tp_atico = false;
await produtoController.atualizarProduto(produtoExistente);

// Deletar um produto existente
await produtoController.deletarProduto(produtoExistente);

*/

function formatarDataParaString(data) {
  try {
    const date = new Date(data);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear().toString();
    return `${day}/${month}/${year}`;
  } catch (error) {
    return '';
  }

}


module.exports = ProdutoService;


