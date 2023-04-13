<template>
  <main-layout>
    <router-view v-slot="{ Component }">
      <transition name="fade-effect" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main-layout>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';
export default {
  components: {
    MainLayout,
  }
}
</script>

<style>
.fade-effect-enter-active,
.fade-effect-leave-active {
  transition: opacity 0.3s ease;
}
.fade-effect-enter-from,
.fade-effect-leave-to {
  opacity: 0;
}
</style>
