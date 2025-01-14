<template>
  <leve-wrapper>
    <template #content-top>
      <section id="introduction">
        <h3>Button Group</h3>
        <p>O <strong>LeveButtonGroup</strong> é um componente Vue.js que agrupa botões de maneira organizada, oferecendo
          diferentes
          tipos de disposição, como grupo padrão, grupo vertical e barra de ferramentas. Ele permite a personalização
          por meio de diversas propriedades e emite eventos ao ser clicado.</p>
        <br />
        <p>&nbsp;</p>


        <br />
        <p>&nbsp;</p>
        <LeveButtonGroup role="group">
          <LeveButton type="primary" icon="cart">Left</LeveButton>
          <LeveButton type="secondary" icon="cart">Middle</LeveButton>
          <LeveButton type="success" icon="cart">Right</LeveButton>
        </LeveButtonGroup>
      </section>
    </template>
    <template #content-middle>

      <section id="how-to-use">
        <br />
        <h4 class="mt-5">Como usar</h4>
        <div class="sidebar-separator"></div>


        <h5 class="mt-5" id="button-themes">Uso básico</h5>
        <p>Agrupe botões, usando as opções do componente <a href="http://localhost:8080/doc/button">LeveButton</a>
          normalmente.</p>

        <div class="howto-use">
          <div class="howto-use__title">
            <span><i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <!-- Código do exemplo implementado -->
          <pre v-highlightjs><code class="javascript">
&lt;LeveButtonGroup role=&quot;group&quot;&gt;
    &lt;LeveButton type=&quot;primary&quot;&gt;Left&lt;/LeveButton&gt;
    &lt;LeveButton type=&quot;primary&quot;&gt;Middle&lt;/LeveButton&gt;
    &lt;LeveButton type=&quot;primary&quot;&gt;Right&lt;/LeveButton&gt;
&lt;/LeveButtonGroup&gt;
      </code></pre>

          <br />

          <div class="howto-use__title">
            <span><i class="bi bi-eye"></i>
              preview
            </span>
          </div>

          <!-- Exemplo implementado -->
          <LeveButtonGroup role="group">
            <LeveButton type="primary">Left</LeveButton>
            <LeveButton type="primary">Middle</LeveButton>
            <LeveButton type="primary">Right</LeveButton>
          </LeveButtonGroup>
        </div>

        <br />

        <h5 class="mt-5" id="button-outline">Outline</h5>

        <div class="howto-use">
          <div class="howto-use__title">
            <span><i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <!-- Código do exemplo implementado -->
          <pre v-highlightjs><code class="javascript">
&lt;LeveButtonGroup role=&quot;group&quot;&gt;
    &lt;LeveButton class=&quot;btn-outline-primary&quot;&gt;Left&lt;/LeveButton&gt;
    &lt;LeveButton class=&quot;btn-outline-primary&quot;&gt;Middle&lt;/LeveButton&gt;
    &lt;LeveButton class=&quot;btn-outline-primary&quot;&gt;Right&lt;/LeveButton&gt;
&lt;/LeveButtonGroup&gt;
          </code></pre>

          <br />

          <div class="howto-use__title">
            <span><i class="bi bi-eye"></i>
              preview
            </span>
          </div>

          <!-- Exemplo implementado -->
          <LeveButtonGroup role="group">
            <LeveButton class="btn-outline-primary">Left</LeveButton>
            <LeveButton class="btn-outline-primary">Middle</LeveButton>
            <LeveButton class="btn-outline-primary">Right</LeveButton>
          </LeveButtonGroup>

        </div>

        <br />

        <h5 class="mt-5" id="button-sizes">Temas</h5>
        <p>Combine os temas para uma melhor exploração visual do componente.</p>

        <div class="howto-use">
          <div class="howto-use__title">
            <span><i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <!-- Código do exemplo implementado -->
          <pre v-highlightjs><code class="javascript">
&lt;leve-button-group role=&quot;group&quot;&gt;
  &lt;leve-button type="primary"&gt;Primary&lt;/leve-button&gt;
  &lt;leve-button type="secondary"&gt;Secondary&lt;/leve-button&gt;
  &lt;leve-button type="success"&gt;Success&lt;/leve-button&gt;
  &lt;leve-button type="danger"&gt;Danger&lt;/leve-button&gt;
  &lt;leve-button type="warning"&gt;Warning&lt;/leve-button&gt;
  &lt;leve-button type="info"&gt;Info&lt;/leve-button&gt;
  &lt;leve-button type="light"&gt;Light&lt;/leve-button&gt;
  &lt;leve-button type="dark"&gt;Dark&lt;/leve-button&gt;       
