AULA 02 - CONVERSOR DE MOEDAS
---

Na segunda aula da Imersão Dev, vamos criar um conversor de moedas, onde você conseguirá transformar em reais um produto que estiver com o preço em dólares!

## Conteúdo detalhado desta aula:

- Interagir com usuário para receber os preços a serem convertidos;
- Criar a lógica para saber como converter;
- Utilizar funções que interagem com a tela;
- Exibir o resultado na tela com innerHTML.


---

### Notas sobre conseitos e observações:

**type="number" -** _type_ é um atributo do elemento ```input```, quando acompanhado do controle _number_ indica que é apenas permitido escrever números naquele campo.

_Ex:_
~~~html
<input type="number" id="valor" size="2" />
~~~
>O elemento ```<input>``` acima possui, também, os elemetos ```id``` e ```size```. 
>Atributo: são informações que usapamos para que a tag se comporte da forma desejada.
>Elemento: entre as Tags é que está o conteúdo do Elemento.
>"O tipo de controle a ser exibido. O tipo padrão é _text_, se este atributo não for especificado. Os valores possíveis podem ser: ´´´number´´´, ´´´button´´´, ´´´checkbox´´´, ´´´date´´´, etc. Veja mais a respeito neste [link](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input). 
>**Atenção:** _Não confunda Tags com Elementos!_
 Veja mais a respeito neste [link](https://tableless.github.io/iniciantes/manual/html/oquetags.html).


---

**id -** é um atributo global define um identificador exclusivo para o elemento. Tem como objetivo identificar o elemento por âncoras quando usamos scripts e CSS.
_Ex:_
~~~html
<h2 id="valorConvertido"></h2>
~~~
>_Atributos Globais_ são atributos comuns a todos elementos HTML.


---

**onclick -** a propriedade ```onclick```é _event handler_ para o processamento de eventos quando se clica com o mouse.

_Ex:_
~~~html
<button type="submit" onclick="Converter()">Converter</button>
~~~

Dentro do elemento ```button``` acima, temos ```Converter()``` entre aspas duplas. Ele está referenciando à função _Converter_ descrita em um script javascript. Veremos logo mais sobre.


---

**evento -** "são ações ou ocorrências que acontecem no sistema que estamos desenvolvendo, no qual este te alerta sobre essas ações para que você possa responder de alguma forma, se desejado." [Ver mais](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)


---

**function -** _function_ é como declaramos uma **função**, que é um bloco de código que executa um procedimento, um conjunto de instruções que executa uma tarefa ou calcula um valor, que realiza uma... função. ~~duuuuuuuh~~

A sintaxe de uma função é a palavra chave _function_, seguido do nome da função, lista de argumentos entre parentese/```()```  e separados por vírgulas, podendo estar vázio, e o bloco de código que realisa a tarefa desejada entre chaves/```{}```.

_Ex:_
~~~javascript
function inputChange() { }
~~~
Segue um exemplo de função.

_Ex:_ 
~~~javascript
let log = document.getElementById('log');

document.onclick = inputChange;

function inputChange(e) {
  log.textContent = `Posição: (${e.clientX}, ${e.clientY})`;
}
~~~
>O script acima descreve um evento ```onclick``` que ira exibir em qual posição, da área definida, que usuário clicou.


---

**parseFloat -** é uma função que analisa um argumento em _string_ e retorna um número de ponto flutuante.
>Ponto flutuante, ou vírgula flutuante, é uma representação númerica utilizada em exibições digitais para mostrar números racionais, podendo ter um número variável de casas decimais.

_Ex:_
~~~javascript
function converter(){
  	var valor = valorElemento.value;
  	var valorEmDolar = parseFloat(valor);
}
~~~
>Na função _converter_, acima, que utiliza a função ```parceFloat()``` define que os valores inseridos na variável ```var valor``` sejam apenas números decimais. para que não se exiba casas decimais demais, é necessário limita-las usando ```to.fixed()```


---

**document.getElementById() -** retorna a referência do elemento através do seu ```id=""```. Sua sintaxe é _case sensitive_, ou seja, diferencia letras maiúsculas de minúsculas, devendo ser respeitada rigidamente para que funcione corretamente. significa, literalmente: "_no documento referenciado, pegar o elemento pelo'id'_"

_Ex:_
~~~html
<input type="number" id="valor" size="2" /><br>
~~~
>Trecho HTML que será referenciado no script

~~~javascript
function converter(){
	var valorElemento = document.getElementById("valor");
  	var valor = valorElemento.value;
}
~~~
>Acima a variável ```var valorElemento``` é atribuída ao elemento cujo _id_ tem o mesmo nome do parâmetro passado entre parêntese e o parâmetro ```"valor"``` é o _id_ de um elemonto no documento HTML.
>No trecho ```var valor = valorElemento.value;```, o _value_ define que só o que for inserido naquele campo, com ```id="valor"```, será utilizado. Caso não fizermos isso, ele irá imprimir todo o elemento referenciado. o ```.value``` pode também, ser colocado diretamente após o ```getElementById()```
_Ex:_
~~~javascript
function Chutar(){
  var chute = document.getElementById("valor").value
}
~~~


---

**innerHTML -** realiza o oposto ao ```document.getElementById()```, leva do script javascript para o documento referenciado.
~~~html
<h2 id="valorConvertido"></h2>
~~~
>Trecho HTML que será referenciado no script

~~~javascript
    var elementoConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Real é: R$ " + valorEmReal + "!";
    elementoConvertido.innerHTML = valorConvertido;
~~~
>No trecho acima, primeiro é declarado a variável que recebera o retorno do ```innerHTML```, onde ele chama o elemento HTML, para definir onde será retornado os valores atribuídos. Em seguida retornar, através da variável ```valorConvertido```, para o HTML o resultado definido na variável ```valorEmReal```.


---

Para saber mais sobre os assuntos tratados nesta aula e para realizar os desafios acesse:

[MDN Web Docs] https://developer.mozilla.org/pt-BR/
[Stack Overflow] https://pt.stackoverflow.com


---

## DESAFIOS

>Os desafios criados pelo Paulo Silveira, pela Rafa Ballerini e pelo Gui Lima, para o projeto desta aula, são bem desafiadores, mesmo que simples. Mesmo que trivíais podem conter, ou não, conteúdos ainda não estutados até o momento da aula, sendo assim, necessário mais pesquisas, estudos, paciência e empenho.

- **Desafio Paulo:** Criar conversor de km para anos luz. ❕
- **Desafio Gui -** Conversor de temperatura. ❕
- **Desafio Ballerini:** Criar novos botões de conversão.✔️
- **Desafio bônus - Paulo 1:** Colocar conversor de BitCoin junto ao conversor de moedas.✔️
- **Desafio bônus - Paulo 2:** usar funções em cada conversão, usando valor de retorno. ❕
- **Desafio bônus - Paulo 3:** Input para escolher a taxa de conversão.✔️

[CodePen - Aula 02: Conversor de moedas](https://codepen.io/lannyer/pen/PoJLLMg?editors=0010) | [Repositório no GitHub](https://github.com/Lannyer/imersaodev3/tree/master/Aula2.0-Conversor) | [Repositório do desafio no GitHub](https://github.com/Lannyer/imersaodev3/tree/master/Aula2.1-ConversorDesafioGui) | [Repositório do desafio no GitHub](https://github.com/Lannyer/imersaodev3/tree/master/Aula2.2-ConversorDesafioPaulo)