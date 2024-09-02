const rede_controller = require('../controllers/rede.js');
const express = require('express');
const router = express.Router();

/// GERENCIAMENTO DA REDE ///

router.post('/rede', (req, res) => {
    const code = rede_controller.store(req.body);
    res.status(code).json();
});

router.get('/rede', (req, res) => {
    const rede = rede_controller.index();
    res.json(rede);
});

router.get('/rede/:id', (req, res) => {
    const rede = rede_controller.show(req.params.id);
    res.json(rede);
});

router.put('/rede/:id', (req, res) => {
    const code = rede_controller.update(req.params.id, req.body);
    res.status(code).json();
});

router.delete('/rede/:id', (req, res) => {
    rede_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;