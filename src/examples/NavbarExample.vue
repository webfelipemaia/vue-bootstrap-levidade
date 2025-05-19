<template>
  <leve-wrapper>
    <template #content-top>
      <section id="introduction">
        <h3>Navbar</h3>
        <p><strong>LeveNavbar</strong> é o componente principal da barra de navegação que pode ser configurado como
          container flexível ou com comportamento responsivo padrão.</p>
      </section>
    </template>
    <template #content-middle>

      <section id="how-to-use">
        <br />
        <h4 class="mt-5">Como usar</h4>
        <div class="sidebar-separator"></div>
        <h5 id="alert-basic">Uso básico</h5>

        <div class="howto-use__title">
          <span>
            <i class="bi bi-code-slash"></i> code
          </span>
        </div>

        <pre v-highlightjs>
            <code class="javascript">
&lt;NavbarMain bg-color=&quot;bg-primary&quot;&gt;
  &lt;template #navbar-brand&gt;
    &lt;leve-image 
      :src=&quot;&#39;https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg&#39;&quot; 
      alt=&quot;Descri&ccedil;&atilde;o&quot;
      :thumbnailWidth=&quot;30&quot; 
      :thumbnailHeight=&quot;24&quot;
    &gt;
      Bootstrap
    &lt;/leve-image&gt;
  &lt;/template&gt;

  &lt;template #navbar-nav&gt;
    &lt;NavbarNav :items=&quot;navItems&quot; /&gt;
  &lt;/template&gt;

  &lt;template #navbar-search&gt;
    &lt;NavbarSearch 
      placeholder=&quot;Buscar...&quot; 
      button-icon=&quot;bi bi-search&quot; 
      show-button-icon 
    /&gt;
  &lt;/template&gt;
