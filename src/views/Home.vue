<template>
  <app-layout>
    <template v-slot:content>
      <div class="container">
        <el-row>
          <el-col :span="12" :xs="24">
            <div class="left">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="特殊资源" prop="resource">
                  <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="活动名称" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="活动名称" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" prop="region">
                  <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="活动性质" prop="type">
                  <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
      count: 1,
      news: {
        title: '123',
      },
      ruleForm: {
        name: '',
        region: '',
        type: [],
        resource: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
      }
    }
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
</style>
