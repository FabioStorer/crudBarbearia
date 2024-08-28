const barbeiros_controller = require('./barbeiro.js');
const db = [];
let nextId = 1;

const model = (servico, id = nextId++) => {
    if (servico.nome != '' &&
        servico.nome != undefined &&
        servico.preco != '' &&
        servico.duracao != '') {
        return {
            id,
            nome: servico.nome,
            preco: servico.preco,
            duracao: servico.duracao
        };
    }
};

const store = () => {
    const novo = model();

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
    const novo = model();

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