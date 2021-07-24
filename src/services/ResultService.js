import axios from 'axios'

const apiClient = axios.create ({
    baseURL: 'https://my-json-server.typicode.com/ahsan0307/mockserver1',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})
export default {
    getResults () {
        return apiClient.get('/results')
    },
    getResult(id) {
        return apiClient.get('/results/' + id)
    }
}