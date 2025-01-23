<template>
  <leve-wrapper>
    <template #content-top>
      <section id="introduction">
        <h3>Dropdown</h3>
        <p>O componente LeveDropdown é um elemento de interface de usuário personalizável, desenvolvido com Vue 3,
          que oferece uma maneira intuitiva de exibir opções ou ações em um menu suspenso. Ele é projetado para ser
          flexível, permitindo ajustes no estilo, comportamento e posicionamento, com suporte à acessibilidade e
          responsividade.</p>


      </section>
    </template>
    <template #content-middle>

      <section id="how-to-use">
        <h4 class="mt-5">Como usar</h4>
        <div class="sidebar-separator"></div>
        <h5 id="dropdown-basic">Formas de usar</h5>
        <p>O componente <strong>Dropdown</strong> é ideal para:</p>
        <ul>
          <li>Menus de navegação compactos.</li>
          <li>Listas de ações rápidas, como configurações, downloads ou filtros.</li>
          <li>Interfaces que demandam menus dinâmicos e acessíveis.</li>
        </ul>
        <p>
          Com seu design modular e responsivo, o <strong>Dropdown</strong> pode ser facilmente integrado a projetos
          modernos,
          oferecendo uma experiência de usuário consistente e personalizável.
        </p>

        <div class="howto-use">

          <h5 class="dropdowns-button mt-5">Uso básico</h5>
          <div class="howto-use__title">
            <span>
              <i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <pre v-highlightjs><code class="javascript">
&lt;leve-dropdown title=&quot;Dropdown&quot; btn-class=&quot;btn-primary&quot;&gt;
    &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
    &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
    &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;/leve-dropdown&gt;            
          </code></pre>

          <br />

          <div class="howto-use__title">
            <span>
              <i class="bi bi-eye"></i> preview
            </span>
          </div>


          <leve-dropdown title="Dropdown"  btn-class="btn-primary">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </leve-dropdown>
        </div>
        <br />

        <div class="howto-use mt-5">

          <h5 id="dropdown-split" class="dropdowns-split">Split</h5>
          <div class="howto-use__title">
            <span>
              <i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <pre v-highlightjs><code class="javascript">
&lt;leve-dropdown title=&quot;Download&quot; btn-split btn-class=&quot;btn-primary&quot;&gt;
    &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;PDF&lt;/a&gt;
    &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Excel&lt;/a&gt;
&lt;/leve-dropdown&gt;            
            </code></pre>

          <br />

          <div class="howto-use__title">
            <span>
              <i class="bi bi-eye"></i> preview
            </span>
          </div>

          <leve-dropdown title="Download" btn-split btn-class="btn-primary">
            <a class="dropdown-item" href="#">PDF</a>
            <a class="dropdown-item" href="#">Excel</a>
          </leve-dropdown>

        </div>
        <br />


        <div class="howto-use mt-5">

          <h5 id="dropdown-themes">Temas</h5>
          <div class="howto-use__title">
            <span>
              <i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <pre v-highlightjs><code class="javascript">
&lt;div class=&quot;hstack gap-3&quot;&gt;
    &lt;leve-dropdown title=&quot;Primary&quot; btnClass=&quot;btn-primary&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example 2&lt;/a&gt;
    &lt;/leve-dropdown&gt;

    &lt;leve-dropdown title=&quot;Secondary&quot; btnClass=&quot;btn-secondary&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example 2&lt;/a&gt;
    &lt;/leve-dropdown&gt;

    &lt;leve-dropdown title=&quot;Success&quot; btnClass=&quot;btn-success&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example 2&lt;/a&gt;
    &lt;/leve-dropdown&gt;

    &lt;leve-dropdown title=&quot;Info&quot; btnClass=&quot;btn-info&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example 2&lt;/a&gt;
    &lt;/leve-dropdown&gt;

    &lt;leve-dropdown title=&quot;Warning&quot; btnClass=&quot;btn-warning&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example 2&lt;/a&gt;
    &lt;/leve-dropdown&gt;

    &lt;leve-dropdown title=&quot;Danger&quot; btnClass=&quot;btn-danger&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example 2&lt;/a&gt;
    &lt;/leve-dropdown&gt;

    &lt;leve-dropdown title=&quot;Light&quot; btnClass=&quot;btn-light&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example 2&lt;/a&gt;
    &lt;/leve-dropdown&gt;

    &lt;leve-dropdown title=&quot;Dark&quot; btnClass=&quot;btn-dark&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example 2&lt;/a&gt;
    &lt;/leve-dropdown&gt;

    &lt;leve-dropdown title=&quot;Default&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Example 2&lt;/a&gt;
    &lt;/leve-dropdown&gt;
