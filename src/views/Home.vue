<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
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
