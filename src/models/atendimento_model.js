let nextId = 1;

const model = (atendimento, id = nextId++) => {
    if (servicos.length > 0 &&
        servicos.length != undefined &&
        atendimento.cliente_id != undefined &&
        atendimento.inicio != '' &&
        atendimento.inicio != undefined &&
        atendimento.preco != '' &&
        atendimento.status != '') {
        return {
            id,
            servicos: servicos,
            cliente: atendimento.cliente_id,
            inicio: atendimento.inicio,
            preco: atendimento.preco,
            status: atendimento.status
        };
    }
};

module.exports = model;