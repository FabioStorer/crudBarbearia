const barbeiro_controller = require('../controllers/barbeiro.js');
const express = require('express');
const router = express.Router();

/// GERENCIAMENTO DO BARBEIRO ///

router.post('/barbeiro', (req, res) => {
    const code = barbeiro_controller.store(req.body);
    res.status(code).json();
});

router.get('/barbeiro', (req, res) => {
    const barbeiro = barbeiro_controller.index();
    res.json(barbeiro);
});

router.get('/barbeiro/:id', (req, res) => {
    const barbeiro = barbeiro_controller.show(req.params.id);
    res.json(barbeiro);
});

router.put('/barbeiro/:id', (req, res) => {
    const code = barbeiro_controller.update(req.params.id, req.body);
    res.status(code).json();
});

router.delete('/barbeiro/:id', (req, res) => {
    barbeiro_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;