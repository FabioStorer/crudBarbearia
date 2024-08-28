const db = [];
let nextId = 1;

const model = (cliente, id = nextId++) => {

    const telefone = cliente.telefone.replaceAll('-', '').replaceAll('(', '').replaceAll(')', '').replaceAll(' ', '');

    let soNumeros = true

    telefone.split('').forEach(el => {
        if (isNaN(Number(el))) {
            soNumeros = false
        }
    })

    if (cliente.nome != undefined &&
        telefone != undefined &&
        cliente.email != undefined &&
        cliente.nome != '' &&
        cliente.email != '' &&
        cliente.email.includes('@') &&
        telefone != '' &&
        telefone.length >= 11 &&
        telefone.length <= 12 &&
        soNumeros) {
        return {
            id,
            nome: cliente.nome,
            telefone: telefone,
            email: cliente.email,
            senha: cliente.senha
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

const update = (body, id) => {

    const index = db.findIndex(el => el.id == id);

    const novo = model(body, id);

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
    return 400
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy
};