class Produto {
    constructor(ds_nome, tp_ativo) {
        this.ds_nome = ds_nome; 
        this.tp_ativo = tp_ativo ? tp_ativo : true;
      
    }
 

    
    static get collectionName() {
        return 'tb_produto_venda'; // substitua pelo nome correto da coleção no banco de dados
    }

 
}


 

module.exports = Produto;
