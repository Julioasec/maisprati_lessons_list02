class Carro {
    constructor(marca, modelo, ano, cor){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
    }
}


let carro = new Carro("Fusquinha", "BTL-40", 1995, "diamante") 

for (const param in carro) {
    console.log(param + ": " + carro[param]);
}

