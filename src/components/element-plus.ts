
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
} from 'element-plus';

const components = [
  ElContainer,
  ElButton,
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
