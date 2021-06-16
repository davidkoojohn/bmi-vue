<template>
  <app-layout>
    <template v-slot:content>
      <el-row class="container">
        <el-col :span="12" :xs="24">
          <div class="left">
            <CalcForm />
          </div>
        </el-col>
        <el-col :span="12" :xs="24">
          <div class="right">
            <Status :status="status" />
          </div>
        </el-col>
      </el-row>
    </template>
  </app-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import StatusComponent from '../components/StatusComponent.vue'
import CalcFormComponent from '../components/CalcFormComponent.vue'

export default defineComponent({
  components: {
    Status: StatusComponent,
    CalcForm: CalcFormComponent,
  },
  setup: (props, context) => {
    const list = ref([])
    const status = ref('')

    return {
      status
    }
  }
})
</script>

<style>
$bg-color: #f00;

.container {
  max-width: 1200px;
  width: 100%;

  .left, .right {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
