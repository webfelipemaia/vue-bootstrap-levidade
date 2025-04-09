<template>  
  <leve-wrapper>
    <template #content-top>
      <section id="introduction">
      <h3>Toast</h3>
      <p>O componente Toast exibe mensagens temporárias na interface do usuário. Ele suporta múltiplas notificações simultâneas, 
        diferentes tipos de alertas (sucesso, erro, etc.), posicionamento customizável e remoção automática após um tempo configurável.</p>
      <br>
      <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">Bootstrap</strong>
          <small class="text-body-secondary">11 mins ago</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
      
      <p class="mt-5">O componente utiliza um store  (<a href="/doc/notification">notificationStore</a>) para gerenciar o estado das notificações. As 
        notificações são automaticamente removidas após o timeout configurado. Suporta injeção de dependência (notification), 
        que é como o conteúdo é passado. É adaptável automaticamente o estilo dos botões de ação com base no tema do toast.</p>

      </section>
    </template>
  <template #content-middle>

    <section id="how-to-use">
      <br />
      <h4 class="mt-5">Uso Básico</h4>

      <p>Ao clicar no botão abaixo, uma notificação é lançada e exibida com o componente Toast. A medida que novas notificações forem criadas, as mais antigas
  são descartadas.</p>

      <br>
      <leve-button type="primary" @click="showSuccess">Launch Notification</leve-button>
      
      <leve-toast />
      
      <p class="mt-5 mb-2">Abaixo, o guia de como utilizar o componente Toast como o sistema de notificações.</p>
      <ol class="mt-5">
        <li>
          <p>Crie um arquivo useNotification.js (ou similar) para encapsular a lógica de notificação.</p>
          <pre v-highlightjs>
          <code class="javascript">
import { useNotificationStore } from '../store/Notifications';

export const useNotification = () => {
  const notificationStore = useNotificationStore();

  const notify = (options) => {
    const defaultOptions = {
      type: 'light',
      text: 'Notification message',
      comment: '',
      notificationTime: 'just now',
      timeout: 5000
    };

    const notification = { ...defaultOptions, ...options };
    notificationStore.createNewItem(notification, Date.now());
  };

  return { notify };
};            
          </code>
        </pre>          
        </li>
        <li>Em outros componentes, crie funções com a definição do conteúdo do Toast a ser notificado. Por exemplo, crie uma função para notificar sucesso
          e outra para falha. Importe o utilitário de notificação <code>useNotification</code> e o componente <code>LeveToast</code>. Atribua a função ao
          evento <code>@click</code>. Veja o código completo:<br>

          <pre v-highlightjs>
            <code class="javascript">
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
        </li>
      </ol>
    
    </section>  
    
  
  <section id="description">
    <h4>Descrição</h4>
    <p>O componente pode ser ajustado para diferentes tipos de exibições por meio das propriedades. Por exemplo, o posicionamento pode 
      ser definico passando o objeto <code>{start: "bottom-0", end: "end-0"}</code>. A seguir, detalhes de como modificar o componente.</p>
    <div class="sidebar-separator"></div>
    
    <h4>Propriedades (Props)</h4>
    <div class="table-responsive">
      <table class="table table-bordered table-striped">
        <thead class="table-dark">
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Valor Padrão</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>toastIsVisible</code></td>
            <td>Boolean</td>
            <td>-</td>
            <td>Controla a visibilidade inicial do toast</td>
          </tr>
          <tr>
            <td><code>position</code></td>
            <td>Object</td>
            <td><pre>{start: "bottom-0", end: "end-0"}</pre></td>
            <td>Posição do container de toasts (top/middle/bottom + left/center/right)</td>
          </tr>
          <tr>
            <td><code>type</code></td>
            <td>String</td>
            <td>'light'</td>
            <td>Tipo padrão do toast (primary, secondary, success, danger, dark, light)</td>
          </tr>
          <tr>
            <td><code>title</code></td>
            <td>String</td>
            <td>'Example'</td>
            <td>Título padrão do toast</td>
          </tr>
          <tr>
            <td><code>text</code></td>
            <td>String</td>
            <td>'An example text.'</td>
            <td>Texto principal do toast</td>
          </tr>
          <tr>
            <td><code>comment</code></td>
            <td>String</td>
            <td>'An example comment.'</td>
            <td>Texto secundário do toast</td>
          </tr>
          <tr>
            <td><code>notificationTime</code></td>
            <td>String</td>
            <td>'just now'</td>
            <td>Timestamp ou indicação de tempo</td>
          </tr>
          <tr>
            <td><code>timeout</code></td>
            <td>Number</td>
            <td>5000</td>
            <td>Tempo em ms antes de remover automaticamente (0 = desativa)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4>Métodos e Eventos</h4>
    <div class="table-responsive">
      <table class="table table-bordered table-striped">
        <thead class="table-dark">
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Parâmetros</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>createItem</code></td>
            <td>Método</td>
            <td><code>newNotification: Object</code></td>
            <td>Cria uma nova notificação toast com o objeto fornecido</td>
          </tr>
          <tr>
            <td><code>@toast-created</code></td>
            <td>Evento</td>
            <td><code>notification: Object</code></td>
            <td>Emitido quando uma nova notificação é criada</td>
          </tr>
          <tr>
            <td><code>@toast-closed</code></td>
            <td>Evento</td>
            <td><code>id: Number</code></td>
            <td>Emitido quando uma notificação é fechada (manual ou automaticamente)</td>
          </tr>
          <tr>
            <td><code>getNotification</code></td>
            <td>Método</td>
            <td><code>id: Number</code></td>
            <td>Retorna o objeto de notificação pelo ID</td>
          </tr>
          <tr>
            <td><code>closeAll</code></td>
            <td>Método</td>
            <td>-</td>
            <td>Fecha todas as notificações abertas</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </section>
  

  </template>
  <template #content-bottom>
    <p>General Comments</p>
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
import { provide, ref } from 'vue'
import LeveWrapper from '@/views/layout/LeveWrapper.vue';
import LeveFixednav from '@/components/LeveFixednav.vue';
import LeveToast from '@/components/LeveToast.vue';
import LeveButton from '@/components/LeveButton.vue'
import { useNotification } from '@/utils/useNotification';
const { notify } = useNotification();

const showSuccess = () => {
  notify({
    type: 'success',
    title: 'title',
    text: 'Operação concluída com sucesso!',
    comment: 'Sucesso',
    timeout: 8000
  });
};

</script>