<template>
  <app-layout>
    <template v-slot:content>
      BMI
    </template>
  </app-layout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

type TestType = {
  title: string,
  desc: string
}

interface Data {
  count: number,
  news: TestType
}

@Options({
  components: {},
  data() {
    return {
      count: 1,
      news: {
        title: '123',
      },
    } as Data
  },
  computed: {
    reverseMsg(): string {
      return String(this.count * 10)
    }
  },
  props: {
    title: {
      type: String,
      default: 'hello world'
    }
  },
  setup(props) {
    console.log(props)
    debugger
    const result = ('year').split('')
    console.log(result)
    return {result}
  }
})
export default class Home extends Vue {
  created() {
    /*this.$http({
      url: 'bmi'
    }).then((res: any) => {
      console.log(res)
    }).catch((e: any) => {
      console.log(e)
    })*/
  }
}
</script>
<style lang="stylus">

</style>
