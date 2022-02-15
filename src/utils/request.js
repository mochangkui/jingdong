import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: 'http://192.168.1.4:8080',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})
export const request = ({ url, method, data = {} }) => {
  return new Promise((resolve, reject) => {
    instance({
      url,
      method: method || 'GET',
      data
    }).then((response) => {
      resolve(response)
    }).catch((error) => {
      reject(error)
    })
  })
}
