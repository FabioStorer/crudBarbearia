const db = [];
let nextId = 1;

const model = (barbeiro, id = nextId++) => {

    if (barbeiro.nome != '' &&
        barbeiro.nome != undefined &&
        barbeiro.foto != '' &&
        barbeiro.bio != '' &&
        barbeiro.bio != undefined) {
        return {
            id,
            nome: barbeiro.nome,
            foto: barbeiro.foto,
            bio: barbeiro.bio
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