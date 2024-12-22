<template>
  <div>
    <header class="navbar navbar-expand-lg bd-navbar sticky-top bg-light">
      <nav class="container-xxl bd-gutter flex-wrap flex-lg-nowrap">
        <button 
          @click="offcanvasisVisible" 
          class="navbar-toggler" 
          type="button" 
          aria-controls="offcanvasNavbar" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </header>

    <div class="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
      <aside class="bd-sidebar" :style="(!isVisible) ? 'display: none' : undefined">
        <div 
          :class="[
            'offcanvas', 
            placementClass, 
            { 'show': isVisible }
          ]" 
          tabindex="-1" 
          id="offcanvasNavbar"  
          :aria-modal="isVisible" 
          :role="isVisible ? 'dialog' : undefined" 
          aria-labelledby="offcanvasNavbarLabel">
              
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              {{ title || 'Offcanvas menu' }}
            </h5>
            <div class="sidebar-separator"></div>
            <button 
              @click="offcanvasisVisible" 
              v-if="isVisible" 
              type="button" 
              class="btn-close" 
              aria-label="Close">
            </button>
          </div>

          <div class="offcanvas-body">
            <nav class="aside-nav">
              <ul class="navbar-nav flex-column">
                <slot name="offcanvas-nav"></slot>
              </ul>
            </nav>
          </div>
        </div>
        <div v-if="isVisible" class="offcanvas-backdrop fade show"></div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OffcanvasComponent',
  props: {
    offcanvasVisible: Boolean,
    title: String,
    placement: {
      type: String,
      default: 'start', // Default placement
      validator: value => ['start', 'end', 'top', 'bottom'].includes(value)
    }
  },
  data() {
    return {
      isVisible: this.offcanvasVisible
    };
  },
  computed: {
    placementClass() {
      return `offcanvas-${this.placement}`;
    }
  },
  methods: {
    offcanvasisVisible() {
      this.isVisible = !this.isVisible;
    }
  },
};
</script>
