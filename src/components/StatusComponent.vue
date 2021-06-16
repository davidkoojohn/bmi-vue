<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>BMI 中国标准</span>
      </div>
    </template>
    <div
      v-for="(item, index) in standard"
      :key="index"
      class="text item"
      :style="{backgroundColor: item.bg}"
    >
      <span :style="{ opacity: status === item.key ? 1 : 0}" class="arrow">
        <i class="el-icon-d-arrow-right"></i>
      </span>
      <span class="key">{{item.key}}</span>
      <span class="val">{{item.value}}</span>
    </div>
  </el-card>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  status: {
    type: String,
    default: ''
  }
})

const standard = [
  {key: '分类', value: 'BMI 范围', bg: '#8dd8f8'},
  {key: '偏瘦', value: '<= 18.4', bg: '#ccc'},
  {key: '正常', value: '18.5 ~ 23.9', bg: '#6c0'},
  {key: '过重', value: '24.0 ~ 27.9', bg: '#ff0'},
  {key: '肥胖', value: '>= 28.0', bg: '#f90'},
]

const { status } = toRefs(props)

</script>

<style scoped>
.item {
  height: 34px;
  line-height: 34px;
  display: flex;
  align-items: center;
  text-align: center;

  .arrow {
    width: 15%;
  }
  .key {
    width: 35%;
  }
  .val {
    width: 50%;
  }
}
</style>
