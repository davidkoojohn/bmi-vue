<template>
  <el-tooltip class="item" effect="light" :content="tooltipText" placement="left">
    <el-button
        v-if="isDark !== 'true'"
        @click="toggleTheme"
        :icon="Moon"
        size="small"
        class="dark"
        circle
    />
    <el-button
        v-else
        @click="toggleTheme"
        :icon="Sunny"
        size="small"
        class="light"
        circle
    />
  </el-tooltip>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { Moon, Sunny } from "@element-plus/icons-vue"
const isDark = ref(localStorage.getItem('isDark'))

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
  isDark.value = localStorage.getItem('isDark')
  setTheme()
}

const tooltipText = computed(() => {
  if (isDark.value !== 'true') {
    return '夜晚模式'
  } else {
    return '日间模式'
  }
})

onMounted(() => {
  setTheme()
})
</script>

<style>
.light {
  background-color: #f5f5f7;
}

.dark {
  background-color: #151617;
}
</style>
