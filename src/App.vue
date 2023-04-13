<template>
  <main-layout>
  <RouterView />
  </main-layout>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';
export default {
  components:{
    MainLayout,
  }
}
</script>

