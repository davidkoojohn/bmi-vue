import {
  ElIcon,
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
  ElTooltip,
  ElTable,
  ElTableColumn,
  ElInfiniteScroll,
  ElMessageBox,
  ElNotification,
} from 'element-plus'


const components = [
  ElIcon,
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
  ElTooltip,
  ElTable,
  ElTableColumn,
]

const plugins = [
  ElInfiniteScroll,
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


