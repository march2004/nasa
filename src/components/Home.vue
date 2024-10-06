<template>
  <div id="app" class="app-container">
  <Navbar />


    <div class="main-content">
      <h1>Exoplanet</h1>
      <p>Deatailed description of every Exoplanet</p>

      <div class="search-container">
        <h1 class="search">Search For a Exoplanet</h1>
        <input type="text" v-model="input" placeholder="Search exoplanets..." @keyup.enter="handleSearch"/>
      </div>
     
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Card from './Card.vue'; // Ensure you import the Card component

export default {
  components: {
    Navbar,
    Card, // Register the Card component
  },
  methods: {
    goToPlanet(planet) {
      this.$router.push(`/planet/${planet}`); // Navigate to the planet page
    },
    handleSearch() {
      if (this.input) {
        this.goToPlanet(this.input); // Call goToPlanet with the input value
      }
    },
  },
};
</script>


<style>
.app-container {
  background-image: url("https://images.unsplash.com/photo-1672267155205-86acd0cfe38f?q=80&w=2198&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  display: flexbox;
}
.main-content {
  position: relative;
  color: white;
  z-index: 1;
  padding: 0;
  margin: 0;
  text-align: center;
}

.main-content h1{
  font-size: 50px;
  margin-top: 0px;
  margin-bottom: 10px;
}

.main-content p{
  color: rgb(139, 136, 136);
  margin-top: 0rem;
  font-size: 20px;
}

.search-container{
  margin-top: 3.5%;
  align-items: center;
  justify-content: center;
}

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("assets/search-icon.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.main-content .search {
  font-size: 40px;
}
</style>