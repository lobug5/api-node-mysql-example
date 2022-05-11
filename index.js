//importando modulos utilizados no código
const customExpress = require('./config/customExpress')
const conexao = require('./controllers/infraestrutura/conexao')
const Tabelas = require('./controllers/infraestrutura/tabelas')

//realizando a conexão com o banco de dados
conexao.connect(erro => {
  if(erro) {
    console.log(erro)
  }else {
    console.log('conectado com sucesso.')
    // iniciando a geração de tabelas automatico passando como parâmetro a conexão
    Tabelas.init(conexao)
    // inicializando o servidor
    const app = customExpress()
    // subindo o servidor na porta 3000
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    // imprimindo uma mensagem na raiz / do servidor
    app.get('/', (req, res) => res.send('Servidor rodando, tudo ok'))
  }
})

