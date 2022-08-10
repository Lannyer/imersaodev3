var listaFilmesAntigo = [ "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg", "http://pdposter.weebly.com/uploads/1/1/4/1/11413024/4402549_orig.jpg", "https://g4carros.com.br/wp-content/uploads/2022/03/ARCANE-Ato-3-Netflix-divulga-trailer-da-serie-animada-baseada-no-game-LEAGUE-OF-LEGENDS-poster.jpg", "https://br.web.img3.acsta.net/pictures/22/02/02/11/57/3889555.jpg", "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg" ];

for (var i = 0; i < listaFilmesAntigo.length; i++) {
  document.write("<img class='filme' src=" + listaFilmesAntigo[i] + ">");
}

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg" || ".JPG" || ".png" || ".PNG")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error("Endereço de filme inválido!");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  console.log(filme);
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}