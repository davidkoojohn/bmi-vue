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
                  <el-input v-model.number="bmiForm.height"></el-input>
                  <span class="unit">单位: 厘米 cm</span>
                </el-form-item>
                <el-form-item label="体重" prop="weight">
                  <el-input v-model.number="bmiForm.weight"></el-input>
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
              <h3>BMI 中国标准</h3>
            </div>
          </el-col>
        </el-row>

        <el-table :data="tableData" style="width: 100%" empty-text="当前没有任何 BMI 记录。请输入你的身高和体重，记算你的 BMI 指数。">
          <el-table-column label="#" type="index" align="center" />
          <el-table-column label="日期" width="120" align="center">
            <template #default="scope">
              {{formatDate(scope.row.createdAt)}}
            </template>
          </el-table-column>
          <el-table-column label="身高" align="center">
            <template #default="scope">
              {{ scope.row.height }} cm
            </template>
          </el-table-column>
          <el-table-column label="体重" align="center">
            <template #default="scope">
              {{ scope.row.weight }} kg
            </template>
          </el-table-column>
          <el-table-column label="BMI" prop="bmi" align="center" />
          <el-table-column label="操作" width="100px" align="center">
            <template #default="scope">
              <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </template>
  </app-layout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import moment from 'moment'

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
      tableData: [],
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
  created() {
    this.fetchBmiList()
  },
  methods: {
    formatDate(datetime: string) {
      return moment(datetime).format('YYYY-MM-DD')
    },
    fetchBmiList() {
      const self = this
      this.$http({
        url: 'bmi'
      }).then((res: any) => {
        self.tableData = res.data.data
      }).catch((e: any) => {
        console.log(e)
      })
    },
    submitForm(formName: string) {
      this.$refs[formName].validate((valid: any) => {
        if (valid) {
          this.$http({
            method: 'POST',
            url: '/bmi',
            data: this.bmiForm
          }).then((res: object) => {
            console.log(res)
            this.fetchBmiList()
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleDelete(row: any) {
      this.$http({
        method: 'DELETE',
        url: '/bmi',
        data: {id: row.objectId}
      }).then((res: any) => {
        console.log(res.data);
      })
    }
  }
})
export default class Home extends Vue {}
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
