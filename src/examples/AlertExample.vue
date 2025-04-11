<template>  
  <leve-wrapper>
    <template #content-top>
      <section id="introduction">
      <h3>Alert</h3>
      <p>O componente Alert é utilizado para exibir notificações simples e interativas, permitindo a customização de estilo, 
        alinhamento e conteúdo. Pode ser utilizado tanto para alertas únicos quanto para sistemas de notificação mais complexos.</p>
      </section>
    </template>
  <template #content-middle>

    <section id="how-to-use">
        <br />
        <h4 class="mt-5">Como usar</h4>
    <div class="sidebar-separator"></div>    
    <h5 id="alert-basic">Uso básico</h5>
    <p>Os alertas podem ser usados de modo estático ou dinâmico. Deste modo, faz-se a chamada do componente para uso manual, 
        da maneira mais simples.</p>
    
    <div class="howto-use">
      <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>

    <pre v-highlightjs><code class="javascript">
  &lt;leve-alert 
   icon="info-circle" 
   headingText="Título do Alerta" 
   bodyText="Mensagem do alerta" 
   commentText="Comentário adicional" 
   alertType="warning" 
   :isDismissible="true" 
   alignment="center" 
  /&gt;
    </code></pre>

    <br />
    
    <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>

  <LeveAlert
    headingText="Atenção"
    bodyText="Seu plano está quase vencendo."
    commentText="Validade: 15/04"
    alertType="danger"
    icon="exclamation-triangle"
    :alignment="'right'"
    :iconAlign="'middle'"
    :primaryAction="{
      text: 'Renovar agora',
      url: '#',
      type: 'danger'
    }"
    :secondaryAction="{
      text: 'Ver detalhes',
      url: '#',
      type: 'secondary'
    }"
  />
      <leve-alert 
      icon="info-circle" 
      headingText="Título do Alerta" 
      bodyText="Mensagem do alerta" 
      commentText="Comentário adicional" 
      alertType="warning" 
      :isDismissible="true" 
      alignment="center" 
      />
    </div>
    <br />      
    <div class="howto-use">
      <h5 id="alert-slot">Uso com Slots</h5>
      <p>Você pode usar os seguintes slots para mais flexibilidade:</p>
          <dl>
            <dt>header</dt>
            <dd>Personalize o cabeçalho do alerta.</dd>
            <dt>icon</dt>
            <dd>Adicione um ícone personalizado.</dd>
            <dt>default</dt>
            <dd>Adicione conteúdo personalizado ao corpo.</dd>
            <dt>footer</dt>
            <dd>Adicione conteúdo ao rodapé do alerta.</dd>
          </dl>

      <br />

      <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>

        <pre v-highlightjs="sourcecode"><code class="javascript">
&lt;leve-alert alertType="success"&gt;
   &lt;template #header&gt;
      Título Customizado
   &lt;/template&gt;
   &lt;template #icon&gt;
      &lt;i class="bi bi-check-circle"&gt;&lt;/i&gt;
   &lt;/template&gt;
   Mensagem do alerta com conteúdo customizado.
   &lt;template #footer&gt;
      Comentário adicional customizado.
   &lt;/template&gt;
&lt;/leve-alert&gt;
        </code></pre>

        <br />

        <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>

          <leve-alert alertType="success">
            <template #header>
                Título Customizado
            </template>
            <template #icon>
                <i class="bi bi-check-circle"></i>
            </template>
            Mensagem do alerta com conteúdo customizado.
            <template #footer>
                Comentário adicional customizado.
            </template>
          </leve-alert>

      </div>

      <div class="sidebar-separator"></div>
      
      <h5 id="alert-icon">Ícones</h5>
      <p>Você pode acessar ao <a href="https://icons.getbootstrap.com/">https://icons.getbootstrap.com/</a> e consultar os ícones 
        disponíveis. Para uso nos componentes, o prefixo <code>bi-</code> deve ser desconsiderado, pois ele já está imbutido no 
        slote que contém o ícone.</p>

      <pre v-highlightjs><code class="javascript">
&lt;slot v-if="icon" name="icon"&gt;
  &lt;i class="bi flex-shrink-0 me-2" :class="[{ [`bi-${icon}`]: icon }]"&gt;&lt;/i&gt;
&lt;/slot&gt;
      </code></pre>

      <p>Então, ao invés de passar para o componente <code>bi bi-info-circle</code>, escreva apenas  <code>info-circle</code></p>

      <pre v-highlightjs><code class="javascript">
  &lt;leve-alert 
   icon="info-circle" 
   headingText="Título do Alerta"
   ...
      </code></pre>

    <h5 class="mt-5">Exemplos com ícones</h5>

    <div class="howto-use">
      <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>
          <pre v-highlightjs="sourcecode"><code class="javascript">      
      
&lt;leve-alert 
  icon="info-circle"
  bodyText="An example alert with an icon" 
  alertType="info" 
/&gt;

&lt;leve-alert 
  icon="check-circle"
  bodyText="An example success alert with an icon" 
  alertType="success" 
/&gt;

&lt;leve-alert 
  icon="exclamation-triangle-fill"
  bodyText="An example warning alert with an icon" 
  alertType="warning" 
/&gt;

&lt;leve-alert 
  icon="exclamation-triangle-fill"
  bodyText="An example danger alert with an icon" 
  alertType="danger" 
/&gt;

