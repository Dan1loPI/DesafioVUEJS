<template>
  <div id="app">
    <DesafioHeader />
    <router-view></router-view>
  </div>
</template>
<script>
import './assets/css/style.css'

import DesafioHeader from './components/pages/DesafioHeader.vue'

export default {
  name: 'App',
  
  components: {
    DesafioHeader,
    
  }
}
</script>
<style scoped>


</style>

