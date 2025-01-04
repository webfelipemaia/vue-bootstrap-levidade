<template>
  <leve-wrapper>
    <template #content-top>
      <section id="introduction">
        <h3>Breadcrumb</h3>
        <p>É um componente Vue que exibe uma trilha de navegação hierárquica, indicando a localização atual do usuário
          dentro da
          aplicação. Ele permite a personalização do separador entre os itens.</p>
        <p>O <strong>LeveBreadcrumb</strong> é o contêiner principal para a trilha de navegação. Ele aceita itens como
          filhos para formar a estrutura
          de navegação e permite personalizar o separador entre os itens. O <strong>LeveBreadcrumbItem</strong> é usado
          para representar cada item na trilha de navegação. Ele pode ser um link clicável ou apenas
          texto, com a opção de exibir ícones.</p>
      </section>
    </template>
    <template #content-middle>

      <section id="how-to-use">
        <br />
        <h4 class="mt-5">Como usar</h4>
        <div class="sidebar-separator"></div>

        <h5 id="breadcrumb-basic">Uso básico</h5>
        <p>O subcomponente usa uma lista não ordenada para organizar os itens.</p>

        <div class="howto-use">
          <div class="howto-use__title">
            <span><i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <!-- Código do exemplo implementado -->
          <pre v-highlightjs><code class="javascript">
    &lt;leve-breadcrumb&gt;
      &lt;leve-breadcrumb-item :link="'#1'"&gt;Início&lt;/leve-breadcrumb-item&gt;
      &lt;leve-breadcrumb-item :link="'#2'"&gt;Componentes&lt;/leve-breadcrumb-item&gt;
    &lt;/leve-breadcrumb&gt;        
      </code></pre>

          <br />

          <div class="howto-use__title">
            <span><i class="bi bi-eye"></i>
              preview
            </span>
          </div>

          <leve-breadcrumb>
            <leve-breadcrumb-item :link="'#1'">Início</leve-breadcrumb-item>
            <leve-breadcrumb-item :link="'#2'">Componentes</leve-breadcrumb-item>
          </leve-breadcrumb>

          <br />
          <br />


          <h5 id="breadcrumb-active">Item ativo</h5>
          <p>Um item pode representar a página atual, bastando configurar o atributo <code>aria-current</code> para
            <code>page</code>.
            Para indicar que um item está selecionado, basta adicionar a classe <code>active</code> informando a
            propriedade <code>is-active</code> ao item.</p>

          <div class="howto-use__title">
            <span><i class="bi bi-code-slash"></i> code
            </span>
          </div>

          <!-- Código do exemplo implementado -->
          <pre v-highlightjs><code class="javascript">
    &lt;leve-breadcrumb&gt;
      &lt;leve-breadcrumb-item :link="'#1'"&gt;Home&lt;/leve-breadcrumb-item&gt;
      &lt;leve-breadcrumb-item :link="'#2'"&gt;Wish List&lt;/leve-breadcrumb-item&gt;
      &lt;leve-breadcrumb-item icon="cart" is-active current&gt;Cart&lt;/leve-breadcrumb-item&gt;
    &lt;/leve-breadcrumb&gt;        
      </code></pre>

          <br />

          <div class="howto-use__title">
            <span><i class="bi bi-eye"></i>
              preview
            </span>
          </div>

          <leve-breadcrumb>
            <leve-breadcrumb-item :link="'#1'">Home</leve-breadcrumb-item>
            <leve-breadcrumb-item :link="'#2'">Wish List</leve-breadcrumb-item>
            <leve-breadcrumb-item icon="cart" is-active current>Cart</leve-breadcrumb-item>
          </leve-breadcrumb>

          <br />
          <br />


          <h5 id="breadcrumb-divider">Divider</h5>
          <p>Você pode escolher o separador entre os itens da trilha, informando um caractere Unicode.</p>
          <!-- Código do exemplo implementado -->
          <pre v-highlightjs><code class="javascript">
    &lt;leve-breadcrumb :divider="'@'"&gt;
      &lt;leve-breadcrumb-item :link="'#1'"&gt;Home&lt;/leve-breadcrumb-item&gt;
      &lt;leve-breadcrumb-item :link="'#2'"&gt;Wish List&lt;/leve-breadcrumb-item&gt;
      &lt;leve-breadcrumb-item :link="'#3'"&gt;Cart&lt;/leve-breadcrumb-item&gt;
    &lt;/leve-breadcrumb&gt;        
      </code></pre>

          <br />
          <br />

          <div class="howto-use__title">
            <span><i class="bi bi-eye"></i>
              preview
            </span>
          </div>

          <leve-breadcrumb :divider="'@'">
            <leve-breadcrumb-item :link="'#1'">Home</leve-breadcrumb-item>
            <leve-breadcrumb-item :link="'#2'">Wish List</leve-breadcrumb-item>
            <leve-breadcrumb-item :link="'#3'">Cart</leve-breadcrumb-item>
          </leve-breadcrumb>


          <br />
          <br />

        </div>
      </section>
      <br />

      <!--API do componente -->
      <section id="description">
        <h4 id="LeveBreadcrumb-description">Descrição - LeveBreadcrumb</h4>
        <div class="sidebar-separator"></div>

        <h5 class="mt-5">Propriedades (props)</h5>

        <table class="table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Tipo</th>
                <th>Descrição</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>divider</code></td>
                <td>String</td>
                <td>Define o separador entre os itens da trilha. Pode ser um caractere Unicode.</td>
                <td>None</td>
              </tr>
            </tbody>
          </table>

          <br />
          <br />

          <h4 id="LeveBreadcrumbItem-description">Descrição - LeveBreadcrumbItem</h4>
          <div class="sidebar-separator"></div>

          <h5 class="mt-5">Propriedades (props)</h5>

          <table class="table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Tipo</th>
                <th>Descrição</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>link</code></td>
                <td>String</td>
                <td>Define o link associado ao item. Caso não seja definido, o item será um texto estático.</td>
                <td>None</td>
              </tr>
              <tr>
                <td><code>icon</code></td>
                <td>String</td>
                <td>Adiciona um ícone ao item. Deve ser o nome de um ícone do Bootstrap Icons.</td>
                <td><code>""</code></td>
              </tr>
              <tr>
                <td><code>current</code></td>
                <td>Boolean</td>
                <td>Define se o item representa a página atual. Configura o atributo <code>aria-current</code> para
                  <code>page</code>.</td>
                <td><code>false</code></td>
              </tr>
              <tr>
                <td><code>isActive</code></td>
                <td>Boolean</td>
                <td>Adiciona a classe <code>active</code> ao item, indicando que está selecionado.</td>
                <td><code>false</code></td>
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
              <li class="detail-entry detail-h2"><a href="#breadcrumb-basic">Uso básico</a></li>
              <li class="detail-entry detail-h2"><a href="#breadcrumb-active">Item ativo</a></li>
              <li class="detail-entry detail-h2"><a href="#breadcrumb-divider">Divider</a></li>
            </ul>
          </li>
          <li class="detail-entry detail-h2"><a href="#description">Descrição</a>
            <ul>
              <li class="detail-entry detail-h2"><a href="#LeveBreadcrumb-description">LeveBreadcrumb</a></li>
              <li class="detail-entry detail-h2"><a href="#LeveBreadcrumbItem-description">LeveBreadcrumbItem</a></li>
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