&lt;/div&gt;            
            </code></pre>

          <br />

          <div class="howto-use__title">
            <span>
              <i class="bi bi-eye"></i> preview
            </span>
          </div>

          <div class="hstack gap-3">
            <leve-dropdown title="Primary" btnClass="btn-primary">
              <a class="dropdown-item" href="#">Example</a>
              <a class="dropdown-item" href="#">Example 2</a>
            </leve-dropdown>
            <leve-dropdown title="Secondary" btnClass="btn-secondary">
              <a class="dropdown-item" href="#">Example</a>
              <a class="dropdown-item" href="#">Example 2</a>
            </leve-dropdown>
            <leve-dropdown title="Success" btnClass="btn-success">
              <a class="dropdown-item" href="#">Example</a>
              <a class="dropdown-item" href="#">Example 2</a>
            </leve-dropdown>
            <leve-dropdown title="Info" btnClass="btn-info">
              <a class="dropdown-item" href="#">Example</a>
              <a class="dropdown-item" href="#">Example 2</a>
            </leve-dropdown>
            <leve-dropdown title="Warning" btnClass="btn-warning">
              <a class="dropdown-item" href="#">Example</a>
              <a class="dropdown-item" href="#">Example 2</a>
            </leve-dropdown>
            <leve-dropdown title="Danger" btnClass="btn-danger">
              <a class="dropdown-item" href="#">Example</a>
              <a class="dropdown-item" href="#">Example 2</a>
            </leve-dropdown>
            <leve-dropdown title="Light" btnClass="btn-light">
              <a class="dropdown-item" href="#">Example</a>
              <a class="dropdown-item" href="#">Example 2</a>
            </leve-dropdown>
            <leve-dropdown title="Dark" btnClass="btn-dark">
              <a class="dropdown-item" href="#">Example</a>
              <a class="dropdown-item" href="#">Example 2</a>
            </leve-dropdown>
            <leve-dropdown title="Default">
              <a class="dropdown-item" href="#">Example</a>
              <a class="dropdown-item" href="#">Example 2</a>
            </leve-dropdown>
          </div>

        </div>
        <br />


        <div class="howto-use mt-5">

          <h5 id="dropdown-sizes">Tamanhos</h5>
          <div class="howto-use__title">
            <span>
              <i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <pre v-highlightjs><code class="javascript">
&lt;div class=&quot;hstack gap-3&quot;&gt;
    &lt;leve-dropdown title=&quot;Dropdown sm&quot; btnClass=&quot;btn-primary&quot; size=&quot;sm&quot;&gt;
        &lt;div&gt;
            &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Opção 1&lt;/a&gt;
            &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Opção 2&lt;/a&gt;
        &lt;/div&gt;
    &lt;/leve-dropdown&gt;

    &lt;leve-dropdown title=&quot;Dropdown normal&quot; btnClass=&quot;btn-primary&quot;&gt;
        &lt;div&gt;
            &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Opção 1&lt;/a&gt;
            &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Opção 2&lt;/a&gt;
        &lt;/div&gt;
    &lt;/leve-dropdown&gt;

    &lt;leve-dropdown title=&quot;Dropdown lg&quot; btnClass=&quot;btn-success&quot; size=&quot;lg&quot;&gt;
        &lt;div&gt;
            &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Opção 1&lt;/a&gt;
            &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Opção 2&lt;/a&gt;
        &lt;/div&gt;
    &lt;/leve-dropdown&gt;
&lt;/div&gt;            
            </code></pre>

          <br />

          <div class="howto-use__title">
            <span>
              <i class="bi bi-eye"></i> preview
            </span>
          </div>


          <div class="hstack gap-3">
            <leve-dropdown title="Dropdown sm" btnClass="btn-primary" size="sm">
              <div>
                <a class="dropdown-item" href="#">Opção 1</a>
                <a class="dropdown-item" href="#">Opção 2</a>
              </div>
            </leve-dropdown>

            <leve-dropdown title="Dropdown normal" btnClass="btn-primary">
              <div>
                <a class="dropdown-item" href="#">Opção 1</a>
                <a class="dropdown-item" href="#">Opção 2</a>
              </div>
            </leve-dropdown>

            <leve-dropdown title="Dropdown lg" btnClass="btn-success" size="lg">
              <div>
                <a class="dropdown-item" href="#">Opção 1</a>
                <a class="dropdown-item" href="#">Opção 2</a>
              </div>
            </leve-dropdown>
          </div>
        </div>


        <div class="howto-use mt-5">

          <h5 id="dropdown-offset">Offset</h5>

          <p>Modifica a referência do menu suspenso (dropdown) em relação ao botão ou elemento de ativação.</p>

          <div class="howto-use__title">
            <span>
              <i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <pre v-highlightjs><code class="javascript">
