<template>  
  <leve-wrapper>
    <template #content-top>
      <section id="introduction">
      <h3>Notifications</h3>
      <p>Um sistema de notificação é um mecanismo para exibir mensagens temporárias (toasts, alerts, banners) para o usuário, 
        geralmente para informar sobre eventos, sucessos, erros ou ações necessárias. A seguir, descrevemos como funciona o 
      sistema implementado nessa biblioteca.</p>
      <br>
      
        
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
            <p class="component-description">As notificações são criadas com a store <code>Notifications.js</code>, que gerencia o estado 
              e o ciclo de vida das notificações. Pode-se criar diferentes tipos de notificações para as situações mais diversas. Com o apoio do 
            utilitário <code>useNotifications.js</code>, o conteúdo da notificação é passado para o método <code>notify()</code>, que 
            por sua vez é chamado pelo componente que deseja emitir a notificação.</p>
            <p>O que ela faz?</p>
            <ul class="feature-list">
                <li>Gerencia o estado das notificações</li>
                <li>Armazena a lista de notificações ativas</li>
                <li>Controla o tempo de exibição de cada notificação</li>
                <li>Implementa métodos para adicionar/remover notificações</li>
            </ul>
        </div>
        
        <div class="component-card">
            <h6 class="component-title">2. Componente de UI</h6>
            <p class="component-description">A parte visual que exibe as notificações para o usuário utilizando o componente <code>LeveToast</code>.</p>
            <p>O que ele faz?</p>
            <ul class="feature-list">
                <li>Renderiza as notificações na tela</li>
                <li>Oferece botões de ação/fechamento</li>
                <li>Estiliza diferentes tipos de notificação de acordo com o tema</li>
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
      
      <p>Para gerar notificações usamos a biblioteca <a href="https://pinia-docs-pt.netlify.app/introduction.html">Pinia</a> que realiza o 
        gerenciamento de estados. Uma store no Pinia é um gerenciador de estados global para aplicações Vue.js, permitindo compartilhar dados 
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
                        <td><code>createItem</code></td>
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

import LeveWrapper from '@/views/layout/LeveWrapper.vue';
import LeveFixednav from '@/components/LeveFixednav.vue';
 
</script>
