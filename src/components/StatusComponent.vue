<template>
  <h1 @click="title = title.split('').reverse().join('')">{{title}}</h1>
</template>

<script setup>
import { ref } from 'vue'
const title = ref('StatusComponent Title')


</script>