&lt;leve-dropdown title=&quot;offset=&#39;40,20&#39;&quot; btn-class=&quot;btn-info&quot;
    dropdown-class=&quot;dropdown-menu-end dropdown-menu-lg-start&quot; offset=&quot;40,20&quot;&gt;
    &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
    &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
    &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;/leve-dropdown&gt;            
            </code></pre>

          <br />

          <div class="howto-use__title">
            <span>
              <i class="bi bi-eye"></i> preview
            </span>
          </div>

          <leve-dropdown title="offset='40,20'" btn-class="btn-info"
            dropdown-class="dropdown-menu-end dropdown-menu-lg-start" offset="40,20">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </leve-dropdown>
        </div>

      </section>

      <br />
      <div class="sidebar-separator"></div>


      <section id="how-to-use">
        <br />
        <h4 id="dropdown-position" class="mt-5">Posicionamento</h4>


        <div class="howto-use mt-5">

          <h5 id="dropdown-directions">Direção</h5>
          <div class="howto-use__title">
            <span>
              <i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <pre v-highlightjs><code class="javascript">
// os outros exemplos são similares a este
&lt;div class=&quot;hstack gap-3&quot;&gt;
    &lt;leve-dropdown title=&quot;top-start&quot; placement=&quot;top-start&quot; btn-class=&quot;btn-primary&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Configurações&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Ajuda&lt;/a&gt;
    &lt;/leve-dropdown&gt;

    &lt;leve-dropdown title=&quot;top&quot; placement=&quot;top&quot; btn-class=&quot;btn-primary&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Configurações&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Ajuda&lt;/a&gt;
    &lt;/leve-dropdown&gt;

    &lt;leve-dropdown title=&quot;top-end&quot; placement=&quot;top-end&quot; btn-class=&quot;btn-primary&quot;&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Configurações&lt;/a&gt;
        &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Ajuda&lt;/a&gt;
    &lt;/leve-dropdown&gt;
