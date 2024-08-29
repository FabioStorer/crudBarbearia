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

module.exports = model;