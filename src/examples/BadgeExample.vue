<template>  
  <leve-wrapper>
    <template #content-top>
      <section id="introduction">
      <h3>Badge</h3>
      <p>O componente Badge é utilizado para exibir informações complementares ou indicadores visuais, 
        como notificações, status ou contagens, associados a um elemento principal. Ele geralmente aparece como uma pequena 
        etiqueta sobreposta ou ao lado de outro componente, como botões, ícones ou listas.</p>
      </section>
    </template>
  <template #content-middle>

    <section id="how-to-use">
        <br />
        <h4 class="mt-5">Como usar</h4>
    <div class="sidebar-separator"></div>    
    <h5 id="badge-headings">Headings</h5>
    <p>Dimensionados para corresponder ao tamanho do elemento pai imediato usando o dimensionamento e as unidades de fonte relativa.</p>
    <div class="howto-use">
      <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>

    <pre v-highlightjs><code class="javascript">
&lt;h1&gt;Example heading &lt;leve-badge&gt;New&lt;/leve-badge&gt;&lt;/h1&gt;
&lt;h2&gt;Example heading &lt;leve-badge&gt;New&lt;/leve-badge&gt;&lt;/h2&gt;
&lt;h3&gt;Example heading &lt;leve-badge&gt;New&lt;/leve-badge&gt;&lt;/h3&gt;
&lt;h4&gt;Example heading &lt;leve-badge&gt;New&lt;/leve-badge&gt;&lt;/h4&gt;
&lt;h5&gt;Example heading &lt;leve-badge&gt;New&lt;/leve-badge&gt;&lt;/h5&gt;
&lt;h6&gt;Example heading &lt;leve-badge&gt;New&lt;/leve-badge&gt;&lt;/h6&gt;    </code></pre>

    <br />
    
    <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>


    <h1>Example heading <leve-badge>New</leve-badge></h1>
    <h2>Example heading <leve-badge>New</leve-badge></h2>
    <h3>Example heading <leve-badge>New</leve-badge></h3>
    <h4>Example heading <leve-badge>New</leve-badge></h4>
    <h5>Example heading <leve-badge>New</leve-badge></h5>
    <h6>Example heading <leve-badge>New</leve-badge></h6>

    </div>
    <br />

  <div class="howto-use">
  
    <h5 id="badge-background-contrast" class="mt-5">Background e Contraste</h5>
    <p>Definindo <code>:contrast="true"</code> e <code>:type="'primary'"</code>, por exemplo, destaca a fonte usando o contraste com o fundo do componente.</p>

    <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>

    <pre v-highlightjs="sourcecode"><code class="javascript">
&lt;div class="d-flex justify-content-between p-2"&gt;
  &lt;leve-badge :constrast="true" :type="'primary'"&gt;primary&lt;/leve-badge&gt;
  &lt;leve-badge :constrast="true" :type="'secondary'"&gt;secondary&lt;/leve-badge&gt;
  &lt;leve-badge :constrast="true" :type="'success'"&gt;success&lt;/leve-badge&gt;
  &lt;leve-badge :constrast="true" :type="'danger'"&gt;danger&lt;/leve-badge&gt;
  &lt;leve-badge :constrast="true" :type="'warning'"&gt;warning&lt;/leve-badge&gt;
  &lt;leve-badge :constrast="true" :type="'info'"&gt;info&lt;/leve-badge&gt;
  &lt;leve-badge :constrast="true" :type="'light'"&gt;light&lt;/leve-badge&gt;
  &lt;leve-badge :constrast="true" :type="'dark'"&gt;dark&lt;/leve-badge&gt;
