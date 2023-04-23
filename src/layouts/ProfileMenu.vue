<template>
  <div class="profile-menu px-5 py-2 flex items-center justify-between border-b-2 border-gray-300 bg-[#f1f1f1]">
    <!-- toggler -->
    <div class="sidebar-toggler-wrapper h-full bg-white">
      <div class="sidebar-toggler w-8 h-full shadow-md cursor-pointer rounded-md p-[2px] flex" @click="toggleSidebar"
        :class="IS_COLLAPCED ? 'justify-end' : 'justify-start'">
        <div class="sidebar-toggler-item w-1/2 bg-brand h-full rounded-md"></div>
      </div>
    </div>

    <div class="user-info flex items-center">
      <div class="text-content text-right">
        <h4 class="user-name text-xl font-semibold text-gray-900 leading-3">Evan You</h4>
        <p class="role text-xs text-gray-400 font-semibold">Creator</p>
      </div>

      <div class="profile-pic ml-2">
        <v-avatar color="info">
          <img :src="profileImage" v-if="profileImage" alt="" />
          <div class="icon cursor-pointer" v-else>
            <i class="fas fa-user"></i>
          </div>
        </v-avatar>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      profileImage: "https://cdn-media-1.freecodecamp.org/images/0*xkJgg-6HskYrQ3N7.jpeg",
      isColapsed: false,
    };
  },
  methods: {
    ...mapActions('ui', ['TOGGLE_SIDEBAR']),
    toggleSidebar() {
      this.TOGGLE_SIDEBAR()
    },
  },
  computed: {
    ...mapGetters('ui', ['IS_COLLAPCED'])
  }
};
</script>
