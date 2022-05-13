// importando o model de atendimentos
const Atendimento = require('../models/atendimentos')

module.exports = app => {
  // criando a rota de get dos atendimentos
  app.get('/atendimentos', (req, res) => res.send(
    'Você esta na rota de atendimentos e esta realizando um GET'))
  // criando a rota de post dos atendimentos
  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body
    // passando para o model como parâmetro da função adiciona o que foi recebido pelo body da requisição
    Atendimento.adiciona(atendimento, res)
    // resposta que sera recebida caso funcione a requisição
    res.send('Post atendimento')
  })
}

