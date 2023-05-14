import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api'

const http = {
    get: axios.get,
    put: axios.put,
    post: axios.post,
    delete: axios.delete,
}

export default http;