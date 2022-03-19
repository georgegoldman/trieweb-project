<template>
  <v-app style="height: 100vh" :theme="theme">
    <v-app-bar>
      <v-app-bar-title>
        <v-btn>
          <!-- <v-img :src="`https://pbs.twimg.com/profile_images/1498545478585262080/fy8Hv-Jn_400x400.jpg`"
            :lazy-src="`https://pbs.twimg.com/profile_images/1498545478585262080/fy8Hv-Jn_400x400.jpg`"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img> -->
          <span class="material-icons">
            account_circle
          </span>
        </v-btn>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn >
        <span class="material-icons-round">
          system_update
        </span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <h1>ok am in the first page</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in</h1>
            <h1>ok am in the last text</h1>
          </v-col>
        </v-row>
      </v-container>
      <ButtomBar /> 
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue'
import ButtomBar from '@/components/ButtomBar.vue'

export default {
  name: 'App',

  components: {
    ButtomBar,
  },

  setup() {
    const theme = ref('light')

    return {
      theme,
      toggleTheme: () => theme.value = theme.value === 'light' ? 'dark' : 'light',
    }
  }
}
</script>
