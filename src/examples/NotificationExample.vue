<template>  
  <leve-wrapper>
    <template #content-top>
      <section id="introduction">
      <h3>Notifications</h3>
      <p>Um sistema de notificação é um mecanismo para exibir mensagens temporárias (toasts, alerts, banners) para o usuário, 
        geralmente para informar sobre eventos, sucessos, erros ou ações necessárias. A seguir, descrevemos como funciona o 
      sistema implementado nessa biblioteca.</p>
      <br>

<!-- Exemplo com ações -->
<LeveAlert
  headingText="Confirmação"
  bodyText="Deseja prosseguir com esta ação?"
  :primaryAction="{
    text: 'Confirmar',
    url: '/confirm'
  }"
  :secondaryAction="{
    text: 'Cancelar',
    url: '/cancel',
    type: 'danger'
  }"
/>

    <!-- Exemplo 1: Alerta Simples com Ações -->
    <LeveAlert
      class="mt-4"
      headingText="Atualização Disponível"
      bodyText="Uma nova versão do sistema está disponível para instalação."
      commentText="Recomendamos atualizar durante horário de menor movimento."
      alertType="info"
      icon="info-circle"
      :isDismissible="true"
      :timeout="0"
      alignment="left"
      :primaryAction="{
        text: 'Atualizar Agora',
        url: '/update',
        type: 'primary'
      }"
      :secondaryAction="{
        text: 'Lembrar Depois',
        url: '/remind-later',
        type: 'secondary'
      }"
    />

    <!-- Exemplo 2: Alerta de Sucesso via singleAlert -->
    <LeveAlert
      class="mt-4"
      :singleAlert="{
        type: 'success',
        heading: 'Operação Concluída!',
        text: 'Seus dados foram salvos com sucesso no sistema.',
        comment: 'Um e-mail de confirmação foi enviado para sua caixa postal.',
        primaryAction: {
          text: 'Ver Detalhes',
          url: '/details/123',
          type: 'info'
        }
      }"
      icon="check-circle"
      :isDismissible="true"
      alignment="center"
    />

    <!-- Exemplo 3: Alerta de Erro com Timeout -->
    <LeveAlert
      class="mt-4"
      headingText="Erro no Processamento"
      bodyText="Não foi possível completar a operação solicitada."
      alertType="danger"
      icon="exclamation-triangle"
      :timeout="8000"
      alignment="right"
      :primaryAction="{
        text: 'Tentar Novamente',
        url: '/retry',
        type: 'danger'
      }"
    />

    <!-- Exemplo 4: Botão para Acionar Alerta -->
    <LeveAlert
      class="mt-4"
      :isAlert="false"
      btnText="Clique para Mostrar Alerta"
      alertType="warning"
      :singleAlert="{
        type: 'warning',
        heading: 'Atenção!',
        text: 'Esta operação não pode ser desfeita.',
        comment: 'Certifique-se das informações antes de confirmar.',
        primaryAction: {
          text: 'Confirmar',
          url: '/confirm-action',
          type: 'warning'
        },
        secondaryAction: {
          text: 'Cancelar',
          url: '/cancel',
          type: 'secondary'
        }
      }"
      :isDismissible="true"
    />

    <!-- Exemplo 5: Alerta com Slots Personalizados -->
    <LeveAlert
      class="mt-4"
      alertType="dark"
      :isDismissible="true"
      alignment="center"
    >
      <template #header>
        <span style="color: var(--bs-warning)">Notificação Personalizada</span>
      </template>
      
      <template #icon>
        <i class="bi bi-star-fill text-warning me-2"></i>
      </template>
      
      <div>
        <p>Este é um conteúdo <strong>totalmente personalizado</strong> usando slots.</p>
        <p>Você pode incluir qualquer HTML aqui.</p>
      </div>
      
      <template #footer>
        <small class="text-muted">Atualizado em: {{ new Date().toLocaleDateString() }}</small>
      </template>
    </LeveAlert>

<!-- Exemplo com apenas uma ação -->
<LeveAlert
  :singleAlert="{
    heading: 'Aviso',
    text: 'Sua sessão irá expirar em breve.',
    primaryAction: {
      text: 'Estender Sessão',
      url: '/extend-session'
    }
  }"
/>

<!-- Exemplo sem ações (não serão exibidos botões) -->
<LeveAlert
  bodyText="Esta é uma notificação simples."
/>

      
        <p class="mt-5">O componente <code>LeveAlert</code>, com a propriedade <code>:is-alert="false"</code>, assume a ação de notificar por meio do botão 
        embutido. Veja o trecho de código a seguir:</p>


        <pre v-highlightjs="sourcecode">
          <code class="javascript">
