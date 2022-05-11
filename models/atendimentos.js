// importando a conexão com o banco de dados
const conexao = require('../controllers/infraestrutura/conexao')

// inicializando a classe que insere o atendimento
class Atendimento {
  // criação do método que ira receber os dados da requisição via parâmetro
  adiciona(atendimento) {
    // constante que armazena a query de insert no banco de dados
    const sql = "INSERT INTO Atendimentos SET ?"

    // executando a query que esta dentro da const sql e imprimindo o resultado da transação caso seja inserido
    conexao.query(sql, atendimento, (erro, resultados) => {
      if(erro) {
        console.log(erro)
      } else {
        console.log(resultados)
      }
    })
  }
}
// exportando a classe para ser utilizada em outras páginas
module.exports = new Atendimento
