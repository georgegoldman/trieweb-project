<template>
    <div class="row">
        <h1>Settings</h1>
        
    <v-list shaped>
      <v-list-subheader>Account</v-list-subheader>
      <v-list-item
        v-for="(item, i) in account"
        :key="i"
        :value="item"
        active-color="primary"
        rounded="shaped"
        class="my-2"
        @click="openSettings(item.text)"
      >
        <v-list-item-avatar left>
            <span class="material-icons-round">
                {{ item.icon }}
            </span>
        </v-list-item-avatar>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
    <section v-for="setting in account" :key="setting.text" class="my-1" >
      <span v-if="whatToDisplay === 'Language' && setting.text === whatToDisplay">
        Our support for all languages will be up ver soon
      </span>
      <span v-if="whatToDisplay === 'Notification' && setting.text === whatToDisplay">
        <div class="d-flex justify-center align-center">
          <v-checkbox
            v-model="checkbox"
            :label="`Notify me`"
          ></v-checkbox>
        </div>
      </span>
      <span v-if="whatToDisplay === 'Help' && setting.text === whatToDisplay">
        Hit the button to be redirected to our mail for quick response 
        <a href="mailto:noreply.trieweb@gmail.com">
          hit me
          <i class="fa-solid fa-hand fa-bounce"></i>
        </a>
      </span>
    </section>
    

    </div>
</template>

<script>
  export default {
    data: () => ({
      checkbox: true,
      selectedItem: 1,
      whatToDisplay: null,
      account: [
        { text: 'Language', icon: 'translate', display: false },
        { text: 'Notification', icon: 'notifications', display: false },
        { text: 'Help', icon: 'info', display: false },
      ],
    }),
    methods: {
      openSettings(e)  {
        this.whatToDisplay = e
        this.account.filter((item) => {
          if(item.text === e){
            item.display = true
          }
          
        })
        
      }
    }
  }
</script>