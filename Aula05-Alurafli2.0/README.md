AULA 05 - ALURAFLIX 2.0: FUNÇÃO
---

Na maior parte das vezes, queremos que a entrada dos nossos dados não seja apenas através do código que desenvolvemos ou pelo console, mas sim na tela. No nosso projeto AluraFlix queremos fazer dessa mesma maneira, e para isso utilizaremos o input.

## Conteúdo detalhado desta aula:

- Sintaxe e criação de funções no JavaScript;
- Integrando funções criadas no JavaScript com o HTML que está sendo exibido na tela;
- Condicionando a execução (ou "chamada") de uma função a um clique em um botão na tela;
- Usando o JavaScript para acessar o que está sendo exibido na tela e pegar valores digitados pelo usuário com getElementById() e .value;
- Passar informações que as funções precisam para funcionar, através dos parâmetros;
- Utilizar o .endsWith() para verificar se um texto termina com determinados caracteres;
- Ver mais um exemplo de reatribuição de variável para "limpar" o texto do campo com "".


--- 

### Notas sobre conseitos e observações:

**getElementById().value -** realiza o mesmo processo do ```getElementById```, porém coletamos apenas o ```value```, ou seja, o valor do elemento referênciado pelo _id_.

_Ex:_
~~~javascript
var filmeFavorito = document.getElementById("filme").value;
~~~

A sintaxe a seguir faz a referência da _tag_ ```<img>```, e seus atributos, à uma variável, que será atribuída à um ```id```.

_Ex:_
~~~javascript
var filmeFavorito = document.getElementById("filme").value;
var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
var elementoListaFilmes = document.getElementById("listaFilmes");
elementoListaFilmes.innerHTML = elementoFilmeFavorito;
~~~ 
>A variável **filmeFavorito**, apresentada neste tópico, está recebendo o ```value``` do campo (HTML) de ```id``` **filme**, enquanto à variàvel **elementoFilmeFavorito**, está coletando esta informação, que no exemplo acima é um endereço url. Com isto, será criado uma _tag HTML_ que será inserida na _div_ de ```id```**listaFilmes**, que por sua vez será inserido no documento HTML através do ```innerHTML```.

A função da sintaxe em questão, é criar uma lista de imagens, porém ao utilizá-la como ela está, as imagens seram sobrepostas, por assim dizer, pois sempre que uma nova imagem for inserida através do HTML ela será atribuída à variável ```elementoFilmeFavorito```, para isso devemos criar uma forma de atribuíção que incremente a lista, semelhando ao recurso ```i++```. Uma forma de realizar essa tarefa é através da sintaxe a seguir.

_Ex:_
~~~javascript
elementoListaFilmes.innerHTML = elementoListaFilmes + elementoFilmeFavorito;
~~~
>com base no **elementoListaFilme** iremos adicionar um novo filme através da adição, como antes mencionado. Esta estrutura irá atribuir uma nova informção, mantendo a informação anterior.

Para limpar o campo, no HTML, após o botão ser clicado, atribuímos o campo à um valor vazio.

_Ex:_
~~~javascript
document.getElementById("filme").value = "" 
~~~


---

**endsWith -** significa, literalmente, _termina com_,  cria uma condição para que a string inserida termine com o que está definido entre aspas, tornando a condição veradeira.

_Ex:_
~~~javascript
if (filmeFavorito.endsWith(".JPG")){...}
~~~
>Se o endereço da imagem inserido não for EXATAMENTE **.JPG**, a condição não será executada.
>Obs¹: o comando é _case Sensitive_ portanto deve-se atentar para a forma da escrita.
>Obs²: como o comando é _case sensitive_, o texto inserido deve ser EXATAMENTE o mesmo da condição. Por exemplo, mesmo que as extensões dos arquivos sejam o msm, haverá uma falha caso estejam escritos de formas diferentes. _Ex:_ **.jpg** é diferente de **.JPG**, assim como ambos, mesmo sendo o formato _jpeg_ são diferentes de **.JPEG/jpeg**. Uma forma de evitar isso, é adicionando outras comparações.
_Ex:_
~~~javascript
if (filmeFavorito.endsWith(".jpg" || ".png" || ".JPG" || ".PNG")){...}
~~~


---

**console.error -** Uma outra forma de dar retorno no console de erros. Irá exibir no console o texto escolhido, destacado em vermelho, como um erro.
_Ex:_
~~~javascript
console.error("Mensagem de erro escolhida");
~~~

Na estrutra condicional anterior, o ```console-error```pode ser usado para expressar no console um erro, caso a condição não seja verdadeira.

_Ex:_
~~~javascript
if (filmeFavorito.endsWith(".jpg" || ".png" || ".JPG" || ".PNG")){...
} else {
console.error("Endereço de filme inválido!");
}
~~~


---

**disparo de evento/callback -** é quando passamos uma função para outra como argumento, usado para completar algum tipo de rotina e/ou ação.

