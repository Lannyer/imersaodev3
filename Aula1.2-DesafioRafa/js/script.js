// Desafio bônus Ballerini - Aula 01: Conversor de medidas
// ---

//Valor base
var metro = 1                //m
//Taxas de Conversão Base
var milimetro = metro/1000   //mm
var centimetro = metro/100   //cm
var decimetro = metro/10     //dm
var decametro = metro*10     //dam
var hecometro = metro*100    //hm
var kilometro = metro*1000   //km
//var polegadas              //in
//var pes                    //ft
//var jardas                 //yd
//var milhas                 //mi
var taxaConversaoBase
var taxaConversaoFinal

// Operações
var valorInicial = 50
var medidaEntrada = "mm"
var medidaSaida = "dm"
var valorEntrada = (valorInicial + medidaEntrada)
var baseCalculo
var valorFinal
var valorSaida


//Conversão para metros
if(medidaEntrada == "m"){
baseCalculo = valorInicial}
else{
    if(medidaEntrada == "mm"){
      taxaConversaoBase = milimetro}
    if(medidaEntrada == "cm"){
      taxaConversaoBase = centimetro}
    if(medidaEntrada == "dm"){
      taxaConversaoBase = decimetro}
    if(medidaEntrada == "dam"){
      taxaConversaoBase = decametro}
    if(medidaEntrada == "hm"){
      taxaConversaoBase = hecometro}
    if(medidaEntrada == "km"){
      taxaConversaoBase = kilometro}
baseCalculo = valorInicial*taxaConversaoBase //o valor em metros
}

//Conversão de metros
if(medidaSaida == "m"){
baseCalculo = valorFinal
}
else{  
    if(medidaSaida == "mm"){
      taxaConversaoFinal = milimetro}
    if(medidaSaida == "cm"){
      taxaConversaoFinal = centimetro}
    if(medidaSaida == "dm"){
      taxaConversaoFinal = decimetro}
    if(medidaSaida == "dam"){
      taxaConversaoFinal = decametro}
    if(medidaSaida == "hm"){
      taxaConversaoFinal = hecometro}
    if(medidaSaida == "km"){
      taxaConversaoFinal = kilometro}
valorFinal = baseCalculo*taxaConversaoFinal //o valor convertido
}
  
valorSaida = (valorFinal + medidaSaida) //resultado final

console.log(valorSaida)