class Livro {
    constructor(titulo, autor, anoPublicacao, genero){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.genero = genero
    }
}

let livro = new Livro("Neuromancer", "Willian Gibson", 1984, "Cyberpunk")

for (const param in livro) {
    if(param !== "editora"){
        livro.editora = "Editora Aleph"
    }
}

for (const param in livro) {
    console.log(param + ": " + livro[param]);
    
}