</code></pre>
      <br />
      <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>
      <leve-alert 
      icon="info-circle"
      bodyText="An example alert with an icon" 
      alertType="info" 
      />

      <leve-alert 
      icon="check-circle"
      bodyText="An example success alert with an icon" 
      alertType="success" 
      />

      <leve-alert 
      icon="exclamation-triangle-fill"
      bodyText="An example warning alert with an icon" 
      alertType="warning" 
      />

      <leve-alert 
      icon="exclamation-triangle-fill"
      bodyText="An example danger alert with an icon" 
      alertType="danger" 
      />
    </div>


    <h5 class="mt-5" id="alert-themes">Exemplos com temas</h5>

    <div class="howto-use">
      <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>
          <pre v-highlightjs="sourcecode"><code class="javascript">      
      
&lt;leve-alert 
  bodyText="A simple primary alert" 
  alertType="primary" 
/&gt;

&lt;leve-alert 
  bodyText="A simple secondary alert" 
  alertType="secondary" 
/&gt;

&lt;leve-alert 
  bodyText="A simple success alert" 
  alertType="success" 
/&gt;

&lt;leve-alert 
  bodyText="A simple danger alert" 
  alertType="danger" 
/&gt;

&lt;leve-alert 
  bodyText="A simple warning alert" 
  alertType="warning" 
/&gt;

&lt;leve-alert 
  icon="info-circle"
  bodyText="A simple info alert" 
  alertType="info" 
/&gt;

&lt;leve-alert 
  bodyText="A simple light alert" 
  alertType="light" 
/&gt;

&lt;leve-alert 
  icon="info-circle"
  bodyText="A simple dark alert" 
  alertType="dark" 
/&gt;

</code></pre>
      <br />
      <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>
      
      <leve-alert 
      bodyText="A simple primary alert" 
      alertType="primary" 
      />

      <leve-alert 
      bodyText="A simple secondary alert" 
      alertType="secondary" 
      />

      <leve-alert 
      bodyText="A simple success alert" 
      alertType="success" 
      />

      <leve-alert 
      bodyText="A simple danger alert" 
      alertType="danger" 
      />

      <leve-alert 
      bodyText="A simple warning alert" 
      alertType="warning" 
      />

      <leve-alert 
      icon="info-circle"
      bodyText="A simple info alert" 
      alertType="info" 
      />

      <leve-alert 
      bodyText="A simple light alert" 
      alertType="light" 
      />

      <leve-alert 
      icon="info-circle"
      bodyText="A simple dark alert" 
      alertType="dark" 
      />
      
    </div>
  </section>
  
  <br />
  
  
  <section id="description">
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
          <td>icon</td>
          <td>String</td>
          <td>-</td>
          <td>Ícone a ser exibido no alerta.</td>
        </tr>
        <tr>
          <td>headingText</td>
          <td>String</td>
          <td>-</td>
          <td>Título do alerta.</td>
        </tr>
        <tr>
          <td>bodyText</td>
          <td>String</td>
          <td>-</td>
          <td>Mensagem principal do alerta.</td>
        </tr>
        <tr>
          <td>commentText</td>
          <td>String</td>
          <td>-</td>
          <td>Texto adicional exibido no rodapé do alerta.</td>
        </tr>
        <tr>
          <td>alertType</td>
          <td>String</td>
          <td>'primary'</td>
          <td>Estilo do alerta (ex.: primary, success, warning, danger).</td>
        </tr>
        <tr>
          <td>isDismissible</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Determina se o alerta pode ser fechado pelo usuário.</td>
        </tr>
        <tr>
          <td>isAlert</td>
          <td>Boolean</td>
          <td>true</td>
          <td>Define se é um alerta único.</td>
        </tr>
        <tr>
          <td>timeout</td>
          <td>Number</td>
          <td>5000</td>
          <td>Tempo (em ms) para ocultar o alerta automaticamente.</td>
        </tr>
        <tr>
          <td>alignment</td>
          <td>String</td>
          <td>'left'</td>
          <td>Alinhamento do texto e conteúdo do alerta (left, center, right).</td>
        </tr>
      </tbody>
    </table>

  <br />

  <h5 class="mt-5">Métodos e Eventos</h5>
  <table class="table">
    <thead>
      <tr>
        <th>Método/Evento</th>
        <th>Descrição</th>
        <th>Parâmetros</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>createItem</td>
        <td>Cria um novo alerta.</td>
        <td>-</td>
      </tr>
      <tr>
        <td>deleteItem</td>
        <td>Remove um alerta existente pelo ID.</td>
        <td>id (Number): ID do alerta a ser removido.</td>
      </tr>
      <tr>
        <td>getLastIndex</td>
        <td>Retorna o ID do último alerta adicionado.</td>
        <td>-</td>
      </tr>
      <tr>
        <td>checkTimeoutValue</td>
        <td>Valida o valor do tempo limite (timeout).</td>
        <td>value (Number): Valor do tempo a ser validado.</td>
      </tr>
    </tbody>
  </table>
  <br />
  
  </section>
  

  </template>
  <template #content-bottom>
    <p>Bottom Content for Alert</p>
  </template>
  <template #aside-right>
    <leve-fixednav>
      <template #list-links>
        <li class="detail-entry detail-h2">
          <a href="#introduction">Introdução</a>
        </li>
        <li class="detail-entry detail-h2"><a href="#how-to-use">Como usar</a>
          <ul>
            <li class="detail-entry detail-h2"><a href="#alert-basic">Uso básico</a></li>
            <li class="detail-entry detail-h2"><a href="#alert-slot">Com slots</a></li>
            <li class="detail-entry detail-h2"><a href="#alert-icon">Com ícones</a></li>
            <li class="detail-entry detail-h2"><a href="#alert-themes">Com temas</a></li>
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
import LeveAlert from '@/components/LeveAlert.vue';

</script>