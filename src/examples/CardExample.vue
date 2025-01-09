<template>
  <leve-wrapper>
    <template #content-top>
      <section id="introduction">
        <h3>Card</h3>
        <p>O componente <strong>LeveCard</strong> é um contêiner versátil utilizado para exibir qualquer tipo de
          conteúdo. Ele permite
          a personalização por meio de estilos e classes CSS, além de oferecer controle sobre o alinhamento do texto.
        </p>
      </section>
    </template>
    <template #content-middle>

      <section id="how-to-use">
        <br />
        <h4 class="mt-5">Como usar</h4>
        <div class="sidebar-separator"></div>

        <h5 id="card-default">Card padrão</h5>
        <p>Servindo como container para qualquer tipo de contéudo, você pode combinar o uso com outros componentes.
          Neste exemplo,
          observe que <strong><code>LeveImage</code></strong> requer a propriedade <code>cardImage</code> para que seja
          carregada a classe <code>
        .card-img-top</code>. Caso essa classe não esteja presente, as bordas da imagem não estarão arredondadas. Também
          usamos
          o componente <strong><code>LeveButton</code></strong> com as propriedades <code>tag="a"</code> para mudar o
          tipo de componente de botão para
          âncora e, <code>:href="'https://google.com'"</code>, para informar a URL. O tema é definido passando o valor
          desejado para
          <code>type</code>.
        </p>

        <div class="howto-use">
          <div class="howto-use__title">
            <span><i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <!-- Código do exemplo implementado -->
          <pre v-highlightjs><code class="javascript">
    &lt;leve-card :style="'width: 18rem;'"&gt;
      &lt;leve-image cardImage :path="image" alt="Lorem ipsum dolor"&gt;&lt;/leve-image&gt;
      &lt;leve-card-body&gt;
        &lt;leve-card-content type="title" tag="h5"&gt;Card Title&lt;/leve-card-content&gt;
        &lt;p&gt;{{ lipsum }}&lt;/p&gt;
        &lt;leve-button tag="a" :href="'https://google.com'" type="link"&gt;Link&lt;/leve-button&gt;
      &lt;/leve-card-body&gt;
    &lt;/leve-card&gt;
      </code></pre>

          <br />

          <div class="howto-use__title">
            <span><i class="bi bi-eye"></i>
              preview
            </span>
          </div>

          <!-- Exemplo implementado -->

          <leve-card :style="'width: 18rem;'">
            <leve-image :path="image" alt="Lorem ipsum dolor"></leve-image>
            <leve-card-body>
              <leve-card-content type="title" tag="h5">Card Title</leve-card-content>
              <p>{{ lipsum }}</p>
              <leve-button tag="a" :href="'https://google.com'" type="link">Link</leve-button>
            </leve-card-body>
          </leve-card>

        </div>

        <br />
        <div class="sidebar-separator"></div>

        <h4 class="mt-5" id="card-options">Opções de layout</h4>
        <p>Confira algumas maneiras de utilizar o <strong><code>LeveCard</code></strong>.</p>
        <br />
        <h5>Body</h5>
        <div class="howto-use">
          <div class="howto-use__title">
            <span><i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <!-- Código do exemplo implementado -->
          <pre v-highlightjs><code class="javascript">
    &lt;leve-card&gt;
      &lt;leve-card-body&gt;
        &lt;p&gt;{{ lipsum }}&lt;/p&gt;
      &lt;/leve-card-body&gt;
    &lt;/leve-card&gt;    
          </code></pre>

          <br />

          <div class="howto-use__title">
            <span><i class="bi bi-eye"></i>
              preview
            </span>
          </div>

          <!-- Exemplo implementado -->

          <leve-card>
            <leve-card-body>
              <p>{{ lipsum }}</p>
            </leve-card-body>
          </leve-card>
        </div>


        <h5 class="mt-5" id="card-text">Textos</h5>

        <div class="howto-use">
          <div class="howto-use__title">
            <span><i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <!-- Código do exemplo implementado -->
          <pre v-highlightjs><code class="javascript">
    &lt;leve-card&gt;
      &lt;leve-card-body&gt;
        &lt;leve-card-content type="title" tag="h5"&gt;Título do card&lt;/leve-card-content&gt;
        &lt;leve-card-content type="subtitle" tag="h6"&gt;Subtítulo do card&lt;/leve-card-content&gt;
        &lt;leve-card-content type="text" tag="span"&gt;{{ lipsum }}&lt;/leve-card-content&gt;
        &lt;leve-card-content type="text" tag="p"&gt;
          Este parágrafo utiliza a tag &lt;code&gt;&amp;lt;p&amp;gt;&lt;/code&gt; como exemplo.
        &lt;/leve-card-content&gt;
      &lt;/leve-card-body&gt;
    &lt;/leve-card&gt;        
      </code></pre>

          <br />

          <div class="howto-use__title">
            <span><i class="bi bi-eye"></i>
              preview
            </span>
          </div>

          <!-- Exemplo implementado -->

          <leve-card>
            <leve-card-body>
              <leve-card-content type="title" tag="h5">Título do card</leve-card-content>
              <leve-card-content type="subtitle" tag="h6">Subtítulo do card</leve-card-content>
              <leve-card-content type="text" tag="span">{{ lipsum }}</leve-card-content>
              <leve-card-content type="text" tag="p">Este parágrafo utiliza a tag <code>&lt;p&gt;</code> como
                exemplo.</leve-card-content>
            </leve-card-body>
          </leve-card>
        </div>


        <br />
        <h5 class="mt-5" id="card-header-footer">Header e Footer</h5>

        <div class="howto-use">
          <div class="howto-use__title">
            <span><i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <!-- Código do exemplo implementado -->
          <pre v-highlightjs><code class="javascript">
    &lt;div class="row"&gt;
      &lt;div class="col-sm-6 mb-3 mb-sm-0"&gt;
        &lt;leve-card&gt;
          &lt;leve-card-header&gt;Header&lt;/leve-card-header&gt;
          &lt;leve-card-body&gt;
            &lt;leve-card-content type="title" tag="h5"&gt;Título do card&lt;/leve-card-content&gt;
            &lt;leve-card-content type="text" tag="span"&gt;{{ lipsum }}&lt;/leve-card-content&gt;
          &lt;/leve-card-body&gt;
          &lt;leve-card-footer type="cardActions"&gt;
            &lt;leve-card-footer-item&gt;Salvar&lt;/leve-card-footer-item&gt;
            &lt;leve-card-footer-item&gt;Cancelar&lt;/leve-card-footer-item&gt;
          &lt;/leve-card-footer&gt;
        &lt;/leve-card&gt;
      &lt;/div&gt;
      &lt;div class="col-sm-6"&gt;
        &lt;leve-card&gt;
          &lt;leve-card-header&gt;Header&lt;/leve-card-header&gt;
          &lt;leve-card-body&gt;
            &lt;leve-card-content type="title" tag="h5"&gt;Título do card&lt;/leve-card-content&gt;
            &lt;leve-card-content type="text" tag="span"&gt;{{ lipsum }}&lt;/leve-card-content&gt;
          &lt;/leve-card-body&gt;
          &lt;leve-card-footer&gt;
            &lt;leve-button type="primary"&gt;Avançar&lt;/leve-button&gt;
          &lt;/leve-card-footer&gt;
        &lt;/leve-card&gt;              
      &lt;/div&gt;
    &lt;/div&gt;        
          </code></pre>

          <br />

          <div class="howto-use__title">
            <span><i class="bi bi-eye"></i>
              preview
            </span>
          </div>

          <!-- Exemplo implementado -->

          <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <leve-card>
                <leve-card-header>Header</leve-card-header>
                <leve-card-body>
                  <leve-card-content type="title" tag="h5">Título do card</leve-card-content>
                  <leve-card-content type="text" tag="span">{{ lipsum }}</leve-card-content>
                </leve-card-body>
                <leve-card-footer type="cardActions">
                  <leve-card-footer-item>Salvar</leve-card-footer-item>
                  <leve-card-footer-item>Cancelar</leve-card-footer-item>
                </leve-card-footer>
              </leve-card>
            </div>
            <div class="col-sm-6">
              <leve-card>
                <leve-card-header>Header</leve-card-header>
                <leve-card-body>
                  <leve-card-content type="title" tag="h5">Título do card</leve-card-content>
                  <leve-card-content type="text" tag="span">{{ lipsum }}</leve-card-content>
                </leve-card-body>
                <leve-card-footer>
                  <leve-button type="primary">Avançar</leve-button>
                </leve-card-footer>
              </leve-card>
            </div>
          </div>
        </div>



        <h5 class="mt-5" id="card-alignment">Alinhamento</h5>
        <p>O alinhamento pode ser feito passando <code>left</code>, <code>center</code> ou <code>right</code> para a
          prop
          <code>alignment</code>. Você também pode passar estilos CSS para a propriedade <code>cardStyle</code>. Veja os
          exemplos.
        </p>

        <div class="howto-use">
          <div class="howto-use__title">
            <span><i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <!-- Código do exemplo implementado -->
          <pre v-highlightjs><code class="javascript">
