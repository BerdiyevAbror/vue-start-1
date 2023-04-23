<template>
    <div class="login h-full min-h-screen flex justify-center items-center">
      <v-sheet width="400" class="mx-auto">
        <h2 class="text-3xl text-center mb-8 font-bold text-gray-600">Registration</h2>
        <v-form @submit.prevent>
          <v-text-field v-model="login" :rules="rules" label="Login"></v-text-field>

          <v-text-field v-model="email" :rules="rules" label="Login"></v-text-field>
  
          <v-text-field v-model="password" :rules="rules" label="Email"></v-text-field>
  
          <v-btn type="submit" block class="mt-2">Sign Up </v-btn>
        </v-form>
        <p class="mt-3">Already have account?
          <span class="text-brand font-semibold cursor-pointer" @click="$router.push({name:'login'})">Sign in</span>
        </p>
      </v-sheet>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        login: "",
        password: "",
        email: "",
        rules: [
          (value) => {
            if (value.length < 3) return " Min length 3";
  
            if (value) return true;
  
            return "You must enter a first name.";
          },
        ],
      };
    },
  };
  </script>
  