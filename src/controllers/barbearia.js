const rede_controller = require('./rede.js');
const db = [];
let nextId = 1;

const model = (barbearia, id = nextId++) => {

    if (barbearia.nome != '' &&
        barbearia.nome != undefined &&
        barbearia.foto != '' &&
        barbearia.endereco != undefined &&
        barbearia.rede_id != undefined &&
        rede_controller.show(barbearia.rede_id)) {
        return {
            id,
            nome: barbearia.nome,
            endereco: barbearia.endereco,
            foto: barbearia.foto,
            rede_id: barbearia.rede_id
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
    const novo = model(id, body);

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
    return 400
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy
};