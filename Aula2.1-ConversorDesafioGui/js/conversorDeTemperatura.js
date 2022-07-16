//Desafio Guilhermer: Conversor de temperatura
// ---

//Valor base
var celcius = 1                //c
//Taxas de Conversão Base
var kelvin = celcius*274.15    //k
var fahrenheit = celcius*33.8  //f

var taxaConversaoBase
var taxaConversaoFinal

// Operações
var valorInicial = 50
var medidaEntrada = "k"
var medidaSaida = "f"
var valorEntrada = (valorInicial + medidaEntrada)
var baseCalculo
var valorFinal
var valorSaida


//Conversão para celcius
if(medidaEntrada == "c"){
baseCalculo = valorInicial}
else{
    if(medidaEntrada == "k"){
      taxaConversaoBase = kelvin}
    if(medidaEntrada == "f"){
      taxaConversaoBase = fahrenheit}
baseCalculo = valorInicial*taxaConversaoBase //o valor em celcius
}

//Conversão de celcius
if(medidaSaida == "c"){
baseCalculo = valorFinal
}
else{  
    if(medidaSaida == "k"){
      taxaConversaoFinal = kelvin}
    if(medidaSaida == "f"){
      taxaConversaoFinal = fahrenheit}
valorFinal = baseCalculo*taxaConversaoFinal //o valor convertido
}
  
valorSaida = (valorFinal + medidaSaida) //resultado final

console.log(valorSaida)