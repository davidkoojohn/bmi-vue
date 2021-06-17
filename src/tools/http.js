export default function ({url, method = 'GET', data = null} = {}) {
  return fetch(url, {
    method,
    body: data === null ? data : JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
  }).then(r => r.json())
}
