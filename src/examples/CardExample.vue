<template>  
  <leve-wrapper>
    <template #content-top>
      <section id="introduction">
      <h3>Component Name</h3>
      <p>Component Description</p>
      </section>
    </template>
  <template #content-middle>

  <section id="how-to-use">
    <h4>Como usar</h4>
    <div class="sidebar-separator"></div>    
    
    <h5 id="badge-headings">Opção 1</h5>
    <p>Breve descrição da opção 1</p>
    
    <div class="howto-use">
      <div class="howto-use__title">
        <span><i class="bi bi-code-slash"></i> code
        </span>
      </div>

      <!-- Código do exemplo implementado -->
      <pre v-highlightjs><code class="javascript">
        
      </code></pre>

      <br />
    
    <div class="howto-use__title">
      <span><i class="bi bi-eye"></i>
        preview
      </span>
    </div>

    <!-- Exemplo implementado -->

    </div>
  </section>
  <br />

  <!--API do componente -->
  <section id="description">
    <h4>Descrição</h4>
    <div class="sidebar-separator"></div>

    <h5 class="mt-5">Propriedades (props)</h5>
    
    <br />

    <h5 class="mt-5">Métodos e Eventos</h5>
  
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