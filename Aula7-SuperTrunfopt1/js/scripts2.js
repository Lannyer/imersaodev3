var carta1 = {
  nome: "Bulbassauro",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};
var carta2 = {
  nome: "Darth Vader",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};
var carta3 = {
  nome: "Shiryu de Dragão",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
};
var carta4 = {
  nome: "Rochelle",
  atributos: {
    ataque: 15,
    defesa: 19,
    magia: 110
  }
};

var cartas = [carta1, carta2, carta3, carta4];
var cartaMaquina
var cartaJogadore

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 4);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogadore = parseInt(Math.random() * 4);
  while (numeroCartaMaquina == numeroCartaJogadore) {
    numeroCartaJogadore = parseInt(Math.random() * 4);
  }   
  cartaJogadore = cartas[numeroCartaJogadore];
  console.log(cartaJogadore);
    document.getElementById("btnSortear").disabled = true; document.getElementById("btnJogar").disabled = false;
  
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  
  for (var atributo in cartaJogadore.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obetemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < radioAtributos.length; i++){
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obetemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogadore = cartaJogadore.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
  if (valorCartaJogadore > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu!"
  } else if (valorCartaMaquina > valorCartaJogadore) {
    elementoResultado.innerHTML = "Você perdeu!"
  } else {
    elementoResultado.innerHTML = "Empatou!"
    }
  console.log(cartaMaquina);
}
