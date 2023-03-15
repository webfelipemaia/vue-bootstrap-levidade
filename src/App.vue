<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="d-flex flex-column mb-3">
    <LeveButton type="primary">Teste</LeveButton>
    <LeveButton type="primary" class="hvr-shutter-out-horizontal-secondary">Teste</LeveButton>
    <LeveButton type="button" class="btn btn-primary">Primary</LeveButton>
    <LeveButton type="button" class="btn btn-secondary">Secondary</LeveButton>
    <LeveButton type="button" class="btn btn-success">Success</LeveButton>
    <LeveButton type="button" class="btn btn-danger">Danger</LeveButton>
    <LeveButton type="button" class="btn btn-warning">Warning</LeveButton>
    <LeveButton type="button" class="btn btn-info">Info</LeveButton>
    <LeveButton type="button" class="btn btn-light">Light</LeveButton>
    <LeveButton type="button" class="btn btn-dark">Dark</LeveButton>
    <LeveButton type="button" class="btn btn-link">Link</LeveButton>
  </div>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.d-flex.flex-column {
  max-width: 100%;
  align-items: center;

}
.d-flex.flex-column button {
    width: 90px;
    margin: 0.125em;
  }
</style>
