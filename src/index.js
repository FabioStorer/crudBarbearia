const express = require('express');
const atendimento_router = require('./routes/atendimento.js');
const barbearia_router = require('./routes/barbearia.js');
const barbeiro_router = require('./routes/barbeiro.js');
const cliente_router = require('./routes/cliente.js');
const rede_router = require('./routes/rede.js');
const servico_router = require('./routes/servico.js');
const usuario_router = require('./routes/usuario.js');
const app = express();
const port = 3000;

app.use(express.json());

/// ATENDIMENTO ///

app.use('/atendimento', atendimento_router);

/// BARBEARIA ///

app.use('/barbearia', barbearia_router);

/// BARBEIRO ///

app.use('/barbero', barbeiro_router);

/// CLIENTE ///

app.use('/cliente', cliente_router);

/// REDE ///

app.use('/rede', rede_router);

/// SERVICO ///

app.use('/servico', servico_router)

/// USUÁRIO ///

app.use('/usuario', usuario_router);

/// LISTEN ///

app.listen(port, () => {
    console.log(`Server running in ${port} port.`);
});