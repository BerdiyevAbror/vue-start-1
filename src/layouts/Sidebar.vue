<template>
    <div class="sidebar p-5 text-white bg-dark">
        <div class="logo flex items-center">
            <img src="../assets/photo_2022-04-12_17-30-11.jpg" class="w-12  rounded-full" alt="logo">
            <span class="ml-2 text-2xl uppercase font-semibold">IT-Labs</span>
        </div>


        <ul class="py-5 mt-5">
            <li class="cursor-pointer text-xl mb-2 rounded-md py-3 px-4" v-for="item in menuItems" :key="item"
                :class="{ 'bg-brand': item.child.includes($route.name)}"
                @click="$router.push({ name: item.routeName})"
                >
                <i :class="item.icon"></i>
                <span class="ml-2">{{ item.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import menuItems from './MenuConfig.js'
export default {
    data() {
        return {
            menuItems,
        }
    },
    components: {

    }
}
</script>

<style>
.sidebar {
    width: 350px;
    height: 100%;
    background: green;
}
</style>