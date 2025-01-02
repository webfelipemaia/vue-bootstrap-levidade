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


    <h5 class="mt-5" id="badge-headings">Temas</h5>
    <p>Você pode utilizar os variados temas do Bootstrap. Porém, para atender às necessidades de acessibilidade você precisa ajustar.</p>
    
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
      <div class="d-flex justify-content-between p-2">
        <LeveButton type="primary">Primary</LeveButton>
        <LeveButton type="secondary">Secondary</LeveButton>
        <LeveButton type="success">Success</LeveButton>
        <LeveButton type="danger">Danger</LeveButton>
        <LeveButton type="warning">Warning</LeveButton>
        <LeveButton type="info">Info</LeveButton>
        <LeveButton type="light">Light</LeveButton>
        <LeveButton type="dark">Dark</LeveButton>
        <LeveButton type="link">Link</LeveButton>
      </div>
    </div>    
    
    <br />
    
    <h5 class="mt-5" id="badge-headings">Outline</h5>
    <p>Ao utilizar este estilo de botão certifique-se de obter contraste suficiente para garantir uma boa leitura do componente.</p>
    
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
      <div class="d-flex justify-content-between p-2">
        <LeveButton :outline="'primary'">Primary</LeveButton>
        <LeveButton :outline="'secondary'">Secondary</LeveButton>
        <LeveButton :outline="'success'">Success</LeveButton>
        <LeveButton :outline="'danger'">Danger</LeveButton>
        <LeveButton :outline="'warning'">Warning</LeveButton>
        <LeveButton :outline="'info'">Info</LeveButton>
        <LeveButton :outline="'light'">Light</LeveButton>
        <LeveButton :outline="'dark'">Dark</LeveButton>
        <LeveButton :outline="'link'">Link</LeveButton>
      </div>

    </div>

    <br />

    <h5 class="mt-5" id="badge-headings">Tamanhos</h5>
    <p>Ao passar via props os valores <code>sm</code> (botão pequeno) <code>lg</code> (botão grande), você pode escolher o tamanho ideal para o botão.</p>
    
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

    </div>    

      <div class="d-flex justify-content-between p-2">
        <LeveButton type="primary" :size="'sm'">Pequeno</LeveButton>
        <LeveButton type="primary">Normal</LeveButton>
        <LeveButton type="primary" :size="'lg'">Grande</LeveButton>        
      </div>

      <p class="text-start">Disabled state and loading</p>
      <div class="d-flex justify-content-between p-2">
        <LeveButton :outline="'primary'" disabled>Button</LeveButton>
        <LeveButton type="primary"  disabled>Button</LeveButton>
        <LeveButton :outline="'secondary'" loading>Button</LeveButton>
        <LeveButton type="secondary"  loading>Button</LeveButton>
      </div>

      <p class="text-start">Custom style</p>
      <div class="d-flex justify-content-between p-2">
        <LeveButton :outline="'primary'" :style="'--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;'">Button</LeveButton>
        <LeveButton type="primary" :style="'background-color:grey;border-color:black;color:black;'">Large button</LeveButton>
        <LeveButton type="primary" :size="'sm'" :style="'background-color:transparent;color:blue;'">Small button</LeveButton>        
      </div>

    <h5 id="badge-headings">Opção 1</h5>
    <p>Breve descrição da opção 1</p>
    
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

    </div>
  </section>
  <br />

  <!--API do componente -->
  <section id="description">
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
            <li class="detail-entry detail-h2"><a href="#badge-headings">Headings</a></li>
            <li class="detail-entry detail-h2"><a href="#badge-background-contrast">Background e Contraste</a></li>
            <li class="detail-entry detail-h2"><a href="#badge-buttons">Buttons</a></li>
            <li class="detail-entry detail-h2"><a href="#badge-positions">Positions</a></li>
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