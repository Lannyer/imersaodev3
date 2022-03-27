// Desafio Paulo: Realisar cálculo direto na impressão.

console.error("::::: DESAFIO DO PAULO SILVEIRA: Realisar o cálculo direto na impressão. :::::")

var nomeAluno = "Elliot"
var nota01Bimestre = 99.7
var nota02Bimestre = 83.7
var nota03Bimestre = 97.3
var nota04Bimestre = 87.8

console.log("Hello, " + nomeAluno + "!")

console.log("Suas notas neste bimestre foram - " + "1º Bimestre: " + nota01Bimestre + " | 2º Bimestre: " + nota02Bimestre + " | 3º Bimestre: " + nota03Bimestre + " | 4º Bimestre: " + nota04Bimestre + ".")

console.log("Sua nota final é: " + parseInt((nota01Bimestre+nota02Bimestre+nota03Bimestre+nota04Bimestre)/4)+ ".")

console.log("::::: FIM DO DESAFIO :::::")

//Desafio Guilherme: Realizar cálculo de uma forma diferente.

console.error("::::: DESAFIO DO GUI LIMA: Realizar cálculo de uma forma diferente do projeto da aula. :::::")

var aluno = "Anderson"
var anoLetivo = "trimestre"
var notaTrim1 = 98.1
var notaTrim2 = 97.3
var notaTrim3 = 93.7

if (anoLetivo == "trimestre") {
  var escopo = 3
}

var notaMontante = notaTrim1+notaTrim2+notaTrim3

var notaDefinitiva = notaMontante/escopo 
var notaDefinitiva = notaDefinitiva.toFixed(1)

if (notaDefinitiva <= 99.1) {
  var sentimento = "decepcionante..."
} else if (notaDefinitiva <= 99.9) {
  var sentimento = "ao menos, aceitável."
} else {
  sentimento = "imprecionante!"
}

console.log("Mr." + aluno + "... Suas notas este ano letivo foram - " + "1º Trimestre: " + notaTrim1 + " | 2º Bimestre: " + notaTrim2 + " | 3º Bimestre: " + notaTrim3 + ".")

console.log ("... e sua nota final, foi: " + notaDefinitiva + ". e isto é... " + sentimento + "!")

console.log("::::: FIM DO DESAFIO :::::")
