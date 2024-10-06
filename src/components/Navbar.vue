<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <a href="/">ExoPlanet</a>
      </div>

      <!-- Toggle Button for Mobile -->
      <div class="nav-toggle" @click="toggleMenu">
        <span class="burger-icon" v-if="!isMenuOpen">☰</span>
        <span class="burger-icon" v-else>✖</span>
      </div>

      <!-- Navigation Links -->
      <ul class="nav-links" :class="{ 'nav-active': isMenuOpen }">
        <li><a href="/">Home</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,  
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Basic Navbar Styles */
.navbar {
  color: rgb(255, 255, 255);
  padding: 1em;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-family: "Sen";
  font-weight: 700;
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links li a {
  font-family: "Sen";
  font-weight: 700;
  color: rgb(255, 255, 255);
  text-decoration: none;
  padding: 0.5em 1em;
  transition: background 0.3s;
}

.nav-links li a:hover {
  background-color: #555;
}

/* Burger Menu for Mobile */
.nav-toggle {
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
}

/* Media Queries for Mobile */
@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 60px;
    right: 0;
    height: 100vh;
    background-color: #333;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .nav-links.nav-active {
    transform: translateX(0);
  }

  .nav-toggle {
    display: block;
  }

  .nav-links li {
    margin: 1em 0;
  }
}

.navbar {
  z-index: 1000;
}
</style>
