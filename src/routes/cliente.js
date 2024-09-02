const cliente_controller = require('../controllers/cliente.js');
const express = require('express');
const router = express.Router();

///GERENCIAMENTO DO CLIENTE ///

router.post('/cliente', (req, res) => {
    const code = cliente_controller.store(req.body);
    res.status(code).json();
});

router.get('/cliente', (req, res) => {
    const cliente = cliente_controller.index();
    res.json(cliente);
});

router.get('/cliente/:id', (req, res) => {
    const cliente = cliente_controller.show(req.params.id);
    res.json(cliente);
});

router.put('/cliente/:id', (req, res) => {
    const code = cliente_controller.update(req.params.id, req.body);
    res.status(code).json();
});

router.delete('/cliente/:id', (req, res) => {
    cliente_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;