&lt;/div&gt;  
          </code></pre>

          <br />

          <div class="howto-use__title">
            <span>
              <i class="bi bi-eye"></i> preview
            </span>
          </div>

          <h6>top</h6>
          <div class="hstack gap-3">
            <leve-dropdown title="top-start" placement="top-start" btn-class="btn-primary">
            <a class="dropdown-item" href="#">Configurações</a>
            <a class="dropdown-item" href="#">Ajuda</a>
          </leve-dropdown>
            <leve-dropdown title="top" placement="top" btn-class="btn-primary">
            <a class="dropdown-item" href="#">Configurações</a>
            <a class="dropdown-item" href="#">Ajuda</a>
          </leve-dropdown>
            <leve-dropdown title="top-end" placement="top-end" btn-class="btn-primary">
            <a class="dropdown-item" href="#">Configurações</a>
            <a class="dropdown-item" href="#">Ajuda</a>
          </leve-dropdown>
          </div>
          <br>
          <h6>right</h6>
          <div class="hstack gap-3">
            <leve-dropdown title="right-start" placement="right-start" btn-class="btn-primary">
            <a class="dropdown-item" href="#">Configurações</a>
            <a class="dropdown-item" href="#">Ajuda</a>
          </leve-dropdown>
            <leve-dropdown title="right" placement="right" btn-class="btn-primary">
            <a class="dropdown-item" href="#">Configurações</a>
            <a class="dropdown-item" href="#">Ajuda</a>
          </leve-dropdown>
            <leve-dropdown title="right-end" placement="right-end" btn-class="btn-primary">
            <a class="dropdown-item" href="#">Configurações</a>
            <a class="dropdown-item" href="#">Ajuda</a>
          </leve-dropdown>
          </div>
          <br>
          <h6>bottom</h6>
          <div class="hstack gap-3">
            <leve-dropdown title="bottom-start" placement="bottom-start" btn-class="btn-primary">
            <a class="dropdown-item" href="#">Configurações</a>
            <a class="dropdown-item" href="#">Ajuda</a>
          </leve-dropdown>
            <leve-dropdown title="bottom" placement="bottom" btn-class="btn-primary">
            <a class="dropdown-item" href="#">Configurações</a>
            <a class="dropdown-item" href="#">Ajuda</a>
          </leve-dropdown>
            <leve-dropdown title="bottom-end" placement="right-end" btn-class="btn-primary">
            <a class="dropdown-item" href="#">Configurações</a>
            <a class="dropdown-item" href="#">Ajuda</a>
          </leve-dropdown>
          </div>
          <br>
          <h6>left</h6>
          <div class="hstack gap-3">
            <leve-dropdown title="left-start" placement="left-start" btn-class="btn-primary">
            <a class="dropdown-item" href="#">Configurações</a>
            <a class="dropdown-item" href="#">Ajuda</a>
          </leve-dropdown>
            <leve-dropdown title="left" placement="left" btn-class="btn-primary">
            <a class="dropdown-item" href="#">Configurações</a>
            <a class="dropdown-item" href="#">Ajuda</a>
          </leve-dropdown>
            <leve-dropdown title="left-end" placement="left-end" btn-class="btn-primary">
            <a class="dropdown-item" href="#">Configurações</a>
            <a class="dropdown-item" href="#">Ajuda</a>
          </leve-dropdown>
          </div>
        </div>
        <br />

        <div class="howto-use mt-5">

          <h5 id="dropdown-alignment">Alinhamento</h5>
          <p>O Bootstrap disponibiliza muitas <a href="https://getbootstrap.com/docs/5.3/components/dropdowns/#menu-alignment">opções de utilização de alinhamento</a>, pois considera também a responsividade. 
            Portanto, caso seja necessário, <a href="https://getbootstrap.com/docs/5.3/components/dropdowns/#menu-alignment">consulte a API</a> para saber como alinhar da maneira que preferir</p>
        </div>
        <br />
      </section>

      <br />

      <section id="dropdown-content">
        <br />
        <h4 class="mt-5">Conteúdo</h4>
        <p>Os exemplos que se seguem são para demonstrar os estados dos itens do menu Dropdown disponíveis na distribuição 
          -do Bootstratp. Como não há componentes filhos, faz-se necessário utilizar o menu, tal como é feito <a href="https://getbootstrap.com/docs/5.3/components/dropdowns/#menu-items">
            na documentação</a>. Em um único exemplo, veja as opções disponíveis.</p>

        <div class="howto-use mt-5">

          <h5 id="dropdown-items" class="dropdown-items">Itens</h5>
          <div class="howto-use__title">
            <span>
              <i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <pre v-highlightjs><code class="javascript">
&lt;ul class=&quot;dropdown-menu d-block position-static&quot;&gt;
    &lt;li&gt;&lt;span class=&quot;dropdown-item-text&quot;&gt;Dropdown item text&lt;/span&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Regular item&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class=&quot;dropdown-item active&quot; href=&quot;#&quot;&gt;Active item&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Regular item&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class=&quot;dropdown-item disabled&quot; aria-disabled=&quot;true&quot;&gt;Disabled item&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;  
          </code></pre>

          <br />

          <div class="howto-use__title">
            <span>
              <i class="bi bi-eye"></i> preview
            </span>
          </div>
          
          <h6 id="dropdown-options">Non-iterative, active, disabled</h6>
          <ul class="dropdown-menu d-block position-static">
            <li><span class="dropdown-item-text">Dropdown item text</span></li>
            <li><a class="dropdown-item" href="#">Regular item</a></li>
            <li><a class="dropdown-item active" href="#">Active item</a></li>
            <li><a class="dropdown-item" href="#">Regular item</a></li>
            <li><a class="dropdown-item disabled" aria-disabled="true">Disabled item</a></li>
          </ul>
        </div>
        <p class="mt-3">As classes <code>.dropdown-item-text</code>, <code>.active</code> e <code>.disabled</code> promovem respectivamente
              as ações de <mark>tornar não interativo</mark>, <mark>manter ativo</mark> e <mark>desativar</mark> um item de menu.</p>
            
        <br />

        <div class="howto-use mt-5">

          <h5 id="dropdown-layout">Layout</h5>
          <div class="howto-use__title">
            <span>
              <i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <pre v-highlightjs><code class="javascript">
//Header, dividers e text
&lt;ul class=&quot;dropdown-menu d-block position-static&quot;&gt;
    &lt;li&gt;&lt;h6 class=&quot;dropdown-header&quot;&gt;Dropdown header&lt;/h6&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;hr class=&quot;dropdown-divider&quot;&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

