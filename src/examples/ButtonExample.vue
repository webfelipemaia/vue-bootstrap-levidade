<template>  
  <leve-wrapper>
    <template #content-top>
      <section id="introduction">
      <h3>Button</h3>
      <p>O componente LeveButton é um botão reutilizável e altamente configurável que suporta diferentes estilos, tamanhos, 
        estados e funcionalidades, como carregamento e desativação.</p>
      </section>
    </template>
  <template #content-middle>

  <section id="how-to-use">
    <h4>Como usar</h4>
    <div class="sidebar-separator"></div>    


    <h5 class="mt-5" id="button-themes">Temas</h5>
    <p>Você pode utilizar os variados temas do Bootstrap. Porém, para atender às necessidades de acessibilidade você precisa ajustar.</p>
    
    <div class="howto-use">
      <div class="howto-use__title">
        <span><i class="bi bi-code-slash"></i> code
        </span>
      </div>

      <!-- Código do exemplo implementado -->
      <pre v-highlightjs><code class="javascript">
&lt;div class="d-flex justify-content-between p-2"&gt;
    &lt;leve-button type="primary"&gt;Primary&lt;/leve-button&gt;
    &lt;leve-button type="secondary"&gt;Secondary&lt;/leve-button&gt;
    &lt;leve-button type="success"&gt;Success&lt;/leve-button&gt;
    &lt;leve-button type="danger"&gt;Danger&lt;/leve-button&gt;
    &lt;leve-button type="warning"&gt;Warning&lt;/leve-button&gt;
    &lt;leve-button type="info"&gt;Info&lt;/leve-button&gt;
    &lt;leve-button type="light"&gt;Light&lt;/leve-button&gt;
    &lt;leve-button type="dark"&gt;Dark&lt;/leve-button&gt;
    &lt;leve-button type="link"&gt;Link&lt;/leve-button&gt;
&lt;/div&gt;        
      </code></pre>

      <br />
    
    <div class="howto-use__title">
      <span><i class="bi bi-eye"></i>
        preview
      </span>
    </div>

    <!-- Exemplo implementado -->
      <div class="d-flex justify-content-between p-2">
        <leve-button type="primary">Primary</leve-button>
        <leve-button type="secondary">Secondary</leve-button>
        <leve-button type="success">Success</leve-button>
        <leve-button type="danger">Danger</leve-button>
        <leve-button type="warning">Warning</leve-button>
        <leve-button type="info">Info</leve-button>
        <leve-button type="light">Light</leve-button>
        <leve-button type="dark">Dark</leve-button>
        <leve-button type="link">Link</leve-button>
      </div>
    </div>    
    
    <br />
    
    <h5 class="mt-5" id="button-outline">Outline</h5>
    <p>Ao utilizar este estilo de botão certifique-se de obter contraste suficiente para garantir uma boa leitura do componente.</p>
    
    <div class="howto-use">
      <div class="howto-use__title">
        <span><i class="bi bi-code-slash"></i> code
        </span>
      </div>

      <!-- Código do exemplo implementado -->
      <pre v-highlightjs><code class="javascript">
&lt;div class="d-flex justify-content-between p-2"&gt;
    &lt;leve-button :outline="'primary'"&gt;Primary&lt;/leve-button&gt;
    &lt;leve-button :outline="'secondary'"&gt;Secondary&lt;/leve-button&gt;
    &lt;leve-button :outline="'success'"&gt;Success&lt;/leve-button&gt;
    &lt;leve-button :outline="'danger'"&gt;Danger&lt;/leve-button&gt;
    &lt;leve-button :outline="'warning'"&gt;Warning&lt;/leve-button&gt;
    &lt;leve-button :outline="'info'"&gt;Info&lt;/leve-button&gt;
    &lt;leve-button :outline="'light'"&gt;Light&lt;/leve-button&gt;
    &lt;leve-button :outline="'dark'"&gt;Dark&lt;/leve-button&gt;
    &lt;leve-button :outline="'link'"&gt;Link&lt;/leve-button&gt;
&lt;/div&gt;        
      </code></pre>

      <br />
    
    <div class="howto-use__title">
      <span><i class="bi bi-eye"></i>
        preview
      </span>
    </div>

    <!-- Exemplo implementado -->
      <div class="d-flex justify-content-between p-2">
        <leve-button :outline="'primary'">Primary</leve-button>
        <leve-button :outline="'secondary'">Secondary</leve-button>
        <leve-button :outline="'success'">Success</leve-button>
        <leve-button :outline="'danger'">Danger</leve-button>
        <leve-button :outline="'warning'">Warning</leve-button>
        <leve-button :outline="'info'">Info</leve-button>
        <leve-button :outline="'light'">Light</leve-button>
        <leve-button :outline="'dark'">Dark</leve-button>
        <leve-button :outline="'link'">Link</leve-button>
      </div>

    </div>

    <br />

    <h5 class="mt-5" id="button-sizes">Tamanhos</h5>
    <p>Ao passar via props os valores <code>sm</code> (botão pequeno) <code>lg</code> (botão grande), você pode escolher o tamanho ideal para o botão.</p>
    
    <div class="howto-use">
      <div class="howto-use__title">
        <span><i class="bi bi-code-slash"></i> code
        </span>
      </div>

      <!-- Código do exemplo implementado -->
      <pre v-highlightjs><code class="javascript">
