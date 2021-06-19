import { getBMIList, delBMI, submitBMI } from '../../api'
import dayjs from "dayjs";
const formatDatetime = (date) => dayjs(date).format('YYYY-MM-DD HH:mm:ss')
const formatDate = (date) => dayjs(date).format('YYYY-MM-DD')

export default {
  state: () => ({
    list: [],
    status: ''
  }),
  getters: {
    chartData: state => state.list.map((item) => ({name: formatDatetime(item.createdAt), value: item.bmi})),
    dateData: state => state.list.map((item) => formatDate(item.createdAt))
  },
  mutations: {
    SET_LIST(state, data) {
      state.list = data
    },
    SET_STATUS(state, data) {
      state.status = data
    }
  },
  actions: {
    async getList({ commit }) {
      const { data } = await getBMIList()
      commit('SET_LIST', data)
    },
    async delItem({ dispatch }, id) {
      await delBMI(id)
      await dispatch('getList')
    },
    async calcItem({ commit, dispatch }, data) {
      const res = await submitBMI(data)
      if (res.code === '!ok') {
        throw '!ok'
      } else {
        commit('SET_STATUS', res.data.status)
        await dispatch('getList')
      }
    },
  },
  namespaced: true,
}

