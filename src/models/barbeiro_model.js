let nextId = 1;

const model = (barbeiro, id = nextId++) => {

    if (barbeiro.nome != '' &&
        barbeiro.nome != undefined &&
        barbeiro.foto != '' &&
        barbeiro.foto != undefined &&
        barbeiro.bio != '' &&
        barbeiro.bio != undefined &&
        barbearia_controller.show(body.barbearia_id)) {
        return {
            id,
            nome: barbeiro.nome,
            foto: barbeiro.foto,
            bio: barbeiro.bio,
            barbearia_id: body.barbearia_id
        };
    }
};

module.exports = model;