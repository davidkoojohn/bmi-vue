<template>
  <app-layout>
    <template v-slot:content>
      <h1>Landing</h1>
      <div class="box">
        <div class="sub-box"></div>
      </div>
      <button @click="list.push(Date.now())">push item #{{list.length + 1}}</button>
    </template>
  </app-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup: () => {
    const list = ref([])
    return {
      list
    }
  }
})
</script>

<style>
$bg-color: #f00;

.box {
  height: 100px;
  width: 100px;
  background: $bg-color;

  .sub-box {
    height: 30px;
    width: 30px;
    background: #3a8ee6;

    &::before {
      content: 'before';
    }
  }
}
</style>
