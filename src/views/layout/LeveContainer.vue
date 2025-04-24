<template>
  <div class="container-fluid">
    <!-- Header Section -->
    <header>
        <slot name="navbar"></slot>
    </header>


    <!-- Main Section with 3 Columns -->
    <div class="row mt-4">
      <!-- Left Aside -->
      <aside class="col-12 col-lg-2 p-3 aside-sidebar">
        <slot name="aside-left"></slot>
      </aside>

      <!-- Main Content + Riht Aside -->
      <router-view />
    </div>
      

    <!-- Footer Section -->
    <footer class="bg-dark text-white text-center py-3 mt-4">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
  
  <script>
  export default {
    name: "ExampleContainer", // Nome do componente
  };
  </script>
  
  <style scoped>
  /* Estilos adicionais (opcional) */
  </style>
  