&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;col&quot;&gt;
    &lt;leve-card 
      :cardStyle=&quot;{ backgroundColor: '#ddd', border: '2px dashed #444' }&quot;  
      alignment=&quot;left&quot;&gt;
      &lt;leve-card-header&gt;Left alignment&lt;/leve-card-header&gt;
      &lt;leve-card-body&gt;
        &lt;leve-card-content type=&quot;title&quot; tag=&quot;h5&quot;&gt;Título do card&lt;/leve-card-content&gt;
        &lt;leve-card-content type=&quot;text&quot; tag=&quot;span&quot;&gt;{{ lipsum }}&lt;/leve-card-content&gt;
      &lt;/leve-card-body&gt;
      &lt;leve-card-footer&gt;
        &lt;leve-button type=&quot;primary&quot;&gt;Avançar&lt;/leve-button&gt;
      &lt;/leve-card-footer&gt;
    &lt;/leve-card&gt;              
  &lt;/div&gt;

  &lt;div class=&quot;col&quot;&gt;
    &lt;leve-card 
      cardClass=&quot;mt-5 border shadow-lg&quot; 
      cardStyle=&quot;margin-top: 5em; background-color: #f8f9fa;&quot;  
      alignment=&quot;center&quot;&gt;
      &lt;leve-card-header&gt;Center alignment&lt;/leve-card-header&gt;
      &lt;leve-card-body&gt;
        &lt;leve-card-content type=&quot;title&quot; tag=&quot;h5&quot;&gt;Título do card&lt;/leve-card-content&gt;
        &lt;leve-card-content type=&quot;text&quot; tag=&quot;span&quot;&gt;{{ lipsum }}&lt;/leve-card-content&gt;
      &lt;/leve-card-body&gt;
      &lt;leve-card-footer&gt;
        &lt;leve-button type=&quot;primary&quot;&gt;Avançar&lt;/leve-button&gt;
      &lt;/leve-card-footer&gt;
    &lt;/leve-card&gt;              
  &lt;/div&gt;

  &lt;div class=&quot;col&quot;&gt;
    &lt;leve-card               
      cardClass=&quot;text-uppercase&quot; 
      alignment=&quot;right&quot;&gt;
      &lt;leve-card-header&gt;Right alignment&lt;/leve-card-header&gt;
      &lt;leve-card-body&gt;
        &lt;leve-card-content type=&quot;title&quot; tag=&quot;h5&quot;&gt;Título do card&lt;/leve-card-content&gt;
        &lt;leve-card-content type=&quot;text&quot; tag=&quot;span&quot;&gt;{{ lipsum }}&lt;/leve-card-content&gt;
      &lt;/leve-card-body&gt;
      &lt;leve-card-footer&gt;
        &lt;leve-button type=&quot;primary&quot;&gt;Avançar&lt;/leve-button&gt;
      &lt;/leve-card-footer&gt;
    &lt;/leve-card&gt;              
  &lt;/div&gt;