&lt;/leve-button-group&gt;
      </code></pre>

          <br />

          <div class="howto-use__title">
            <span><i class="bi bi-eye"></i>
              preview
            </span>
          </div>

          <!-- Exemplo implementado -->

          <LeveButtonGroup role="group">
            <leve-button type="primary">Primary</leve-button>
            <leve-button type="secondary">Secondary</leve-button>
            <leve-button type="success">Success</leve-button>
            <leve-button type="danger">Danger</leve-button>
            <leve-button type="warning">Warning</leve-button>
            <leve-button type="info">Info</leve-button>
            <leve-button type="light">Light</leve-button>
            <leve-button type="dark">Dark</leve-button>
          </LeveButtonGroup>


        </div>

        <br />

        <h5 class="mt-5" id="button-disabled">Checkbox e Radio</h5>

        <div class="howto-use">
          <div class="howto-use__title">
            <span><i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <!-- Código do exemplo implementado -->
          <pre v-highlightjs><code class="javascript">
          </code></pre>

          <br />

          <div class="howto-use__title">
            <span><i class="bi bi-eye"></i>
              preview
            </span>
          </div>

          <!-- Exemplo implementado -->

          <h6>Checkbox</h6>
          <leve-button-group role="group" aria-label="Checkbox button group">
            <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

            <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

            <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
          </leve-button-group>


          <h6 class="mt-4">Radio</h6>
          <leve-button-group role="group" aria-label="Radio button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
          </leve-button-group>
        </div>


        <br />

        <h5 class="mt-5" id="button-loadings">Tamanhos</h5>

        <div class="howto-use">
          <div class="howto-use__title">
            <span><i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <!-- Código do exemplo implementado -->
          <pre v-highlightjs><code class="javascript">

          </code></pre>

          <br />

          <div class="howto-use__title">
            <span><i class="bi bi-eye"></i>
              preview
            </span>
          </div>

          <!-- Exemplo implementado -->


          <LeveButtonGroup size="sm" role="group">
            <LeveButton type="primary" icon="cart">Left</LeveButton>
            <LeveButton type="secondary" icon="cart">Middle</LeveButton>
            <LeveButton type="success" icon="cart">Right</LeveButton>
          </LeveButtonGroup>
          <br /><br />
          <LeveButtonGroup size="" role="group">
            <LeveButton type="primary" icon="cart">Left</LeveButton>
            <LeveButton type="secondary" icon="cart">Middle</LeveButton>
            <LeveButton type="success" icon="cart">Right</LeveButton>
          </LeveButtonGroup>
          <br /><br />
          <LeveButtonGroup size="lg" role="group">
            <LeveButton type="primary" icon="cart">Left</LeveButton>
            <LeveButton type="secondary" icon="cart">Middle</LeveButton>
            <LeveButton type="success" icon="cart">Right</LeveButton>
          </LeveButtonGroup>

        </div>

        <br />
        <h5 class="mt-5" id="button-custom">Tipos de agrumanento</h5>
        <p>O tipo básico pode ser usado indicando <code>type="group"</code> ou não informando a propriedade
          <code>type</code>. Se
          quiser usar no modo vertical, basta indicar <code>type="vertical"</code>.</p>

        <div class="howto-use">
          <div class="howto-use__title">
            <span><i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <!-- Código do exemplo implementado -->
          <pre v-highlightjs><code class="javascript">
&lt;div class="hstack gap-3"&gt;
    &lt;leve-button :outline="'primary'" :style="'--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;'"&gt;Button&lt;/leve-button&gt;
    &lt;leve-button type="primary" :style="'background-color:grey;border-color:black;color:black;'"&gt;Large button&lt;/leve-button&gt;
    &lt;leve-button type="primary" :size="'sm'" :style="'background-color:transparent;color:blue;'"&gt;Small button&lt;/leve-button&gt;        
