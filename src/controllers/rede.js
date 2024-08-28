const controller_usuario = require('./usuario.js');
const db = [];
let nextId = 1;

const model = (rede, id = nextId++) => {
    if (rede.nome != '' &&
        rede.nome != undefined &&
        rede.usuario_id != undefined &&
        controller_usuario.show(usuario.rede_id)) {
        return {
            id,
            nome: rede.nome,
            usuario_id: rede.usuario_id
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

    if (index != -1) {
        db[index] = novo;
        return 201;
    }
    return 400;
};

const destroy = (id) => {
    const index = findIndex(el => el.id == id);

    if (index != -1) {
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