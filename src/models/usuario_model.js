let nextId = 1;

const model = (usuario, id = nextId++) => {
    if (usuario.email != '' &&
        usuario.email != undefined &&
        usuario.senha != '') {
        return {
            id,
            email: usuario.email,
            senha: usuario.senha
        };
    }
};

module.exports = model;