<template>
  <h2>BMI 历史记录</h2>
  <el-table
      :data="dataList"
      style="width: 100%"
      stripe
      border
  >
    <el-table-column
      label="#"
      width="100"
      align="center"
    >
      <template #default="scope">
        {{ scope.$index + 1 }}
      </template>
    </el-table-column>
    <el-table-column label="日期" align="center">
      <template #default="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ formatDate(scope.row.createdAt) }}</span>
      </template>
    </el-table-column>
    <el-table-column
        label="身高"
        prop="height"
    />
    <el-table-column
        label="体重"
        prop="weight"
    />
    <el-table-column
        label="BMI"
        prop="bmi"
        width="100"
    />
    <el-table-column label="操作" width="120" align="center">
      <template #default="scope">
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
    <template #empty>
      当前没有任何 BMI 记录。请输入你的身高和体重，记算你的 BMI 指数。
    </template>
  </el-table>
</template>

<script setup>
import { defineProps } from 'vue'
import { ElMessageBox } from 'element-plus';
import dayjs from 'dayjs'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

const { list: dataList } = props

const formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}

const handleDelete = ({objectId}) => {
  ElMessageBox.confirm('此操作将永久删除该数据, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    console.log(objectId);
  }).catch((e) => {
    console.log(e)
  })
}
</script>