&lt;/div&gt;        
      </code></pre>

          <br />

          <div class="howto-use__title">
            <span><i class="bi bi-eye"></i>
              preview
            </span>
          </div>

          <!-- Exemplo implementado -->

          <h6>Vertical</h6>
          <LeveButtonGroup type="vertical" role="group">
            <LeveButton type="primary" icon="cart">Left</LeveButton>
            <LeveButton type="secondary" icon="cart">Middle</LeveButton>
            <LeveButton type="success" icon="cart">Right</LeveButton>
          </LeveButtonGroup>
          <br /><br />

          <div class="hstack gap-3 p-2 justify-content-between border border-dark-subtle rounded">
            <div class="mb-0">Total: 29t items</div>
            <LeveButtonGroup type="toolbar" role="group">
              <LeveButton type="primary" icon="chevron-left"></LeveButton>
              <LeveButton type="primary">1</LeveButton>
              <LeveButton type="primary">2</LeveButton>
              <LeveButton type="primary">3</LeveButton>
              <LeveButton type="primary" icon="chevron-right"></LeveButton>
            </LeveButtonGroup>
          </div>


          <leve-button-group class="me-2" type="toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <input type="radio" class="btn-check" name="btntheme" id="btnradiosun" autocomplete="off" checked>
            <label class="btn btn-outline-primary" for="btnradiosun"><i class="bi bi-sun"></i></label>

            <input type="radio" class="btn-check" name="btntheme" id="btnradiomoon" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradiomoon"><i class="bi bi-moon"></i></label>
          </leve-button-group>

        </div>
      </section>

      <!--API do componente -->
      <section id="description" style="margin-top: 8rem;">
        <h4>Descrição</h4>
        <div class="sidebar-separator"></div>

        <h5 class="mt-5">Propriedades (props)</h5>

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
              <td>ariaLabel</td>
              <td>String</td>
              <td>"This is an button group"</td>
              <td>Define o rótulo acessível (aria-label) do grupo de botões.</td>
            </tr>
            <tr>
              <td>tag</td>
              <td>String</td>
              <td>"div"</td>
              <td>Define o elemento HTML raiz do componente. Atualmente, suporta apenas &lt;div&gt;.</td>
            </tr>
            <tr>
              <td>type</td>
              <td>String</td>
              <td>"group"</td>
              <td>Define o tipo do grupo de botões. Pode ser "group", "vertical", "toolbar" ou "" (usa o valor de
                defaultType).</td>
            </tr>
            <tr>
              <td>role</td>
              <td>String</td>
              <td>""</td>
              <td>Define a função do elemento para acessibilidade. Pode ser "group" ou "toolbar".</td>
            </tr>
            <tr>
              <td>group</td>
              <td>String</td>
              <td>""</td>
              <td>Propriedade não utilizada diretamente no código.</td>
            </tr>
            <tr>
              <td>defaultType</td>
              <td>String</td>
              <td>"group"</td>
              <td>Define o tipo padrão caso type esteja vazio.</td>
            </tr>
            <tr>
              <td>size</td>
              <td>String</td>
              <td>""</td>
              <td>Define o tamanho do grupo de botões.</td>
            </tr>
            <tr>
              <td>options</td>
              <td>Object</td>
              <td>{}</td>
              <td>Aceita um objeto de opções adicionais para o grupo.</td>
            </tr>
          </tbody>
        </table>


        <br />

        <h5 class="mt-5">Métodos e Eventos</h5>

        <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>click</td>
              <td>Evento</td>
              <td>Disparado quando o grupo de botões é clicado.</td>
            </tr>
            <tr>
              <td>handleClick(evt)</td>
              <td>Método</td>
              <td>Emite o evento <code>click</code> com o evento original do clique.</td>
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
              <li class="detail-entry detail-h2"><a href="#button-themes">Temas</a></li>
              <li class="detail-entry detail-h2"><a href="#button-outline">Outline</a></li>
              <li class="detail-entry detail-h2"><a href="#button-sizes">Tamanhos</a></li>
              <li class="detail-entry detail-h2"><a href="#button-disabled">Desabilitado</a></li>
              <li class="detail-entry detail-h2"><a href="#button-loadings">Carregamento</a></li>
              <li class="detail-entry detail-h2"><a href="#button-custom">Estilo personalizado</a></li>
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

</script>