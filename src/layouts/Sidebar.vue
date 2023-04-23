<template>
  <div
    class="sidebar p-5 text-white bg-dark"
    :class="IS_COLLAPCED ? 'w-[250px]' : 'w-auto'"
  >
    <div class="logo flex items-center">
      <img
        src="../assets/photo_2022-04-12_17-30-11.jpg"
        class="w-12 rounded-full"
        alt="logo"
        :class="IS_COLLAPCED ? 'w-12' : 'w-10'"
      />
      <span class="ml-2 text-2xl uppercase font-semibold" v-if="IS_COLLAPCED"
        >IT-Labs
      </span>
    </div>

    <ul class="py-5 mt-5">
      <li
        class="cursor-pointer text-xl mb-2 rounded-md py-3 px-4"
        v-for="item in menuItems"
        :key="item"
        :class="{ 'bg-brand': item.child.includes($route.name) }"
        @click="$router.push({ name: item.routeName })"
      >
        <i :class="item.icon"></i>
        <span v-if="IS_COLLAPCED" class="ml-2">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import menuItems from "./MenuConfig.js";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      menuItems,
    };
  },
  computed: {
    ...mapGetters("ui", ["IS_COLLAPCED"]),
    
  },
  components: {},
};
</script>

<style>
/* .sidebar {
    height: 100%;
    background: green;
} */
</style>
