function calculaMedia() {

	let nomeAluno = document.getElementById("nomeAluno").value;
	let primeiroBimestre = document.getElementById("primeiroBimestre").value;
	let segundoBimestre = document.getElementById("segundoBimestre").value;
	let terceiroBimestre = document.getElementById("terceiroBimestre").value;
	let quartoBimestre = document.getElementById("quartoBimestre").value;
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
		
	elementoResultado.innerHTML = "<p class='resultado-final'>A nota final de Alune é: " + notaFixada + "! <br>Elu está: " + status + "</p>";
	
} // Fim da function calculaMedia
