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
        <h4>Como usar</h4>
        <div class="sidebar-separator"></div>
        <p>Cada item do acordeão é gerenciado por um subcomponente (ver componentes auxiliares) chamado LeveAccordionItem.</p>
        <br />
        <div class="howto-use">
            <h5>Accordion Básico</h5>
            <div class="howto-use__title">code</div>
            <pre v-highlightjs="sourcecode"><code class="javascript">
    &lt;leve-accordion :multiple="false" /&gt;
            </code></pre>

            <div class="howto-use__title">preview</div>
            <leve-accordion :multiple="false" :items="[{
        accordionId: 1,
        title: 'title one',
        description: 'One Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        expanded: false,
      },{
        accordionId: 2,
        title: 'title two',
        description: 'Two Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        expanded: false,
      }]">

            </leve-accordion>
        </div>

        <div class="howto-use mt-5">
            <h5>Accordion Flush Layout</h5>
            <div class="howto-use__title">code</div>
            <pre v-highlightjs="sourcecode"><code class="javascript">
    &lt;leve-accordion :accordion-flush="true" /&gt;
            </code></pre>

            <div class="howto-use__title">preview</div>
            <leve-accordion id="accordion2" :accordion-flush="true" showExamples />

        </div>

        <div class="howto-use mt-5">
            <h5>Accordion com Múltiplos Itens Abertos</h5>
            <div class="howto-use__title">code</div>
            <pre v-highlightjs="sourcecode"><code class="javascript">
    &lt;leve-accordion :multiple="true" /&gt;
            </code></pre>

            <div class="howto-use__title">preview</div>
            <leve-accordion id="customAccordionId" :multiple="true" showExamples />


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
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Valor Padrão</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>multiple</td>
            <td>Define se múltiplos itens podem ser abertos simultaneamente.</td>
            <td>Boolean</td>
            <td>false</td>
            </tr>
            <tr>
            <td>accordionFlush</td>
            <td>Habilita ou desabilita o layout "flush", removendo bordas e espaçamentos entre os itens.</td>
            <td>Boolean</td>
            <td>false</td>
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
            <th>Parâmetros</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>getAccordionId</td>
            <td>Método</td>
            <td>Recebe o ID do item aberto e fecha os outros itens caso <code>multiple</code> seja <code>false</code>.</td>
            <td>currentId (ID do item atualmente aberto)</td>
            </tr>
            <tr>
            <td>closeOtherItems</td>
            <td>Método</td>
            <td>Fecha todos os itens do acordeão, exceto o atualmente aberto.</td>
            <td>currentId (ID do item atualmente aberto)</td>
            </tr>
            <tr>
            <td>accordion-opened</td>
            <td>Evento</td>
            <td>Emitido pelo subcomponente para notificar o item atualmente aberto.</td>
            <td>N/A</td>
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
          <li class="detail-entry detail-h2"><a href="#how-to-use">Como usar</a></li>
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
<style lang="scss">
.howto-use {
    
    .howto-use__title {
        padding: 0.5rem 1rem 0.5rem 0;
        margin-bottom: 0.2rem;
    }
}
</style>