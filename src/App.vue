<template>
  <router-view/>
</template>

<style>
:root {
  --bgc: #f5f5f7;
  --div-bgc: #fff;
  --main-color: #2c3e50;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bgc);
  color: var(--main-color);
}

.bgc {
  background-color: var(--bgc) !important;
}

.div-bgc {
  background-color: var(--div-bgc) !important;
}

.main-color {
  color: var(--main-color) !important;
}
</style>
