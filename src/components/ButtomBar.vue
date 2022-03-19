<template>
  <v-bottom-navigation
    v-model="value"
    :background-color="color"
    dark
    shift
  >
    <v-btn>
      <v-icon>mdi-television-play</v-icon>
    </v-btn>

    <v-btn>
      <v-icon>mdi-music-note</v-icon>
    </v-btn>

    <v-btn>
      <v-icon>mdi-book</v-icon>
    </v-btn>

    <v-btn>
      <v-icon>mdi-image</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    name: "ButtomBarr",

  }
</script>