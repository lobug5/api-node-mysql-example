const moment = require('moment')
// importando a conexão com o banco de dados
const conexao = require('../controllers/infraestrutura/conexao')

// inicializando a classe que insere o atendimento
class Atendimento {
  // criação do método que ira receber os dados da requisição via parâmetro
  adiciona(atendimento, res) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

    const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
    const clienteEhValida = atendimento.cliente.length >= 5

    const validacoes = [
      {
      nome: 'data',
      valido: dataEhValida,
      mensagem: 'Data deve ser maior ou igual a data atual'
      },
      {
      nome: 'cliente',
      valido: clienteEhValida,
      mensagem: 'Cliente deve ter pelo menos cinco caracteres'
      },
    ]

    const erros = validacoes.filter(campo => !campo.valido)
    const existemErros = erros.length

    if(existemErros) {
      res.status(400).json(erros)
    } else {
      const atendimentoDatado = {...atendimento, dataCriacao, data}
      // constante que armazena a query de insert no banco de dados
      const sql = "INSERT INTO Atendimentos SET ?"
  
      // executando a query que esta dentro da const sql e imprimindo o resultado da transação caso seja inserido
      conexao.query(sql, atendimentoDatado, (erro, resultados) => {
        if(erro) {
          res.status(400).json(erro)
        } else {
          res.status(201).json(atendimento)
        }
      })
    }
  }

  lista(res) {
    const sql = 'SELECT * FROM Atendimentos'

    conexao.query(sql, (erro, resultados) => {
      if(erro) {
        console.status(400).json(erro)
      } else {
        res.status(201).json(resultados)
      }
    })
  }

  buscaPorId(id, res) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

    conexao.query(sql, (erro, resultados) => {
      const atendimento = resultados[0]
      if(erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(atendimento)
      }
    })
  }

  altera(id, valores, res) {

    const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
    const data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

    const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
    const clienteEhValida = valores.cliente.length >= 5

    const validacoes = [
      {
      nome: 'data',
      valido: dataEhValida,
      mensagem: 'Data deve ser maior ou igual a data atual'
      },
      {
      nome: 'cliente',
      valido: clienteEhValida,
      mensagem: 'Cliente deve ter pelo menos cinco caracteres'
      },
    ]

    const erros = validacoes.filter(campo => !campo.valido)
    const existemErros = erros.length

    if(existemErros) {
      res.status(400).json(erros)
    } else {
      const atendimentoDatado = {...valores, id, dataCriacao, data}

      const sql = `UPDATE Atendimentos SET ? WHERE id=${id}`

      conexao.query(sql, atendimentoDatado, (erro, resultados) => {
        if(erro){
          res.status(400).json(erro)
        } else {
          res.status(200).json({...valores, id})
        }
      })
    }
  }
  deleta(id, res) {
    const sql = 'DELETE FROM Atendimentos WHERE id = ?'

    conexao.query(sql, id, (erro, resultados) => {
      if(erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({id})
      }
    })
  }
}
// exportando a classe para ser utilizada em outras páginas
module.exports = new Atendimento