// LeveAlert.vue
&lt;button v-if=&quot;!isAlert&quot; @click=&quot;createItem&quot; :class=&quot;{ hideAlert: !isOpen }&quot;&gt;
&#123;&#123; btnText &#125;&#125;
&lt;/button&gt;
          </code>
        </pre>

        <p>Para modificar o conteúdo, você pode usar <code>props</code> (como <code>btnText="New Alert"</code> ) para modificar o texto do 
          button. E passar um objeto <em>notification</em>, como na prop <code>:single-alert="notification"</code>, para o conteúdo do componente. Por exemplo:</p>

          <pre v-highlightjs="sourcecode">
          <code class="javascript">
// Defines the toast content in an object
const notification = ref(
  {
        id: 1,
        type: "primary",
        heading: 'Heading text',
        text: "Lorem ipsusm dolor sit amet",
        comment: "Sample comment text here",
        notificationTime: 'just now',
        createdAt: new Date(),
    }
)
          </code>
        </pre>

        
      </section>
    </template>
  <template #content-middle>

    <section id="how-to-use">
        <br />
        <h4 class="mt-5">Como funciona</h4>
        <div class="sidebar-separator"></div>
        
        <h5>Componentes Básicos de um Sistema de Notificação</h5>
        
        <div class="component-card">
            <h6 class="component-title">1. Store de Notificações</h6>
            <p class="component-description">As notificações podem ser criadas implicitamente, com a store <code>Alerts.js</code>, ou 
              explicitamente com a store <code>Notifications.js</code>. Ambas gerenciam o estado e o ciclo de vida das notificações. A 
              diferença é que, no primeiro caso, faz-se configurando o componente <code>LeveAlert</code>, em suas propriedades, como vimos 
              acima. No segundo caso, pode-se criar diferentes tipos de notificações para as situações mais diversas. Com o apoio de um 
            utilitário <code>useNotifications.js</code>, o conteúdo da notificação é passado para um método <code>notify()</code>, que 
            por sua vez é chamado no método criado no componente que se faz necessário emitir a notificação.</p>
            <p>O que elas fazem?</p>
            <ul class="feature-list">
                <li>Gerenciam o estado das notificações</li>
                <li>Armazenam a lista de notificações ativas</li>
                <li>Controlam o tempo de exibição de cada notificação</li>
                <li>Implementam métodos para adicionar/remover notificações</li>
            </ul>
        </div>
        
        <div class="component-card">
            <h6 class="component-title">2. Componente de UI</h6>
            <p class="component-description">A parte visual que exibe as notificações para o usuário. Destacamos os componentes <code>LeveAlert</code> e
            <code>LeveToast</code>, mas você pode criar seu próprio componente baseado nos métodos de um destes.</p>
            <p>O que ele faz?</p>
            <ul class="feature-list">
                <li>Renderiza as notificações na tela</li>
                <li>Controla animações de entrada e saída</li>
                <li>Oferece botões de ação/fechamento</li>
                <li>Estiliza diferentes tipos de notificação (sucesso, erro, etc.)</li>
            </ul>
        </div>
    
        <br />      

    <div class="howto-notify">
      <h5>Emitir notificações com Notifications.js</h5>
      <p>Para implementar precisamos de poucos passos. Basicamente, um utilitário <code>useNotifications.js</code> instancia a store 
        <code>Notifications.js</code> e cria um objeto exemplo com textos e outros atributos pré-definidos.</p>

      <br />

      <div class="howto-use__title">
        <span><i class="bi bi-code-slash"></i> code</span>
      </div>

        <pre v-highlightjs="sourcecode">
          <code class="javascript">
// utils/useNotification.js
&lt;script&gt;
import { useNotificationStore } from &apos;../store/Notifications&apos;;

export const useNotification = () =&gt; {
  const notificationStore = useNotificationStore();

  const notify = (options) =&gt; {
    const defaultOptions = {
      type: &apos;light&apos;,
      text: &apos;Notification message&apos;,
      comment: &apos;&apos;,
      notificationTime: &apos;just now&apos;,
      timeout: 5000
    };

    const notification = { ...defaultOptions, ...options };
    notificationStore.createNewItem(notification);
  };

  return { notify };
};
&lt;/script&gt;
          </code>
        </pre>

      <p>Em um componente de exemplo, que você queira notificar algo, é preciso importar o utilitário <code>useNotification</code>. Se você estiver 
        usando o Starter Kit, os componentes já foram carregados e basta referenciar com as tags correspondentes, mas o utilitário precisa 
        ser declado. Como queremos exibir a notificação em um componente do tipo toast, vamos referenciar <code>LeveToast</code>.</p>


        <br />

        <div class="howto-use__title">
          <span><i class="bi bi-code-slash"></i> code</span>
        </div>

          <pre v-highlightjs="sourcecode">
            <code class="javascript">
// ExampleComponent.vue
&lt;template&gt;
  &lt;button @click=&quot;showSuccess&quot;&gt;Success&lt;/button&gt;
  &lt;button @click=&quot;showError&quot;&gt;Error&lt;/button&gt;
  
  &lt;LeveToast /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useNotification } from &#039;@/utils/useNotification&#039;;
