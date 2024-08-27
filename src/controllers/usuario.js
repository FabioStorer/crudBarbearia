const db = [];
let nextId = 1;

const model = (usuario, id = nextId++) => {
    if (usuario.email != '' &&
        usuario.email != undefined &&
        usuario.senha === 'abc123') {
        return {
            id,
            email: usuario.email,
            senha: usuario.senha,
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
    const index = db.find(el => db.id == id);
    const novo = model();

    if (novo) {
        db[index] = novo;
        return 201;
    }
    return 400;
};

const destroy = () => {
    const index = db.find(el => el.id == id);

    if (index != -1) {
        db.splice(index, 1);
        return 201;
    }
    return 400;
};