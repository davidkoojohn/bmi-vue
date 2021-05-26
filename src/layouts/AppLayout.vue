<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <slot name="content"></slot>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'AppLayout'
})
export default class AppLayout extends Vue {}
</script>

<style scoped lang="stylus">
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  display flex
  flex-direction column
  align-items center
}
</style>
