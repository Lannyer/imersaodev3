AULA 08 - SUPERTRUNFO PT.2: CARTAS DO JOGO
---

Nesta oitava aula da Imersão Dev, vamos evoluir ainda mais nosso Trunfo, focando em exibir as cartas na tela! 

## Conteúdo detalhado desta aula

- Adicionando o campo imagem nos objetos com o caminho da imagem;
- Criar uma função que exibe a carta do jogador após o sorteio das cartas;
- Adicionar a moldura da carta;
- Escrever o resultado na tela após o duelo das cartas informando se o jogador venceu ou perdeu;
- Criar uma função que exibe a carta da máquina;
- Exibir os atributos e pontos da carta da máquina.


---

### Notas sobre conseitos e observações:
>**OBSERVAÇÃO:** Os demais conceitos e anotações relacionados ao projeto desta aula, _Aula 08_, estão no _README.md_ da _Aula 07_, uma vez que o projeto é o mesmo em ambas as aulas!   

**disabled -** é a propriedade que ativa ou desativa um botão através dos parâmetros _true_ e _false_.

_Ex:_
~~~html
<button onclick="sortearCarta()" id="btnSortear">Sortear carta</button>
<button class="button-jogar" type="button" id="btnJogar" onclick="jogar()" disabled="false">Jogar</button>
~~~

~~~javascript
function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
}

function jogar() {
  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = htmlResultado;
  document.getElementById('btnJogar').disabled = true;
 exibirCartaMaquina();
}
~~~~
>No exemplo acima vemos que, na função ```sortearCarta()```, ao ser executada, o botão _Sortear Carta_ é desabilitado e o botão o _Jogar_ é habilitado. E na função ```jogar()``` desabilita o botão jogar após ele ser ativado.
>Como podemos ver, também, no HTML, os botões executam as funções ```sortearCarta()``` e ```jogar()```, atravês do evento ```onclick=""``` e são alteradas através do seus _ids_ com o metodo ```document.getElementById()```.

---

**template string -** uma forma, considerada por muitos, mais simples de criar strings. Permitem expressões embutidas e pode ser usada para criar strings multi-linhas e concatenações. Basicamente falando, é o mesmo que usar as aspas duplas e o sinal de mais. Em resumo...

_Ex:_

Isto,

~~~javascript
divCartaJogador.style.backgroundImage = `url(${cartajogador.imagem})`;
~~~

é o mesmo que isto.

~~~javascript
divCartaJogador.style.backgroundImage = "url(" + cartajogador.imagem + ")";
~~~


---

Para saber mais sobre os assuntos tratados nesta aula e para realizar os desafios acesse:

[MDN Web Docs] https://developer.mozilla.org/pt-BR/
[Stack Overflow] https://pt.stackoverflow.com


---

## DESAFIOS

>Os desafios criados pelo Paulo Silveira, pela Rafa Ballerini e pelo Gui Lima, para o projeto desta aula, são bem desafiadores, mesmo que simples. Mesmo que trivíais podem conter, ou não, conteúdos ainda não estutados até o momento da aula, sendo assim, necessário mais pesquisas, estudos, paciência e empenho.

- **Desafio Paulo:** personalisar estilo. ❗
- **Desafio Gui:** exibir as cartas em uma função. ❗
- **Desafio Ballerini:** criar um baralho. ❗
- **Desafio bônus - Ballerini:** ganhar a carta do adversário. ❗
- **Desafio bônus:** criar botão "Jogar Novamente". ✔️

#### ✔️- Desafio concluído ❗- Desafio postergado para o remake da Imersão

[CodePen - Aula 08: Supertrunfo pt.2](https://codepen.io/lannyer/pen/KKyJdjx) | [Repositório no GitHub](https://github.com/Lannyer/imersaodev3/tree/master/Aula8-SuperTrunfopt2) | [Veja a página funcional aqui.]()