<template>
  <LeveContainer>
    
    <!-- Header Slots -->
    <template #navbar>

      <NavbarMain bg-color="bg-primary">
        <template #navbar-nav>
          <NavbarNav :items="navItems" />
        </template>
        
        <template #navbar-search>
          <NavbarSearch 
            placeholder="Buscar..."
            button-text="Buscar"
            button-icon="bi bi-search"
            show-button-icon
          />
        </template>
      </NavbarMain>
<!-- 
        <LeveOffcanvas 
          v-model="menuOpen" 
          title="Menu Principal" 
        >          
          <template #offcanvas-nav>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Sobre</router-link>
            </li>
          </template>
        </LeveOffcanvas> -->
        

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
          <li class="nav-item"><router-link class="nav-link" to="/#">Começar</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/#">Customizar</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/#">Vue</router-link></li>
          <li>
            <div class="sidebar-separator"></div>
          </li>
          <li class="navbar-header">
            <h5 class="heading">Conhecimento Básico</h5>
          </li>
          <li class="nav-item"><router-link class="nav-link" to="/#">Cores</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/#">CSS</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/#">Layout</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/#">CSS</router-link></li>
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
          <li class="nav-item"><router-link class="nav-link" to="/doc/button-group">ButtonGroup</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/card">Card</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/dropdown">Dropdown</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/image">Image</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/offcanvas">Offcanvas</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/toast">Toast</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/tooltip">Tooltip</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/typography">Typography</router-link></li>

          <li>
            <div class="sidebar-separator"></div>
          </li>
          <li class="navbar-header">
            <h5 class="heading">Plugins</h5>
          </li>
          <li class="nav-item"><router-link class="nav-link" to="/doc/notification">Notification</router-link></li>
        </ul>
      </nav>

    </template>


    <!-- Footer -->
    <template #footer>
      <p>© 2024 Levidade UI kit. All Rights Reserved.</p>
    </template>
  </LeveContainer>
</template>

<script setup>
import { ref, provide } from 'vue';
import LeveContainer from './views/layout/LeveContainer.vue';
//import LeveFixednav from './components/LeveFixednav.vue';
import LeveOffcanvas from '@/components/offcanvas/LeveOffcanvas.vue'
const menuOpen = ref(false)
import ContentHeader from './views/layout/ContentHeader.vue';
import NavbarMain from '@/components/navbar/NavbarMain.vue';
import NavbarNav from '@/components/navbar/NavbarNav.vue';
import NavbarSearch from '@/components/navbar/NavbarSearch.vue';

provide('mainMenu', {
  isOpen: menuOpen,
  toggle: () => menuOpen.value = !menuOpen.value
});


const navItems = [
  {
    text: 'Home',
    href: '/',
    active: false, // Estado inicial
    icon: 'bi bi-house'
  },
  { 
    text: 'Index', 
    href: '/doc', 
    active: false, // Estado inicial
    icon: 'bi bi-person' 
  },
  {
    text: 'Dropdown',
    dropdown: true,
    items: [
      { text: 'Accordion', href: '/doc/accordion', active: false },
      { text: 'Alert', href: '/doc/alert', active: false }, // Ativo por padrão
      { isDivider: true },
      { text: 'Badge', href: '/doc/badge', active: false }
    ]
  }
]

</script>
