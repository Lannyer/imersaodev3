function calculaMedia() {

	let nomeAluno = document.getElementById("nomeAluno").value;
	let primeiroBimestre = Number(document.getElementById("primeiroBimestre").value);
	let segundoBimestre = Number(document.getElementById("segundoBimestre").value);
	let terceiroBimestre = Number(document.getElementById("terceiroBimestre").value);
	let quartoBimestre = Number(document.getElementById("quartoBimestre").value);
  var elementoResultado = document.getElementById("media");
	
	if (nomeAluno == "") {
		alert("Insira o nome do aluno!");
	} else if (primeiroBimestre == "") {
			alert("Insira a nota do 1º bimestre!");
	} else if (segundoBimestre == "") {
			alert("Insira a nota do 2º bimestre!");
	} else if (terceiroBimestre == "") {
			alert("Insira a nota do 3º bimestre!");
	} else if (quartoBimestre == "") {
			alert("Insira a nota do 4º bimestre!");
	} else {

	var notaFinal = (primeiroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre)/4;
	var notaFixada = notaFinal.toFixed(2);
	var status;
	
	} // Calculo da media	

	if (notaFixada >= 70) { 
		status = "Aprovade!";
	} // Status Aprovado 
	else {
		status = "Reprovade!";
	} // Status Reprovado
		
	elementoResultado.innerHTML = "<p class='resultado-final'>A nota final de " + nomeAluno + " é: " + notaFixada + "! <br>Elu está: " + status + "</p>";
	
} // Fim da function calculaMedia


// Isso é um comentário.

// ---
//E ATENÇÃO!!! Se liga aí, que agora é hora de REVISÃO!

// Variáveis, string, console.log, toFixed, operações matemáticas básicas, concatenação.


// ---
// DESAFIOS

// Desafio Paulo: Realisar cálculo direto na impressão.
//Desafio Guilherme: Realizar cálculo de uma forma diferente.
// [https://codepen.io/lannyer/pen/oNpbPwN]

// Desafio bônus - Ballerini: conversor de medidas 
// [https://codepen.io/lannyer/pen/yLpeRXm]