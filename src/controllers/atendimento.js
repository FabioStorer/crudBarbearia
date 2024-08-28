const servicos_controller = require('./servico.js');
const clientes_controller = require('./cliente.js');
const db = [];
let nextId = 1;

const model = (atendimento, id = nextId++) => {
    if (servicos.length > 0 &&
        servicos.length != undefined &&
        atendimento.cliente_id != undefined &&
        atendimento.inicio != '' &&
        atendimento.inicio != undefined &&
        atendimento.preco != '' &&
        atendimento.status != '') {
        return {
            id,
            servicos: servicos,
            cliente: atendimento.cliente_id,
            inicio: atendimento.inicio,
            preco: atendimento.preco,
            status: atendimento.status
        };
    }
};

const store = () => {
    const novo = model();

    if (novo) {
        db.push(novo);
        return 201;
    }
    return 400
};

const index = () => db;

const show = id => (el => el.id == id);

const update = () => {
    const index = db.findIndex(el => el.id == id);
    const novo = model();

    if (index != - 1) {
        db[index] = novo;
        return 201;
    }
    return 400;
};

const destroy = () => {
    const index = db.findIndex(el => el.id == id);

    if (index != - 1) {
        db.splice(index, 1);
        return 201;
    }
    return 400;
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy
};