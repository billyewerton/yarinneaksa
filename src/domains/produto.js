class Produto {
    constructor(ds_nome, ds_marca, tp_ativo) {
        this.ds_nome = ds_nome;
        this.ds_marca = ds_marca;
        this.tp_ativo = tp_ativo;
      
    }

    // Método para validar se o objeto de produto é válido
    validar() {
        if (!this.ds_nome || typeof this.ds_nome !== 'string') {
            throw new Error('O campo ds_nome é obrigatório e deve ser uma string.');
        }

        if (!this.ds_marca || typeof this.ds_marca !== 'string') {
            throw new Error('O campo ds_marca é obrigatório e deve ser uma string.');
        }

        if (typeof this.tp_ativo !== 'boolean') {
            throw new Error('O campo tp_ativo deve ser um booleano.');
        }
    }

    // Método para verificar se a combinação de ds_nome e ds_marca é única
    static verificarUnicidade(combination) {
        const produtos = []; // substitua pelo código para buscar produtos no banco de dados

        for (const produto of produtos) {
            if (this.ds_nome === combination.ds_nome && produto.ds_marca === combination.ds_marca) {
                throw new Error('Já existe um produto com essa combinação de ds_nome e ds_marca.');
            }
        }
    }

    // Propriedade estática collectionName
    static get collectionName() {
        return 'tb_produto'; // substitua pelo nome correto da coleção no banco de dados
    }

 
}


 

module.exports = Produto;
