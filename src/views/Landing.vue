<template>
  <app-layout>
    <template v-slot:content>
      <el-row class="container">
        <el-col :span="12" :xs="24">
          <div class="left">
            <CalcForm @handleSubmit="handleSubmit"/>
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
import { submitBMI } from '../api'
import { ElMessage, ElLoading } from 'element-plus'

export default defineComponent({
  components: {
    Status: StatusComponent,
    CalcForm: CalcFormComponent,
  },
  setup: (props, { emit }) => {
    const list = ref([])
    const status = ref('')

    const handleSubmit = async (data) => {
      const loading = ElLoading.service({
        fullscreen: true,
        text: '计算中...'
      })
      try {
        const res = await submitBMI(data)
        if (res.code === '!ok') throw '!ok'
      } catch (e) {
        ElMessage.error('内部错误，请刷新重试！');
      } finally {
        loading.close()
      }
    }

    return {
      status,
      handleSubmit
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