&lt;/div&gt;        
          </code></pre>

          <br />

          <div class="howto-use__title">
            <span><i class="bi bi-eye"></i>
              preview
            </span>
          </div>

          <!-- Exemplo implementado -->


          <div class="row">
            <div class="col">
              <leve-card :cardStyle="{ backgroundColor: '#ddd', border: '2px dashed #444' }" alignment="left">
                <leve-card-header>Left alignment</leve-card-header>
                <leve-card-body>
                  <leve-card-content type="title" tag="h5">Título do card</leve-card-content>
                  <leve-card-content type="text" tag="span">{{ lipsum }}</leve-card-content>
                </leve-card-body>
                <leve-card-footer>
                  <leve-button type="primary">Avançar</leve-button>
                </leve-card-footer>
              </leve-card>
            </div>
            <div class="col">
              <leve-card cardClass="mt-5 border shadow-lg" cardStyle="margin-top: 5em; background-color: #f8f9fa;"
                alignment="center">
                <leve-card-header>Center alignment</leve-card-header>
                <leve-card-body>
                  <leve-card-content type="title" tag="h5">Título do card</leve-card-content>
                  <leve-card-content type="text" tag="span">{{ lipsum }}</leve-card-content>
                </leve-card-body>
                <leve-card-footer>
                  <leve-button type="primary">Avançar</leve-button>
                </leve-card-footer>
              </leve-card>
            </div>

            <div class="col">
              <leve-card cardClass="text-uppercase" alignment="right">
                <leve-card-header>Right alignment</leve-card-header>
                <leve-card-body>
                  <leve-card-content type="title" tag="h5">Título do card</leve-card-content>
                  <leve-card-content type="text" tag="span">{{ lipsum }}</leve-card-content>
                </leve-card-body>
                <leve-card-footer>
                  <leve-button type="primary">Avançar</leve-button>
                </leve-card-footer>
              </leve-card>
            </div>
          </div>

        </div>

        <br />

        <h5 class="mt-5" id="card-layout-image">Layout completo com imagem</h5>
        <p>Confira algumas maneiras de utilizar o <strong><code>LeveCard</code></strong>.</p>

        <div class="howto-use">
          <div class="howto-use__title">
            <span><i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <!-- Código do exemplo implementado -->
          <pre v-highlightjs><code class="javascript">
    &lt;leve-card style="width: 18rem;"&gt;
      &lt;leve-card-header&gt;Featured&lt;/leve-card-header&gt;
      &lt;leve-image style="card-img" path="image.jpg" alt="Lorem ipsum dolor"&gt;&lt;/leve-image&gt;
      &lt;leve-card-body&gt;
        &lt;leve-card-content type="text" tag="p"&gt;&lt;/leve-card-content&gt;
        &lt;leve-card-content type="title" tag="h5"&gt;Card Title&lt;/leve-card-content&gt;
        &lt;leve-card-content type="subtitle" tag="h6"&gt;Card Subtitle is here&lt;/leve-card-content&gt;
        &lt;leve-card-content type="text" tag="span"&gt;
          Some quick example text to build on the card title and make up the bulk of the card's content.
        &lt;/leve-card-content&gt;
      &lt;/leve-card-body&gt;
      &lt;leve-card-footer&gt;Some card's content&lt;/leve-card-footer&gt;
      &lt;leve-card-footer type="cardActions"&gt;
        &lt;leve-card-footer-item link="http://google.com"&gt;Save&lt;/leve-card-footer-item&gt;
        &lt;leve-card-footer-item link="http://google.com"&gt;Edit&lt;/leve-card-footer-item&gt;
        &lt;leve-card-footer-item link="http://google.com"&gt;Delete&lt;/leve-card-footer-item&gt;
      &lt;/leve-card-footer&gt;
    &lt;/leve-card&gt;        
          </code></pre>

          <br />

          <div class="howto-use__title">
            <span><i class="bi bi-eye"></i>
              preview
            </span>
          </div>

          <!-- Exemplo implementado -->

          <leve-card style="width: 18rem;">
            <leve-card-header>Featured</leve-card-header>
            <leve-image :style="{ 'card-img': true }" :path="image" alt="Lorem ipsum dolor"></leve-image>
            <leve-card-body>
              <leve-card-content type="text" tag="p"></leve-card-content>
              <leve-card-content type="title" tag="h5">Card Title</leve-card-content>
              <leve-card-content type="subtitle" tag="h6">Card Subtitle is here</leve-card-content>
              <leve-card-content type="text" tag="span">Some quick example text to build on the card title and make up
                the
                bulk of the card's content.</leve-card-content>
            </leve-card-body>
            <leve-card-footer>Some card's content</leve-card-footer>
            <leve-card-footer type="cardActions">
              <leve-card-footer-item :link="'http://google.com'">Save</leve-card-footer-item>
              <leve-card-footer-item :link="'http://google.com'">Edit</leve-card-footer-item>
              <leve-card-footer-item :link="'http://google.com'">Delete</leve-card-footer-item>
            </leve-card-footer>
          </leve-card>

        </div>
      </section>
      <br />

      <br />

      <h5 class="mt-5" id="card-images">Imagens</h5>
      <p>O componente <code>LeveImage</code> carrega as classes <code>.card-img-top</code> e <code>.card-img-bottom</code> para 
      formatar a imagem adequadamente no contexto do card através das props <code>cardImgTop</code> e <code>cardImgBottom</code>. 
      Porém, a utilização da classe <code>.card-img</code> deve ser feita através da prop <code>cardStyle</code>.</p>

      <div class="howto-use">
        <div class="howto-use__title">
          <span><i class="bi bi-code-slash"></i> code
          </span>
        </div>

        <!-- Código do exemplo implementado -->
        <pre v-highlightjs><code class="javascript">
    &lt;div class="row mb-2"&gt;
        &lt;div class="col"&gt;
          &lt;p&gt;&lt;strong&gt;Imagem no topo&lt;/strong&gt;&lt;/p&gt;

          &lt;leve-card style="width: 18rem;"&gt;
            &lt;leve-image cardImgTop path="image.jpg" alt="Lorem ipsum dolor"&gt;&lt;/leve-image&gt;
            &lt;leve-card-body&gt;
              &lt;leve-card-content type="title" tag="h5"&gt;Card Title&lt;/leve-card-content&gt;
              &lt;p&gt;{{ lipsum }}&lt;/p&gt;
              &lt;leve-button tag="a" href="https://google.com" type="link"&gt;Link&lt;/leve-button&gt;
            &lt;/leve-card-body&gt;
          &lt;/leve-card&gt;
        &lt;/div&gt;

        &lt;div class="col"&gt;
          &lt;p&gt;&lt;strong&gt;Imagem no rodapé&lt;/strong&gt;&lt;/p&gt;

          &lt;leve-card style="width: 18rem;"&gt;
            &lt;leve-card-body&gt;
              &lt;leve-card-content type="title" tag="h5"&gt;Card Title&lt;/leve-card-content&gt;
              &lt;p&gt;{{ lipsum }}&lt;/p&gt;
              &lt;leve-button tag="a" href="https://google.com" type="link"&gt;Link&lt;/leve-button&gt;
            &lt;/leve-card-body&gt;
            &lt;leve-image cardImgBottom path="image.jpg" alt="Lorem ipsum dolor"&gt;&lt;/leve-image&gt;
          &lt;/leve-card&gt;
        &lt;/div&gt;

        &lt;div class="col"&gt;
          &lt;p&gt;&lt;strong&gt;Imagem como background&lt;/strong&gt;&lt;/p&gt;

          &lt;leve-card style="width: 18rem;"&gt;
            &lt;leve-image cardClass="card-img" cardStyle="opacity: 0.3;" path="image.jpg"
              alt="Lorem ipsum dolor"&gt;&lt;/leve-image&gt;
            &lt;leve-card-overlay&gt;
              &lt;leve-card-content type="title" tag="h5"&gt;Card Title&lt;/leve-card-content&gt;
              &lt;p&gt;Lorem ipsum dolor sit amet.&lt;/p&gt;
              &lt;leve-button tag="a" href="https://google.com" type="primary"&gt;Link&lt;/leve-button&gt;
            &lt;/leve-card-overlay&gt;
          &lt;/leve-card&gt;
        &lt;/div&gt;
    &lt;/div&gt;        
        </code></pre>

        <br />

        <div class="howto-use__title">
          <span><i class="bi bi-eye"></i>
            preview
          </span>
        </div>

        <!-- Exemplo implementado -->
      </div>

      <div class="row mb-2">
        <div class="col">
          <p><strong>Imagem no topo</strong></p>

          <leve-card :style="'width: 18rem;'">
            <leve-image cardImgTop :path="image" alt="Lorem ipsum dolor"></leve-image>
            <leve-card-body>
              <leve-card-content type="title" tag="h5">Card Title</leve-card-content>
              <p>{{ lipsum }}</p>
              <leve-button tag="a" :href="'https://google.com'" type="link">Link</leve-button>
            </leve-card-body>
          </leve-card>
        </div>

        <div class="col">
          <p><strong>Imagem no rodapé</strong></p>

          <leve-card :style="'width: 18rem;'">
            <leve-card-body>
              <leve-card-content type="title" tag="h5">Card Title</leve-card-content>
              <p>{{ lipsum }}</p>
              <leve-button tag="a" :href="'https://google.com'" type="link">Link</leve-button>
            </leve-card-body>
            <leve-image cardImgBottom :path="image" alt="Lorem ipsum dolor"></leve-image>
          </leve-card>
        </div>

        <div class="col">
          <p><strong>Imagem como backgound</strong></p>

          <leve-card :style="'width: 18rem;'">
            <leve-image :cardClass="['card-img']" :cardStyle="{ opacity: 0.3 }" :path="image"
              alt="Lorem ipsum dolor"></leve-image>
            <leve-card-overlay>
              <leve-card-content type="title" tag="h5">Card Title</leve-card-content>
              <p>Lorem ipsum dolor sit amet.</p>
              <leve-button tag="a" :href="'https://google.com'" type="primary">Link</leve-button>
            </leve-card-overlay>
          </leve-card>
        </div>
      </div>


      <!--API do componente -->
      <section id="description">
        <h4>Descrição</h4>
        <p>As tabelas abaixo descrevem as propriedades disponíveis para o componente LeveCard e os demais componentes auxiliares.</p>
        <div class="sidebar-separator"></div>

        <h5 id="description-levecard" class="mt-5">Propriedades (props) - LeveCard</h5>

        <table class="table">
          <thead>
            <tr>
              <th>Propriedade</th>
              <th>Tipo</th>
              <th>Padrão</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>cardStyle</code></td>
              <td>String | Object</td>
              <td><code>null</code></td>
              <td>Define estilos personalizados para o card.</td>
            </tr>
            <tr>
              <td><code>cardClass</code></td>
              <td>String | Object</td>
              <td><code>null</code></td>
              <td>Define classes CSS adicionais para o card.</td>
            </tr>
            <tr>
              <td><code>alignment</code></td>
              <td>String</td>
              <td><code>"left"</code></td>
              <td>Define o alinhamento do texto. Valores aceitos: <code>left</code>, <code>center</code>, <code>right</code>.</td>
            </tr>
            <tr>
              <td><code>imageOverlay</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Se ativado, o conteúdo do card será sobreposto à imagem de fundo.</td>
            </tr>
          </tbody>
        </table>
        <br />

        <h5 id="description-levecardcontent" class="mt-5">Propriedades (props) - LeveCardContent</h5>
        <table class="table">
          <thead>
            <tr>
              <th>Propriedade</th>
              <th>Tipo</th>
              <th>Padrão</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>tag</code></td>
              <td>String</td>
              <td><code>div</code></td>
              <td>Define a tag HTML usada para renderizar o conteúdo (ex.: <code>p</code>, <code>span</code>, <code>h1</code>).</td>
            </tr>
            <tr>
              <td><code>type</code></td>
              <td>String</td>
              <td><code>"text"</code></td>
              <td>Define o tipo de conteúdo. Valores aceitos: <code>text</code>, <code>title</code>, <code>subtitle</code>.</td>
            </tr>
          </tbody>
        </table>
        <br />

        <h5 id="description-levecardfooter"  class="mt-5">Propriedades (props) - LeveCardFooter</h5>
        <table class="table">
          <thead>
            <tr>
              <th>Propriedade</th>
              <th>Tipo</th>
              <th>Padrão</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>type</code></td>
              <td>String</td>
              <td><code>undefined</code></td>
              <td>Define o tipo de rodapé. Valores aceitos: <code>cardGroupedContent</code> ou <code>cardActions</code>.</td>
            </tr>
          </tbody>
        </table>
        <br />

        <h5 id="description-levecardfooteritem" class="mt-5">Propriedades (props) - LeveCardFooterItem</h5>
        <table class="table">
          <thead>
            <tr>
              <th>Propriedade</th>
              <th>Tipo</th>
              <th>Padrão</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>link</code></td>
              <td>String</td>
              <td><code>undefined</code></td>
              <td>Define o destino do link quando clicado.</td>
            </tr>
          </tbody>
        </table>
        <br />
      </section>


    </template>
    <template #content-bottom>
    </template>
    <template #aside-right>
      <leve-fixednav>
        <template #list-links>
          <li class="detail-entry detail-h2">
            <a href="#introduction">Introdução</a>
          </li>
          <li class="detail-entry detail-h2"><a href="#how-to-use">Como usar</a>
            <ul>
              <li class="detail-entry detail-h2"><a href="#card-default">Card padrão</a></li>
              <li class="detail-entry detail-h2"><a href="#card-options">Opções de layout</a></li>
              <li class="detail-entry detail-h2"><a href="#card-text">Textos</a></li>
              <li class="detail-entry detail-h2"><a href="#card-header-footer">Header e Footer</a></li>
              <li class="detail-entry detail-h2"><a href="#card-layout-image">Layout completo com imagem</a></li>
              <li class="detail-entry detail-h2"><a href="#card-images">Imagens</a></li>
            </ul>
          </li>
          <li class="detail-entry detail-h2"><a href="#description">Descrição</a></li>
        </template>
      </leve-fixednav>
    </template>
  </leve-wrapper>
</template>

<script setup>
import LeveWrapper from '@/views/layout/LeveWrapper.vue';
import LeveFixednav from '@/components/LeveFixednav.vue';
import image from "@/assets/img/ian-schneider-TamMbr4okv4-unsplash.jpg"

const lipsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eius, error minus quis necessitatibus quidem tenetur iure, deserunt maiores harum sequi laboriosam quasi dolore explicabo id deleniti!'
</script>