&lt;/div&gt;
    </code></pre>

      <br />

    <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>

      <div class="d-flex justify-content-between p-2">
        <leve-badge :constrast="true" :type="'primary'">primary</leve-badge>
        <leve-badge :constrast="true" :type="'secondary'">secondary</leve-badge>
        <leve-badge :constrast="true" :type="'success'">success</leve-badge>
        <leve-badge :constrast="true" :type="'danger'">danger</leve-badge>
        <leve-badge :constrast="true" :type="'warning'">warning</leve-badge>
        <leve-badge :constrast="true" :type="'info'">info</leve-badge>
        <leve-badge :constrast="true" :type="'light'">light</leve-badge>
        <leve-badge :constrast="true" :type="'dark'">dark</leve-badge>
      </div>
   </div>
    
   <br />      
    
   <div class="howto-use mt-5">
      <h5 id="badge-buttons">Buttons</h5>

        <p>Geralmente usado para indicar alguma atualização ou notificação</p>
        <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>

        <pre v-highlightjs="sourcecode"><code class="javascript">
    &lt;leve-button type="button" class="btn btn-primary"&gt; 
        Notifications 
        &lt;leve-badge :type="'warning'"&gt;2&lt;/leve-badge&gt;
    &lt;/leve-button&gt;
        </code></pre>

        <br />

        <div class="howto-use__title">
          <span><i class="bi bi-eye"></i> preview</span>
        </div>

        <button type="button" class="btn btn-primary"> Notifications <leve-badge :type="'warning'">2</leve-badge></button>

      <br />
      <br />
      <h5 id="badge-positions" class="mt-5">Posicionamento</h5>
      <p>Pode-se variar o posicionamento do indicador também. Para melhor compreensão, consulte a documentação sobre <a href="https://getbootstrap.com/docs/5.3/utilities/position/#arrange-elements">organização de elementos.</a></p>
      
      <h6>Propriedades de Posição</h6>
          <ul>
              <li><strong>top</strong> - para a posição vertical superior</li>
              <li><strong>start</strong> - para a posição horizontal esquerda (da esquerda para a direita)</li>
              <li><strong>bottom</strong> - para a posição vertical inferior</li>
              <li><strong>end</strong> - para a posição horizontal direita (da esquerda para a direita)</li>
          </ul>
          <h6>Posições</h6>
          <ul>
              <li><strong>0</strong> - para a posição de borda em 0</li>
              <li><strong>50</strong> - para a posição de borda em 50%</li>
              <li><strong>100</strong> - para a posição de borda em 100%</li>
          </ul>
      
      <p>Veja os exemplos:</p>

      <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>
      

      <pre v-highlightjs="sourcecode"><code class="javascript">
    &lt;div class="d-flex justify-content-between p-2"&gt;
        &lt;leve-button type="secondary" :class="'position-relative'"&gt;Bottom left
            &lt;leve-badge 
                :isNotification="true" 
                position="bottom-left" 
                type="success"
                badgeHiddenText="Nova notificação"&gt;
            &lt;/leve-badge&gt;
        &lt;/leve-button&gt;

        &lt;leve-button type="secondary" :class="'position-relative'"&gt;Bottom right
            &lt;leve-badge 
                :isNotification="true" 
                position="bottom-right" 
                type="danger"
                badgeHiddenText="Nova notificação"&gt;
            &lt;/leve-badge&gt;
        &lt;/leve-button&gt;

        &lt;leve-button type="secondary" :class="'position-relative'"&gt;Top left
            &lt;leve-badge 
                :isNotification="true" 
                position="top-left" 
                type="info"
                badgeHiddenText="Nova notificação"&gt;
            &lt;/leve-badge&gt;
        &lt;/leve-button&gt;

        &lt;leve-button type="secondary" :class="'position-relative'"&gt;Top right
            &lt;leve-badge 
                :isNotification="true" 
                position="top" 
                type="primary"
                badgeHiddenText="Nova notificação"&gt;
            &lt;/leve-badge&gt;
        &lt;/leve-button&gt;
    &lt;/div&gt;
        </code></pre>      

      <br />
      <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>

        <div class="d-flex justify-content-between p-2">
        <leve-button type="secondary" :class="'position-relative'">Bottom left
          <leve-badge 
          :isNotification="true" 
          position="bottom-left" 
          type="success"
          badgeHiddenText="Nova notificação">
        </leve-badge>
      </leve-button>
    <leve-button type="secondary" :class="'position-relative'">Bottom right
    <leve-badge 
        :isNotification="true" 
        position="bottom-right" 
        type="danger"
        badgeHiddenText="Nova notificação">
    </leve-badge></leve-button>
    <leve-button type="secondary" :class="'position-relative'">Top left
    <leve-badge 
        :isNotification="true" 
        position="top-left" 
        type="info"
        badgeHiddenText="Nova notificação">
    </leve-badge></leve-button>

    <leve-button type="secondary" :class="'position-relative'">Top right
    <leve-badge 
        :isNotification="true" 
        position="top" 
        type="primary"
        badgeHiddenText="Nova notificação">
    </leve-badge></leve-button>

      </div>
    <br />
    <br />
    
    <div class="howto-use__title mt-5"><span><i class="bi bi-code-slash"></i> code</span></div>

      <pre v-highlightjs="sourcecode"><code class="javascript">
