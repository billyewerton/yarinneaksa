class Produto {
    constructor(ds_nome, ds_marca, tp_ativo) {
        this.ds_nome = ds_nome;
        this.ds_marca = ds_marca;
        this.tp_ativo = tp_ativo;
      
    }
 

    
    static get collectionName() {
        return 'tb_produto'; // substitua pelo nome correto da coleção no banco de dados
    }

 
}


 

module.exports = Produto;
