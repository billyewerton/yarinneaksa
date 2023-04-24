class ProdutoVendaPreco {
    
    constructor(id_produto_venda, desp_fat, comissao_venda, imposto_nf, taxa_cartao, ifood, lucro, receita, recheio1, extras, decoracao, base_calculo) {
        this.id_produto_venda = new ObjectId(id_produto_venda);
        this.desp_fat = desp_fat;
        this.comissao_venda = comissao_venda;
        this.imposto_nf = imposto_nf;
        this.taxa_cartao = taxa_cartao;
        this.ifood = ifood;
        this.lucro = lucro;
        this.receita = receita;
        this.recheio1 = recheio1;
        this.extras = extras;
        this.decoracao = decoracao;
        this.base_calculo = base_calculo;
     
      }
 

    
    static get collectionName() {
        return 'tb_produto_venda_preco'; // substitua pelo nome correto da coleção no banco de dados
    }

 
}


 

module.exports = ProdutoVendaPreco;
