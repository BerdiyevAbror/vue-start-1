<template>
    <v-sheet width="300" class="mx-auto">
        <v-form @submit.prevent>

            <v-text-field v-model="login" :rules="rules" label="Login"></v-text-field>

            <v-text-field v-model="password" :rules="rules" label="Password"></v-text-field>

            <v-btn type="submit" block class="mt-2">Sign In</v-btn>
        </v-form>
        <v-btn @click="$router.push('/')" class="mt-2">Go home</v-btn>
    </v-sheet>
</template>

<script>
export default {
    data() {
        return {
            login: '',
            password: '',
            rules: [
                value => {
                    if(value.length<3)return " Min length 3"

                    if (value) return true

                    return 'You must enter a first name.'
                },
            ],
        }
    },
}
</script>