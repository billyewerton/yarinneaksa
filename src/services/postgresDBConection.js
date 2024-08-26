const postgres = require('postgres');

const sql = postgres({
  host: 'ep-soft-feather-a53d8jee.us-east-2.aws.neon.tech',
  database: 'leitos',
  username: 'leitos_owner',
  password: 'WuDKXpPS7hf9',
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${'ep-soft-feather-a53d8jee'}`,
  },
});

module.exports = sql;  // Exportação usando CommonJS

 