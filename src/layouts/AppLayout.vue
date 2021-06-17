<template>
  <el-container>
    <el-header>
     <div class="header">
       Header
       <ChangeTheme />
     </div>
    </el-header>
    <el-main>
      <slot name="content"></slot>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script setup>
import ChangeTheme from '../components/ChangeThemeComponent.vue'
</script>

<style>
.el-header, .el-footer {
  background-color: var(--div-bgc);
  color: var(--main-color);
  text-align: center;

  .header {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.el-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
