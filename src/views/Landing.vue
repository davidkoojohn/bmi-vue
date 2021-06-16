<template>
  <app-layout>
    <template v-slot:content>
      <el-row class="container">
        <el-col :span="12" :xs="24">
          <div class="left">
            <h2>免费计算你的身体质量指数 (BMI)</h2>
            <el-form :model="bmiFormData" :rules="bmiFormRules" ref="bmiForm" class="bmi-form">
              <el-form-item label="身高" prop="height">
                <el-input v-model.number="bmiFormData.height"></el-input>
                <span class="unit">单位: 厘米 cm</span>
              </el-form-item>
              <el-form-item label="体重" prop="weight">
                <el-input v-model.number="bmiFormData.weight"></el-input>
                <span class="unit">单位: 千克 kg</span>
              </el-form-item>
              <el-form-item>
                <el-button class="submit-bmi" type="primary" @click="submitForm">
                  计算BMI
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="12" :xs="24">
          <div class="right">
            <Status />
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>BMI 中国标准</span>
                </div>
              </template>
              <div
                  v-for="(item, index) in standard"
                  :key="index"
                  class="text item"
                  :style="{backgroundColor: item.bg}"
              >
                  <span :style="{ opacity: status === item.key ? 1 : 0}" class="arrow">
                    <i class="el-icon-d-arrow-right"></i>
                  </span>
                <span class="key">{{item.key}}</span>
                <span class="val">{{item.value}}</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </template>
  </app-layout>
</template>

<script>
import { defineComponent, ref, reactive, unref } from 'vue'
import { ElMessage } from 'element-plus'
import StatusComponent from '../components/StatusComponent.vue'

export default defineComponent({
  components: {
    Status: StatusComponent,
  },
  setup: (props, context) => {
    const list = ref([])
    const bmiForm = ref(null)
    const bmiFormData = reactive({
      height: '',
      weight: ''
    })

    const bmiFormRules = reactive({
      height: [
        { required: true, message: '请输入身高', trigger: 'blur' },
        { type: 'number', message: '请输入合法的数值', trigger: 'blur' }
      ],
      weight: [
        { required: true, message: '请输入体重', trigger: 'blur' },
        { type: 'number', message: '请输入合法的数值', trigger: 'blur' }
      ],
    })

    const status = ref('')
    const standard = [
      {key: '分类', value: 'BMI 范围', bg: '#8dd8f8'},
      {key: '偏瘦', value: '<= 18.4', bg: '#ccc'},
      {key: '正常', value: '18.5 ~ 23.9', bg: '#6c0'},
      {key: '过重', value: '24.0 ~ 27.9', bg: '#ff0'},
      {key: '肥胖', value: '>= 28.0', bg: '#f90'},
    ]

    const submitForm = async () => {
      const form = unref(bmiForm);
      if (!form) return
      try {
        await form.validate()
        console.log('success', bmiFormData)
      } catch (error) {
        ElMessage.error('请正确填写表单！')
      }
    }

    return {
      bmiForm,
      bmiFormData,
      bmiFormRules,
      status,
      standard,
      submitForm
    }
  }
})
</script>

<style>
$bg-color: #f00;

.container {
  max-width: 1200px;
  width: 100%;

  .left {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    .el-form-item__content {
      display: flex;
    }

    .unit {
      white-space: nowrap;
      margin-left: 20px;
    }

    .submit-bmi {
      margin-left: 50px;
    }
  }

  .right {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    .item {
      height: 34px;
      line-height: 34px;
      display: flex;
      align-items: center;
      text-align: center;

      .arrow {
        width: 15%;
      }
      .key {
        width: 35%;
      }
      .val {
        width: 50%;
      }
    }
  }
}
</style>
