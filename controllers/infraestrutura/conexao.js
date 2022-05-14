// importando o módulo do mysql2 é necessario instalar no npm
const mysql = require('mysql2')
// criando o objeto de conexão passando as informações do banco
const conexao = mysql.createConnection({
  host:"localhost",
  port: "3306",
  user: "root",
  password: "lorena123",
  database: "agenda-petshop"
})
//exportando o modulo de conexão para ser utilizado em outras paginas
module.exports = conexao
