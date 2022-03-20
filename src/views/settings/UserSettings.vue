<template>

    <h1>Account</h1>
    <v-file-input
    :rules="avatarRules"
    variant = "outlined"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="mdi-camera"
    label="Avatar"
    ></v-file-input>

    <v-text-field
    v-model="name"
    label="First Name"
    variant="underlined"
    placeholder="John Doe"
    shaped
    ></v-text-field>

    <p>{{ radios || 'null' }}</p>
    <v-radio-group
      v-model="radios"
      mandatory
    >
      <v-radio
        label="Male"
        value="Male"
      ></v-radio>
      <v-radio
        label="Female"
        value="Female"
      ></v-radio>
    </v-radio-group>

    <v-text-field
    v-model="email"
    :rules="[rules.required, rules.email]"
    label="E-mail"
    variant="underlined"
    ></v-text-field>

</template>

<script>
  export default {
    data: () => ({
      avatarRules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
      name: null,
      radios: "Gender",
          title: 'Preliminary report',
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        }
    }),
  }
</script>