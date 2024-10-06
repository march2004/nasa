// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'; // Your home page where the buttons will be
import Card from './components/Card.vue'; // The card component for planets

const routes = [
  {
    path:"/",
    name:"home",
    component: Home,
  },
  {
    path: "/planet/:name",
    name: "PlanetCard",
    component: Card,
    props: true, // Enables passing route params as props to the component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
