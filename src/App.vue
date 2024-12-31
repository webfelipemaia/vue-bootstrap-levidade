<template>
  <LeveContainer>
    <!-- Header Slots -->
    <template #navbar>
      <ul class="nav">
        <li class="nav-item"><a class="nav-link text-white" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">Contact</a></li>
      </ul>
    </template>

    <template #wrapper />

    <!-- Left Aside -->
    <template #aside-left>
      <nav class="aside-nav">
        <ul class="navbar-nav flex-column">
          <li class="navbar-header">
            <h5 class="heading">Início</h5>
          </li>
          <li class="nav-item"><router-link class="nav-link" to="/doc">Introdução</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/#">Começar</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/#">Customizar</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/#">Vue</router-link></li>
          <li>
            <div class="sidebar-separator"></div>
          </li>
          <li class="navbar-header">
            <h5 class="heading">Conhecimento Básico</h5>
          </li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/#">Cores</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/#">CSS</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/#">Layout</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/#">CSS</router-link></li>
          <li>
            <div class="sidebar-separator"></div>
          </li>
          <li class="navbar-header">
            <h5 class="heading">Componentes</h5>
          </li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/accordion">Accordion</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/alert">Alert</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/badge">Badge</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/breadcrumb">Breadcrumb</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/button">Button</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/card">Card</router-link></li>          
          <li class="nav-item"><router-link class="nav-link" to="/doc/dropdown">Dropdown</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/image">Image</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/notification">Notification</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/offcanvas">Offcanvas</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/toast">Toast</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/tooltip">Tooltip</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/typography">Typography</router-link></li>
        </ul>
      </nav>
      <LeveOffcanvas
      :offcanvas-visible="false" 
      title="My Menu" 
      placement="start"
      >
      <template #offcanvas-nav>
        <li class="nav-item"><a class="nav-link" href="#">Link 1</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Link 2</a></li>
      </template>
      </LeveOffcanvas>
    </template>


    <!-- Footer -->
    <template #footer>
      <p>© 2024 Levidade UI kit. All Rights Reserved.</p>
    </template>
  </LeveContainer>
</template>

<script setup>
import LeveContainer from './views/layout/LeveContainer.vue';
//import LeveFixednav from './components/LeveFixednav.vue';
import LeveOffcanvas from './components/LeveOffcanvas.vue';
</script>