import LeveToast from &#039;@/components/LeveToast.vue&#039;;

const { notify } = useNotification();

const showSuccess = () =&gt; {
  notify({
    type: &#039;success&#039;,
    text: &#039;Operação concluída com sucesso!&#039;,
    comment: &#039;Sucesso&#039;
  });
};

const showError = () =&gt; {
  notify({
    type: &#039;danger&#039;,
    text: &#039;Ocorreu um erro ao processar sua solicitação&#039;,
    comment: &#039;Erro&#039;,
    timeout: 8000 // Tempo personalizado
  });
};
&lt;/script&gt;              
            </code>
          </pre>        

      </div>

      <div class="sidebar-separator"></div>
      
      <h5 id="store-notifications">Store Notifications.js</h5>
      <p>No início desta página, descrevemos rapidamente como gerar alertas com o componente <code>LeveAlert</code>, que usa um button 
        configurável para emitir as notificações. Agora, vimos outra maneira de criar notificações, porém, deixando parte do trabalho 
        para ser feito manualmente.</p>
      <p>Para gerar notificações usamos a biblioteca <a href="https://pinia-docs-pt.netlify.app/introduction.html">Pinia</a> para o 
        gerenciamento de estados. Uma store no Pinia é um gerenciador de estado global para aplicações Vue.js, permitindo compartilhar dados 
        e lógica entre componentes de forma organizada e reativa. Uma store Pinia possui:</p>
        <ul>
          <li>Estado (state): Dados reativos.</li>
          <li>Ações (actions): Métodos para manipular o estado.</li>
          <li>Getters (getters): Computed properties baseadas no estado.</li>
        </ul>

  </section>
  
  <br />
  
  
  <section id="description">
    <h4>Descrição</h4>
    <div class="sidebar-separator"></div>
    <h5>Estado (State)</h5>
        <div class="table-container">
            <table class="table">
                <thead>
                    <tr>
                        <th>Propriedade</th>
                        <th>Tipo</th>
                        <th>Descrição</th>
                        <th>Valor Padrão</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>items</code></td>
                        <td><code>Array</code></td>
                        <td>Lista de notificações armazenadas.</td>
                        <td><code>[]</code></td>
                    </tr>
                    <tr>
                        <td><code>maxItems</code></td>
                        <td><code>Number</code></td>
                        <td>Número máximo de notificações permitidas.</td>
                        <td><code>5</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
      <br />

      <h5 class="mt-5">Ações (Actions)</h5>
        <div class="table-container">
            <table class="table">
                <thead>
                    <tr>
                        <th>Função</th>
                        <th>Parâmetros</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>createNewItem</code></td>
                        <td><code>item: Object</code></td>
                        <td>Adiciona um novo item ao array <code>items</code> com um ID baseado no timestamp.</td>
                    </tr>
                    <tr>
                        <td><code>updateItem</code></td>
                        <td><code>id: Number</code>, <code>payload: Object</code></td>
                        <td>Atualiza um item existente com base no ID.</td>
                    </tr>
                    <tr>
                        <td><code>deleteItem</code></td>
                        <td><code>id: Number</code></td>
                        <td>Remove um item do array <code>items</code> com base no ID.</td>
                    </tr>
                    <tr>
                        <td><code>findIndexById</code></td>
                        <td><code>id: Number</code></td>
                        <td>Retorna o índice de um item no array <code>items</code> (ou <code>-1</code> se não existir).</td>
                    </tr>
                    <tr>
                        <td><code>getLastItem</code></td>
                        <td>—</td>
                        <td>Retorna o último item do array <code>items</code> (ou <code>null</code> se vazio).</td>
                    </tr>
                </tbody>
            </table>
        </div>
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
        <li class="detail-entry detail-h2">
          <a href="#how-to-use">Como funciona</a>
        </li>
        <li class="detail-entry detail-h2">
          <a href="#store-notifications">Store Notifications.js</a>
        </li>
        <li class="detail-entry detail-h2">
          <a href="#description">Descrição</a>
        </li>
      </template>
    </leve-fixednav>
  </template>
  </leve-wrapper>
</template>
  <script setup>
import { provide, ref } from 'vue'
import LeveWrapper from '@/views/layout/LeveWrapper.vue';
import LeveFixednav from '@/components/LeveFixednav.vue';
import LeveAlert from '@/components/LeveAlert.vue';

// Defines the toast content in an object
const notification = ref(
  {
        id: 1,
        type: "primary",
        heading: 'Heading text',
        text: "Lorem ipsusm dolor sit amet",
        comment: "Sample comment text here",
        notificationTime: 'just now',
        createdAt: new Date(),
    }
)
// Sends the information to be displayed
provide('notification', notification)
  
</script>
