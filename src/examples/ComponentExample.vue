<template>  
  <leve-wrapper>
    <template #content-top>
      <section id="introduction">
      <h3>Levidade UI Kit</h3>
      <p>Use lindos templates desenvolvidos para agilizar a criação de seu site.</p>
      <p>Este guia ajudará você a começar a usar o kit de templates, saber como executar, personalizar, atualizar e integrar seu tema!</p>
      </section>
    </template>
  <template #content-middle>

  <section id="description">
    <h4>Descrição</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quis ratione accusantium eum culpa accusamus, maxime provident 
      facilis dolores. Iste ullam ab sapiente. Sed voluptate nemo obcaecati expedita necessitatibus illum.</p>

      <br>offcanvas

      
  </section>

<section id="features">
<h3>O Que Você Pode Criar com o Levidade UI Kit?</h3>

</section>

<section id="technologies">


</section>

  </template>

  <template #aside-right>
    <leve-fixednav>
      <template #list-links>
        <li class="detail-entry detail-h2">
          <a href="#introduction">Introdução</a>
        </li>
        <li class="detail-entry detail-h2"><a href="#description">Description</a></li>
        <li class="detail-entry detail-h2"><a href="#features">Features</a></li>
        <li class="detail-entry detail-h2"><a href="#technologies">Technologies</a></li>          
      </template>
    </leve-fixednav>
  </template>
  </leve-wrapper>
</template>

<script setup>
import LeveWrapper from '@/views/layout/LeveWrapper.vue';
import LeveFixednav from '@/components/LeveFixednav.vue';
</script>
