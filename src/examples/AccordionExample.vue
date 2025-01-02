<template>  
    <leve-wrapper>
      <template #content-top>
        <section id="introduction">
        <h3>Accordion</h3>
        <p>O Accordion é um componente usado para organizar conteúdo em seções expansíveis e colapsáveis. Ele permite ao usuário 
            navegar entre seções de forma intuitiva, exibindo apenas uma seção de conteúdo por vez, o que economiza espaço em 
            telas menores e melhora a experiência do usuário em layouts mais complexos.</p>
        <br />
        <h4>Componentes auxiliares</h4>
        <p><strong>LeveAccordionHeader</strong><br />
Componente que representa o cabeçalho do item do Accordion.
Utiliza um <code>&lt;slot&gt;</code> para inserir conteúdo customizável no cabeçalho.</p>
<p><strong>LeveAccordionBody</strong>
Componente que encapsula o corpo de um item do Accordion.
Utiliza um <code>&lt;slot&gt;</code> para inserir conteúdo customizável no corpo.</p>
<p><strong>LeveAccordionItem</strong>
Componente que representa um item completo do Accordion, incluindo o cabeçalho e o corpo.
Controla a expansão e colapso do item e emite eventos para notificar alterações.</p>
        </section>
      </template>
    <template #content-middle>

      <section id="how-to-use">
        <br />
        <h4 class="mt-5">Como usar</h4>
        <div class="sidebar-separator"></div>
        <p>Cada item do acordeão é gerenciado por um subcomponente (ver componentes auxiliares) chamado LeveAccordionItem.</p>
        <p>Os dados dos items, como título e o conteúdo que vai no corpo, são passados em um array de objetos. Por exemplo</p>
        <pre v-highlightjs><code class="javascript">
const accordionItems1 = [
  { accordionId: 1, title: 'Título 1', description: 'Conteúdo 1', expanded: false },
  { accordionId: 2, title: 'Título 2', description: 'Conteúdo 2', expanded: false },
  { accordionId: 3, title: 'Título 3', description: 'Conteúdo 3', expanded: false },
];

...

&lt;leve-accordion
  :id="accordion1"
  :items="getClonedItems(accordionItems1)"
  :multiple="false"
