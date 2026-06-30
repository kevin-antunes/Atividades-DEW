const autores = "Machado de Assis,Clarice Lispector,Monteiro Lobato";
const autorBuscado = "Clarice Lispector"; 
 
const listaAutores = autores.split(",");
 
function exibirAutores(lista) {
  console.log("=== Lista de Autores ===");
  lista.forEach((autor) => console.log(autor));
}
 
function verificarAutor(lista, nome) {
  const encontrado = lista.includes(nome);
  console.log("\n=== Verificação de Autor ===");
  console.log(encontrado ? "Autor encontrado" : "Autor não encontrado");
}
 
function criarFicha(titulo, autor) {
  return ` Título: "${titulo}" |  Autor: ${autor}`;
}
 
function exibirListaFormatada(lista) {
  console.log("\n=== Lista com join() ===");
  console.log(lista.join(" | "));
}
 
 
exibirAutores(listaAutores);
verificarAutor(listaAutores, autorBuscado);
 
const ficha = criarFicha("Dom Casmurro", "Machado de Assis");
console.log("\n=== Ficha do Livro ===");
console.log(ficha);
 
exibirListaFormatada(listaAutores);
 
 
console.log("\n\n===== TESTE COM ENTRADA 2 =====");
 
const autores2 = "J. K. Rowling,J. R. R. Tolkien";
const autorBuscado2 = "Machado de Assis"; 
 
const listaAutores2 = autores2.split(",");
 
exibirAutores(listaAutores2);
verificarAutor(listaAutores2, autorBuscado2);
 
const ficha2 = criarFicha("Harry Potter", "J. K. Rowling");
console.log("\n=== Ficha do Livro ===");
console.log(ficha2);
 
exibirListaFormatada(listaAutores2);