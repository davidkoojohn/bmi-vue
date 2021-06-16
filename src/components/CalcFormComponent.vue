<template>
  <h2>免费计算你的身体质量指数 (BMI)</h2>
  <el-form
    :model="bmiFormData"
    :rules="bmiFormRules"
    ref="bmiForm"
    class="bmi-form"
  >
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
</template>

<script setup>
import {reactive, ref, unref, defineEmit} from "vue";
import {ElMessage} from "element-plus";

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

const emit = defineEmit(['handleSubmit'])

const submitForm = async () => {
  const form = unref(bmiForm);
  if (!form) return
  try {
    await form.validate()
    emit('handleSubmit', bmiFormData)
  } catch (error) {
    ElMessage.error('请正确填写表单！')
  }
}
</script>
<style>
.bmi-form {
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
</style>


