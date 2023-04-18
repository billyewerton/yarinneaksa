
class Preco {
    constructor(date, nu_preco, produto,ds_quantidade,ds_unidade) {
        this.date = date;
        this.nu_preco = nu_preco;
        this.ds_quantidade = ds_quantidade;
        this.ds_unidade = ds_unidade;
        this.produto = produto;
    }
}
module.exports = Preco;