/&gt;
        </code></pre>
        <LeveAlert alertType="info" icon="exclamation-circle">Nota:<br />
        Use <code>getClonedItems()</code> com a função <code>JSON.parse(JSON.stringify(...))</code> ou outra técnica de clonagem para garantir que os 
          itens de cada acordeon sejam independentes, caso você renderize vários componentes na mesma página.
        </LeveAlert>
        <br />
        <div class="howto-use">
            <h5 id="accordion-basic">Accordion Básico</h5>
            <div class="howto-use__title">code</div>
            <pre v-highlightjs="sourcecode"><code class="javascript">
    &lt;leve-accordion :multiple="false" /&gt;
            </code></pre>

            <div class="howto-use__title">preview</div>
              <leve-accordion
                :id="accordion1"
                :items="getClonedItems(accordionItems1)"
                :multiple="false"
              />
        </div>

        <div class="howto-use mt-5">
            <h5 id="accordion-flush">Accordion Flush Layout</h5>
            <div class="howto-use__title">code</div>
            <pre v-highlightjs="sourcecode"><code class="javascript">
    &lt;leve-accordion :accordion-flush="true" /&gt;
            </code></pre>

            <div class="howto-use__title">preview</div>
            <leve-accordion 
              :id="accordion2" 
              :accordion-flush="true"  
              :items="accordionItems2" />

        </div>

        <div class="howto-use mt-5">
            <h5 id="accordion-multiple">Accordion com Múltiplos Itens Abertos</h5>
            <div class="howto-use__title">code</div>
            <pre v-highlightjs="sourcecode"><code class="javascript">
    &lt;leve-accordion :multiple="true" /&gt;
            </code></pre>

            <div class="howto-use__title">preview</div>
            <leve-accordion 
              :id="accordion3"
              :multiple="true"  
              :items="getClonedItems(accordionItems1)" />

        </div>
    </section>
    <br />
    <section id="description">
      <h4 id="LeveAccordion-description">Descrição - LeveAccordion</h4>
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
            <td>id</td>
            <td>String</td>
            <td>'accordionId'</td>
            <td>Identificador único para o acordeon. Necessário para gerenciar múltiplas instâncias.</td>
          </tr>
          <tr>
            <td>items</td>
            <td>Array</td>
            <td>[]</td>
            <td>
              Array de objetos que define os itens do acordeon. Cada objeto deve conter 
              <code>accordionId</code>, <code>title</code>, <code>description</code> e <code>expanded</code>.
            </td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Se <code>true</code>, permite que múltiplos itens sejam expandidos ao mesmo tempo.</td>
          </tr>
          <tr>
            <td>accordionFlush</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Se <code>true</code>, aplica o estilo "flush" (sem bordas).</td>
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
          <td>getAccordionId</td>
          <td>currentIdValue (String)</td>
          <td>
            Atualiza o ID do item atualmente expandido e, se <code>multiple</code> for <code>false</code>, fecha outros itens.
          </td>
        </tr>
        <tr>
          <td>closeOtherItems</td>
          <td>currentIdValue (String)</td>
          <td>Fecha todos os itens, exceto o que possui o ID passado como parâmetro.</td>
        </tr>
      </tbody>
    </table>
    <br />
    <table class="table">
      <thead>
        <tr>
          <th>Evento</th>
          <th>Payload</th>
          <th>Método Associado</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>accordion-opened</td>
          <td>accordionId</td>
          <td>getAccordionId</td>
          <td>Emitido quando um item é expandido. Contém o ID do item expandido.</td>
        </tr>
      </tbody>
    </table>
    <br />
    
    <h4 id="LeveAccordionItem-description" class="mt-5">Descrição - LeveAccordionItem</h4>
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
            <td>item</td>
            <td>Object</td>
            <td>{}</td>
            <td>
              Objeto que define os dados do item. Deve conter <code>accordionId</code>, 
              <code>title</code>, <code>description</code> e <code>expanded</code>.
            </td>
          </tr>
          <tr>
            <td>groupId</td>
            <td>String</td>
            <td>null</td>
            <td>Identificador único do grupo de acordeons ao qual este item pertence.</td>
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
            <td>toggleItem</td>
            <td>item (Object)</td>
            <td>
              Alterna o estado do item entre expandido e contraído. Emite o evento 
              <code>accordion-opened</code>.
            </td>
          </tr>
        </tbody>
      </table>

    </section>
    

    </template>
    <template #content-bottom>
      <p>Bottom Content for Accordion</p>
    </template>
    <template #aside-right>
      <leve-fixednav>
        <template #list-links>
          <li class="detail-entry detail-h2">
            <a href="#introduction">Introdução</a>
          </li>
          <li class="detail-entry detail-h2"><a href="#how-to-use">Como usar</a>
            <ul>
              <li class="detail-entry detail-h2"><a href="#accordion-basic">Accordion Basic</a></li>
              <li class="detail-entry detail-h2"><a href="#accordion-flush">Accordion Flush Layout</a></li>
              <li class="detail-entry detail-h2"><a href="#accordion-multiple">Accordion Multiple</a></li>
            </ul>
          </li>
          <li class="detail-entry detail-h2"><a href="#description">Descrição</a>
            <ul>
              <li class="detail-entry detail-h2"><a href="#LeveAccordion-description">LeveAccordion</a></li>
              <li class="detail-entry detail-h2"><a href="#LeveAccordionItem-description">LeveAccordionItem</a></li>
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
  import LeveAlert from '@/components/LeveAlert.vue';

  const accordionItems1 = [
  { accordionId: 1, title: 'Título 1', description: 'Conteúdo 1', expanded: false },
  { accordionId: 2, title: 'Título 2', description: 'Conteúdo 2', expanded: false },
  { accordionId: 3, title: 'Título 3', description: 'Conteúdo 3', expanded: false },
];

const accordionItems2 = [
  { accordionId: 1, title: 'Título A', description: 'Conteúdo A', expanded: false },
  { accordionId: 2, title: 'Título B', description: 'Conteúdo B', expanded: false },
  { accordionId: 3, title: 'Título C', description: 'Conteúdo C', expanded: false },
];

function getClonedItems(items) {
  return JSON.parse(JSON.stringify(items));
}
</script>
<style lang="scss">
.howto-use {
    
    .howto-use__title {
        padding: 0.5rem 1rem 0.5rem 0;
        margin-bottom: 0.2rem;
    }
}
</style>