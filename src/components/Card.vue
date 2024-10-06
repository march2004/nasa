<template>
  <div class="card">
    <Navbar />
    <div class="card-content">
      <h2>{{ planetData.Title }}</h2>
      <div class="data-container">
        <div v-for="(value, key) in planetData" :key="key" class="data-box">
          <strong>{{ key }}:</strong> {{ value }}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "./Navbar.vue";

export default {
  components: {
    Navbar,
  },
  props: ["name"], // Accept the name prop from the route

  data() {
    return {
      planets: {
        "11 com b": {
          "Title": "11 com b",
          "Host-Name": "11 com",
          "Discovery-Method": "Radial Velocity",
          "Discovery-Year": 2007,
          "Discovery-Facility": "Xinglong Station",
          "planatery-parameters-reference": "Liu et al. 2008",
        },
        "11 UMi b": {
          "Title": "11 UMi b",
          "Host-Name": "11 UMi",
          "Discovery-Method": "Radial Velocity",
          "Discovery-Year": 2009,
          "Discovery-Facility": "Thueringer Landessternwarte Tautenburg",
          "planatery-parameters-reference": "Stassun et al. 2017",
        },
        "55 cnc e": {
          "Title": "55 cnc",
          "Host-Name": "11 com",
          "Discovery-Method": "Radial Velocity",
          "Discovery-Year": 2004,
          "Discovery-Facility": "McDonald Observatory",
          "planatery-parameters-reference": "Demory et al. 2016",
        },
        "6 Lyn b": {
          "Title": "6 Lyn b",
          "Host-Name": "6 Lyn",
          "Discovery-Method": "Radial Velocity",
          "Discovery-Year": 2008,
          "Discovery-Facility": "Okayama Astrophysical Observatory",
          "planatery-parameters-reference": "Okayama Astrophysical Observatory",
        },
        "HD 10180 c": {
          "Title": "HD 10180 c",
          "Host-Name": "HD 10180",
          "Discovery-Method": "Radial Velocity",
          "Discovery-Year": 2010,
          "Discovery-Facility": "La Silla Observatory",
          "planatery-parameters-reference": "Lovis et al. 2011",
        },
        "Gliese 581 d": {
          "Title": "Gliese 581 d",
          "Host-Name": "Gliese 581",
          "Discovery-Method": "Radial Velocity",
          "Discovery-Year": 2007,
          "Discovery-Facility": "European Southern Observatory",
          "planatery-parameters-reference": "Udry et al. 2007",
        },
        "Kepler-22b": {
          "Title": "Kepler-22b",
          "Host-Name": "Kepler-22",
          "Discovery-Method": "Transit",
          "Discovery-Year": 2011,
          "Discovery-Facility": "Kepler Space Telescope",
          "planatery-parameters-reference": "Borucki et al. 2012",
        },
        "Proxima Centauri b": {
          "Title": "Proxima Centauri b",
          "Host-Name": "Proxima Centauri",
          "Discovery-Method": "Radial Velocity",
          "Discovery-Year": 2016,
          "Discovery-Facility": "European Southern Observatory",
          "planatery-parameters-reference": "Anglada-Escudé et al. 2016",
        },
        "HD 209458 b": {
          "Title": "HD 209458 b",
          "Host-Name": "HD 209458",
          "Discovery-Method": "Transit",
          "Discovery-Year": 1999,
          "Discovery-Facility": "Keck Observatory",
          "planatery-parameters-reference": "Charbonneau et al. 2000",
        },
        "WASP-12b": {
          "Title": "WASP-12b",
          "Host-Name": "WASP-12",
          "Discovery-Method": "Transit",
          "Discovery-Year": 2008,
          "Discovery-Facility": "SuperWASP",
          "planatery-parameters-reference": "Hebb et al. 2009",
        },
        "Trappist-1d": {
          "Title": "Trappist-1d",
          "Host-Name": "Trappist-1",
          "Discovery-Method": "Transit",
          "Discovery-Year": 2017,
          "Discovery-Facility": "Spitzer Space Telescope",
          "planatery-parameters-reference": "Gillon et al. 2017",
        },
        "55 Cancri e": {
          "Title": "55 Cancri e",
          "Host-Name": "55 Cancri",
          "Discovery-Method": "Radial Velocity",
          "Discovery-Year": 2004,
          "Discovery-Facility": "McDonald Observatory",
          "planatery-parameters-reference": "Demory et al. 2016",
        },
        "K2-18b": {
          "Title": "K2-18b",
          "Host-Name": "K2-18",
          "Discovery-Method": "Transit",
          "Discovery-Year": 2015,
          "Discovery-Facility": "Kepler Space Telescope",
          "planatery-parameters-reference": "Montet et al. 2015",
        },
        "GJ 1214 b": {
          "Title": "GJ 1214 b",
          "Host-Name": "GJ 1214",
          "Discovery-Method": "Transit",
          "Discovery-Year": 2009,
          "Discovery-Facility": "MEarth Project",
          "planatery-parameters-reference": "Charbonneau et al. 2009",
        },
        "HD 189733 b": {
          "Title": "HD 189733 b",
          "Host-Name": "HD 189733",
          "Discovery-Method": "Transit",
          "Discovery-Year": 2005,
          "Discovery-Facility": "Observatoire de Haute-Provence",
          "planatery-parameters-reference": "Bouchy et al. 2005",
        },
        "LHS 1140 b": {
          "Title": "LHS 1140 b",
          "Host-Name": "LHS 1140",
          "Discovery-Method": "Transit",
          "Discovery-Year": 2017,
          "Discovery-Facility": "MEarth Project",
          "planatery-parameters-reference": "Dittmann et al. 2017",
        },
        "HD 106906 b": {
          "Title": "HD 106906 b",
          "Host-Name": "HD 106906",
          "Discovery-Method": "Direct Imaging",
          "Discovery-Year": 2013,
          "Discovery-Facility": "Magellan Telescopes",
          "planatery-parameters-reference": "Bailey et al. 2014",
        },
        "HR 8799 e": {
          "Title": "HR 8799 e",
          "Host-Name": "HR 8799",
          "Discovery-Method": "Direct Imaging",
          "Discovery-Year": 2010,
          "Discovery-Facility": "Keck Observatory",
          "planatery-parameters-reference": "Marois et al. 2010",
        },
        "Tau Boötis b": {
          "Title": "Tau Boötis b",
          "Host-Name": "Tau Boötis",
          "Discovery-Method": "Radial Velocity",
          "Discovery-Year": 1996,
          "Discovery-Facility": "Lick Observatory",
          "planatery-parameters-reference": "Butler et al. 1997",
        },
        "HD 149026 b": {
          "Title": "HD 149026 b",
          "Host-Name": "HD 149026",
          "Discovery-Method": "Transit",
          "Discovery-Year": 2005,
          "Discovery-Facility": "Subaru Telescope",
          "planatery-parameters-reference": "Sato et al. 2005",
        },
        "Kepler-452b": {
          "Title": "Kepler-452b",
          "Host-Name": "Kepler-452",
          "Discovery-Method": "Transit",
          "Discovery-Year": 2015,
          "Discovery-Facility": "Kepler Space Telescope",
          "planatery-parameters-reference": "Jenkins et al. 2015",
        },
      },
    };
  },

  computed: {
    planetData() {
      return (
        this.planets[this.name] || {
          title: "Unknown Planet",
          description: "No data available for this planet.",
          image: "/path/to/default-image.jpg",
        }
      );
    },
  },
};
</script>

<style>
.card {
  background-image: url("https://images.unsplash.com/photo-1727363456036-ecc24d117fb7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100vw;
  position: relative;
}

.card-content {
  position: relative;
  color: white;
  z-index: 1;
  padding: 0;
  margin: 0;
  text-align: center;
}

.card-content h2 {
  color: rgb(221, 221, 221);
  margin-top: 30px;
  font-size: 60px;
}

.data-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.data-box {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  width: 45%;
  box-sizing: border-box;
  text-align: left;
  transition: background 0.3s ease, transform 0.3s ease; /* Transition for smooth effect */
}

.data-box strong {
  font-size: 18px;
}

/* Hover effect */
.data-box:hover {
  background: rgba(255, 255, 255, 0.1); /* Change to a lighter background */
  transform: scale(1.05); /* Slightly enlarge the box */
  cursor: pointer; /* Change cursor to pointer */
}

@media (max-width: 768px) {
  .data-box {
    width: 100%;
  }
}


</style>
