<template>
  <button @click="toggleTheme">切换主题</button>
</template>

<script setup>
import { onMounted } from 'vue'

const setTheme = () => {
  if (localStorage.getItem('isDark') === 'true') {
    document.documentElement.style.setProperty("--bgc", "#151617");
    document.documentElement.style.setProperty("--div-bgc", "#1D1F20");
    document.documentElement.style.setProperty("--main-color", "#fff");
  } else {
    document.documentElement.style.setProperty("--bgc", "#f5f5f7");
    document.documentElement.style.setProperty("--div-bgc", "#fff");
    document.documentElement.style.setProperty("--main-color", "#2c3e50");
  }
}

const toggleTheme = () => {
  localStorage.setItem('isDark', !(localStorage.getItem('isDark') === 'true'))
  console.log(localStorage.getItem('isDark'))
  setTheme()
}

onMounted(() => {
  setTheme()
})
</script>
