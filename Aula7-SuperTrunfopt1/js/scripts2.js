var carta1 = {
  nome: "Bulbassauro",
  atributos: {
    ATAQUE: 7,
    DEFESA: 8,
    MAGIA: 6
  }
};
var carta2 = {
  nome: "Darth Vader",
  atributos: {
    ATAQUE: 9,
    DEFESA: 8,
    MAGIA: 2
  }
};
var carta3 = {
  nome: "Shiryu de Dragão",
  atributos: {
    ATAQUE: 5,
    DEFESA: 9,
    MAGIA: 10
  }
};
var carta4 = {
  nome: "Dalek",
  atributos: {
    ATAQUE: 105,
    DEFESA: 190,
    MAGIA: 10
  }
};
var carta5 = {
  nome: "Pé de Manga",
  atributos: {
    ATAQUE: 1500,
    DEFESA: 1900,
    MAGIA: 11000
  }
};
var carta6 = {
  nome: "Goku",
  atributos: {
    ATAQUE: 8001,
    DEFESA: 1090,
    MAGIA: 1050
  }
};
var carta7 = {
  nome: "Rochelle",
  atributos: {
    ATAQUE: 1200,
    DEFESA: 1500,
    MAGIA: 10000
  }
};
var carta8 = {
  nome: "Michael Schot",
  atributos: {
    ATAQUE: 1.5,
    DEFESA: 1.9,
    MAGIA: 1.10
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
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
    opcoesTexto += "<input type='radio'  id='" + atributo + "Label' name='atributo' value='" + atributo + "'><label for='" + atributo + "Label'>" + atributo + "</input></label>";
        
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
