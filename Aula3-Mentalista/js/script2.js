var numeroSecreto = parseInt(Math.random() * 11); //Este trecho não está declarado na função, então irá ser executado apenas uma vez, até que o cache seja eliminado.
let tentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (tentativas > 0) {   
   if (chute < 0 || chute > 10 || isNaN(chute)) {
    clearField();
    elementoResultado.innerHTML = "<p class='resultado-final'>Digite um número entre 0 e 10!</p>";
    } 
    else {
      if (chute > numeroSecreto+2) {
        clearField();
        elementoResultado.innerHTML = "<p class='resultado-final'>Er-r-r-rou! O número secreto é: <br> MENOR que o seu chute!</p>";

      } else if (chute < numeroSecreto-2) {
        clearField();
        elementoResultado.innerHTML = "<p class='resultado-final'>Er-r-r-rou!!! O número secreto é: <br> MAIOR que o seu chute!</p>";
        
      } else if (chute >= (numeroSecreto-2) && chute <= (numeroSecreto+2) && chute != numeroSecreto) {
        elementoResultado.innerHTML = "<p class='resultado-final'>Não desista... <br> Você está MUITO perto!!!</p>";
        
      } else if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "<p class='resultado-final'>PARABÉNS!!! Você acertou!</p>";

      } //
      tentativas--;
    } // Fim do if principal
  } // Tentativa
  else if (tentativas == 0 && chute == numeroSecreto) {
    elementoResultado.innerHTML = "<p class='resultado-final'>Suas tentativas acabaram, mas PARABÉNS vocês ACERTOU. O número secreto é: " + numeroSecreto + "!</p>";
  } // Último chute certo
  else {
     elementoResultado.innerHTML = "<p class='resultado-final'>Suas tentativas acabaram. O número secreto é: " + numeroSecreto + "!</p>";
  } // Útimo chute errado
  
} // Fim da Function Chutar()

function clearField() {
  document.getElementById("valor").value = '';
  
}
