<template>
  <app-layout>
    <template v-slot:content>
      <div class="container">
        <el-row>
          <el-col :span="12" :xs="24">
            <div class="left">
              <h2>免费计算你的身体质量指数 (BMI)</h2>
              <el-form :model="bmiForm" :rules="bmiFormRules" ref="bmiForm" class="bmi-form">
                <el-form-item label="身高" prop="height">
                  <el-input v-model="bmiForm.name"></el-input>
                  <span class="unit">单位: 厘米 cm</span>
                </el-form-item>
                <el-form-item label="体重" prop="weight">
                  <el-input v-model="bmiForm.name"></el-input>
                  <span class="unit">单位: 千克 kg</span>
                </el-form-item>
                <el-form-item>
                  <el-button class="submit-bmi" type="primary" @click="submitForm('bmiForm')">
                    计算BMI
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
          <el-col :span="12" :xs="24">
            <div class="right">
              bmi
            </div>
          </el-col>
        </el-row>
      </div>
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
      bmiForm: {
        height: '',
        weight: ''
      },
      bmiFormRules: {
        height: [
          { required: true, message: '请输入身高', trigger: 'blur' },
          { type: 'number', message: '请输入合法的数值', trigger: 'blur' }
        ],
        weight: [
          { required: true, message: '请输入体重', trigger: 'blur' },
          { type: 'number', message: '请输入合法的数值', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    submitForm(formName: any) {
      this.$refs[formName].validate((valid: any) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
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
.container
  max-width 1200px
  width 100%

  .left
    width 100%
    max-width 400px
    margin 0 auto

  .el-form-item__content
    display flex

    .unit
      white-space nowrap
      margin-left 20px

    .submit-bmi
      margin-left 50px

</style>
