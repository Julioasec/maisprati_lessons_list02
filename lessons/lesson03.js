class Produto{
    constructor(prop1, prop2, prop3, prop4, prop5){
        this.prop1 = prop1
        this.prop2 = prop2
        this.prop3 = prop3
        this.prop4 = prop4
        this.prop5 = prop5
    }
}

//  altere o valor da variável pra um resultado personalizado 
let valorBase = 10

// altere o valor das parâmetros para resultado personalizado
let produto = new Produto(22, 14, 2, 5, 9);
let novoProduto = {}

for (const param in produto) {
    if(produto[param] > valorBase ){
        novoProduto[param] = produto[param]   
        
    }   
}

console.log("Valor base: " + valorBase);

for (const param in novoProduto) {
      console.log( "Propriedade: " + param);
      console.log("Valor: " + novoProduto[param]);
      
      
}