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
import { defineComponent, ref, onBeforeMount, toRefs, computed } from 'vue'
import StatusComponent from '../components/StatusComponent.vue'
import CalcFormComponent from '../components/CalcFormComponent.vue'
import DataListComponent from '../components/DataListComponent.vue'
import TrendingChartsComponent from '../components/TrendingChartsComponent.vue'
import { ElMessage, ElLoading } from 'element-plus'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    Status: StatusComponent,
    CalcForm: CalcFormComponent,
    DataList: DataListComponent,
    TrendingCharts: TrendingChartsComponent,
  },
  setup: (props, { emit }) => {
    const store = useStore()
    const { list } = toRefs(store.state.bmi)
    const chartData = computed(() => store.getters['bmi/chartData'])
    const dateData = computed(() => store.getters['bmi/dateData'])
    const status = ref('')

    const handleSubmit = async (data) => {
      const loading = ElLoading.service({
        fullscreen: true,
        text: '计算中...'
      })
      try {
        await store.dispatch('bmi/calcItem', data)
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
        await store.dispatch('bmi/delItem', id)
        ElMessage.success('删除成功');
      } catch (e) {
        ElMessage.error('内部错误，请刷新重试！');
      } finally {
        loading.close()
      }
    }

    const getBMIListData = async () => {
      const loading = ElLoading.service({
        fullscreen: true,
        text: '数据加载中...'
      })
      try {
        await store.dispatch('bmi/getList')
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
