<template>
  <main-layout v-if="!hasLayout">
    <router-view v-slot="{ Component }">
      <transition name="fade-effect" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main-layout>
  <router-view v-else />
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    MainLayout,
  },
  computed: {
    ...mapGetters("ui", ["IS_COLLAPCED"]),
    hasLayout() {
      const item = ["login", "register"];
      const currentRout = this.$route.name;
      return item.includes(currentRout);
    },
  },
  methods: {
    ...mapActions("ui", ["GET_SIDEBAR_STATE"]),
    async CheckSidebarState() {
      const data = await this.GET_SIDEBAR_STATE();
      console.log(data);
      if (data === null) {
        localStorage.setItem("sidebar-ui", JSON.stringify(false));
      }
      console.log(data);
    },
  },
  mounted() {
    this.CheckSidebarState();
  },
};
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
