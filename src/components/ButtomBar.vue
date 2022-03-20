<template>
  <v-bottom-navigation
    dark
    shift
  >
    <v-btn to="/" >
      <i class="fa-solid fa-house-user fa-2x"></i>
    </v-btn>

    <v-btn to="">
      <i class="fa-solid fa-magnifying-glass fa-2x"></i>
    </v-btn>

    <v-btn to="">
      <i class="fa-regular fa-bell fa-2x"></i>
    </v-btn>

    <v-btn to="/settings">
      <i class="fa-solid fa-gear fa-2x"></i>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    name: "ButtomBarr",

  }
</script>