import {
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElRow,
  ElCol,
  ElCard,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
} from 'element-plus'


const components = [
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElRow,
  ElCol,
  ElCard,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
]

const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
]

export default app => {
  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(plugin => {
    app.use(plugin)
  })
}


