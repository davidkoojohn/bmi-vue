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
      <el-row class="container charts">
        <TrendingCharts v-if="list.length > 0" :chart-data="chartData" :date-data="dateData" />
      </el-row>
      <el-row class="container list">
        <el-col :span="24" :xs="24">
          <DataList :list="list" @handleDelete="handleDelete" />
        </el-col>
      </el-row>
    </template>
  </app-layout>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from 'vue'
import StatusComponent from '../components/StatusComponent.vue'
import CalcFormComponent from '../components/CalcFormComponent.vue'
import DataListComponent from '../components/DataListComponent.vue'
import TrendingChartsComponent from '../components/TrendingChartsComponent.vue'
import { submitBMI, getBMIList, delBMI } from '../api'
import { ElMessage, ElLoading } from 'element-plus'
import dayjs from "dayjs";

export default defineComponent({
  components: {
    Status: StatusComponent,
    CalcForm: CalcFormComponent,
    DataList: DataListComponent,
    TrendingCharts: TrendingChartsComponent,
  },
  setup: (props, { emit }) => {
    const list = ref([])
    const chartData = ref([])
    const dateData = ref([])
    const status = ref('')

    const formatDatetime = (date) => dayjs(date).format('YYYY-MM-DD HH:mm:ss')
    const formatDate = (date) => dayjs(date).format('YYYY-MM-DD')

    const handleSubmit = async (data) => {
      const loading = ElLoading.service({
        fullscreen: true,
        text: '计算中...'
      })
      try {
        const res = await submitBMI(data)
        if (res.code === '!ok') {
          throw '!ok'
        } else {
          status.value = res.data.status
          await getBMIListData()
        }
      } catch (e) {
        ElMessage.error('内部错误，请刷新重试！');
      } finally {
        loading.close()
      }
    }

    const handleDelete = async (id) => {
      const loading = ElLoading.service({
        fullscreen: true,
        text: '删除...'
      })
      try {
        await delBMI(id)
        ElMessage.success('删除成功');
        await getBMIListData()
      } catch (e) {
        ElMessage.error('内部错误，请刷新重试！');
      } finally {
        loading.close()
      }
    }

    const getBMIListData = async () => {
      const loading = ElLoading.service({
        fullscreen: true
      })
      try {
        const res = await getBMIList()
        list.value = res.data
        chartData.value = res.data.map((item) => ({name: formatDatetime(item.createdAt), value: item.bmi}))
        dateData.value = res.data.map((item) => formatDate(item.createdAt))
      } catch (e) {
        ElMessage.error('网络错误，请刷新重试！');
      } finally {
        loading.close()
      }
    }

    onBeforeMount(async () => {
      await getBMIListData()
    })

    return {
      status,
      list,
      chartData,
      dateData,
      handleSubmit,
      handleDelete,
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

  &.list {
    max-width: 1000px;
    width: 100%;
  }

  &.charts {
    max-width: 1000px;
    width: 100%;
  }
}
</style>
