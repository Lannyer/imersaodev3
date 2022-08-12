AULA 09 - CERTIFICARD: FIGMA, HTML & CSS
---

Nesta nona aula da Imersão Dev, desscobriremos como usar o Figma para um layout em código HTML e CSS para o nosso portfólio!

## Conteúdo detalhado desta aula

- Aprendemos a mexer no Figma e transformar o design em código;
- Entendemos melhor como funciona HTML e CSS;
- Estruturamos o nosso portfólio com HTML, aprendendo todas as tags necessárias pra isso;
- Estilizamos o nosso portfólio com CSS, conhecendo os seletores, propriedades e valores necessários para isso.


--- 

### Notas sobre conseitos e observações:

**google fonts -** 
Google Fonts é uma biblioteca com mais de 800 fontes livres licenciadas, um diretório web interativo para navegar na biblioteca, e APIs para usar convenientemente as fontes através de CSS e Android.

~~~html
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap'); 
</style>
~~~

---

**main -** o elemento ```main```define o conteúdo principal dentro do ```body```.
O documento não pode ter mais de um elemento ```main```por documento.
Elementos pertencentes a categoria de conteúdo de fluxo tipicamente contém texto ou conteúdo embutido.
>**Obs:**O elemento <main> não pode ser filho dos elementos <article>, <aside>, <footer>, <header>, ou <nav>.

Sua lista de regras pode ser encontrado clicando [aqui](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main).

_EX:_

~~~html
<main class="projetos">
	<style>
	.projetos {

	}
	</style>
</main>
~~~ 

---

**box-shadow -** é uma propriedade do CSS usado para criar o popular _drop shadow_, ou apesanas... sombra. É possível especificar mais de um elemento ao mesmo tempo os separando por vírgula. 

A propriedade de sombra é descrita pelo deslocamento nos eixos X e Y, ou _offset_, em relação ao elemento que recebe a prorpiedade, pelo desfoque, a cor e pelo seu raio de propagação.

~~~css
.container {
box-shadow: (0px 5px 4px 2px rgba(0, 0, 0, 0.25) );
}
~~~
> No exmeplo acima: offset-x: 0px, offset-y: 5px, desfoque: 4px, propagação: 2px | cor e alfa: preto em RGBa (0,0,0, 0.25)
Canal alfa se refere a opacidade, quanto maior, mais opaco. Ou seja o valor máximo é completamente opaco e o valor mínimo é completamente transparente.

Veja as especifidades da propriedade [box-shadow](https://developer.mozilla.org/pt-BR/docs/Web/CSS/box-shadow).


---

**flex box -** _flexbox_ vem de "Flexible Box" e quer dizer "caixa flexível". É uma forma mais eficiente para criar layouts, alinha e distribuir espaços, até mesmo quando as dimenções dos itens alihados são desconhecidas e, até mesmo, dinâmicas. _Flexbox_ não se limita apenas a uma única propriedade, mas sim a um módulo completo.

**-** _display:_ propriedade que define um elemento pai, ou um _flex container_. Podendo ser _inline_ ou _block_ dependendo do valor.
	**-** _flex:_ é de falto o que torna o elemento um _flex container_, consequentemente transformando todos os filhos em _flex itens_.
>Ou ```inline-flex```.

_Ex:_

Trecho do _HTML_.
~~~html
    <header class="perfil">
      <img class="perfil-foto" src="https://assets.codepen.io/6877971/internal/avatars/users/default.png" />
      <div class="titulo">
        <h1>Lannyer G. Junior</h1>
        <h3>Dev sem futuro & Cozinheiro por diversão 💻🔪
          <br>
          #imersaodev
        </h3>
      </div>
    </header>
~~~

Trecho do _CSS_.
~~~css
.perfil {
  display: flex;
  aligns: center;
}
~~~
>Trecho do projeto feito em aula.

**-** _flex-direction:_ define a direção dos itens. A direção padrão é em linha (_row_), portanto, quando é usado ```display: flex;```, os elementos ficam alinhados um do lado do outro. A mudança de linha para coluna(_column_) acontece, geralmente, quando estamos definindo os estilos em **Media Query** para mobile.
>Media Query: _media queries_ definem condições para que o CSS seja utilizado em cenários específicos. Se essas condições forem aprovadas, ou seja, se o dispositivo de adequar a todas as condições estabelecidas na sua Media Querie, o CSS será aplicado.
	**-** _column:_ alinhas os itens na vertical um em cima do outro, em coluna. ~Duuh!~

_Ex:_

Trecho em _HTML_.
~~~html
<main class="projetos">
    <p class="projetos-titulo">Projetos | 3ª Imersão Dev</p>
	<ol>
		<a href="https://codepen.io/lannyer/details/RwLvPJj">
			<li class="projetos-item">🧮 Aula 1 - Calculadora de Média ✔️</li>
		</a>
		<a href="https://codepen.io/lannyer/details/yLpeRXm">
			<li class="projetos-item">📏 Desafio aula 1 - Conversor de Medidas ❗❗</li>
			</a>
		<a href="https://codepen.io/lannyer/details/oNpbPwN">
			<li class="projetos-item"> 📝 Desafio aula 01 - Gui Lima & Paulo Silveira ✔️</li>
		</a>
	</ol>
</main>
~~~

Trecho em _CSS_
 ~~~css
 .projetos {
  display: flex;
  flex-direction: column;
}
 ~~~
>Trecho do projeto feito em aula.

Vema mais sobre _Flexbox_ em:
[Flexbox 101.](https://www.alura.com.br/artigos/css-guia-do-flexbox)
[Um manual mais completo de Flexbox.](https://origamid.com/projetos/flexbox-guia-completo/)
[Aula da Rafa Ballerini pt. 01.](https://youtu.be/KbjLtEgmZ_E)
[Aula da Rafa Ballerini pt. 02.](https://youtu.be/hjz6ezV9_uc)


---

Para saber mais sobre os assuntos tratados nesta aula e para realizar os desafios acesse:

[MDN Web Docs] https://developer.mozilla.org/pt-BR/
[Stack Overflow] https://pt.stackoverflow.com

---

DESAFIOS
---

>Os desafios podem, ou não, conter conteúdos ainda não estutados até o momento desta aula, sendo, assim, necessário pesquisa e estudos.
Os desafios criados pelo Paulo Silveira, pela Rafa Ballerini e pelo Gui Lima, para o projeto desta aula, são bem desafiadores, mesmo que simples. Mesmo que trivíais podem conter, ou não, conteúdos ainda não estutados até o momento da aula, sendo assim, necessário mais pesquisas, estudos, paciência e empenho.

- **Desafio Paulo:** personalizar o projeto com outros links de redes sociais, currcículos, etc. ✔️
- **Desafio Ballerini:** terminar projeto do Figma. ✔️
- **Desafio bônus - Paulo:** realizar novos projetos e aprimorar os anteriores. ❗

#### ✔️- Desafio concluído ❗- Desafio postergado para o remake da Imersão

[CodePen - Aula 09 : Portfólio pt.1](https://codepen.io/lannyer/pen/KKyJdOx) | [Repositório no GitHub](https://github.com/Lannyer/imersaodev3/tree/master/Aula9-Certificardpt1) | [Veja a página funcional aqui.]()