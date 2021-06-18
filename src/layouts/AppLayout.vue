<template>
  <el-container>
    <el-header>
     <div class="header">
       <div class="logo">
         <router-link :to="{name: 'Landing'}">BMI</router-link>
         <div>身体质量指数 (Body Mass Index, 简称BMI), 亦称克托莱指数, 是目前国际上常用的衡量人体胖瘦程度以及是否健康的一个标准。</div>
       </div>
       <div class="end">
         <ChangeTheme />
         <span>|</span>
         <router-link :to="{ name: 'About' }">About</router-link>
       </div>
     </div>
    </el-header>
    <el-main>
      <slot name="content"></slot>
    </el-main>
    <el-footer>
      <div class="footer">
        <div>Author: <a href="https://github.com/davidkoojohn">@ davidkoojohn</a></div>
        <div>Email: <a href="mailto:davidkoojohn@gmail.com">davidkoojohn@gmail.com</a></div>
      </div>
    </el-footer>
  </el-container>
</template>

<script setup>
import ChangeTheme from '../components/ChangeThemeComponent.vue'
</script>

<style>
.el-header {
  background-color: var(--div-bgc);
  color: var(--main-color);
  height: 80px !important;

  .header {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      :nth-child(1) {
        font-size: 40px;
        font-weight: bold;
        color: var(--main-color);
      }

      :nth-child(2) {
        font-size: 12px;
      }
    }

    .end {
      span {
        margin: 0 20px;
      }

      a {
        color: var(--main-color);
      }
    }
  }
}

.el-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.el-footer {
  background-color: var(--div-bgc);
  color: var(--main-color);
  height: 80px !important;

  .footer {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
      margin: 5px;
    }

    a {
      color: var(--main-color);
    }
  }
}

@media screen and (max-width: 500px){
  .el-header {
    height: 140px !important;

    .end {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        opacity: 0;
      }
    }
  }
}
</style>
