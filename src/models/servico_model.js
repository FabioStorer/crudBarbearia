let nextId = 1;

const model = (servico, id = nextId++) => {
    if (servico.nome != '' &&
        servico.nome != undefined &&
        servico.preco != '' &&
        servico.duracao != '') {
        return {
            id,
            nome: servico.nome,
            preco: servico.preco,
            duracao: servico.duracao
        };
    }
};

module.exports = model;