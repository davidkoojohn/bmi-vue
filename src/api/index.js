import http from "../tools/http";

export function submitBMI(data) {
  return http({
    method: 'POST',
    url: 'https://veihwwnelcwq.leanapp.cn/bmi',
    data
  })
}
