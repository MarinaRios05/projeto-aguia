const { Pool } = require('pg');

// PASSO CRÍTICO: Preencha suas credenciais AQUI

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'projeto_aguia_db',
  password: 'LabDB25',
  port: 5432,
});

// Isso permite que outros arquivos (como o server.js) executem consultas
const query = (text, params) => pool.query(text, params);

module.exports = {
  query,
};