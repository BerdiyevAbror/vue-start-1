<template>
  <div class="login h-full min-h-screen flex justify-center items-center">
    <v-sheet width="400" class="mx-auto">
      <h2 class="text-3xl text-center mb-8 font-bold text-gray-600">Login</h2>
      <v-form @submit.prevent="login">
        <v-text-field v-model="username" :rules="rules" label="username"></v-text-field>

        <v-text-field v-model="password" :rules="rules" label="Password"></v-text-field>

        <v-btn type="submit" block class="mt-2">Sign In</v-btn>
      </v-form>
      <p class="mt-3">
        Do'nt have account?
        <span
          class="text-brand font-semibold cursor-pointer"
          @click="$router.push({ name: 'register' })"
          >Sign up</span
        >
      </p>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      rules: [
        (value) => {
          if (value.length < 3) return " Min length 3";

          if (value) return true;

          return "You must enter a first name.";
        },
      ],
    };
  },
  methods: {
    async login() {
      const data= await this.rules
      return;
      this.$router.push({ name: "home" });
    },
  },
};
</script>
