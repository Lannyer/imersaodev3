//           chave valor
var rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var gui = { nome: "Gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var lanny = { nome: "Lanny", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 1.5 + jogador.empates * 1 + jogador.derrotas * -0.5;
  return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo)

var jogadores = [rafa, paulo, gui, lanny];

function exibirJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>"
    elemento += "<td>" + jogadores[i].vitorias + "</td>"
    elemento += "<td>" + jogadores[i].empates + "</td>"
    elemento += "<td>" + jogadores[i].derrotas + "</td>"
    elemento += "<td>" + jogadores[i].pontos + "</td>"
    elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    elemento += "<td><button onClick='adicionarDerrota(" + i +")'>Derrota</button></td>"
    elemento += "</tr>"
  }
  
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = elemento;
}

exibirJogadores(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador);
  exibirJogadores(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadores(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
  exibirJogadores(jogadores);
}
