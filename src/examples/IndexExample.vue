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
      <p>Desenvolvido com Vue 3 e baseado no poder e na simplicidade do Bootstrap, Levidade UI Kit é um conjunto moderno e flexível de componentes de interface de usuário. Criado para ajudar desenvolvedores a construir interfaces responsivas, elegantes e acessíveis de maneira rápida e eficiente, este UI Kit oferece uma combinação perfeita de personalização e praticidade.

Com uma ampla variedade de componentes prontos para uso, como botões, formulários, tabelas, modais e muito mais, o Levidade UI Kit facilita a criação de aplicações web consistentes e visualmente atraentes. Ele também integra o sistema de grid e as utilidades do Bootstrap, permitindo controle total sobre layouts e estilos.

Ideal para desenvolvedores de todos os níveis, o Levidade UI Kit foi projetado para ser fácil de configurar, usar e adaptar às necessidades do seu projeto. Seja criando um dashboard, uma landing page ou um aplicativo completo, este kit oferece as ferramentas necessárias para agilizar seu desenvolvimento.</p>
      </section>
<section id="features">
  <h3>O Que Você Pode Criar com o Levidade UI Kit?</h3>
  <p>
    O <strong>Levidade UI Kit</strong> é uma solução versátil que capacita desenvolvedores a criar uma ampla variedade de interfaces web, desde páginas simples até aplicações complexas. Ele foi projetado para atender diferentes necessidades de design e funcionalidade, tornando-se uma escolha ideal para:
  </p>

  <h5>1. Modelos de Páginas Simples</h5>
  <p>
    Crie páginas estáticas ou dinâmicas com rapidez e eficiência. Use componentes prontos, como cabeçalhos, rodapés, formulários e botões, para construir páginas iniciais, "Sobre Nós" ou de contato em minutos.
  </p>

  <h5>2. Landing Pages Atrativas</h5>
  <p>
    Construa landing pages impactantes que convertem visitantes em clientes. Aproveite componentes como carrosséis, seções de destaque e call-to-actions para criar páginas promocionais, campanhas de marketing e lançamentos de produtos.
  </p>

  <h5>3. Dashboards Dinâmicos</h5>
  <p>
    Desenvolva dashboards interativos e responsivos para monitorar dados e métricas. Inclua gráficos, tabelas, cards e painéis de navegação para organizar informações de maneira clara e acessível.
  </p>

  <h5>4. Relatórios Personalizados</h5>
  <p>
    Exiba dados detalhados e relatórios visualmente atraentes com tabelas configuráveis, gráficos interativos e layouts otimizados. Ideal para aplicações corporativas, sistemas de controle ou ferramentas de análise de dados.
  </p>

  <h5>5. Sites em Geral</h5>
  <p>
    O <strong>Levidade UI Kit</strong> é perfeito para criar sites completos, incluindo blogs, portfólios e e-commerces. Sua integração com o sistema de grid do Bootstrap facilita a criação de layouts responsivos que se adaptam a diferentes dispositivos.
  </p>

</section>

<section id="technologies">
  <h4>Tecnologias</h4>
  <h5>JavaScript</h5>
  <p><strong><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">JavaScript</a></strong> é uma linguagem de programação amplamente utilizada para o desenvolvimento web. Inicialmente criada para adicionar interatividade a páginas da web, hoje é essencial tanto no front-end quanto no back-end. Com suporte nativo em todos os navegadores modernos, JavaScript permite criar desde animações até aplicativos completos com frameworks e bibliotecas avançadas.</p>
  <h5>Node.js</h5>
  <p><strong><a href="https://nodejs.org/">Node.js</a></strong> é um ambiente de execução JavaScript no lado do servidor. Ele permite executar código JavaScript fora do navegador, possibilitando a criação de servidores web, APIs e aplicativos escaláveis. Usando o motor V8 do Google Chrome, o Node.js é conhecido por seu desempenho rápido e arquitetura baseada em eventos, ideal para aplicações em tempo real.</p>
  <h5>NPM (Node Package Manager)</h5>
  <p><strong><a href="https://www.npmjs.com/">NPM</a></strong> é o gerenciador de pacotes padrão para o Node.js. Ele facilita o compartilhamento e a reutilização de código, permitindo instalar bibliotecas e dependências para projetos JavaScript. Além disso, NPM oferece scripts de automação e gerenciamento de versões, simplificando o desenvolvimento de aplicações modernas.</p>
  <h5>Vue.js</h5>
  <p><strong><a href="https://vuejs.org/">Vue.js</a></strong> é um framework progressivo de JavaScript para a construção de interfaces de usuário. Focado em ser simples e flexível, ele facilita a criação de aplicações dinâmicas e reativas com componentes modulares. Vue é especialmente popular por sua curva de aprendizado suave, excelente documentação e capacidade de integração em projetos novos ou existentes.</p>
  <h5>Bootstrap</h5>
    <p>
      O <strong><a href="https://getbootstrap.com/">Bootstrap</a></strong> é um framework front-end amplamente utilizado para criar interfaces web modernas e responsivas. Ele fornece um conjunto de componentes prontos, como botões, formulários, tabelas e modais, além de um sistema de grid poderoso baseado em flexbox para organizar layouts.
      Com o Bootstrap, desenvolvedores podem criar sites e aplicações consistentes e visualmente atraentes, mesmo com pouco conhecimento em design.
    </p>
    <p><strong>jQuery e Popper.js no Bootstrap</strong></p>
    <ul>
      <li>
          <strong>Popper.js</strong> é usado para posicionar elementos dinâmicos como tooltips e dropdowns, garantindo alinhamento e funcionamento adequado em layouts responsivos.
        </li>
    </ul>

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
          <li class="detail-entry detail-h2"><a href="#description">Descrição</a></li>
          <li class="detail-entry detail-h2"><a href="#features">Características</a></li>
          <li class="detail-entry detail-h2"><a href="#technologies">Tecnologias</a></li>          
        </template>
      </leve-fixednav>
    </template>
    </leve-wrapper>
</template>
  
<script setup>
  import LeveWrapper from '@/views/layout/LeveWrapper.vue';
  import LeveFixednav from '@/components/LeveFixednav.vue';
</script>
