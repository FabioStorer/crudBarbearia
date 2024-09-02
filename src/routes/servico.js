const servico_controller = require('../controllers/servico.js');
const express = require('express');
const router = express.Router();

/// GERENCIAMENTO DE SERVIÇO ///

router.post('/servico', (req, res) => {
    const code = servico_controller.store(req.body);
    res.status(code).json();
});

router.get('/servico', (req, res) => {
    const servico = servico_controller.index();
    res.json(servico);
});

router.get('/servico/:id', (req, res) => {
    const servico = servico_controller.show(req.params.id);
    res.json(servico);
});

router.put('/servico/:id', (req, res) => {
    const code = servico_controller.update(req.params.id, req.body);
    res.status(code).json();
});

router.delete('/servico/:id', (req, res) => {
    servico_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;