&lt;div class="d-flex justify-content-between p-2"&gt;

&lt;leve-button type="secondary" :class="'position-relative'"&gt;
    Messages 
    &lt;leve-badge :position="'top'"&gt;99+&lt;/leve-badge&gt;
&lt;/leve-button&gt;

&lt;leve-button type="secondary" :class="'position-relative'"&gt;
    Messages 
    &lt;leve-badge :position="'bottom-right'"&gt;99+&lt;/leve-badge&gt;
&lt;/leve-button&gt;

&lt;leve-button type="button" class="btn btn-primary"&gt;
    Badge Constrast true 
    &lt;leve-badge :constrast="true" :type="'warning'"&gt;2&lt;/leve-badge&gt;
&lt;/leve-button&gt;

&lt;leve-button type="button" class="btn btn-primary" :class="'position-relative'"&gt;
    Badge
    &lt;leve-badge :position="'top'" :constrast="true" :type="'warning'"&gt;2&lt;/leve-badge&gt;
&lt;/leve-button&gt;

&lt;/div&gt;
      </code></pre>      

    <br />
    <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>

      <div class="d-flex justify-content-between p-2">
              
        <leve-button type="secondary" :class="'position-relative'">
          Messages <leve-badge :position="'top'">99+</leve-badge>
        </leve-button>


        <leve-button type="secondary" :class="'position-relative'">
          Messages <leve-badge :position="'bottom-right'">99+</leve-badge>
        </leve-button>

        <leve-button type="button" class="btn btn-primary">
          Badge Constrast true 
          <leve-badge :constrast="true" :type="'warning'">2</leve-badge>
        </leve-button>

        <leve-button type="button" class="btn btn-primary"  :class="'position-relative'">
          Badge
          <leve-badge :position="'top'" :constrast="true" :type="'warning'">2</leve-badge>
        </leve-button>
      </div>  
    


    </div>

  </section>  
  
  <section id="description" style="margin-top: 8rem;">
    <h4>Descrição</h4>
    <div class="sidebar-separator"></div>
    <h5 class="mt-5">Propriedades (props)</h5>
    <table class="table">
      <thead>
        <tr>
          <th>Propriedade</th>
          <th>Tipo</th>
          <th>Default</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>isNotification</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Define se o badge será usado como notificação (círculo) ou não.</td>
        </tr>
        <tr>
          <td>constrast</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Aplica uma classe de texto contrastante para o badge.</td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>"primary"</td>
          <td>Define o estilo do badge com base nos temas Bootstrap (e.g., "success", "danger").</td>
        </tr>
        <tr>
          <td>badgeHiddenText</td>
          <td>String</td>
          <td>""</td>
          <td>Texto oculto usado para acessibilidade.</td>
        </tr>
        <tr>
          <td>position</td>
          <td>String</td>
          <td>""</td>
          <td>Define a posição do badge. Aceita: "top", "middle", "bottom", "bottom-left", "bottom-right", "top-left".</td>
        </tr>
      </tbody>
    </table>

  <br />

  <h5 class="mt-5">Métodos e Eventos</h5>
  <table class="table">
    <thead>
      <tr>
        <th>Método</th>
        <th>Parâmetros</th>
        <th>Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>checkPosition</td>
        <td>position (String)</td>
        <td>Verifica se a posição fornecida é válida.</td>
      </tr>
      <tr>
        <td>defineBadgePosition</td>
        <td>badgePosition (String)</td>
        <td>Define as classes de posicionamento com base na posição fornecida.</td>
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