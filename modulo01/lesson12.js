let serie = {
    nome: "the boys",
    genero: "ação, parodia, herois",
    nrTemporada: 4,
    status: " em andamento",
    classificao: 18,
    nrEpisodios: {
        temp1: 10,
        temp2: 10,
        temp3: 50,

    },
    mostraCaracteristicas: function(){
        return `O nome da serie é: ${this.nome} e sua classificação é +${this.classificao}`
    }
}

console.log(serie.mostraCaracteristicas())

let livro = {
    titulo: "O Hobbit",
    autor: "J. R. R. Tolkien",
    year: 1925,
    mostraCaracteristicas: function(){
        return(this.titulo + "foi escrito por " + this.autor)
    }

}
//console.log(livro.mostraCaracteristicas())

let carro = {
    nome:"Herby",
    modelo:"Marea",
    velocidadeMaxima: 350,
    ano: 2005,
    acalerar: function(){
        return "Acelerando com o pé no porão"
    }

}
// console.log(carro)
// console.log(carro.acalerar())