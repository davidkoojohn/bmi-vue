import {
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
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


