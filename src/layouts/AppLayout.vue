<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <slot name="content"></slot>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
