<template>
    <header>
      <LeveOffcanvasTrigger context="mainMenu" />
      <!-- Resto do header -->
       
      <li class="nav-item"><a class="nav-link text-white" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">Contact</a></li>
    </header>
  </template>
  
  <script setup>
  import LeveOffcanvasTrigger from '@/components/offcanvas/LeveOffcanvasTrigger.vue';
  </script>