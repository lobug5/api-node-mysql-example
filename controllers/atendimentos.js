// importando o model de atendimentos
const Atendimento = require('../models/atendimentos')

module.exports = app => {
  // criando a rota de get dos atendimentos
  app.get('/atendimentos', (req, res) => {
    Atendimento.lista(res)
  });

  app.get('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    Atendimento.buscaPorId(id, res)
  })
  // criando a rota de post dos atendimentos
  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body
    // passando para o model como parâmetro da função adiciona o que foi recebido pelo body da requisição
    Atendimento.adiciona(atendimento, res)
  })

  app.patch('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const valores = req.body

    Atendimento.altera(id, valores, res)
  })

  app.delete('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id)

    Atendimento.deleta(id, res)
  })
}

