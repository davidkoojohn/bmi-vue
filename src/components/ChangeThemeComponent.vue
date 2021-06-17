<template>
  <button @click="toggleTheme">切换主题</button>
</template>

<script setup>
import { onMounted } from 'vue'

const setTheme = () => {
  if (localStorage.getItem('isDark') === 'true') {
    document.documentElement.style.cssText = `
      --bgc: #151617;
      --div-bgc: #1D1F20;
      --main-color: #fff;
    `
  } else {
    document.documentElement.style.cssText = `
      --bgc: #f5f5f7;
      --div-bgc: #fff;
      --main-color: #2c3e50;
    `
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
