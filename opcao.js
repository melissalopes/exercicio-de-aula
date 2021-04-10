 let opcao = {
    Mais: (a, b) => {
        return (a + b)
    },
    Menos: (a, b) => {
        return (a - b)
    },
    Multiplicacao: (a, b) => {
        return (a * b)
    },
    Divisao: (a, b) => {
        return (a / b)
    },
    Resto: (a, b) => {
        return (a % b)
    }
}

module.exports = opcao;