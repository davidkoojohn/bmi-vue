import http from "../tools/http";

export function submitBMI(data) {
  return http({
    method: 'POST',
    url: 'https://veihwwnelcwq.leanapp.cn/bmi',
    data
  })
}

export function delBMI(id) {
  return http({
    method: 'DELETE',
    url: 'https://veihwwnelcwq.leanapp.cn/bmi',
    data: {id}
  })
}

export function getBMIList() {
  return http({
    url: 'https://veihwwnelcwq.leanapp.cn/bmi'
  })
}
