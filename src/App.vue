<template>
  <v-app style="height: 100vh" :theme="theme" id="mainBox">
    <v-app-bar>
      <v-btn
        icon
        color="primary"
        size="small"
        to="user-settings"
      >
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
        <template v-slot:append>
          <v-btn icon="mdi-palette" class="fa-shake" @click="toggleTheme" color="primary"></v-btn>
        </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
      <ButtomBar /> 
    </v-main>
  </v-app>
</template>

<script>
import ButtomBar from '@/components/ButtomBar.vue'
import { ref } from 'vue'
export default {
  name: 'App',
  components: {
    ButtomBar,
  },
  setup () {
    const theme = ref(localStorage.getItem('theme'))

    return {
      theme,
      toggleTheme: () => {
        if(theme.value === 'light'){
          theme.value = 'dark'
          localStorage.setItem('theme', 'dark')
        }else{
          theme.value = 'light'
          localStorage.setItem('theme', 'light')
        }
      }
    }
  },
}
</script>