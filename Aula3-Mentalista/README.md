## AULA 03 - MENTALISTA
---

Na terceira aula da Imersão Dev, vamos criar uma jogo de adivinhação, onde o programa escolhe um número aleatório e nós vamos tentar acertar.

## Conteúdo detalhado desta aula:

- Realizar o fork do projeto com template inicial;
- Fazer testes utilizando console.log();
- Criar a lógica por trás do "chute" com if, else if e else;
- Utilizar a função Math.random() do JavaScript para gerar números aleatórios.


--- 

## Notas sobre conseitos e observações:

**parseInt() -** semelhante ao _parseFloat_, porém com o objetivo de definir números inteiros.

_Ex:_
~~~javascript
parseInt(document.getElementById("").value)
~~~


---

**estruturas condicionais -** estruturas que criam condições para execução de ações baseado em condições. Para isso utlizamos operadores condicionais, para comparação

**-** _if:_ literalmente **se**. A ação só irá ser executada _se_ uma condição for executada.
Sintaxe: ```if (condição){o que será executado caso a condição for atendida}```

**-** _else if:_ algo como _senão se_. A ação só será executada caso a condição do _if_ não for atendida e a condição do condicional for executada.
Sintaxe: ```else if (condição){o que será executado se a condição for atendida, caso a condição do if não for executada}```

**-** _else:_ literalmente _senão_. É executado caso nenhum outro condicional for atendido.
Sintaxe: ```else {o que será executado caso as condições não forem atendida}```

**-** _operadores:_ comparam e relacionam as condições declaradas. Podem ser representados por ```==```para igualdade ampla, ```===```para igualdade restrita, ```>```para maior que, ```<```para menor que. Existem muitos outros podendo ser conhecidos no link a baixo.

_Ex:_
~~~javascript
if (chute == numeroSecreto) {
  elementoResultado.innerHTML = "PARABÉNS!!! Você acertou!";
} else if (chute > 10 || chute < 0) {
  elementoResultado.innerHTML = "Digite um número de 0 a 10!";
} else {
  elementoResultado.innerHTML = "Er-r-r-rou!!!";
}
~~~

Para mais sobre e mais exemplosde operadores, [clique aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators). 


---

**Math.random() -** gera números, inteiros, aleatórios maiores que 0 e menores do que 1. Para a geração de números aleatórios maiores que 0, multiplicamos a operação por um número. O resultado será um número maior que zero e menor que o número -1. Se for multiplicado por 11, será gerado um número de 0 a 10. 

_Ex:_
~~~javascript
var numeroSecreto = parseInt(Math.random() * 11);
~~~


---

**Igualdade estrita -** representado por 3 sinais de igual ```===```.

_Ex:_
~~~javascript
var num = 0;
var obj = new String("0");
var str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
~~~

"Igualdade estrita compara dois valores para a igualdade. Nenhum valor é convertido implicitamente para algum outro valor antes de serem comparados. Se os valores tem tipos diferentes, os valores são considerados não-iguais. Caso contrário, se os valores têm o mesmo tipo e não são números, eles são considerados iguais, se tiverem o mesmo valor. Finalmente, se ambos os valores são números, eles são considerados iguais se ambos não são ```NaN``` e são do mesmo valor, ou se um é ```+0``` e outro é ```-0```."

>Para mais sobre igualdade estrita, [clique aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness).


---

Para saber mais sobre os assuntos tratados nesta aula e para realizar os desafios acesse:

[MDN Web Docs] https://developer.mozilla.org/pt-BR/
[Stack Overflow] https://pt.stackoverflow.com


---

## DESAFIOS

>Os desafios criados pelo Paulo Silveira, pela Rafa Ballerini e pelo Gui Lima, para o projeto desta aula, são bem desafiadores, mesmo que simples. Mesmo que trivíais podem conter, ou não, conteúdos ainda não estutados até o momento da aula, sendo assim, necessário mais pesquisas, estudos, paciência e empenho.

- **Desafio Ballerini:** Número de tentativas. ✔️
- **Desafio Paulo:** Dar dicas. ✔️
- **Desafio Gui:** Pesquisasr condições.✔️
- **Desafio bônus - Paulo:** Escutar Scuba Ponto Dev. ✔️

[Codepen - Aula 03: Mentalista](https://codepen.io/lannyer/pen/gOGJXBe?editors=0010) | [Repositório no GitHub](https://github.com/Lannyer/imersaodev3/tree/master/Aula3-Mentalista) | [Veja a página funcional aqui.]()