<template>
  <div class="main-layout">
    <sidebar/>
    <div class="main-wrapper flex flex-column">
        <profile-menu/>
        <div class="main-router-content grow overflow-y-scroll">
            <slot/>
        </div>
    </div>
  </div>
</template>

<script>
import ProfileMenu from './ProfileMenu.vue'
import Sidebar from './Sidebar.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        ProfileMenu,
        Sidebar,
    }
}
</script>

<style>
.main-layout{
    display: flex;
    height: 100vh;
    width: 100%;
}
.main-layout .main-wrapper{
    flex-grow: 1;
}
.main-router-content::-webkit-scrollbar{
    display: none;
}
</style>