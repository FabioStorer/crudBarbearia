const express = require('express');
const endereco = require('./controllers/middlewares/endereco.js');
const atendimento_controller = require('./controllers/atendimento.js');
const barbeiro_controller = require('./controllers/barbeiro.js');
const cliente_controller = require('./controllers/cliente.js');
const rede_controller = require('./controllers/rede.js');
const servico_controller = require('./controllers/rede.js');
const usuario_controller = require('./controllers/usuario.js');
const app = express();
const port = 3000;

app.use(express.json());
// app.use(endereco);

app.post('/barbearia', endereco, (req, res) => {
    res.json(req.body);
});

/// GERENCIAMENTO DO ATENDIMENTO ///

app.post('/atendimento', (req, res) => {
    const atendimento = req.body;
    const code = atendimento_controller.store(atendimento);
    res.status(code).json();
});

app.get('/atendimento', (req, res) => {
    const atendimento = atendimento_controller.index();
    res.json(atendimento);
});

app.get('/atendimento/:id', (req, res) => {
    const atendimento = atendimento_controller.show(req.params.id);
    res.json(atendimento);
});

app.put('/atendimento/:id', (req, res) => {
    const atendimento = req.body;
    const code = atendimento_controller.update(req.params.id, atendimento);
    res.status(code).json();
});

app.delete('/atendimento/:id', (req, res) => {
    atendimento_controller.destroy(req.params.id);
    res.json();
});

/// GERENCIAMENTO DO BARBEIRO ///

app.post('/barbeiro', (req, res) => {
    const barbeiro = req.body;
    const code = barbeiro_controller.store(barbeiro);
    res.status(code).json();
});

app.get('/barbeiro', (req, res) => {
    const barbeiro = barbeiro_controller.index();
    res.json(barbeiro);
});

app.get('/barbeiro/:id', (req, res) => {
    const barbeiro = barbeiro_controller.show(req.params.id);
    res.json(barbeiro);
});

app.put('/barbeiro/:id', (req, res) => {
    const barbeir0 = req.body;
    const code = barbeiro_controller.update(req.params.id, barbeir0);
    res.status(code).json();
});

app.delete('/barbeiro/:id', (req, res) => {
    barbeiro_controller.destroy(req.params.id);
    res.json();
});

///GERENCIAMENTO DO CLIENTE ///

app.post('/cliente', (req, res) => {
    const cliente = req.body;
    const code = cliente_controller.store(cliente);
    res.status(code).json();
});

app.get('/cliente', (req, res) => {
    const cliente = cliente_controller.index();
    res.json(cliente);
});

app.get('/cliente/:id', (req, res) => {
    const cliente = cliente_controller.show(req.params.id);
    res.json(cliente);
});

app.put('/cliente/:id', (req, res) => {
    const cliente = req.body;
    const code = cliente_controller.update(req.params.id, cliente);
    res.status(code).json();
});

app.delete('/cliente/:id', (req, res) => {
    cliente_controller.destroy(req.params.id);
    res.json();
});

/// GERENCIAMENTO DA REDE ///

app.post('/rede', (req, res) => {
    const rede = req.body;
    const code = rede_controller.store(rede);
    res.status(code).json();
});

app.get('/rede', (req, res) => {
    const rede = rede_controller.index();
    res.json(rede);
});

app.get('/rede/:id', (req, res) => {
    const rede = rede_controller.show(req.params.id);
    res.json(rede);
});

app.put('/rede/:id', (req, res) => {
    const rede = req.body;
    const code = rede_controller.update(req.params.id, rede);
    res.status(code).json();
});

app.delete('/rede/:id', (req, res) => {
    rede_controller.destroy(req.params.id);
    res.json();
});

/// GERENCIAMENTO DE SERVIÇO ///

app.post('/servico', (req, res) => {
    const servico = req.body;
    const code = servico_controller.store(servico);
    res.status(code).json();
});

app.get('/servico', (req, res) => {
    const servico = servico_controller.index();
    res.json(servico);
});

app.get('/servico/:id', (req, res) => {
    const servico = servico_controller.show(req.params.id);
    res.json(servico);
});

app.put('/servico/:id', (req, res) => {
    const servico = req.body;
    const code = servico_controller.update(req.params.id, servico);
    res.status(code).json();
});

app.delete('/servico/:id', (req, res) => {
    servico_controller.destroy(req.params.id);
    res.json();
});

/// GERENCIAMENTO DE USUÁRIO ///

app.post('/usuario', (req, res) => {
    const usuario = req.body;
    const code = usuario_controller.store(usuario);
    res.status(code).json();
});

app.get('/usuario', (req, res) => {
    const usuario = usuario_controller.index();
    res.json(usuario);
});

app.get('/usuario/:id', (req, res) => {
    const usuario = usuario_controller.show(req.params.id);
    res.json(usuario);
});

app.put('/usuario/:id', (req, res) => {
    const usuario = req.body;
    const code = usuario_controller.update(req.params.id, usuario);
    res.status(code).json();
});

app.delete('/usuario/:id', (req, res) => {
    usuario_controller.destroy(req.params.id);
    res.json();
});

/// LISTEN ///

app.listen(port, () => {
    console.log(`Server running in ${port} port.`);
});