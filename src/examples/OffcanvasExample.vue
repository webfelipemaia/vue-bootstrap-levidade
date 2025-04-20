<template>  
  <leve-wrapper>
    <template #content-top>

      <section id="introduction">
      <h3>Levidade UI Kit</h3>
      <p>Use lindos templates desenvolvidos para agilizar a criação de seu site.</p>
      <p>Este guia ajudará você a começar a usar o kit de templates, saber como executar, personalizar, atualizar e integrar seu tema!</p>

      <br>
      <h4>Componentes auxiliares</h4>
        <p><strong>LeveOffcanvasButton</strong>
          <br />
          componente que pode ser usado internamente ou externamente, dependendo da abordagem.</p>
        <p>Quando usar:</p>
        <ul>
          <li>Quando você quer apenas o botão visual padrão</li>
          <li>Para implementações simples onde o controle está no mesmo componente</li>
          <li>Quando precisa de múltiplos botões para o mesmo OffCanvas</li>
        </ul>
        <br>
        <p><strong>LeveOffCanvasTrigger</strong>
          <br />
          conhece o contexto do OffCanvas (via provide/inject), gerencia a lógica de toggle e pode trabalhar com múltiplos contextos.</p>
          <p>Quando usar:</p>
          <ul>
            <li>Quando o botão está em componente diferente do OffCanvas</li>
            <li>Para comunicação entre componentes não diretamente conectados</li>
            <li>Em arquiteturas mais complexas com injeção de dependência</li>
          </ul>

      </section>

    </template>

    <template #content-middle>

      <section id="how-to-use">
        <br />
        <h4 class="mt-5">Como usar</h4>
        
        <div class="sidebar-separator"></div>    
        <h5 id="leveoffcanvas-basic">Uso básico</h5>
        
        <p>O componente gerencia seu próprio estado, como controle interno. Botão toggle é mostrado automaticamente nessa abordagem.</p>
      
        <div class="howto-use">
          <div class="howto-use__title">
            <span>
              <i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <pre v-highlightjs>
            <code class="javascript">
  &lt;template&gt;
    &lt;LeveOffcanvas title="Menu Principal"&gt;
      &lt;template #offcanvas-nav&gt;
        &lt;li class="nav-item"&gt;
          &lt;router-link to="/" class="nav-link"&gt;Home&lt;/router-link&gt;
        &lt;/li&gt;
        &lt;li class="nav-item"&gt;
          &lt;router-link to="/about" class="nav-link"&gt;Sobre&lt;/router-link&gt;
        &lt;/li&gt;
      &lt;/template&gt;
    &lt;/LeveOffcanvas&gt;
  &lt;/template&gt;

  &lt;script setup&gt;
  import LeveOffcanvas from './components/LeveOffcanvas.vue';
  &lt;/script&gt;

            </code>
          </pre>
        </div>
        
        <div class="sidebar-separator"></div>    
        <h5 id="leveoffcanvas-provide-inject">Uso com Provide/Inject</h5>
        
        <p>Com essa abordagem, a comunicação entre componentes ocorre sem passar dados via props. Ideal para arquiteturas complexas, pois o componente <code>LeveOffcanvasButton</code> pode estar 
          em componente diferente do componente <code>LeveOffcanvas</code>.</p>
        <p>No exemplo, App.vue contém <code>LeveOffcanvas</code> com botão interno desabilitado.</p>
      
        <div class="howto-use">
          <div class="howto-use__title">
            <span>
              <i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <pre v-highlightjs>
            <code class="javascript">
  // Header.vue
  &lt;template&gt;
    &lt;header&gt;
      &lt;LeveOffcanvasTrigger context="mainMenu" /&gt;
      &lt;!-- Resto do header --&gt;

      &lt;li class="nav-item"&gt;&lt;a class="nav-link text-white" href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
      &lt;li class="nav-item"&gt;&lt;a class="nav-link text-white" href="#"&gt;About&lt;/a&gt;&lt;/li&gt;
      &lt;li class="nav-item"&gt;&lt;a class="nav-link text-white" href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/header&gt;
  &lt;/template&gt;

  &lt;script setup&gt;
  import LeveOffcanvasTrigger from '../../components/offcanvas/LeveOffCanvasTrigger.vue';
  &lt;/script&gt;


  // App.vue
  ...
  &lt;LeveOffcanvas v-model="menuOpen" title="Menu Principal" :show-internal-button="false"&gt;
    &lt;!-- Conteúdo do menu --&gt;
    &lt;template #offcanvas-nav&gt;
      &lt;li class="nav-item"&gt;
        &lt;router-link to="/" class="nav-link"&gt;Home&lt;/router-link&gt;
      &lt;/li&gt;
      &lt;li class="nav-item"&gt;
        &lt;router-link to="/about" class="nav-link"&gt;Sobre&lt;/router-link&gt;
      &lt;/li&gt;
    &lt;/template&gt;
  &lt;/LeveOffcanvas&gt;
  ...         
            </code>
          </pre>
        </div>
        
        <div class="sidebar-separator"></div>    
        <h5 id="leveoffcanvas-conditional">Uso com Desabilitação Condicional</h5>
        
        <p>Para o caso de precisar de lógica para habilitar/desabilitar dinamicamente.</p>
      
        <div class="howto-use">
          <div class="howto-use__title">
            <span>
              <i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <pre v-highlightjs>
            <code class="javascript">
  &lt;template&gt;
    &lt;div&gt;
      &lt;LeveOffcanvasTrigger 
        :disabled="!isAuthenticated"
        button-class="auth-required-btn"
      /&gt;
      
      &lt;LeveOffcanvas 
        v-model="menuOpen" 
        :disabled="!isAuthenticated"
        title="Menu do Usuário"
      &gt;
        &lt;!-- Conteúdo restrito --&gt;
      &lt;/LeveOffcanvas&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script setup&gt;
  import { ref } from 'vue';
  import LeveOffcanvas from './components/LeveOffcanvas.vue';
  import LeveOffcanvasTrigger from './components/LeveOffcanvasTrigger.vue';

  const isAuthenticated = ref(false);
  const menuOpen = ref(false);
  &lt;/script&gt;

            </code>
          </pre>
        </div>

        <div class="sidebar-separator"></div>    
        <h5 id="leveoffcanvas-multiple">Uso Avançado com Múltiplos OffCanvases</h5>
        
        <p>Para o caso de precisar de lógica para habilitar/desabilitar dinamicamente.</p>
      
        <div class="howto-use">
          <div class="howto-use__title">
            <span>
              <i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <pre v-highlightjs>
            <code class="javascript">
  &lt;template&gt;
    &lt;div&gt;
      &lt;!-- Botões de controle --&gt;
      &lt;LeveOffcanvasTrigger context=&quot;primaryMenu&quot; /&gt;
      &lt;LeveOffcanvasTrigger context=&quot;secondaryMenu&quot; button-class=&quot;notification-btn&quot;&gt;
        &lt;i class=&quot;bell-icon&quot;&gt;&lt;/i&gt;
        &lt;span class=&quot;badge&quot;&gt;3&lt;/span&gt;
      &lt;/LeveOffcanvasTrigger&gt;

      &lt;!-- OffCanvas Primary Menu --&gt;
      &lt;LeveOffcanvas 
        v-model=&quot;menuOpen&quot; 
        title=&quot;Menu&quot;
        :show-internal-button=&quot;false&quot;
      &gt;
        &lt;!-- Itens do  do menu (slot) --&gt;
      &lt;/LeveOffcanvas&gt;

      &lt;!-- OffCanvas Secondary Menu --&gt;
      &lt;LeveOffcanvas 
        v-model=&quot;secondaryMenuOpen&quot; 
        title=&quot;Secondary Menu&quot;
        placement=&quot;end&quot;
        :show-internal-button=&quot;false&quot;
      &gt;
        &lt;!-- Itens do Secondary Menu (slot) --&gt;
      &lt;/LeveOffcanvas&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script setup&gt;
  import { ref, provide } from 'vue';
  import LeveOffcanvas from './components/LeveOffcanvas.vue';
  import LeveOffcanvasTrigger from './components/LeveOffcanvasTrigger.vue';

  const primaryMenuOpen = ref(false);
  const secondaryMenuOpen = ref(false);

  provide(&#39;primaryMenu&#39;, {
    isOpen: primaryMenuOpen,
    toggle: () =&gt; primaryMenuOpen.value = !primaryMenuOpen.value
  });

  provide(&#39;notifications&#39;, {
    isOpen: secondaryMenuOpen,
    toggle: () =&gt; secondaryMenuOpen.value = !secondaryMenuOpen.value
  });
  &lt;/script&gt;

            </code>
          </pre>

        </div>
              
      </section>

    <section id="description">
      <h4>Descrição</h4>   

      <div class="sidebar-separator"></div>
      <h5 class="mt-5">Propriedades (props)</h5>

      <table class="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Padrão</th>
            <th>Descrição</th>
            <th>Valores Válidos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>modelValue</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Controla a visibilidade do offcanvas</td>
            <td>true/false</td>
          </tr>
          <tr>
            <td>title</td>
            <td>String</td>
            <td>''</td>
            <td>Título exibido no cabeçalho do offcanvas</td>
            <td>Qualquer string</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>String</td>
            <td>'start'</td>
            <td>Posição do offcanvas na tela</td>
            <td>'start', 'end', 'top', 'bottom'</td>
          </tr>
          <tr>
            <td>id</td>
            <td>String</td>
            <td>'offcanvasNavbar'</td>
            <td>ID único para o elemento offcanvas</td>
            <td>Qualquer string única</td>
          </tr>
          <tr>
            <td>showBackdrop</td>
            <td>Boolean</td>
            <td>true</td>
            <td>Mostra o fundo escuro quando o offcanvas está aberto</td>
            <td>true/false</td>
          </tr>
          <tr>
            <td>breakpoint</td>
            <td>Number/String</td>
            <td>992</td>
            <td>Largura em pixels abaixo da qual o offcanvas é exibido</td>
            <td>Número positivo</td>
          </tr>
          <tr>
            <td>buttonClass</td>
            <td>String/Array/Object</td>
            <td>''</td>
            <td>Classes CSS para o botão interno</td>
            <td>Classes válidas</td>
          </tr>
          <tr>
            <td>buttonStyle</td>
            <td>String/Object</td>
            <td>null</td>
            <td>Estilos inline para o botão interno</td>
            <td>Objeto de estilos</td>
          </tr>
          <tr>
            <td>offcanvasClass</td>
            <td>String/Array/Object</td>
            <td>''</td>
            <td>Classes CSS para o elemento offcanvas</td>
            <td>Classes válidas</td>
          </tr>
          <tr>
            <td>offcanvasStyle</td>
            <td>String/Object</td>
            <td>null</td>
            <td>Estilos inline para o elemento offcanvas</td>
            <td>Objeto de estilos</td>
          </tr>
          <tr>
            <td>headerClass</td>
            <td>String/Array/Object</td>
            <td>''</td>
            <td>Classes CSS para o cabeçalho do offcanvas</td>
            <td>Classes válidas</td>
          </tr>
          <tr>
            <td>headerStyle</td>
            <td>String/Object</td>
            <td>null</td>
            <td>Estilos inline para o cabeçalho do offcanvas</td>
            <td>Objeto de estilos</td>
          </tr>
          <tr>
            <td>closeButtonClass</td>
            <td>String/Array/Object</td>
            <td>''</td>
            <td>Classes CSS para o botão de fechar</td>
            <td>Classes válidas</td>
          </tr>
          <tr>
            <td>closeButtonStyle</td>
            <td>String/Object</td>
            <td>null</td>
            <td>Estilos inline para o botão de fechar</td>
            <td>Objeto de estilos</td>
          </tr>
          <tr>
            <td>bodyClass</td>
            <td>String/Array/Object</td>
            <td>''</td>
            <td>Classes CSS para o corpo do offcanvas</td>
            <td>Classes válidas</td>
          </tr>
          <tr>
            <td>bodyStyle</td>
            <td>String/Object</td>
            <td>null</td>
            <td>Estilos inline para o corpo do offcanvas</td>
            <td>Objeto de estilos</td>
          </tr>
          <tr>
            <td>backdropClass</td>
            <td>String/Array/Object</td>
            <td>''</td>
            <td>Classes CSS para o backdrop</td>
            <td>Classes válidas</td>
          </tr>
          <tr>
            <td>backdropStyle</td>
            <td>String/Object</td>
            <td>null</td>
            <td>Estilos inline para o backdrop</td>
            <td>Objeto de estilos</td>
          </tr>
          <tr>
            <td>showInternalButton</td>
            <td>Boolean</td>
            <td>true</td>
            <td>Mostra o botão toggle interno</td>
            <td>true/false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Desabilita a interação com o offcanvas</td>
            <td>true/false</td>
          </tr>
        </tbody>
      </table>
      <br />


      <div class="sidebar-separator"></div>
      <h5 class="mt-5">Slots</h5>

      <table class="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Escopo</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>toggle-button</td>
            <td>{ toggle: Function, is-open: Boolean }</td>
            <td>Slot para substituir o botão toggle padrão</td>
          </tr>
          <tr>
            <td>header-title</td>
            <td>-</td>
            <td>Slot para substituir o título no cabeçalho</td>
          </tr>
          <tr>
            <td>offcanvas-nav</td>
            <td>-</td>
            <td>Slot para itens de navegação no offcanvas</td>
          </tr>
          <tr>
            <td>offcanvas-body</td>
            <td>-</td>
            <td>Slot para conteúdo principal do offcanvas</td>
          </tr>
        </tbody>
      </table>    
      <br />

      <div class="sidebar-separator"></div>
      <h5 class="mt-5">Métodos e Eventos</h5>
      <table class="table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Parâmetros</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Método</td>
            <td>toggleOffcanvas</td>
            <td>Alterna a visibilidade do offcanvas</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Evento</td>
            <td>update:modelValue</td>
            <td>Emitido quando a visibilidade muda</td>
            <td>isVisible: Boolean</td>
          </tr>
          <tr>
            <td>Evento</td>
            <td>toggle</td>
            <td>Emitido quando o offcanvas é aberto/fechado</td>
            <td>isVisible: Boolean</td>
          </tr>
        </tbody>
      </table>
      <br />

      <div class="sidebar-separator"></div>
      <h5 class="mt-5">Dados Fornecidos (Provide)</h5>
      <table class="table">
        <thead>
          <tr>
            <th>Propriedade</th>
            <th>Tipo</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>isOpen</td>
            <td>Ref&lt;Boolean&gt;</td>
            <td>Estado atual do offcanvas</td>
          </tr>
          <tr>
            <td>toggle</td>
            <td>Function</td>
            <td>Função para alternar o estado</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Computed&lt;Boolean&gt;</td>
            <td>Estado disabled</td>
          </tr>
        </tbody>
      </table>
    </section>


    <section id="description-offcanvasbutton">
      <h4>Descrição do componente LeveOffcanvasButton</h4>   

      <div class="sidebar-separator"></div>
      <h5 class="mt-5">Propriedades (props)</h5>
      <table class="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Padrão</th>
            <th>Descrição</th>
            <th>Valores Válidos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>isOpen</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Estado atual do offcanvas (aberto/fechado)</td>
            <td>true/false</td>
          </tr>
          <tr>
            <td>variant</td>
            <td>String</td>
            <td>'primary'</td>
            <td>Variante de estilo do botão</td>
            <td>'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'</td>
          </tr>
          <tr>
            <td>buttonClass</td>
            <td>String/Array/Object</td>
            <td>''</td>
            <td>Classes CSS adicionais para o botão</td>
            <td>Classes válidas</td>
          </tr>
          <tr>
            <td>buttonStyle</td>
            <td>String/Object</td>
            <td>null</td>
            <td>Estilos inline adicionais para o botão</td>
            <td>Objeto de estilos</td>
          </tr>
          <tr>
            <td>ariaControls</td>
            <td>String</td>
            <td>'offcanvasNavbar'</td>
            <td>ID do elemento controlado pelo botão</td>
            <td>Qualquer string</td>
          </tr>
          <tr>
            <td>ariaLabel</td>
            <td>String</td>
            <td>'Toggle navigation'</td>
            <td>Rótulo ARIA para acessibilidade</td>
            <td>Qualquer string</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Desabilita o botão</td>
            <td>true/false</td>
          </tr>
        </tbody>
      </table>
      <br />


      <div class="sidebar-separator"></div>
      <h5 class="mt-5">Slots</h5>
      <table class="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Conteúdo Padrão</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default</td>
            <td>Slot para conteúdo personalizado do botão</td>
            <td>&lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;</td>
          </tr>
        </tbody>
      </table>
      <br />

      <div class="sidebar-separator"></div>
      <h5 class="mt-5">Métodos e Eventos</h5>
      <table class="table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Parâmetros</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Método</td>
            <td>handleClick</td>
            <td>Manipula o clique no botão</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Evento</td>
            <td>toggle</td>
            <td>Emitido quando o botão é clicado</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <br />

      <div class="sidebar-separator"></div>
      
    </section>


    <section id="description-offcanvastrigger">
      <h4>Descrição do componente LeveOffcanvasTrigger</h4>   

      <div class="sidebar-separator"></div>
      <h5 class="mt-5">Propriedades (props)</h5>
      <table class="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Padrão</th>
            <th>Descrição</th>
            <th>Obrigatório</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>buttonClass</td>
            <td>String/Array/Object</td>
            <td>''</td>
            <td>Classes CSS adicionais para o botão</td>
            <td>Não</td>
          </tr>
          <tr>
            <td>buttonStyle</td>
            <td>String/Object</td>
            <td>null</td>
            <td>Estilos inline adicionais para o botão</td>
            <td>Não</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Desabilita o botão independentemente do contexto</td>
            <td>Não</td>
          </tr>
          <tr>
            <td>ariaControls</td>
            <td>String</td>
            <td>-</td>
            <td>ID do elemento controlado pelo botão (herdado do contexto se não fornecido)</td>
            <td>Não</td>
          </tr>
          <tr>
            <td>ariaLabel</td>
            <td>String</td>
            <td>-</td>
            <td>Rótulo ARIA para acessibilidade (herdado do contexto se não fornecido)</td>
            <td>Não</td>
          </tr>
          <tr>
            <td>context</td>
            <td>String</td>
            <td>'leveOffcanvas'</td>
            <td>Nome do contexto injetado a ser utilizado</td>
            <td>Não</td>
          </tr>
        </tbody>
      </table>    
      <br />


      <div class="sidebar-separator"></div>
      <h5 class="mt-5">Slots</h5>
      <table class="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Conteúdo Padrão</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default</td>
            <td>Slot para conteúdo personalizado do botão</td>
            <td>&lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;</td>
          </tr>
        </tbody>
      </table>
      <br />

      <div class="sidebar-separator"></div>
      <h5 class="mt-5">Métodos e Eventos</h5>
      <table class="table">
        <thead>
          <tr>
            <th>Método</th>
            <th>Descrição</th>
            <th>Comportamento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>handleToggle()</td>
            <td>Handler para o evento de clique</td>
            <td>
              - Checa estado disabled<br>
              - Delega toggle para o contexto<br>
              - Fallback com warning se sem contexto
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      
      <div class="sidebar-separator"></div>
      <h5 class="mt-5">Dependências de Contexto</h5>
      <table class="table">
        <thead>
          <tr>
            <th>Propriedade</th>
            <th>Tipo</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>isOpen</td>
            <td>Ref&lt;Boolean&gt;</td>
            <td>Estado atual do offcanvas (injetado do contexto)</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Computed&lt;Boolean&gt;</td>
            <td>Estado disabled (combinado com prop local)</td>
          </tr>
          <tr>
            <td>toggle</td>
            <td>Function</td>
            <td>Função para alternar o estado (injetado do contexto)</td>
          </tr>
        </tbody>
      </table>
      <br />
      
    </section>

    </template>

    <template #aside-right>
      <leve-fixednav>
        <template #list-links>
          <li class="detail-entry detail-h2">
            <a href="#introduction">Introdução</a>
          </li>
          <li class="detail-entry detail-h2">
            <a href="#leveoffcanvas-basic">Uso básico</a>
          </li>
          <li class="detail-entry detail-h2">
            <a href="#leveoffcanvas-provide-inject">Uso com Provide/Inject</a>
          </li>
          <li class="detail-entry detail-h2">
            <a href="#leveoffcanvas-conditional">Uso com Desabilitação Condicional</a>
          </li>
          <li class="detail-entry detail-h2">
            <a href="#leveoffcanvas-multiple">Uso Avançado com Múltiplos OffCanvases</a>
          </li>
          <li class="detail-entry detail-h2">
            <a href="#description">Descrição</a>
              <ul>
                <li class="detail-entry detail-h2"><a href="#description">LeveOffcanvas</a></li>
                <li class="detail-entry detail-h2"><a href="#description-offcanvasbutton">LeveOffcanvasButton</a></li>
                <li class="detail-entry detail-h2"><a href="#description-offcanvastrigger">LeveOffcanvasTrigger</a></li>
              </ul>
          </li>      
        </template>
      </leve-fixednav>
    </template>
  </leve-wrapper>
</template>

<script setup>
import LeveWrapper from '@/views/layout/LeveWrapper.vue';
import LeveFixednav from '@/components/LeveFixednav.vue';
</script>
