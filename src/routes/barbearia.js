const barbearia_controller = require('../controllers/barbearia.js');
const endereco = require('../middlewares/endereco.js');
const express = require('express');
const router = express.Router();

/// GERENCIAMENTO DE BARBEARIA ///

router.post('/barbearia', endereco, (req, res) => {
    const code = barbearia_controller.store(req.body);
    res.status(code).json();
});

router.get('/barbearia', (req, res) => {
    res.json(barbearia_controller.index());
});

router.get('/barbearia/:id', (req, res) => {
    res.json(barbearia_controller.show(req.params.id));
});

router.put('/barbearia/:id', endereco, (req, res) => {
    const code = barbearia_controller.update(req.params.id, req.body)
    res.status(code).json();
});

router.delete('/barbearia/:id', (req, res) => {
    barbearia_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;