&lt;div class="hstack gap-3"&gt;
    &lt;leve-button type="primary" :size="'sm'"&gt;Pequeno&lt;/leve-button&gt;
    &lt;leve-button type="primary"&gt;Normal&lt;/leve-button&gt;
    &lt;leve-button type="primary" :size="'lg'"&gt;Grande&lt;/leve-button&gt;        
&lt;/div&gt;        
      </code></pre>

      <br />
    
    <div class="howto-use__title">
      <span><i class="bi bi-eye"></i>
        preview
      </span>
    </div>

    <!-- Exemplo implementado -->

      <div class="hstack gap-3">
        <leve-button type="primary" :size="'sm'">Pequeno</leve-button>
        <leve-button type="primary">Normal</leve-button>
        <leve-button type="primary" :size="'lg'">Grande</leve-button>        
      </div>

    </div>

    <br />
    
    <h5 class="mt-5" id="button-disabled">Desabilitado</h5>
    
    <div class="howto-use">
      <div class="howto-use__title">
        <span><i class="bi bi-code-slash"></i> code
        </span>
      </div>

      <!-- Código do exemplo implementado -->
      <pre v-highlightjs><code class="javascript">
&lt;div class="hstack gap-3"&gt;
    &lt;leve-button :outline="'primary'" disabled&gt;Button&lt;/leve-button&gt;
    &lt;leve-button type="primary" disabled&gt;Button&lt;/leve-button&gt;
&lt;/div&gt;        
      </code></pre>

      <br />
    
    <div class="howto-use__title">
      <span><i class="bi bi-eye"></i>
        preview
      </span>
    </div>

    <!-- Exemplo implementado -->

      <div class="hstack gap-3">
        <leve-button :outline="'primary'" disabled>Button</leve-button>
        <leve-button type="primary"  disabled>Button</leve-button>
      </div>
            
    </div>
      

    <br />
    
    <h5 class="mt-5"  id="button-loadings">Carregamento</h5>
    
    <div class="howto-use">
      <div class="howto-use__title">
        <span><i class="bi bi-code-slash"></i> code
        </span>
      </div>

      <!-- Código do exemplo implementado -->
      <pre v-highlightjs><code class="javascript">
&lt;div class="hstack gap-3"&gt;
    &lt;leve-button :outline="'secondary'" loading&gt;Button&lt;/leve-button&gt;
    &lt;leve-button type="secondary" loading&gt;Button&lt;/leve-button&gt;
&lt;/div&gt;        
      </code></pre>

      <br />
    
    <div class="howto-use__title">
      <span><i class="bi bi-eye"></i>
        preview
      </span>
    </div>

    <!-- Exemplo implementado -->
     
      <div class="hstack gap-3">
        <leve-button :outline="'secondary'" loading>Button</leve-button>
        <leve-button type="secondary"  loading>Button</leve-button>
      </div>
    </div>

    <br />
    <h5 class="mt-5" id="button-custom">Estilo personalizado</h5>
    <p>Modifique o estilo do botão passando código CSS por meio da prop <code>:style</code>.</p>
    
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
    <div class="hstack gap-3">
      <leve-button :outline="'primary'" :style="'--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;'">Button</leve-button>
      <leve-button type="primary" :style="'background-color:grey;border-color:black;color:black;'">Large button</leve-button>
      <leve-button type="primary" :size="'sm'" :style="'background-color:transparent;color:blue;'">Small button</leve-button>        
    </div>

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
          <th>Prop</th>
          <th>Tipo</th>
          <th>Padrão</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>block</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Indica se o botão deve ser exibido como um elemento em bloco.</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Desativa o botão, tornando-o não clicável.</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Indica se o estado de carregamento está ativado.</td>
        </tr>
        <tr>
          <td>tag</td>
          <td>String</td>
          <td>"button"</td>
          <td>Define o elemento HTML a ser renderizado. Pode ser <code>&lt;button&gt;</code> ou <code>&lt;a&gt;</code>.</td>
        </tr>
        <tr>
          <td>outline</td>
          <td>String</td>
          <td>""</td>
          <td>Adiciona um estilo de contorno ao botão (ex: <code>.btn-outline-primary</code> ).</td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>""</td>
          <td>Define o estilo principal do botão (ex: <code>.btn-primary</code> ).</td>
        </tr>
        <tr>
          <td>nativeType</td>
          <td>String</td>
          <td>"button"</td>
          <td>Especifica o atributo <code>type</code> nativo do elemento (aplicável ao <code>&lt;button&gt;</code>).</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>""</td>
          <td>Define o tamanho do botão (ex: <code>sm</code>, <code>md</code>, <code>lg</code>).</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String</td>
          <td>""</td>
          <td>Adiciona um ícone ao botão (ex: <code>bi-check</code> ).</td>
        </tr>
        <tr>
          <td>link</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Aplica estilo de link ao botão.</td>
        </tr>
        <tr>
          <td>ariaLabel</td>
          <td>String</td>
          <td>""</td>
          <td>Define o atributo <code>aria-label</code> para acessibilidade.</td>
        </tr>
        <tr>
          <td>style</td>
          <td>String</td>
          <td>""</td>
          <td>Aplica estilos inline adicionais ao botão.</td>
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
          <td>handleClick</td>
          <td>Método</td>
          <td>Emite o evento <code>@click</code>.</td>
        </tr>
        <tr>
          <td>click</td>
          <td>Evento</td>
          <td>É emitido quando o botão é clicado. Passa o evento do clique como parâmetro.</td>
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