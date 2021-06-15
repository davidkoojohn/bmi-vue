<template>
  <h1>Landing</h1>
  <div class="box">
    <div class="sub-box"></div>
  </div>
</template>

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
