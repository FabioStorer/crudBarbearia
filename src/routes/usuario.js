const usuario_controller = require('../controllers/usuario.js');
const express = require('express');
const router = express.Router();

/// GERENCIAMENTO DE USUÁRIO ///

router.post('/', (req, res) => {
    const code = usuario_controller.store(req.body);
    res.status(code).json();
});

router.get('/', (req, res) => {
    const usuario = usuario_controller.index();
    res.json(usuario);
});

router.get('/:id', (req, res) => {
    const usuario = usuario_controller.show(req.params.id);
    res.json(usuario);
});

router.put('/:id', (req, res) => {
    const code = usuario_controller.update(req.params.id, req.body);
    res.status(code).json();
});

router.delete('/:id', (req, res) => {
    usuario_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;