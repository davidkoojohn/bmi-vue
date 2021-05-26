
import {
  ElRow,
  ElCol,
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElButton,
  ElForm,
  ElFormItem,
  ElSwitch,
  ElInput,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElTimePicker,
  ElDatePicker,
  ElCheckbox,
  ElCheckboxGroup,
  ElRadio,
  ElRadioGroup,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
} from 'element-plus';

const components = [
  ElRow,
  ElCol,
  ElContainer,
  ElButton,
  ElForm,
  ElFormItem,
  ElSwitch,
  ElInput,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElTimePicker,
  ElDatePicker,
  ElCheckbox,
  ElCheckboxGroup,
  ElRadio,
  ElRadioGroup,
  ElHeader,
  ElMain,
  ElFooter
]

const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
]

export default (app: any) => {
  components.forEach(component => {
    app.use(component)
  })

  plugins.forEach(plugin => {
    app.use(plugin)
  })
}