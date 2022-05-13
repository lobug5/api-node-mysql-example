// iniciando a classe que ira criar as tabelas 
class Tabelas {
  // recebendo a conexao como parâmetro no index
  init(conexao) {
    // referênciando o contexto da conexão
    this.conexao = conexao
    // inicializando a função para criar a tabela de Atendimentos
    this.criarAtendimentos()
  }

  // função para criar a tabela de atendimentos
  criarAtendimentos() {
    // constante que recebe a query com os campos da tabela
    const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
    
    //metodo utilizado para executar a query dentro da constante sql para criar a tabela
    this.conexao.query(sql, erro => {
      if(erro) {
        console.log(erro)
      } else {
        console.log("Tabela Atendimentos criada com sucesso")
      }
    })
  }
}
// exportando a classe para ser utilizada em outras páginas
module.exports = new Tabelas
