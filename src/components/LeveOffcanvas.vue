<template>
    
<header class="navbar navbar-expand-lg bd-navbar sticky-top bg-light">
  <!-- Fixed navbar -->
  <nav class="container-xxl bd-gutter flex-wrap flex-lg-nowrap">
    <button @click="offcanvasisVisible()" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#offcanvasNavbar" aria-controls="#offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</header>

<div class="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
  <aside class="bd-sidebar" :style="(!isVisible) ? 'display: none' : undefined">

    <div :class="[{ 'offcanvas': isVisible },{ 'show': isVisible }]" class="offcanvas-start" tabindex="-1" id="offcanvasNavbar"  :aria-modal="isVisible" :role="isVisible ? 'dialog' : undefined" aria-labelledby="offcanvasNavbarLabel">
          
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button @click="offcanvasisVisible()" v-if="isVisible" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">
      </div>

    </div>
    <div v-if="isVisible" class="offcanvas-backdrop fade show"></div>
  </aside>

  <main class="bd-main order-1">
    <div class="container">
      
    </div>
  </main>
</div>

<footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
  <div class="container">
    
  </div>
</footer>

</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  props: {
    offcanvasVisible: Boolean,
  },
  data() {
    return {
      isVisible: this.offcanvasVisible,
      displayNone: 'none',
    }
  },
  methods: {
    offcanvasisVisible() {
      this.isVisible = !this.isVisible;
      console.log('clicked')
    }
  },
}
</script>

<style>
.bd-sidebar {
    grid-area: sidebar;
}
.bd-main {
    grid-area: main;
}


@media (min-width: 992px) {
  .bd-layout {
    display: grid;
      grid-template-areas: "sidebar main";
      grid-template-columns: 1fr 5fr;
      gap: 1.5rem
  }
  .bd-sidebar {
    position: -webkit-sticky;
    position: sticky;
    top: 5rem;
    display: block !important;
    height: calc(100vh - 6rem);
    padding-left: .25rem;
    margin-left: -.25rem;
    overflow-y: auto;
  }
  .bd-main {
    grid-template-areas:
        "intro toc"
        "content toc";
    grid-template-rows: auto 1fr;
    grid-template-columns: 4fr 1fr;
  }
}

@media (min-width: 768px) {
  .bd-main {
    display: grid;
    grid-template-areas:
        "intro"
        "toc"
        "content";
    grid-template-rows: auto auto 1fr;
    gap: inherit;
  }
}

</style>
