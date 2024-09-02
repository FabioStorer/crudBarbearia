const servico_model = require('../models/servico_model.js');
const db = [];

const store = (body) => {
    const novo = servico_model(body);

    if (novo) {
        db.push(novo);
        return 201;
    }
    return 400;
};

const index = () => db;

const show = id => db.find(el => el.id == id);

const update = (id, body) => {

    const index = db.findIndex(el => el.id == id);
    const novo = servico_model(body, id);

    if (index != - 1) {
        db[index] = novo;
        return 201;
    }
    return 400;
};

const destroy = (id) => {

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