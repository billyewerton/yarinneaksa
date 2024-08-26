const sql = require('../leitos/src/services/postgresDBConection.js');

 
async function createTable() {
    try {
      await sql`
        INSERT INTO TB_QUARTOS (nome) VALUES ('QUARTO 1');


      `;
      console.log('Tabela criada com sucesso');
    } catch (error) {
      console.error('Erro ao criar tabela:', error);
    }
  }
  
  createTable();