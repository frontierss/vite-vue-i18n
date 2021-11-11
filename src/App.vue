<script>
import { ref } from 'vue'
import i18n from '@/lang/i18n.js'
export default {
    setup() {
        let lang = i18n.global.locale
        let selected = ref(lang)
        const options = ref([
            { text: 'EN', value: 'en' },
            { text: '中文', value: 'zh' },
        ])

        const setLocale = (e) => {
            let newVal = e.target.value
            i18n.global.locale = newVal
        }
        
        return {
            setLocale, selected, options
        }
    }
}

</script>

<template lang="pug">
div(class="bg-blue-200")
    h1(class="text-center") {{ 'i18n' + $t('home.example') }}
    select(v-model="selected" @change="setLocale" class="px-5")
        option(v-for="option in options" v-bind:value="option.value") {{ option.text }}
    div {{ selected }}


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
