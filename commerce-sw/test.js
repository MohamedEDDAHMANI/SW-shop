


const axiosClient = axios.create({
    baseURL: 'http://localhost:1338/api',
    headers:{
        Authorization: `Bearer ${apiKey}`
    }
})