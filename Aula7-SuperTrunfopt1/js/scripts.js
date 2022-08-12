var carta1 = {
  nome: "Árvore",
  atributos: {
    ataque: 1000001,
    defesa: 1000001,
    existe: 1
  }
};
var carta2 = {
  nome: "Darth Vader",
  atributos: {
    ataque: 90,
    defesa: 80,
    existe: 0
  }
};
var carta3 = {
  nome: "Shiryu de dragão",
  atributos: {
    ataque: 50,
    defesa: 90,
    existe: 0
  }
};
var carta4 = {
  nome: "Bulbasauro",
  atributos: {
    ataque: 70,
    defesa: 80,
    existe: 0
  }
};
var carta5 = {
  nome: "Goku",
  atributos: {
    ataque: 9000,
    defesa: 8000,
    existe: 0
  }
};
var carta6 = {
  nome: "Tanjiro Kamado",
  atributos: {
    ataque: 70,
    defesa: 50,
    existe: 0
  }
};
var carta7 = {
  nome: "Dr. Manhatan",
  atributos: {
    ataque: 50000,
    defesa: 50000,
    existe: 0
  }
};
var carta8 = {
  nome: "Sandman",
  atributos: {
    ataque: 99999,
    defesa: 99999,
    existe: 0
  }
};
var carta9 = {
  nome: "Jonh Rambo",
  atributos: {
    ataque: 90,
    defesa: 80,
    existe: 0
  }
};
var carta10 = {
  nome: "Seu Pai",
  atributos: {
    ataque: 1000002,
    defesa: 1000000,
    existe: 1
  }
};
var carta11 = {
  nome: "Um Gato",
  atributos: {
    ataque: 1000020,
    defesa: 1000020,
    existe: 0
  }
};
var carta12 = {
  nome: "Darkwing Duck",
  atributos: {
    ataque: 90,
    defesa: 50,
    existe: 0
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 12);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 12);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 12);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior";
  } else {
    elementoResultado.innerHTML = "Empatou";
  }
  console.log(cartaMaquina);
}
