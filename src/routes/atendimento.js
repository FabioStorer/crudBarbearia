const atendimento_controller = require('../controllers/atendimento.js');
const express = require('express');
const router = express.Router();

/// GERENCIAMENTO DO ATENDIMENTO ///

router.post('/atendimento', (req, res) => {
    const code = atendimento_controller.store(req.body);
    res.status(code).json();
});

router.get('/atendimento', (req, res) => {
    const atendimento = atendimento_controller.index();
    res.json(atendimento);
});

router.get('/atendimento/:id', (req, res) => {
    const atendimento = atendimento_controller.show(req.params.id);
    res.json(atendimento);
});

router.put('/atendimento/:id', (req, res) => {
    const code = atendimento_controller.update(req.params.id, req.body);
    res.status(code).json();
});

router.delete('/atendimento/:id', (req, res) => {
    atendimento_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;