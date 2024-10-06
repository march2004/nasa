<template>
  
    <!-- Navbar -->
    
    <RouterView></RouterView>
</template>

<script>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
export default {
  components: {
    Navbar,
  }
};
</script>

<style scoped>
/* Remove margin and padding for full-screen background */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

/* Apply the background image to the whole app */

/* Navbar specific styling */

</style>
