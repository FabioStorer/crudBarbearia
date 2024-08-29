let nextId = 1;

const model = (rede, id = nextId++) => {
    if (rede.nome != '' &&
        rede.nome != undefined &&
        usuario_controller.show(rede.usuario_id)) {
        return {
            id,
            nome: rede.nome,
            usuario_id: rede.usuario_id
        };
    }
};

module.exports = model;