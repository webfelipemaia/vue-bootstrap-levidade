<template>
    
<header class="navbar navbar-expand-lg bd-navbar sticky-top">
  <!-- Fixed navbar -->
  <nav class="container-xxl bd-gutter flex-wrap flex-lg-nowrap">
    <a @click="offcanvasisVisible()" class="btn btn-primary" v-if="!isVisible" data-bs-toggle="offcanvas" href="#offcanvasNavbar" role="button" aria-controls="offcanvasNavbar">
      Link with href
    </a>
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
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex mt-3" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
    <div v-if="isVisible" class="offcanvas-backdrop fade show"></div>
  </aside>

  <!-- Begin page content -->
  <main class="bd-main order-1">
    <div class="container">
      
    </div>
  </main>
</div>

<footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
  <div class="container">
    <span class="text-muted">Place sticky footer content here.</span>
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
