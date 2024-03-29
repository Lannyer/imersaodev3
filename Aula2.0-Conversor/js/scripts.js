function Converter() {
  //ENTRADA DE VALOR
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var selecaoTaxa = document.getElementById("taxaConversao");
  var taxaConversao = selecaoTaxa.value;

  //TAXAS DE CONVERSÃO
  var valorEmDolar = parseFloat(valor); //valor base
  var valorEmReal = parseFloat(valor);
  var taxaDeConversaoReal = 5.52;
  var valorEmEuro = parseFloat(valor);
  var taxaConversaoEuro = 0.88;
  var valorEmBitcoin = parseFloat(valor);
  var taxaConversaoBitcoin = 0.000024;
  var valorEmDogecoin = parseFloat(valor);
  var taxaConversaoDogecoin = 6.13;
  var valorEmUnoMile = parseFloat(valor);
  var taxaConversaoUnoMile = 0.000033;
  var valorEmGolBolinha = parseFloat(valor);
  var taxaConversaoGolBolinha = 0.00008;
  var valorEmBalaJuquinha = parseFloat(valor);
  var taxaConversaoBalaJuquinha = 0.02;

  //CONVERSÃO
  if (taxaConversao == "real") {
    valorEmReal = valorEmDolar * taxaDeConversaoReal;
    var elementoConvertido = document.getElementById("valorConvertido");
    elementoConvertido.innerHTML =
      "<p class='valorConvertido'>O resultado em Real é: R$ " + valorEmReal.toFixed(2) + "!</p>"; //feedback
  }
  if (taxaConversao == "euro") {
    valorEmEuro = valorEmDolar * taxaConversaoEuro;
    elementoConvertido = document.getElementById("valorConvertido");
    valorConvertido = "<p class='valorConvertido'>O resultado em Euro é: € " + valorEmEuro.toFixed(2) + "!</p>";
    elementoConvertido.innerHTML = valorConvertido; //feedback
  }
  if (taxaConversao == "bitcoin") {
    valorEmBitcoin = valorEmDolar * taxaConversaoBitcoin;
    elementoConvertido = document.getElementById("valorConvertido");
    valorConvertido = "<p class='valorConvertido'>O resultado em BitCoin é: BTC " + valorEmBitcoin + "!</p>";
    elementoConvertido.innerHTML = valorConvertido; //feedback
  }
  if (taxaConversao == "dogecoin") {
    valorEmDogecoin = valorEmDolar * taxaConversaoDogecoin;
    elementoConvertido = document.getElementById("valorConvertido");
    valorConvertido =
      "<p class='valorConvertido'>O resultado em Dogecoin é: DOGE " + valorEmDogecoin + "!</p>";
    elementoConvertido.innerHTML = valorConvertido; //feedback
  }
  if (taxaConversao == "unomile") {
    valorEmUnoMile = valorEmDolar * taxaConversaoUnoMile;
    elementoConvertido = document.getElementById("valorConvertido");
    valorConvertido =
      "<p class='valorConvertido'>O resultado em Uno Mile 2010 é: " + valorEmUnoMile.toFixed(6) + " Unos Mile!</p>";
    elementoConvertido.innerHTML = valorConvertido; //feedback
  }
  if (taxaConversao == "golbolinha") {
    valorEmGolBolinha = valorEmDolar * taxaConversaoGolBolinha;
    elementoConvertido = document.getElementById("valorConvertido");
    valorConvertido =
      "<p class='valorConvertido'>O resultado em Gol Bolinha 98 é: " +
      valorEmGolBolinha.toFixed(6) +
      " Gols Bolinha!</p>";
    elementoConvertido.innerHTML = valorConvertido; //feedback
  }
  if (taxaConversao == "balajuquinha") {
    valorEmBalaJuquinha = valorEmDolar / taxaConversaoBalaJuquinha;
    elementoConvertido = document.getElementById("valorConvertido");
    valorConvertido =
      "<p class='valorConvertido'>O resultado em Bala Juquinha é: " +
      valorEmBalaJuquinha.toFixed(6) +
      " Balas Juquinha!</p>";
    elementoConvertido.innerHTML = valorConvertido; //feedback
  }
}