// texto
&lt;ul class=&quot;dropdown-menu&quot;&gt;
    &lt;p&gt;
        Some example text that's free-flowing within the dropdown menu.
    &lt;/p&gt;
    &lt;p class=&quot;mb-0&quot;&gt;
        And this is more example text.
    &lt;/p&gt;
&lt;/ul&gt;  
          </code></pre>

          <br />

          <div class="howto-use__title">
            <span>
              <i class="bi bi-eye"></i> preview
            </span>
          </div>


          <h6 id="dropdown-options2">Header, dividers e text</h6>
          <ul class="dropdown-menu d-block position-static">
            <li><h6 class="dropdown-header">Dropdown header</h6></li>
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
          <br>
          <h6>Texto</h6>
          <ul class="dropdown-menu  p-4 d-block position-static">
            <p>
              Some example text that's free-flowing within the dropdown menu.
            </p>
            <p class="mb-0">
              And this is more example text.
            </p>
          </ul>
        </div>

        <br />
      </section>

      <br />


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
              <td>title</td>
              <td>String</td>
              <td>""</td>
              <td>Define o texto exibido no botão do dropdown.</td>
            </tr>
            <tr>
              <td>placement</td>
              <td>String</td>
              <td>"bottom-start"</td>
              <td>Define o posicionamento do dropdown (valores aceitos: "auto", "top", "bottom", "left", "right", etc.).</td>
            </tr>
            <tr>
              <td>btnClass</td>
              <td>String</td>
              <td>""</td>
              <td>Adiciona classes personalizadas ao botão do dropdown.</td>
            </tr>
            <tr>
              <td>btnSplit</td>
              <td>Boolean</td>
              <td>false</td>
              <td>Se true, separa o botão principal e o botão de toggle do dropdown.</td>
            </tr>
            <tr>
              <td>dropdownClass</td>
              <td>String</td>
              <td>""</td>
              <td>Adiciona classes personalizadas ao menu do dropdown.</td>
            </tr>
            <tr>
              <td>offset</td>
              <td>String</td>
              <td>"0,0"</td>
              <td>Define o deslocamento do menu dropdown em relação ao botão (formato: "x,y").</td>
            </tr>
            <tr>
              <td>size</td>
              <td>String</td>
              <td>null</td>
              <td>Define o tamanho do botão do dropdown. Valores aceitos: "sm" (pequeno), "lg" (grande) ou null.</td>
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
              <th>Parâmetros do Callback</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>switchState</td>
              <td>Método</td>
              <td>Alterna o estado de visibilidade do dropdown.</td>
              <td>—</td>
            </tr>
            <tr>
              <td>@click</td>
              <td>Evento</td>
              <td>Disparado ao clicar em qualquer item do menu do dropdown.</td>
              <td>(event: Event)</td>
            </tr>
            <tr>
              <td>@toggle</td>
              <td>Evento</td>
              <td>Emitido quando o estado do dropdown muda (abre ou fecha).</td>
              <td>(isShow: Boolean)</td>
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
              <li class="detail-entry detail-h2"><a href="#dropdown-basic">Uso básico</a></li>
              <li class="detail-entry detail-h2"><a href="#dropdown-split">Split</a></li>
              <li class="detail-entry detail-h2"><a href="#dropdown-themes">Temas</a></li>
              <li class="detail-entry detail-h2"><a href="#dropdown-sizes">Tamanhos</a></li>
              <li class="detail-entry detail-h2"><a href="#dropdown-directions">Offset</a></li>              
            </ul>
          </li>

          <li class="detail-entry detail-h2"><a href="#dropdown-position">Posicionamento</a>
            <ul>
              <li class="detail-entry detail-h2"><a href="#dropdown-directions">Direção</a></li>
              <li class="detail-entry detail-h2"><a href="#dropdown-alignment">Alinhamento</a></li>
              <li class="detail-entry detail-h2"><a href="#dropdown-content">Conteúdo</a></li>
              <li class="detail-entry detail-h2"><a href="#dropdown-items">Itens</a></li>
              <li class="detail-entry detail-h2"><a href="#dropdown-options">Non-iterative, active, disabled</a></li>
              <li class="detail-entry detail-h2"><a href="#dropdown-layout">Layout</a></li>
              <li class="detail-entry detail-h2"><a href="#dropdown-options2">Header, dividers e text</a></li>
              
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