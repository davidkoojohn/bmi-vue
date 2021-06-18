<template>
  <app-layout>
    <template v-slot:content>
      <div class="about">
        <h1>About</h1>
        <p>
          <img src="../assets/davidkoojohn.jpeg" alt="wechat: qq1020638186">
          <img src="../assets/wechat.png" alt="wechat: qq1020638186">
        </p>
      </div>
    </template>
  </app-layout>
</template>

<style scoped>
.about {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    img {
      width: 200px;
      border: 2px solid var(--main-color);
      margin: 20px;
    }

    a {
      color: var(--main-color);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
