// declaracao de variaveis
let nome;
let disciplina = null;
let texto = "Este é um exemplo";
console.log(texto)
// document.write(texto)

// tipos de dados

// numeros
let idadeAluno = 18;
console.log(idadeAluno)

// float
let valorProduto = 5.35
console.log(valorProduto)

// booleano
let casada = false
console.log(casada)

// listas (array)
let linguagens = ["Java", "JS", "Python", 1, true, 4.56]
console.log(linguagens)

// objetos
let carro = {
    cor: "vermelho",
    numPortas: 4,
    tipo: "sedan",
    modelo: "Onix",
    marca: "GM",
    correr: function(){
        alert("estou correndo!")
    }
}
console.log(carro)
console.log(carro.cor)
console.log(carro.correr())