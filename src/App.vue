<template>
  <div id="app">
    <div>
      <app-header/>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import AppHeader from  './components/AppHeader'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>

</style>
