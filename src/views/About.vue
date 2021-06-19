<template>
  <app-layout>
    <template v-slot:content>
      <div class="about">
        <h1>About</h1>
        <p>
          <img src="../assets/davidkoojohn.jpeg" alt="wechat: qq1020638186">
          <img src="../assets/wechat.png" alt="wechat: qq1020638186">
        </p>
        <h2><code>state:</code>{{ count }} => <code>getter:</code>{{count100}}</h2>
        <div>
          <button @click="store.commit('increment')">count++ with commit(increment)</button>
          <span> - </span>
          <button @click="store.dispatch('increment')">count++ with dispatch(increment)</button>
        </div>
      </div>
    </template>
  </app-layout>
</template>

<script setup>
import { toRefs } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const { count } = toRefs(store.state)
const { count100 } = toRefs(store.getters)


</script>

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
