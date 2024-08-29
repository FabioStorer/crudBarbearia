let nextId = 1;

const model = (body, id = nextId++) => {

    if (body.nome != '' &&
        body.nome != undefined &&
        body.foto != undefined &&
        Array.isArray(body.fotos) &&
        body.foto.every(foto => foto != '') &&
        rede_controller.show(body.rede_id)) {
        return {
            id,
            nome: body.nome,
            fotos: body.fotos,
            endereco: req.body.endereco,
            rede_id: body.rede_id
        };
    }
};

module.exports = model;