&lt;/NavbarMain&gt;              
            </code>
        </pre>

        <br />

        <div class="howto-use__title">
          <span>
            <i class="bi bi-eye"></i> preview
          </span>
        </div>
        <br />

        <NavbarMain bg-color="bg-warning">
          <template #navbar-brand>
            <leve-image :src="'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg'" alt="Descrição"
              :thumbnailWidth="30" :thumbnailHeight="24">
              Bootstrap
            </leve-image>
          </template>

          <template #navbar-nav>
            <NavbarNav :items="navItems" />
          </template>

          <template #navbar-search>
            <NavbarSearch placeholder="Buscar..." button-icon="bi bi-search" show-button-icon />
          </template>
        </NavbarMain>

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
              <td>containerType</td>
              <td>String</td>
              <td><code>'container-fluid'</code></td>
              <td>Tipo de container ('container' ou 'container-fluid')</td>
            </tr>
            <tr>
              <td>bgColor</td>
              <td>String</td>
              <td><code>'bg-body-primary'</code></td>
              <td>Classe de cor de fundo para a navbar</td>
            </tr>
            <tr>
              <td>textColor</td>
              <td>String</td>
              <td><code>null</code></td>
              <td>Classe de cor de texto ('navbar-light' ou 'navbar-dark')</td>
            </tr>
            <tr>
              <td>expandSize</td>
              <td>String</td>
              <td><code>'lg'</code></td>
              <td>Tamanho de breakpoint para expansão ('sm', 'md', 'lg', 'xl', 'xxl')</td>
            </tr>
            <tr>
              <td>additionalClasses</td>
              <td>String</td>
              <td><code>''</code></td>
              <td>Classes CSS adicionais</td>
            </tr>
            <tr>
              <td>collapseNavId</td>
              <td>String</td>
              <td><code>'navbarMainCollapse'</code></td>
              <td>ID para o elemento de collapse</td>
            </tr>
            <tr>
              <td>isActiveFlexContainer</td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>Se verdadeiro, usa um container flex simples</td>
            </tr>
          </tbody>
        </table>


        <h5 class="mt-5">Métodos e Eventos</h5>
        <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Parâmetros</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>updateCollapseState</td>
              <td><code>newState: Boolean</code></td>
              <td>Atualiza o estado do collapse (aberto/fechado)</td>
            </tr>
          </tbody>
        </table>

      </section>


      <section id="how-to-use">
        <h5 id="alert-basic">Brand</h5>
        <p>Exibe a identidade visual da aplicação com texto e ícone opcional.</p>

        <div class="howto-use__title">
          <span>
            <i class="bi bi-code-slash"></i> code
          </span>
        </div>

        <pre v-highlightjs>
          <code class="javascript">

          </code>
        </pre>

        <NavbarMain bg-color="bg-light">
          <template #navbar-brand>
            <leve-image :src="'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg'" alt="Descrição"
              :thumbnailWidth="30" :thumbnailHeight="24">
              Bootstrap
            </leve-image>
          </template>
        </NavbarMain>
      </section>

      <section id="how-to-use">
        <h5 id="alert-basic">Navbar</h5>
        <p>Cria menus de navegação hierárquicos com suporte a dropdowns e ícones.</p>

        <div class="howto-use__title">
          <span>
            <i class="bi bi-code-slash"></i> code
          </span>
        </div>

        <pre v-highlightjs>
          <code class="javascript">

          </code>
        </pre>

        <NavbarMain bg-color="bg-light">
          <template #navbar-nav>
            <NavbarNav :items="navItems" />
          </template>
        </NavbarMain>
      </section>

      <section id="how-to-use">
        <h5 id="alert-basic">Search</h5>
        <p>Adiciona funcionalidade de busca com estilização personalizável.</p>

        <div class="howto-use__title">
          <span>
            <i class="bi bi-code-slash"></i> code
          </span>
        </div>

        <pre v-highlightjs>
          <code class="javascript">

          </code>
        </pre>

        <NavbarMain bg-color="bg-light">
          <template #navbar-search>
            <NavbarSearch
              placeholder="Pesquisar produtos..."
              button-text="Buscar"
              button-icon="bi bi-search"
              show-button-icon
            />
          </template>
        </NavbarMain>
      </section>


      <section id="how-to-use">
        <h5 id="alert-basic">NavbarToggle (Botão Mobile)</h5>
        <p>Controla a visibilidade do menu em dispositivos móveis. O botão é gerado automaticamente.</p>

        <div class="howto-use__title">
          <span>
            <i class="bi bi-code-slash"></i> code
          </span>
        </div>

        <pre v-highlightjs>
          <code class="javascript">

          </code>
        </pre>

        <NavbarMain bg-color="bg-light">
          <template #navbar-search>
            <NavbarSearch
              placeholder="Pesquisar produtos..."
              button-text="Buscar"
              button-icon="bi bi-search"
              show-button-icon
              button-class="btn-outline-success"
            />
          </template>
        </NavbarMain>
      </section>

    </template>

    <template #aside-right>
      <leve-fixednav>
        <template #list-links>
          <li class="detail-entry detail-h2">
            <a href="#introduction">Introdução</a>
          </li>
          <li class="detail-entry detail-h2"><a href="#description">Description</a></li>
          <li class="detail-entry detail-h2"><a href="#features">Features</a></li>
          <li class="detail-entry detail-h2"><a href="#technologies">Technologies</a></li>
        </template>
      </leve-fixednav>
    </template>
  </leve-wrapper>
</template>

<script setup>
import LeveWrapper from '@/views/layout/LeveWrapper.vue';
import LeveFixednav from '@/components/LeveFixednav.vue';
import NavbarMain from '@/components/navbar/NavbarMain.vue';
import NavbarNav from '@/components/navbar/NavbarNav.vue';
import NavbarSearch from '@/components/navbar/NavbarSearch.vue';
import LeveImage from '@/components/image/LeveImage.vue';

const navItems = [
  {
    text: 'Home',
    href: '/',
    active: false, // Estado inicial
    icon: 'bi bi-house'
  },
  {
    text: 'Index',
    href: '/doc',
    active: false, // Estado inicial
    icon: 'bi bi-person'
  },
  {
    text: 'Dropdown',
    dropdown: true,
    items: [
      { text: 'Accordion', href: '/doc/accordion', active: false },
      { text: 'Alert', href: '/doc/alert', active: false }, // Ativo por padrão
      { isDivider: true },
      { text: 'Badge', href: '/doc/badge', active: false }
    ]
  }
]
</script>
