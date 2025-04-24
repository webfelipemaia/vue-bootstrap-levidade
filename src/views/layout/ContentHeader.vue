<template>
    <header>
      
      <ul class="nav">
      <LeveOffcanvasTrigger context="mainMenu" />
       
      <li class="nav-item"><a class="nav-link text-white" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#">Contact</a></li>

      </ul>
    </header>
  </template>
  
  <script setup>
  import LeveOffcanvasTrigger from '@/components/offcanvas/LeveOffcanvasTrigger.vue';
  </script>