Usamos os parenteses que existem logo após o nome das funcções para enviar e receber variáveis, e outras funções, através deles realizando assim o chamado _callback_.

_Ex:_
~~~javascript
function adicionarFilme() {
	var filmeFavorito = document.getElementById("filme");
	if (filmeFavorito.endsWith(".jpg")) {
		listarFilmesNaTela(filmeFavorito);
	}  
}
function listarFilmesNaTela(filmeFavorito) {
	var elementoFilmeFavorito = "<img src" + filmeFavorito + ">";
}
~~~

No script acima, vemos que a variável **filmeFavorito** é passada como parâmetro da primeira função, ```adicionarFilme()```, para a segunda função, ```listarFilmesNaTela()```. 

_Ex:_
~~~javascript
if (filmeFavorito.endsWith(".jpg")) {
	listarFilmesNaTela(filmeFavorito);
}
~~~

Vemos também que para receber a variável, atribuímos ela através do parentese da segunda função.

_Ex:_
~~~javascript
function listarFilmesNaTela(filmeFavorito);
~~~

**-** _Parâmetro:_ é o nome que se da para a variável que nós declaramos na definição de uma função. No exemplo acima, o parâmetro é **filmeFavorito**.
>Contando que os parâmetros enviados e recebidos sejam os mesmos, não existe necessidade dos nomes serem os mesmos das variáveis que estão sendo eviadas.
_Ex:_
~~~javascript
var filmeFavorito = document.getElementById("filme").value;
if (filmeFavorito.endsWith(".jpg")) {
	listarFilmesNaTela(filmeFavorito);
}
function listarFilmesNaTela(filmeFavorito)
~~~
ou
~~~javascript
var filmeFavorito = document.getElementById("filme").value;
if (filmeFavorito.endsWith(".jpg")) {
	listarFilmesNaTela(filme);
}
function listarFilmesNaTela(filme)
~~~

**-** _Argumento:_ são os parâmetros implícitos que o Javascript atribui quando a função é invocada.

**-** _Escopo global/local:_ escopo é o que define quais dados podem ser acessados em um código. É o local onde as funçoes, objetos e variáveis são declarados.
	**-** _Escopo Global:_ é o escopo geral do código, está fora de qualquer função ou estrutura. Tudo que for declarado neste escopo, será herdado pelas demais funções, objetos e variáveis.
	**-** _Escopo Local:_ é o escopo interno de uma função, portanto, tudo que for declarado dentro dela, estará restrito apenas à ela. Para utilziar variáveis e funções de outros escopos é necessário que as mesmas sejam atribuídas como parâmetro da função.
>Herança a refere-se a habilidade de um objeto acessar métodos e outras propriedades de outro objeto. Um objeto filho, herda funções de um objeto pai, ou seja, as funções mais internas, recebem dados e parâmetros de funções externas de forma hierárquica.

O script a seguir demonstra todas os conceitos acima

_Ex:_
~~~javascript
function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg" || ".png" || ".JPG" || ".PNG")) {
    listarFilmesNaTela(filme);
  } else {
    console.error("Endereço de filme inválido!");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
~~~

**Observações acerca de _Escopo_ -** quando quando declaramos uma variável, sua execução vai depender, principalmente de sua declaração, uma vez que algumas varáveis seram _constantes_, outras serão sempre executadas, indiferente do escopom, e outras só funcionarão dentro do bloco de código (escopo) que foi declarada. 

**-** _hoisting_: é a "elevação" de uma variável para o escopo global. Sempre que uma variável é declarada como ```var```, indiferente de seu escopo, ela é elevada para o ínio do código. Para especificar o escopo que  uma variável pertence, utilziamos as declarações ```var```, ```let```e ```const```.
> Detalhes sobre as declarações de variáveis encontram-se no README.md da primeira aula e [neste artigo](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript?gclid=Cj0KCQjw0PWRBhDKARIsAPKHFGitv_vjtF7_DXl-kcb8u6FSk174YZFuQ7YUU-iktcEDwQbSga3H6V4aAsg2EALw_wcB) da Alura sobre o assunto!



---

Para saber mais sobre os assuntos tratados nesta aula e para realizar os desafios acesse:

[MDN Web Docs] https://developer.mozilla.org/pt-BR/
[Stack Overflow] https://pt.stackoverflow.com


---

## DESAFIOS

>Os desafios criados pelo Paulo Silveira, pela Rafa Ballerini e pelo Gui Lima, para o projeto desta aula, são bem desafiadores, mesmo que simples. Mesmo que trivíais podem conter, ou não, conteúdos ainda não estutados até o momento da aula, sendo assim, necessário mais pesquisas, estudos, paciência e empenho.

**Desafio Ballerini:** Colocar legenda.
**Desafio Gui:** Remover filme.
**Desafio Paulo:** Guardar em lista.
**Desafio bônus - Paulo** No conversor de dólar: usar funções em cada conversão, usando valor de retorno. Input para escolher a taxa de conversão (atualziar usando função).