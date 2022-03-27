// Array == listas - obejo global usado na construção de listas
var listaFilmes = [
  "Gigante de Ferro",
  " Homem-Aranha - No Aranhaverso",
  " Star Wars - Episódio 05: O Império Contra Ataca"
];
// O índice inicial de uma lista é sempre 0

listaFilmes.push("Demon Slayer");
listaFilmes.push("De Volta Para o Futuro");
listaFilmes.push("Alien");
listaFilmes.push("Terminator");
listaFilmes.push("Loucademia de Polícia");

console.log(listaFilmes.length);

//Iterar - Pesquisar
//  valor inicial       condição                 expressão final
for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<li>" + listaFilmes[indice] + ";</li>");
}